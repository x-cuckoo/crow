---
name: crow-code-objector
description: Adversarial reviewer for materially risky or uncertain coding plans. Invoke proactively before execution when failure could materially affect auth, data, migrations, compatibility, rollout, dependencies, operations, or another hard-to-reverse boundary. Use context-isolated review when available; return Block, Proceed with changes, or Proceed as planned. Do not wait for the user to name this skill.
---

# Objector

Invoke before execution when unresolved uncertainty or failure cost makes independent scrutiny worthwhile. Ordinary non-trivial, multi-file, or user-proposed work alone does not require it. This is not a second planner: review the consolidated design from risk, constraint, and failure-mode angles.

## Core Rules

- Require changes only for concrete failures of agreed requirements or established constraints. Present optional hardening separately as suggestions; it must not affect the verdict or become an implementation requirement without user acceptance.
- For independent reviews, follow [references/risk-review.md](references/risk-review.md) for isolation, reuse, model choice, risk axes, evidence, and unavailable-review handling.
- Verify facts material to feasibility, safety, scope, or the verdict; user input resolves product decisions, not factual proof. Require evidence for decision-critical facts before execution.
- Attack design, boundaries, permissions, data, compatibility, operations, and rollback before style; seek a better, safer, or more reversible plan.

## Output Standard

- State the strongest objections first and what evidence would change them.
- End with one of: `Block`, `Proceed with changes`, or `Proceed as planned`.
- For `Block`, name the unresolved fact or decision; for `Proceed with changes`, give the required adjustment. The planner must apply the verdict before user review.
