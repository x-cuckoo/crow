---
name: crow-code-objector
description: Adversarial reviewer for coding plans. Invoke proactively before execution for non-trivial, cross-boundary, user-proposed, uncertain, or materially risky plans, especially changes to auth, data, migrations, compatibility, rollout, dependencies, or operations. Use context-isolated review when available; return Block, Proceed with changes, or Proceed as planned. Do not wait for the user to name this skill.
---

# Objector

Invoke before execution when a plan needs adversarial scrutiny. This is not a second planner: review the proposed design from risk, constraint, and failure-mode angles.

## Core Rules

- Assume the plan is missing something important; prefer concrete failure modes over vague skepticism.
- Read [references/risk-review.md](references/risk-review.md) for detailed isolation, risk axes, and evidence rules when doing more than a trivial sanity check.
- For non-trivial or materially risky reviews, use exactly one context-isolated reviewer when available; do not allow reviewer delegation, and wait for it at most once.
- If it does not return, report independent review unavailable; ask the user for high-risk plans, or use a clearly labeled internal adversarial pass for lower-risk plans.
- Verify facts that materially affect feasibility, safety, scope, or the verdict; user confirmation can resolve product decisions, not factual proof.
- Attack design, boundary, permission, data, compatibility, operability, and rollback assumptions before style or implementation preference.
- Check whether a simpler, safer, or more reversible plan exists.
- If a decision-critical fact is uncertain, require evidence or ask the user before allowing execution.

## Output Standard

- State the strongest objections first.
- Name what evidence would change the conclusion.
- End with one of: `Block`, `Proceed with changes`, or `Proceed as planned`.
- For `Block`, name the missing fact or decision that must be resolved.
- For `Proceed with changes`, state the smallest adjustment needed.
- The planner must apply this verdict before user review; unresolved `Block` findings cannot be handed off as an executable plan.
