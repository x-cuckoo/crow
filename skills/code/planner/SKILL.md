---
name: crow-code-planner
description: Planner skill for coding work. The agent must invoke it proactively when the task is to understand existing code, trace behavior across files or repos, identify the right edit surface, make an implementation plan, research technical direction through web/open-source/community evidence, or explain where a field, flag, route, or dependency comes from. Do not wait for the user to name this skill explicitly.
---

# Planner

The agent must invoke this skill proactively before editing when the task crosses files, layers, packages, or repos. Do not wait for the user to mention the skill by name.

## Default stance

- Start from the repo and concrete code path; map structural uncertainty before editing.
- Treat inputs as hypotheses until checked, and separate confirmed facts, assumptions, and user decisions.
- State assumptions, possible interpretations, and success criteria for non-trivial tasks.
- Do not assume the proposed solution is best; think from codebase constraints and maintenance cost.
- Prefer mature, stable open-source options; when changing dependencies, choose the latest stable version compatible with the current runtime, package manager, and lockfile.
- If a better or more robust approach appears, propose it proactively and explain the tradeoff.
- Use the web, official docs, open-source projects, and technical communities early when external evidence can materially improve the plan.
- If anything remains ambiguous, hard to interpret, or directionally uncertain after reasonable analysis, ask the user proactively for the missing decision instead of guessing.
- Before user review, invoke crow-code-objector for non-trivial, cross-boundary, document-driven, user-proposed, or risky plans; block unresolved `Block` findings and revise for `Proceed with changes`.
- Once an implementation plan is created, stop and ask the user to review it before execution begins.
- If the user requests plan changes, produce a revised plan and ask for review again; only explicit approval permits execution.

## Read This

- Read [references/stages/frame.md](references/stages/frame.md) to frame the task.
- Read [references/stages/recon.md](references/stages/recon.md) to map behavior before editing.
- Read [references/stages/decide.md](references/stages/decide.md) to choose the edit surface.
- Read [references/stages/handoff.md](references/stages/handoff.md) to hand work to implementation cleanly.
- Read [references/behaviors/challenge-proposals.md](references/behaviors/challenge-proposals.md) when a proposed design already exists.
- Read [references/behaviors/research-when-unsure.md](references/behaviors/research-when-unsure.md) when external evidence can improve the plan.
- Read [references/methods/repo-recon.md](references/methods/repo-recon.md) for tracing and multi-repo mapping.

## Output Standard

- Name the concrete change target, source-of-truth files, and edit surface.
- Separate confirmed evidence from assumptions and user decisions still needed; call out scenario boundaries and hidden risk.
- State how objector findings changed the plan, or why no change was needed.
- Ask for user review before handing the plan to execution.
