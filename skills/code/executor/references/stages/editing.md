# Editing

- Make the smallest reliable change at the natural seam; match local style and architecture before adding patterns.
- For generic capability, prefer the standard library or current project capability, then existing dependencies, then an approved mature, stable, compatible library.
- Write custom generic code only when its total cost is lower and state why; avoid a dependency when small, clear local code is safer to maintain.
- When prior project knowledge matters, use it to narrow searches, then verify the pattern in the current repo.
- Prefer concise names that match local conventions and express role, intent, and domain meaning.
- Keep names short unless public scope or distance from context requires expansion; avoid vague, misleading, repetitive, or private abbreviations.
- Name booleans as domain predicates; use prefixes such as `is`, `has`, `can`, or `should` only when they fit, and avoid generic `flag`, `status`, `done`, or `check` names, double negatives, multi-purpose values, or positional modes.
- Keep comments concise and limited to non-obvious intent, constraints, edge cases, external contracts, or surprising tradeoffs; remove stale comments touched by the change.
- Add no speculative behavior or single-use abstraction. If implementation size exceeds the problem, simplify it.
- Do not improve adjacent code or formatting; remove only artifacts made unused by your change.
