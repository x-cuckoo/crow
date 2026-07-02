---
name: crow-code-executor
description: Executor skill for coding work. The agent must invoke it proactively when the task is ready to be changed in code: editing files, wiring behavior through existing seams, applying scoped fixes, implementing features, scaffolding a project, or carrying a planned change through to a working code diff. Do not wait for the user to name this skill explicitly.
---

# Executor

The agent must invoke this skill proactively once the edit surface is known. Do not wait for the user to mention the skill by name.
If a planner-produced implementation plan exists, execute only after the user has reviewed and approved it.

## Default stance

- Change the smallest reliable set of files.
- Match existing structure before introducing new structure.
- Finish the behavior, not just the local edit.
- Preserve scenario boundaries explicitly.
- Add no features, abstractions, flexibility, or configurability beyond the request.
- Clean up only imports, variables, functions, or files made unused by the current change.
- Do not execute a planner-produced plan before user review and approval.

## Read This

- Read [references/stages/editing.md](references/stages/editing.md) for how to apply a change.
- Read [references/stages/finish.md](references/stages/finish.md) for close-out and handoff.
- Read [references/behaviors/scope-control.md](references/behaviors/scope-control.md) when one scenario must change and others must not.
- Read [references/behaviors/commit-format.md](references/behaviors/commit-format.md) when the task includes a commit.
- Read [references/tasks/frontend-gates.md](references/tasks/frontend-gates.md) for gated frontend behavior.
- Read [references/tasks/backend-api-auth.md](references/tasks/backend-api-auth.md) for backend API or auth changes.
- Read [references/tasks/bootstrap-scaffolding.md](references/tasks/bootstrap-scaffolding.md) for new project or local service setup.
- Read [references/tasks/knowledge-first-changes.md](references/tasks/knowledge-first-changes.md) when prior project knowledge matters.

## Output Standard

- Make the code change.
- Keep scenario boundaries intact.
- Leave the result ready for validation.
- If creating a commit, use Conventional Commits format.

## Anti-patterns

- Do not abstract a one-off flow unless the pattern already repeats.
- Do not widen scope from a requested fix into opportunistic refactoring.
- Do not add broad documentation when the task is a surgical code change.
- Do not improve adjacent code, comments, formatting, or dead code unless the task requires it.
