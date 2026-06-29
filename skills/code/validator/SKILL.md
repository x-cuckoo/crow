---
name: crow-code-validator
description: Validator skill for coding work. The agent must invoke it proactively when a change exists and needs verification, risk checks, close-out judgment, or proof that the behavior works as intended. This includes targeted checks, test selection, runtime validation, and identifying what remains unverified. Do not wait for the user to name this skill explicitly.
---

# Validator

The agent must invoke this skill proactively after implementation, or earlier when a plan or diff needs a safety check. Do not wait for the user to mention the skill by name.

## Default stance

- Verify as close as possible to the changed surface.
- Prefer targeted checks over broad expensive ones.
- Separate confirmed behavior from assumed behavior.

## Read This

- Read [references/validation.md](references/validation.md).

## Output Standard

- State what was checked.
- State what passed or failed.
- State what remains unverified and why.
