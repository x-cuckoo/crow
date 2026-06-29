---
name: crow-code-validator
description: Validator skill for coding work. Use when a change exists and needs verification, risk checks, close-out judgment, or proof that the behavior works as intended. This includes targeted checks, test selection, runtime validation, and identifying what remains unverified.
---

# Validator

Use this skill after implementation, or earlier when the user asks whether a plan or diff is safe.

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
