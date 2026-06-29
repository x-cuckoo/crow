---
name: crow-code-planner
description: Planner skill for coding work. Use when the task is to understand existing code, trace behavior across files or repos, identify the right edit surface, make an implementation plan, or explain where a field, flag, route, or dependency comes from.
---

# Planner

Use this skill before editing when the task crosses files, layers, packages, or repos.

## Default stance

- Start from the repo and the concrete code path.
- Map before editing when uncertainty is structural, not syntactic.
- De-risk the change by finding the true source of behavior.

## Read This

- Read [references/planning.md](references/planning.md) for the planning loop.
- Read [references/repo-recon.md](references/repo-recon.md) for tracing and multi-repo mapping.

## Output Standard

- Name the concrete change target.
- Identify the source-of-truth files.
- State the edit surface.
- Call out scenario boundaries and hidden risk.
