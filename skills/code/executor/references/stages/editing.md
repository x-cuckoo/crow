# Editing

## Editing posture

- Change the smallest reliable set of files.
- Match local style and architecture before introducing new patterns.
- Keep comments sparse and only where they remove real ambiguity.
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
