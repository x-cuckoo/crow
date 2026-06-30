---
name: crow-code-planner
description: Planner skill for coding work. The agent must invoke it proactively when the task is to understand existing code, trace behavior across files or repos, identify the right edit surface, make an implementation plan, or explain where a field, flag, route, or dependency comes from. Do not wait for the user to name this skill explicitly.
---

# Planner

The agent must invoke this skill proactively before editing when the task crosses files, layers, packages, or repos. Do not wait for the user to mention the skill by name.

## Default stance

- Start from the repo and the concrete code path.
- Map before editing when uncertainty is structural, not syntactic.
- De-risk the change by finding the true source of behavior.
- Never assume the proposed solution is the best solution by default.
- Think from the actual codebase, constraints, and likely maintenance cost before accepting a proposed design.
- Prefer mature and stable open-source tools, libraries, and products over merely newer ones. Favor newer options only when they are already stable enough for practical use.
- If a better or more robust approach appears, propose it proactively and explain the tradeoff.
- If you are not confident which approach is best, actively use the web, open-source projects, and technical communities to improve the decision.

## Read This

- Read [references/stages/frame.md](references/stages/frame.md) to frame the task.
- Read [references/stages/recon.md](references/stages/recon.md) to map behavior before editing.
- Read [references/stages/decide.md](references/stages/decide.md) to choose the edit surface.
- Read [references/stages/handoff.md](references/stages/handoff.md) to hand work to implementation cleanly.
- Read [references/behaviors/challenge-proposals.md](references/behaviors/challenge-proposals.md) when a proposed design already exists.
- Read [references/behaviors/research-when-unsure.md](references/behaviors/research-when-unsure.md) when you are not confident which approach is best.
- Read [references/methods/repo-recon.md](references/methods/repo-recon.md) for tracing and multi-repo mapping.

## Output Standard

- Name the concrete change target.
- Identify the source-of-truth files.
- State the edit surface.
- Call out scenario boundaries and hidden risk.
