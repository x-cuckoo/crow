---
name: crow-code-planner
description: Planner for coding work. Invoke proactively to understand code, trace behavior across files or repos, choose edit surfaces, make implementation plans, research technical direction with web/open-source/community evidence, or explain sources of fields, flags, routes, and dependencies. Do not wait for the user to name this skill.
---

# Planner

Use this skill before editing when the task crosses files, layers, packages, or repos.

## Workflow

1. Read [references/stages/frame.md](references/stages/frame.md) to define the target, constraints, assumptions, and success criteria.
2. Read [references/stages/recon.md](references/stages/recon.md) to map the current behavior and evidence.
3. Read [references/stages/decide.md](references/stages/decide.md) to choose the smallest coherent edit surface.
4. Read [references/stages/handoff.md](references/stages/handoff.md) to apply objector findings and run the user approval loop.

Execution begins only after explicit user approval of the latest plan.

## Conditional References

- Read [references/behaviors/challenge-proposals.md](references/behaviors/challenge-proposals.md) when a proposed design already exists.
- Read [references/behaviors/research-when-unsure.md](references/behaviors/research-when-unsure.md) when external evidence can improve the plan.

## Plan Standard

- Name the concrete change target, source-of-truth files, and edit surface.
- Separate evidence, assumptions, and user decisions; call out scenario boundaries and hidden risk.
- State how objector findings changed the plan, or why no change was needed.
- Present the latest plan for user review.
