---
name: crow-code-validator
description: Validator skill for coding work. The agent must invoke it proactively when a change exists and needs verification, risk checks, close-out judgment, pre-commit review of a completed change set, or proof that behavior works as intended. This includes targeted checks, test selection, runtime validation, full-diff review before commit, and identifying what remains unverified. Do not wait for the user to name this skill explicitly.
---

# Validator

The agent must invoke this skill proactively after implementation, or earlier when a plan or diff needs a safety check. Do not wait for the user to mention the skill by name.

## Default stance

- Verify as close as possible to the changed surface.
- Review the complete change set after executor finishes and before commit; do not run a review after every single file edit.
- Prefer targeted checks over broad expensive ones.
- Separate confirmed behavior from assumed behavior.
- Treat success criteria as the verification target.
- For bugs, prefer a reproducing test or check before claiming the fix.

## Read This

- Read [references/validation.md](references/validation.md).

## Output Standard

- State what was checked.
- State what passed or failed.
- State what remains unverified and why.
