# Parallel Recon

Use this only when at least two independent, material evidence questions can run concurrently. Skip it for simple tasks or investigations with sequential dependencies.

- Keep one planner responsible for reconciling evidence, resolving conflicts, making decisions, and producing the final plan.
- Use at most three fresh, context-isolated read-only sidecars with disjoint questions. Never fork the full conversation history; pass only the bounded question, exact relevant paths or evidence, constraints, and expected evidence shape. In current Codex multi-agent, use `fork_turns: "none"`, `gpt-5.6-terra`, and `low` reasoning effort rather than inheriting the parent configuration; otherwise use the platform-designated fast or balanced evidence-collection model at low effort.
- Request evidence, boundaries, and uncertainty, not plans or conclusions; forbid further delegation, broad repository reconnaissance, tests, edits, and implementation work. Stop each sidecar once the requested facts and uncertainty are established.
- Keep the critical path local and continue non-overlapping work. Give the set a shared task-sized deadline capped at five minutes from the first spawn, then wait at most once for the remaining budget. Interrupt or cancel every unfinished sidecar when that wait returns or the deadline expires; do not busy-poll, extend, resume, or spawn replacements.
- Reconcile completed evidence locally. If a sidecar is unavailable or misses the deadline, continue with local evidence when feasible or name the missing fact; never treat the absent result as proof.
