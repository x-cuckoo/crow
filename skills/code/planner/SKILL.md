---
name: crow-code-planner
description: Planner for coding work. Invoke proactively for cross-file or cross-boundary changes, source tracing, implementation plans, or uncertain technical direction that benefits from web, open-source, or community evidence. Do not wait for the user to name this skill.
---

# Planner

Use this skill for non-trivial planning, source tracing, or technical decisions. Reuse unchanged references already loaded; reload only when their source or the task scope changes.

## Routing

- For explanation-only source tracing, read [references/stages/recon.md](references/stages/recon.md). Also load research guidance when external evidence can improve the answer.
- For implementation or mixed tasks, follow the planning workflow.

## Planning Workflow

1. Read [references/stages/frame.md](references/stages/frame.md) to define the target, constraints, assumptions, and success criteria.
2. Read [references/stages/recon.md](references/stages/recon.md) to map the current behavior and evidence.
3. Read [references/stages/decide.md](references/stages/decide.md) to choose the best coherent edit surface for the actual constraints.
4. Read [references/stages/handoff.md](references/stages/handoff.md) to apply objector findings and run the user approval loop.

Execution begins only after explicit user approval of the latest plan.

## Conditional References

- Read [references/behaviors/challenge-proposals.md](references/behaviors/challenge-proposals.md) when a proposed design already exists.
- Read [references/behaviors/parallel-recon.md](references/behaviors/parallel-recon.md) when at least two independent, material investigations can run concurrently.
- Read [references/behaviors/research-when-unsure.md](references/behaviors/research-when-unsure.md) when external evidence can improve a plan or explanation, especially for generic build-versus-reuse decisions.
