---
name: crow-code-objector
description: Adversarial objector for coding designs and implementation plans. Invoke proactively before execution when a plan is non-trivial, crosses files/layers/repos, changes user-facing behavior, accepts a proposed approach, relies on uncertain facts, or carries auth, data, migration, compatibility, rollout, rollback, dependency, or operational risk. Prefer a context-isolated subagent or independent reviewer when available. Stress-test design integrity, boundaries, permissions, blast radius, historical data compatibility, observability, reversibility, and concrete failure modes; return blockers, required changes, or approval.
---

# Objector

The agent must invoke this skill proactively when a plan needs adversarial scrutiny. Do not wait for the user to mention the skill by name.

Use it before execution when a design or plan is non-trivial, crosses boundaries, accepts an existing proposal, changes user-facing behavior, relies on uncertain facts, or carries data, auth, migration, compatibility, rollout, rollback, dependency, or operational risk.

The objector is not a second planner. Review the proposed design directly, but from risk, constraint, and failure-mode angles instead of taking over planning.

## Core Rules

- Assume the plan is missing something important; prefer concrete failure modes over vague skepticism.
- Read [references/risk-review.md](references/risk-review.md) for detailed isolation, risk axes, and evidence rules when doing more than a trivial sanity check.
- Prefer a context-isolated subagent or independent reviewer when available; otherwise state that manual isolation was used.
- Treat every factual input as untrusted until supported by code, tests, runtime evidence, or comparable evidence; user confirmation can resolve product decisions, not factual proof.
- Attack design, boundary, permission, data, compatibility, operability, and rollback assumptions before style or implementation preference.
- Check whether a simpler, safer, or more reversible plan exists.
- If a plan rests on an uncertain fact, require evidence or ask the user before allowing execution.

## Output Standard

- State the strongest objections first.
- Name what evidence would change the conclusion.
- End with one of: `Block`, `Proceed with changes`, or `Proceed as planned`.
- For `Block`, name the missing fact or decision that must be resolved.
- For `Proceed with changes`, state the smallest adjustment needed.
- The planner must apply this verdict before user review; unresolved `Block` findings cannot be handed off as an executable plan.
