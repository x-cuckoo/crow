# Editing

- Implement at natural seams and match local style and architecture; prefer cohesive responsibilities, low coupling, explicit boundaries, and a traceable flow over fewer lines or files.
- Add structure or behavior only as needed for the agreed task and its affected existing contracts. Do not silently add guards, filters, limits, fallbacks, or compatibility paths merely to be safer; propose out-of-scope improvements and wait for acceptance before implementing them.
- For generic capability, prefer the standard library or current project capability, then existing dependencies, then an approved mature, stable, compatible library.
- Write custom generic code only when its total cost is lower and state why; avoid a dependency when small, clear local code is safer to maintain.
- Treat follow-ups as deltas to the active contract: preserve accepted gates, no-touch areas, and success criteria. If the target changes, resolve its path and owner and re-establish the applicable change before editing; do not transfer incidental edits from the previous target. Return to Planner when a delta materially changes design, scope, success criteria, or risk.
- When prior project knowledge matters, use it to narrow searches, then verify the pattern in the current repo. Before replacing or removing surprising behavior, inspect the current diff, callers, and relevant history; preserve pre-existing changes you do not own.
- Do not introduce imports, runtime paths, install-time coupling, or asset reads from a sibling checkout, user-specific absolute path, or reference repository unless the latest approved plan names that dependency and the supported build and deployment environment provides it. Adapt the behavior locally or use an approved package-owned surface.
- When replacing a dependency or pipeline stage, implement only the agreed behavioral differences and preserve upstream and downstream contracts. Adapt reference-specific policies or defaults to the task; carry completion and errors through to downstream effects rather than stopping at the new producer's return value.
- Preserve semantic integrity: every assigned value must fit the role expressed by the variable's name, type, and scope. Model legitimate multi-state values explicitly; never overload a variable with a second meaning merely to reduce code or diff size.
- Prefer concise names that match local conventions and express role, intent, and domain meaning.
- Keep names short unless public scope or distance from context requires expansion; avoid vague, misleading, repetitive, or private abbreviations.
- Name booleans as domain predicates; use prefixes such as `is`, `has`, `can`, or `should` only when they fit, and avoid generic `flag`, `status`, `done`, or `check` names, double negatives, multi-purpose values, or positional modes.
- Keep comments concise and limited to non-obvious intent, constraints, edge cases, external contracts, or surprising tradeoffs; remove stale comments touched by the change.
- Abstract only when it isolates a real responsibility, boundary, or stable variation point and lowers total cognitive or change cost; otherwise keep the flow direct.
- Add no speculative behavior, pass-through layers, formal layering without separation, unsupported extension points, or generic configurability.
- Do not improve adjacent code or formatting; remove only artifacts made unused by your change.
