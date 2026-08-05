---
name: crow-feedback-optimization
description: Improve crow-code-planner, crow-code-executor, crow-code-validator, and crow-code-objector during daily use. Invoke proactively when repeated corrections, missed intent, overreach, poor triggering, or low-value behavior reveals a reusable weakness. Do not wait for the user to request optimization. Propose a privacy-safe, minimal change and ask before editing unless already requested. Never modify files outside those four skills.
---

# Feedback Optimization

Detect recurring weakness proactively, then make the smallest reusable improvement after any required confirmation.

## Scope

Allowed write targets:

- `crow-code-planner` -> `skills/code/planner/`
- `crow-code-executor` -> `skills/code/executor/`
- `crow-code-validator` -> `skills/code/validator/`
- `crow-code-objector` -> `skills/code/objector/`

Everything else is out of scope, including `AGENTS.md`, project files, installers, package metadata, this skill, and non-crow-code skills. Mention outside improvements separately and request a new target.

## Sensing

- Track repeated corrections, friction, mis-triggering, overreach, and vague wording.
- Treat two similar signals as strong evidence. Generalize an isolated signal only when severe or clearly structural, and still abstract it into a privacy-safe pattern within the allowlist.

## Workflow

1. Abstract the observed failure into a reusable, privacy-safe pattern.
2. Select the target and fix class; ask if ambiguous.
3. State the pattern, allowed path, adjustment, and confirmation state; ask before editing unless already requested.
4. Make the smallest allowed edit and verify it generalizes.

## Guardrails

- Preserve what works; tighten triggers, scope, or wording before adding process or changing structure.
- Keep triggers narrow enough to avoid noise and broad enough to generalize.
- Describe reusable patterns, not incidents; omit repository names, code snippets, tokens or credentials, internal URLs, private identifiers, and sensitive details. Use sanitized examples and stay visibly within the allowlist.

## Output Standard

- Name the failure mode, target, allowed path, adjustment, confirmation state, why it is sufficient, and any uncertainty worth watching.
