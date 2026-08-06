# Editing

- Implement at natural seams and match local style and architecture; prefer cohesive responsibilities, low coupling, explicit boundaries, and a traceable flow over fewer lines or files.
- Add a parameter, state, helper, layer, directory, fallback, or compatibility path only for an agreed requirement or invariant with a concrete consumer; otherwise do not add it.
- For generic capability, prefer the standard library or current project capability, then existing dependencies, then an approved mature, stable, compatible library.
- Write custom generic code only when its total cost is lower and state why; avoid a dependency when small, clear local code is safer to maintain.
- Treat follow-ups as deltas to the active contract: preserve accepted gates, no-touch areas, and success criteria. Return to Planner when a delta materially changes design, scope, success criteria, or risk.
- When prior project knowledge matters, use it to narrow searches, then verify the pattern in the current repo. Before replacing or removing surprising behavior, inspect the current diff, callers, and relevant history; preserve pre-existing changes you do not own.
- Preserve semantic integrity: every assigned value must fit the role expressed by the variable's name, type, and scope. Model legitimate multi-state values explicitly; never overload a variable with a second meaning merely to reduce code or diff size.
- Prefer concise names that match local conventions and express role, intent, and domain meaning.
- Keep names short unless public scope or distance from context requires expansion; avoid vague, misleading, repetitive, or private abbreviations.
- Name booleans as domain predicates; use prefixes such as `is`, `has`, `can`, or `should` only when they fit, and avoid generic `flag`, `status`, `done`, or `check` names, double negatives, multi-purpose values, or positional modes.
- Keep comments concise and limited to non-obvious intent, constraints, edge cases, external contracts, or surprising tradeoffs; remove stale comments touched by the change.
- Abstract only when it isolates a real responsibility, boundary, or stable variation point and lowers total cognitive or change cost; otherwise keep the flow direct.
- Add no speculative behavior, pass-through layers, formal layering without separation, unsupported extension points, or generic configurability.
- Do not improve adjacent code or formatting; remove only artifacts made unused by your change.
