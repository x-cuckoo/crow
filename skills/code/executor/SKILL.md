---
name: crow-code-executor
description: Executor for coding work. Invoke proactively once the edit surface is known to implement a feature, fix scoped behavior, wire existing seams, scaffold a small project, or execute an approved plan. Do not wait for the user to name this skill.
---

# Executor

Use this skill once the edit surface is known. If a planner plan exists, execute only after explicit user approval.

## Workflow

1. Read [references/stages/editing.md](references/stages/editing.md) when starting a change set or when its scope changes materially. Reuse unchanged references and the established surface for direct follow-ups.
2. Load only the conditional references that match the task.
3. Implement the approved plan; without one, use the best-supported design within the agreed scope.
4. Keep direct follow-ups in the current change set; read [references/stages/finish.md](references/stages/finish.md) when it is ready for handoff or risk requires immediate validation.

## Conditional References

- Read [references/behaviors/scope-control.md](references/behaviors/scope-control.md) when one scenario must change and others must not.
- Read [references/behaviors/code-size-and-splitting.md](references/behaviors/code-size-and-splitting.md) when adding multiple phases or state transitions, nesting beyond two levels, extending code near project size limits, or deciding where to split code.
- Read [references/behaviors/commit.md](references/behaviors/commit.md) when the task includes a commit.
- Read [references/behaviors/test-evidence.md](references/behaviors/test-evidence.md) before proposing, creating, changing, selecting for execution, or running behavioral tests or runtime validation.
- Read [references/tasks/backend-api-auth.md](references/tasks/backend-api-auth.md) for backend API or auth changes.
- Read [references/tasks/bootstrap-scaffolding.md](references/tasks/bootstrap-scaffolding.md) for new project or local service setup.
