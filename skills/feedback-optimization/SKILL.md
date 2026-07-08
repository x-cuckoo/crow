---
name: crow-feedback-optimization
description: Continuously refine only the current crow-code skill family during day-to-day development: crow-code-planner, crow-code-executor, crow-code-validator, and crow-code-objector. The agent must invoke this skill proactively when repeated friction, corrections, missed intent, overreach, weak phrasing, poor trigger boundaries, or low-value behavior suggests that one of those skills should be tuned. It must keep sensing these patterns over time, decide when an optimization is worth proposing, tell the user what it wants to improve, and ask whether to make the adjustment. Do not wait for the user to raise the optimization first. When acting through this skill, edits are allowed only inside the current crow-code skill files. Focus on precise, restrained improvements that make crow-code skills more reliable without overfitting to one incident.
---

# Feedback Optimization

Invoke this skill proactively when real usage shows that a current crow-code skill is drifting, overreaching, under-triggering, misreading intent, or producing instructions that are too vague, too rigid, or too noisy.
The skill must keep sensing these patterns during normal work, analyze whether they are recurring enough to matter, and raise an optimization proposal to the user at the right moment. Do not wait for the user to first ask for skill optimization.

## Mission

Improve the current crow-code skill family continuously, precisely, and with restraint.

This skill is not for rewriting a skill from scratch every time feedback appears. It is for making measured corrections that improve how a skill behaves in real daily development.
Its default mode is active observation and proactive proposal, not passive response.
Its suggestions must be privacy-safe and reusable as personal skill improvements, not tied to one private repo incident.

## Scope

This skill applies only to the current crow-code skill family:

- `crow-code-planner`
- `crow-code-executor`
- `crow-code-validator`
- `crow-code-objector`

Do not use this skill to optimize unrelated local skills, global agent rules, project docs, repository code, or external tools. If a non-crow-code skill appears to need improvement, mention that separately and ask the user to confirm a new target.

When acting through this skill, modify only files under these paths:

- `skills/code/planner/`
- `skills/code/executor/`
- `skills/code/validator/`
- `skills/code/objector/`

Do not modify `AGENTS.md`, project code, project docs, installer scripts, package metadata, this feedback skill, or any non-crow-code skill through this workflow.

## Default stance

- Optimize for signal, not churn.
- Prefer small targeted corrections over large reactive rewrites.
- Fix the recurring failure mode, not just the latest complaint.
- Preserve what already works.
- Do not overfit a general skill to one narrow case.
- Tighten trigger conditions, boundaries, and wording before adding more process.
- Treat proactive detection as the default. Do not wait for the user to ask whether a skill needs improvement.
- Ask before changing a skill when the optimization is driven by observed usage rather than an explicit user request.
- Abstract concrete incidents into reusable capability improvements.
- Never include private implementation details in optimization proposals.
- Optimize only the current crow-code target; do not drift to the most recently edited, most familiar, or non-crow-code skill.
- Edit only allowed crow-code skill files; no other file changes are permitted through this skill.

## Privacy And Abstraction

- Do not include repository names, code snippets, tokens, secrets, credentials, internal URLs, private identifiers, or any other sensitive implementation detail in feedback proposals.
- Describe the observed issue at the pattern level, not the incident level.
- Convert concrete usage problems into reusable crow-code skill adjustments.
- Optimize for long-term skill quality across future work, not for documenting one private task.
- If an example is needed, make it generic and fully sanitized.

## Sensing

- Continuously watch for repeated friction, corrections, hesitation, re-explanations, or manual steering from the user.
- Notice when a skill triggers too often, not often enough, or with the wrong scope.
- Notice when wording causes confusion, over-interpretation, or unnecessary ceremony.
- Distinguish isolated noise from a meaningful pattern that deserves intervention.
- Escalate from observation to user proposal on your own once the pattern is clear enough.
- Treat two or more similar user corrections about scope, target, wording, or intent as a strong signal to propose an optimization.
- Before proposing a change, identify the affected crow-code skill and verify that it is in scope.

## When To Ask The User

Ask the user before optimizing a skill when:

- you have observed a recurring problem worth fixing,
- the optimization would change trigger behavior, wording, scope, or workflow,
- the improvement is helpful but not strictly required to finish the current task.

Do not interrupt immediately on the first weak signal. Wait until the pattern is concrete enough to explain clearly.
But once the pattern is concrete, bring it up yourself instead of waiting for the user to notice it.

When asking, be concise and explicit:

- name the crow-code skill,
- name the observed problem in abstract, privacy-safe terms,
- name the intended optimization,
- ask whether the user wants you to apply it now.

## What To Improve

- Trigger quality: when the skill should activate, and when it should stay out.
- Scope control: what the skill should and should not try to do.
- Instruction precision: whether the wording is actionable, crisp, and hard to misread.
- Calibration: whether the skill is too aggressive, too passive, too broad, or too literal.
- Reference loading: whether the skill points to the right deeper material without forcing unnecessary context.
- Practicality: whether the skill helps real development work instead of adding ceremony.

## Workflow

1. Identify the concrete failure mode from real usage.
2. Abstract the failure into a reusable pattern without carrying private task details forward.
3. Identify the target crow-code skill; if multiple crow-code targets are plausible, say so and ask instead of silently choosing.
4. Decide whether the problem is trigger, scope, wording, structure, or reference routing.
5. Decide whether this should be silently monitored a bit longer, proposed to the user now, or immediately handled because the user already asked for optimization.
6. If the pattern is clear enough, proactively explain the intended change in privacy-safe terms and ask the user whether to optimize now.
7. Verify that every intended edit target is under the allowed crow-code paths.
8. Find the smallest change that would prevent the issue from repeating.
9. Update only the relevant part of the target crow-code skill.
10. Re-check that the revision improves the target behavior without damaging nearby cases.

## Guardrails

- Do not rewrite large sections unless the current structure is clearly failing.
- Do not add process just because one run went badly.
- Do not make trigger descriptions so broad that the skill becomes noisy.
- Do not make the skill so specific that it stops generalizing.
- Do not preserve weak wording if a shorter and sharper instruction would do better.
- Do not stay passive once a recurring and explainable optimization opportunity is visible.
- Do not ask the user too often; ask only when the proposed optimization is concrete and useful.
- Do not hide meaningful skill changes from the user when they come from your own observation rather than a direct request.
- Do not carry private repo context into the skill unless the skill is explicitly meant to contain that private context.
- Do not let one private code example become permanent wording inside a general personal skill.
- Do not optimize non-crow-code skills through this skill.
- Do not modify files outside `skills/code/planner/`, `skills/code/executor/`, `skills/code/validator/`, or `skills/code/objector/`.

## Output Standard

- Name the observed failure mode.
- Name the target crow-code skill and why that target is correct.
- Describe it in privacy-safe, generalized terms.
- State the intended skill adjustment.
- State the exact allowed file path that would be changed.
- State whether user confirmation is needed or already given.
- Explain why the change is narrow, sufficient, and not overfit.
- Call out any remaining uncertainty or cases still worth watching.
