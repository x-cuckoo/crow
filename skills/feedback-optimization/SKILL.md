---
name: crow-feedback-optimization
description: Continuously refine other local skills during day-to-day development. The agent must invoke this skill proactively when repeated friction, corrections, missed intent, overreach, weak phrasing, poor trigger boundaries, or low-value behavior suggests that a skill should be tuned. It must keep sensing these patterns over time, decide when an optimization is worth proposing, tell the user what it wants to improve, and ask whether to make the adjustment. Do not wait for the user to raise the optimization first. Focus on precise, restrained improvements that make other skills more reliable without overfitting to one incident.
---

# Feedback Optimization

Invoke this skill proactively when real usage shows that another skill is drifting, overreaching, under-triggering, misreading intent, or producing instructions that are too vague, too rigid, or too noisy.
The skill must keep sensing these patterns during normal work, analyze whether they are recurring enough to matter, and raise an optimization proposal to the user at the right moment. Do not wait for the user to first ask for skill optimization.

## Mission

Improve other skills continuously, precisely, and with restraint.

This skill is not for rewriting a skill from scratch every time feedback appears. It is for making measured corrections that improve how a skill behaves in real daily development.
Its default mode is active observation and proactive proposal, not passive response.

## Default stance

- Optimize for signal, not churn.
- Prefer small targeted corrections over large reactive rewrites.
- Fix the recurring failure mode, not just the latest complaint.
- Preserve what already works.
- Do not overfit a general skill to one narrow case.
- Tighten trigger conditions, boundaries, and wording before adding more process.
- Treat proactive detection as the default. Do not wait for the user to ask whether a skill needs improvement.
- Ask before changing a skill when the optimization is driven by observed usage rather than an explicit user request.

## Sensing

- Continuously watch for repeated friction, corrections, hesitation, re-explanations, or manual steering from the user.
- Notice when a skill triggers too often, not often enough, or with the wrong scope.
- Notice when wording causes confusion, over-interpretation, or unnecessary ceremony.
- Distinguish isolated noise from a meaningful pattern that deserves intervention.
- Escalate from observation to user proposal on your own once the pattern is clear enough.

## When To Ask The User

Ask the user before optimizing a skill when:

- you have observed a recurring problem worth fixing,
- the optimization would change trigger behavior, wording, scope, or workflow,
- the improvement is helpful but not strictly required to finish the current task.

Do not interrupt immediately on the first weak signal. Wait until the pattern is concrete enough to explain clearly.
But once the pattern is concrete, bring it up yourself instead of waiting for the user to notice it.

When asking, be concise and explicit:

- name the skill,
- name the observed problem,
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
2. Decide whether the problem is trigger, scope, wording, structure, or reference routing.
3. Decide whether this should be silently monitored a bit longer, proposed to the user now, or immediately handled because the user already asked for optimization.
4. If the pattern is clear enough, proactively explain the intended change and ask the user whether to optimize now.
5. Find the smallest change that would prevent the issue from repeating.
6. Update only the relevant part of the skill.
7. Re-check that the revision improves the target behavior without damaging nearby cases.

## Guardrails

- Do not rewrite large sections unless the current structure is clearly failing.
- Do not add process just because one run went badly.
- Do not make trigger descriptions so broad that the skill becomes noisy.
- Do not make the skill so specific that it stops generalizing.
- Do not preserve weak wording if a shorter and sharper instruction would do better.
- Do not stay passive once a recurring and explainable optimization opportunity is visible.
- Do not ask the user too often; ask only when the proposed optimization is concrete and useful.
- Do not hide meaningful skill changes from the user when they come from your own observation rather than a direct request.

## Output Standard

- Name the observed failure mode.
- State the intended skill adjustment.
- State whether user confirmation is needed or already given.
- Explain why the change is narrow, sufficient, and not overfit.
- Call out any remaining uncertainty or cases still worth watching.
