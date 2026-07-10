---
name: crow-code-validator
description: Validator for completed coding work. Invoke proactively after implementation or when a diff needs targeted verification, runtime proof, pre-commit full-diff review, or a clear statement of remaining uncertainty. Validate a plan only when explicitly asked to check a specific assumption or success criterion. Do not wait for the user to name this skill.
---

# Validator

Use this skill after implementation. Use `crow-code-objector` for adversarial plan review; validate a plan only when explicitly delegated a specific assumption or success criterion.

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
