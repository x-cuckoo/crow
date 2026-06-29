# Implementation

## Editing posture

- Change the smallest reliable set of files.
- Match local style and architecture before introducing new patterns.
- Keep comments sparse and only where they remove real ambiguity.
- If the request is scoped to one scenario, preserve all other scenarios explicitly.

## Implementation shapes

- Wire a backend field from schema to service to route.
- Gate a frontend behavior behind one additional condition.
- Extend an adapter or mapper with one new type or path.
- Get a new project working before polishing it.

## Anti-patterns

- Do not abstract a one-off flow unless the pattern already repeats.
- Do not widen scope from a requested fix into opportunistic refactoring.
- Do not add broad documentation when the task is a surgical code change.
