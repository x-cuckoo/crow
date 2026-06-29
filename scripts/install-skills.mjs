#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import os from "node:os";
import process from "node:process";
import { fileURLToPath } from "node:url";
import * as p from "@clack/prompts";

const REPO_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SKILLS_ROOT = path.join(REPO_ROOT, "skills");

const AGENTS = {
  claude: path.join(os.homedir(), ".claude", "skills"),
  codex: path.join(os.homedir(), ".codex", "skills"),
};

function printHelp() {
  console.log(`Usage:
  npm run install:skills
  node ./scripts/install-skills.mjs --action install --agents claude,codex --mode symlink
  node ./scripts/install-skills.mjs --action remove --agents claude --skills skill-a,skill-b

Options:
  --action       Action to run: install | remove (default: install)
  --agents       Comma-separated targets: claude,codex
  --mode         Install mode for install action: copy | symlink
  --skills       Comma-separated skill names from SKILL.md frontmatter
  --on-exists    For install action: replace | skip (default: replace)
  --dry-run      Print planned operations only
  --yes          Skip interactive prompts when flags are complete
  --help         Show this message

Behavior:
  - Skills are discovered automatically from every SKILL.md under ./skills
  - If --skills is omitted, all discovered skills are selected by default
  - Agents are never auto-selected in interactive mode; choose at least one
`);
}

function die(message) {
  console.error(`Error: ${message}`);
  process.exit(1);
}

function parseCsv(value) {
  return value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function parseFrontmatterName(skillMdPath) {
  const content = fs.readFileSync(skillMdPath, "utf8");
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return "";
  const nameMatch = match[1].match(/^name:\s*(.+)$/m);
  return nameMatch ? nameMatch[1].trim() : "";
}

function discoverSkills() {
  const results = [];

  function walk(dir) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(fullPath);
      } else if (entry.isFile() && entry.name === "SKILL.md") {
        const source = path.dirname(fullPath);
        const name = parseFrontmatterName(fullPath);
        if (!name) die(`Missing 'name' in ${fullPath}`);
        const rel = path.relative(REPO_ROOT, source);
        results.push({ name, source, rel });
      }
    }
  }

  walk(SKILLS_ROOT);
  results.sort((a, b) => a.rel.localeCompare(b.rel));
  if (results.length === 0) die(`No skills found under ${SKILLS_ROOT}`);
  return results;
}

function parseArgs(argv) {
  const options = {
    action: "install",
    agents: [],
    mode: "",
    skills: [],
    onExists: "replace",
    dryRun: false,
    yes: false,
  };

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    switch (arg) {
      case "--action":
        options.action = argv[++i] ?? "";
        break;
      case "--agents":
        options.agents = parseCsv(argv[++i] ?? "");
        break;
      case "--mode":
        options.mode = argv[++i] ?? "";
        break;
      case "--skills":
        options.skills = parseCsv(argv[++i] ?? "");
        break;
      case "--on-exists":
        options.onExists = argv[++i] ?? "";
        break;
      case "--dry-run":
        options.dryRun = true;
        break;
      case "--yes":
        options.yes = true;
        break;
      case "--help":
      case "-h":
        printHelp();
        process.exit(0);
      default:
        die(`Unknown argument: ${arg}`);
    }
  }

  return options;
}

function validateOptions(options, skills) {
  if (!["install", "remove"].includes(options.action)) {
    die("--action must be install or remove");
  }
  if (options.mode && !["copy", "symlink"].includes(options.mode)) {
    die("--mode must be copy or symlink");
  }
  if (!["replace", "skip"].includes(options.onExists)) {
    die("--on-exists must be replace or skip");
  }
  if (options.action === "remove" && options.mode) {
    die("--mode is only valid for --action install");
  }
  if (options.action === "remove" && options.onExists !== "replace") {
    die("--on-exists is only valid for --action install");
  }
  for (const agent of options.agents) {
    if (!(agent in AGENTS)) die(`Unsupported agent: ${agent}`);
  }
  const knownSkills = new Set(skills.map((skill) => skill.name));
  for (const skill of options.skills) {
    if (!knownSkills.has(skill)) die(`Unknown skill: ${skill}`);
  }
}

