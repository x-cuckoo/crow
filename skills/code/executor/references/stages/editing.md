# Editing

## Editing posture

- Change the smallest reliable set of files.
- Match local style and architecture before introducing new patterns.
- Reuse unchanged skill and reference content already loaded for the task; reload only after the source or material scope changes, or when a specific omitted constraint is needed.
- After reading a required entrypoint, load the smallest relevant section or reference instead of rereading full files.
- Prefer concise, clear, and semantically precise names over comments or clever abbreviations.
- Match local naming conventions; names should reflect role, intent, and domain meaning at the point of use.
- Keep names as short as clarity allows; expand them when scope, public API, or distance from context makes meaning unclear.
- Avoid vague names, private abbreviations, misleading type-only names, and names that merely repeat surrounding context.
- Name booleans as grammatical, domain-specific predicates: use prefixes such as `is`, `has`, `can`, or `should` only when they fit; avoid generic `flag`/`status`/`done`/`check` names, double negatives, multi-purpose booleans, and opaque positional boolean modes.
- Add concise comments only for non-obvious intent, constraints, edge cases, external contracts, or surprising tradeoffs.
- Do not add comments that merely restate code; update or remove stale comments touched by the current change.
- Extend behavior at the natural seam: route, mapper, adapter, schema, prop, config, or feature gate.
- Add no speculative behavior beyond what was asked.
- Avoid abstractions for single-use code.
- If the implementation becomes much larger than the problem, simplify before finishing.
- Do not improve adjacent code, comments, or formatting while editing.
- Remove only imports, variables, functions, or files made unused by your own change.

## Common implementation shapes

- Wire a backend field from schema to service to route.
- Gate a frontend behavior behind one additional condition.
- Extend an adapter or mapper with one new type or path.
- Get a new project working before polishing it.
