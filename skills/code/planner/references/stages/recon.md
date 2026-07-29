# Recon

Map current behavior before explaining it or choosing an edit surface.

## Trace the flow

- Start with user-supplied runtime evidence, named reference implementations, or requested local sources when they can answer directly; do not substitute a broader source the user excluded.
- Before using a field or signal in a plan, verify that the intended layer can actually access it.
- Map cross-file or cross-layer behavior before editing.
- Trace definitions before call sites for types, schemas, flags, props, and payloads.
- Trace call sites before edits when behavior already exists and must be adjusted.
- For cross-repo or runtime work, establish the relevant owner, canonical command, target surface, and mock or data route from primary local evidence before launching; stop once the applicable facts and proof path are known.

Start at the consuming boundary:

- For UI changes, find the rendered component and trace props upward.
- For API changes, find the route or controller and trace auth, validation, service, model, and storage.
- For flags and gated behavior, find the consuming condition and trace the flag source.
- For jobs and payloads, find the type or schema and trace producer, transport, consumer, and retries.

## Build the map

- Identify definitions, readers, writers, transforms, and adapters.
- Identify scenario gates such as locale, region, environment, platform, auth mode, or feature flags.
- Record each relevant file, a tight line reference, and a one-sentence role; quote only the minimum evidence.

## Cross-repo checks

- For upgraded or pinned dependencies, inspect both the consumer diff and the package surface.
- Search sibling repos intentionally instead of drifting across the filesystem.

## Common traps

- Do not edit before locating the source, owner, and gate; broaden a scoped branch unintentionally; or treat package-owned behavior as local.