async function chooseInteractively(options, skills) {
  p.intro("Crow Skill Installer");

  if (!options.action) {
    const action = await p.select({
      message: "Select action",
      options: [
        { value: "install", label: "Install", hint: "copy or symlink skills into agent directories" },
        { value: "remove", label: "Remove", hint: "delete installed skills from agent directories" },
      ],
    });
    if (p.isCancel(action)) process.exit(1);
    options.action = action;
  }

  if (options.agents.length === 0) {
    const agents = await p.multiselect({
      message: "Select target agents",
      options: [
        { value: "claude", label: "Claude" },
        { value: "codex", label: "Codex" },
      ],
      required: true,
    });
    if (p.isCancel(agents)) process.exit(1);
    options.agents = agents;
  }

  if (options.action === "install" && !options.mode) {
    const mode = await p.select({
      message: "Select install mode",
      options: [
        { value: "symlink", label: "Symlink", hint: "recommended for active development" },
        { value: "copy", label: "Copy", hint: "recommended for stable snapshots" },
      ],
    });
    if (p.isCancel(mode)) process.exit(1);
    options.mode = mode;
  }

  if (options.action === "install" && !options.onExists) {
    const onExists = await p.select({
      message: "What should happen if the target already exists?",
      options: [
        { value: "replace", label: "Replace existing install" },
        { value: "skip", label: "Skip existing install" },
      ],
    });
    if (p.isCancel(onExists)) process.exit(1);
    options.onExists = onExists;
  }

  if (options.skills.length === 0) {
    const skillNames = await p.multiselect({
      message: "Select skills to install",
      initialValues: skills.map((skill) => skill.name),
      options: skills.map((skill) => ({
        value: skill.name,
        label: skill.name,
        hint: skill.rel,
      })),
      required: true,
    });
    if (p.isCancel(skillNames)) process.exit(1);
    options.skills = skillNames;
  }
}

function ensureDir(dir, dryRun) {
  if (fs.existsSync(dir)) return;
  if (!dryRun) fs.mkdirSync(dir, { recursive: true });
}

function pathExists(target) {
  return fs.existsSync(target);
}

function replaceWithCopy(source, target, dryRun) {
  if (dryRun) return;
  fs.rmSync(target, { recursive: true, force: true });
  fs.cpSync(source, target, { recursive: true });
}

function replaceWithSymlink(source, target, dryRun) {
  if (dryRun) return;
  fs.rmSync(target, { recursive: true, force: true });
  fs.symlinkSync(source, target, "dir");
}

function printPlan(options) {
  const lines = [
    `Action : ${options.action}`,
    `Agents : ${options.agents.join(", ")}`,
    `Skills : ${options.skills.join(", ")}`,
  ];

  if (options.action === "install") {
    lines.splice(2, 0, `Mode   : ${options.mode}`);
    lines.splice(3, 0, `Exists : ${options.onExists}`);
  }

  p.note(lines.join("\n"), "Plan");
}

function installSkills(options, skills) {
  const skillMap = new Map(skills.map((skill) => [skill.name, skill]));

  for (const agent of options.agents) {
    const targetRoot = AGENTS[agent];
    ensureDir(targetRoot, options.dryRun);

    for (const skillName of options.skills) {
      const skill = skillMap.get(skillName);
      const target = path.join(targetRoot, skillName);

      if (pathExists(target) && options.onExists === "skip") {
        console.log(`Skipped ${skillName} -> ${agent}`);
        continue;
      }

      if (options.mode === "copy") {
        if (options.dryRun) console.log(`Would copy    ${skill.source} -> ${target}`);
        replaceWithCopy(skill.source, target, options.dryRun);
      } else {
        if (options.dryRun) console.log(`Would symlink ${target} -> ${skill.source}`);
        replaceWithSymlink(skill.source, target, options.dryRun);
      }

      console.log(`${options.dryRun ? "Planned" : "Installed"} ${skillName} -> ${agent}`);
    }
  }
}

function removeSkills(options) {
  for (const agent of options.agents) {
    const targetRoot = AGENTS[agent];

    for (const skillName of options.skills) {
      const target = path.join(targetRoot, skillName);

      if (!pathExists(target)) {
        console.log(`Skipped ${skillName} -> ${agent} (not installed)`);
        continue;
      }

      if (options.dryRun) {
        console.log(`Would remove ${target}`);
      } else {
        fs.rmSync(target, { recursive: true, force: true });
      }

      console.log(`${options.dryRun ? "Planned" : "Removed"} ${skillName} -> ${agent}`);
    }
  }
}

async function main() {
  const skills = discoverSkills();
  const options = parseArgs(process.argv.slice(2));

  if (options.skills.length === 0) options.skills = skills.map((skill) => skill.name);

  validateOptions(options, skills);

  if (options.yes && options.agents.length === 0) {
    die("--yes requires at least one agent via --agents");
  }

  if (options.yes && options.action === "install" && !options.mode) {
    die("--yes requires --mode when --action install");
  }

  if (!options.yes) {
    await chooseInteractively(options, skills);
  }

  validateOptions(options, skills);
  if (options.agents.length === 0) {
    die("Select at least one agent with --agents or in the interactive prompt");
  }
  printPlan(options);
  if (options.action === "install") {
    installSkills(options, skills);
  } else {
    removeSkills(options);
  }
  p.outro("Done.");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
