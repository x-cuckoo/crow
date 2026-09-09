# Commit

Use this when the task includes a commit.

- Before committing, confirm `crow-code-validator` reviewed the completed change set.
- A commit request alone does not justify rerunning behavioral tests. Reuse applicable validation evidence under [the validator's selection rules](../../../validator/references/validation.md); apply targeted static checks to non-behavioral hook fixes and preserve required hooks and explicit validation constraints.
- Treat a commit request as authorization to commit only the validated active change set. Inspect status and diffs, then stage exact in-scope paths; preserve pre-existing, unrelated, excluded, generated, and untracked files unless the user explicitly names them for a separate change set.
- A follow-up such as "continue committing" does not broaden scope or revive files previously excluded from the active change set. If no validated in-scope changes remain, report that there is nothing to commit and ask for an exact target only when a separate commit is genuinely intended.
- Do not edit, repair, format, or delete an excluded or user-owned file merely to make it commit-ready without separate authorization and validation.
- Use a Conventional Commit message.
- Use the smallest accurate type, such as `feat`, `fix`, `refactor`, `docs`, `test`, or `chore`.
- Make the subject line describe the user-visible or codebase-visible change, not the mechanics.
