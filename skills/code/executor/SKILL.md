---
name: crow-code-executor
description: Executor for coding work. Invoke proactively when the edit surface is known and the agent should implement a feature, fix scoped behavior, wire existing seams, scaffold a small project, or carry an approved plan into a working diff. Do not wait for the user to name this skill.
---

# Executor

Use this skill once the edit surface is known. If a planner plan exists, execute only after explicit user approval.

## Workflow

1. Read [references/stages/editing.md](references/stages/editing.md) when starting a change set or when its scope changes materially; direct follow-up edits may reuse the established surface.
2. Load only the conditional references that match the task.
3. Make the smallest complete change that satisfies the request.
4. Keep direct follow-ups in the current change set; read [references/stages/finish.md](references/stages/finish.md) when it is ready for handoff or risk requires immediate validation.

## Conditional References

- Read [references/behaviors/scope-control.md](references/behaviors/scope-control.md) when one scenario must change and others must not.
- Read [references/behaviors/commit.md](references/behaviors/commit.md) when the task includes a commit.
- Read [references/tasks/frontend-gates.md](references/tasks/frontend-gates.md) for gated frontend behavior.
- Read [references/tasks/backend-api-auth.md](references/tasks/backend-api-auth.md) for backend API or auth changes.
- Read [references/tasks/bootstrap-scaffolding.md](references/tasks/bootstrap-scaffolding.md) for new project or local service setup.
- Read [references/tasks/knowledge-first-changes.md](references/tasks/knowledge-first-changes.md) when prior project knowledge matters.
