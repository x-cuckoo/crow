---
name: crow-code-executor
description: Executor skill for coding work. Use when the task is ready to be changed in code: editing files, wiring behavior through existing seams, applying scoped fixes, implementing features, scaffolding a project, or carrying a planned change through to a working code diff.
---

# Executor

Use this skill once the edit surface is known.

## Default stance

- Change the smallest reliable set of files.
- Match existing structure before introducing new structure.
- Finish the behavior, not just the local edit.

## Read This

- Read [references/implementation.md](references/implementation.md) for editing posture.
- Read [references/domain-playbooks.md](references/domain-playbooks.md) for domain-specific implementation patterns.

## Output Standard

- Make the code change.
- Keep scenario boundaries intact.
- Leave the result ready for validation.
