# Parallel Recon

Use this only when at least two independent, material evidence questions can run concurrently. Skip it for simple tasks or investigations with sequential dependencies.

- Keep one planner responsible for reconciling evidence, resolving conflicts, making decisions, and producing the final plan.
- Use at most three read-only sidecars with disjoint questions and minimal context. When model selection is available, prefer a faster model for bounded evidence collection and a stronger model for synthesis, ambiguity, and risk review.
- Request evidence, boundaries, and uncertainty, not plans or conclusions; forbid further delegation.
- Keep the critical path local, continue non-overlapping work, and wait once for the set only when needed.
