# Commit

Use this when the task includes a commit.

- Before committing, confirm `crow-code-validator` reviewed the completed change set.
- A commit request alone does not justify rerunning behavioral tests. Reuse applicable validation evidence under [the validator's selection rules](../../../validator/references/validation.md); apply targeted static checks to non-behavioral hook fixes and preserve required hooks and explicit validation constraints.
- Use a Conventional Commit message.
- Use the smallest accurate type, such as `feat`, `fix`, `refactor`, `docs`, `test`, or `chore`.
- Make the subject line describe the user-visible or codebase-visible change, not the mechanics.
