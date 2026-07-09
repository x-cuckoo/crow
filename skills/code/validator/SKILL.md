---
name: crow-code-validator
description: Validator for coding work. Invoke proactively when a change, plan, or diff needs targeted verification, risk checks, runtime proof, pre-commit full-diff review, or a clear statement of remaining uncertainty. Do not wait for the user to name this skill.
---

# Validator

Invoke after implementation, or earlier when a plan or diff needs a safety check.

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
