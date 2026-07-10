---
name: crow-feedback-optimization
description: Improve crow-code-planner, crow-code-executor, crow-code-validator, and crow-code-objector during daily use. Invoke proactively when repeated corrections, missed intent, overreach, poor triggering, or low-value behavior reveals a reusable weakness. Propose a privacy-safe, minimal change and ask before editing unless already requested. Never modify files outside those four skills.
---

# Feedback Optimization

Detect recurring weakness proactively, then make the smallest reusable improvement after any required confirmation.

## Scope

Allowed targets and paths:

- `crow-code-planner` -> `skills/code/planner/`
- `crow-code-executor` -> `skills/code/executor/`
- `crow-code-validator` -> `skills/code/validator/`
- `crow-code-objector` -> `skills/code/objector/`

All other files are out of scope, including `AGENTS.md`, project files, installers, package metadata, this skill, and non-crow-code skills. Mention improvements outside this scope separately and ask for a new target.

## Sensing

- Watch for repeated friction, corrections, hesitation, re-explanations, or manual steering.
- Notice when a skill triggers too often, too rarely, or with the wrong scope.
- Notice wording that is vague, rigid, noisy, or easy to misread.
- Treat two similar corrections about scope, target, wording, or intent as a strong signal.
- Do not interrupt on a weak first signal; once the pattern is clear, propose the optimization proactively.

## Workflow

1. Abstract the observed failure into a reusable, privacy-safe pattern.
2. Select the target skill and classify the fix as trigger, scope, wording, structure, routing, or workflow; ask if the target is ambiguous.
3. State the pattern, intended adjustment, allowed path, and whether confirmation is needed.
4. Ask before editing unless the user already requested the optimization.
5. Make the smallest allowed edit and check that it generalizes without overfitting.

## Guardrails

- Optimize for signal, preserve what works, and ignore one-off noise.
- Tighten triggers, scope, and wording before adding process or rewriting structure.
- Do not make triggers so broad that the skill becomes noisy.
- Do not make wording so narrow that the skill stops generalizing.
- Do not include repository names, code snippets, tokens, secrets, credentials, internal URLs, private identifiers, or sensitive implementation details.
- Describe patterns rather than incidents; use only generic, sanitized examples when needed.
- Keep meaningful changes visible to the user and stay within the allowed paths.

## Output Standard

- Name the generalized failure mode, target skill, allowed path, intended adjustment, and confirmation state.
- Explain why the change is narrow and sufficient; note any uncertainty worth watching.
