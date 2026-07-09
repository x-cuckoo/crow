---
name: crow-feedback-optimization
description: Refine only current crow-code skills during day-to-day development, including crow-code-planner, crow-code-executor, crow-code-validator, and crow-code-objector. Invoke proactively when repeated friction, corrections, missed intent, overreach, weak triggers, or low-value behavior suggests one of those skills should be tuned. Propose privacy-safe, restrained improvements and ask before editing unless the user already requested the change. Do not modify non-crow-code files through this skill.
---

# Feedback Optimization

Use this skill to keep the current crow-code skill family reliable without turning every correction into churn.
Default: observe actively, propose concrete optimizations before the user has to ask, and make the smallest reusable adjustment.

## Scope

This skill applies only to:

- `crow-code-planner`
- `crow-code-executor`
- `crow-code-validator`
- `crow-code-objector`

Allowed edit paths:

- `skills/code/planner/`
- `skills/code/executor/`
- `skills/code/validator/`
- `skills/code/objector/`

Do not modify `AGENTS.md`, project code, project docs, installer scripts, package metadata, this feedback skill, or non-crow-code skills through this workflow.
If another skill or tool needs work, mention it separately and ask for a new target.

## Default Stance

- Optimize for signal, not churn.
- Fix recurring failure modes, not one-off noise.
- Preserve what already works.
- Tighten triggers, scope, and wording before adding process.
- Ask before editing unless the user already requested the optimization.
- Abstract incidents into reusable, privacy-safe skill improvements.
- Verify the target skill and edit path are in scope before changing files.

## Privacy

- Do not include repository names, code snippets, tokens, secrets, credentials, internal URLs, private identifiers, or sensitive implementation details.
- Describe the pattern, not the incident.
- Use only generic, sanitized examples when an example is necessary.

## Sensing

- Watch for repeated friction, corrections, hesitation, re-explanations, or manual steering.
- Notice when a skill triggers too often, too rarely, or with the wrong scope.
- Notice wording that is vague, rigid, noisy, or easy to misread.
- Treat two similar user corrections about scope, target, wording, or intent as a strong signal.
- Do not interrupt on a weak first signal; once the pattern is clear, propose the optimization proactively.

## Workflow

1. Identify the failure mode from real usage.
2. Abstract it into a reusable pattern without private details.
3. Identify the target crow-code skill; ask if multiple targets are plausible.
4. Classify the fix as trigger, scope, wording, structure, reference routing, or workflow.
5. State the target skill, observed pattern, intended adjustment, allowed path, and whether confirmation is needed.
6. Make the smallest allowed edit.
7. Re-check that the revision improves the behavior without overfitting.

## Guardrails

- Do not rewrite large sections unless the structure is failing.
- Do not add process because one run went badly.
- Do not make triggers so broad that the skill becomes noisy.
- Do not make wording so narrow that the skill stops generalizing.
- Do not hide meaningful skill changes from the user.
- Do not optimize non-crow-code skills through this workflow.
- Do not modify files outside the allowed crow-code paths.

## Output Standard

- Name the observed failure mode and target crow-code skill.
- Describe the issue in privacy-safe, generalized terms.
- State the intended adjustment and exact allowed file path.
- State whether user confirmation is needed or already given.
- Explain why the change is narrow, sufficient, and not overfit.
- Call out any remaining uncertainty worth watching.
