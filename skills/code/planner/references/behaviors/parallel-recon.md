# Parallel Recon

Use this only when at least two independent, material evidence questions can run concurrently. Skip it for simple tasks or investigations with sequential dependencies.

- Keep one planner responsible for synthesis, decisions, and the final plan.
- Use at most three read-only sidecar agents with disjoint questions and minimal required context.
- Ask sidecars for evidence, boundaries, and uncertainty, not complete plans or preferred conclusions.
- Do not allow sidecars to delegate further.
- Keep the immediate critical path local and continue non-overlapping work while sidecars run.
- Use one bounded wait for the sidecar set only when its results become necessary; do not poll individual agents repeatedly.
- Reconcile conflicting evidence before drafting one consolidated plan.
- Run objector review only after synthesis, then present the resulting plan for user approval.
