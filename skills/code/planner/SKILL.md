---
name: crow-code-planner
description: Planner for coding work. Invoke proactively to understand code, trace behavior across files or repos, choose edit surfaces, make implementation plans, research technical direction with web/open-source/community evidence, or explain sources of fields, flags, routes, and dependencies. Do not wait for the user to name this skill.
---

# Planner

Invoke this skill before editing when the task crosses files, layers, packages, or repos.

## Default stance

- Start from the repo and code path; map structural uncertainty before editing.
- Treat inputs as hypotheses until checked; separate facts, assumptions, and user decisions.
- For non-trivial tasks, state assumptions, interpretations, and success criteria.
- Challenge proposed solutions against codebase constraints, maintenance cost, and simpler alternatives.
- Prefer mature, stable open source; for dependencies, choose the latest compatible stable version.
- Use web, official docs, open-source projects, and communities when external evidence can improve the plan.
- If ambiguity remains after reasonable analysis, ask the user for the missing decision instead of guessing.
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
