---
name: crow-code-validator
description: Validator for completed coding work. Invoke proactively after implementation or when a diff needs targeted verification, runtime proof, pre-commit full-diff review, or a clear statement of remaining uncertainty. Validate a plan only when explicitly asked to check a specific assumption or success criterion. Do not wait for the user to name this skill.
---

# Validator

Use this skill after implementation. Use `crow-code-objector` for adversarial plan review; validate a plan only when explicitly delegated a specific assumption or success criterion.

## Workflow

- Treat the completed change set and its success criteria as the validation boundary.
- During follow-up edits, use cheap targeted checks; review the full diff when the set is complete, commit is requested, or risk warrants it.
- Read [references/validation.md](references/validation.md), prefer targeted proof, and separate confirmed from assumed behavior.

## Output Standard

- Report what was checked, what passed or failed, and what remains unverified and why.
