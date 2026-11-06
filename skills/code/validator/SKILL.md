---
name: crow-code-validator
description: Verify completed coding work with targeted static checks, tests, runtime evidence, and explicit evidence gaps. Invoke proactively when implementation needs validation against success criteria. Validate a plan only when explicitly asked to check a specific assumption or success criterion. Do not wait for the user to name this skill.
---

# Validator

Use this skill to verify success criteria. Use `crow-code-reviewer` for code review and `crow-code-objector` for adversarial plan review; validate a plan only when explicitly delegated a specific assumption or success criterion.

## Workflow

- Treat the completed change set and its success criteria as the validation boundary.
- Select checks from the changed behavior and success criteria; reuse applicable evidence during follow-up edits.
- Read [references/validation.md](references/validation.md), prefer targeted proof, and separate confirmed from assumed behavior.
- Read [references/visual-validation.md](references/visual-validation.md) when acceptance depends on rendered appearance, layout, scrolling, or motion.

## Output Standard

- Report what was checked, what passed or failed, and what remains unverified and why.
