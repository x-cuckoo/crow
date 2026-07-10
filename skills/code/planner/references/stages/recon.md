# Recon

Use this when the task is to explain where behavior comes from, how it is wired, or why only one branch is affected.

## Trace the flow

- If behavior spans files or layers, map the current flow before editing.
- Trace definitions before call sites for types, schemas, flags, props, and payloads.
- Trace call sites before edits when behavior already exists and must be adjusted.
- Use a read-only side investigation when a code map will materially de-risk the edit.

Start at the consuming boundary:

- For UI changes, find the rendered component and trace props upward.
- For API changes, find the route or controller and trace auth, validation, service, model, and storage.
- For flags and gated behavior, find the consuming condition and trace the flag source.
- For jobs and payloads, find the type or schema and trace producer, transport, consumer, and retries.

## Build the map

- Identify definitions, readers, writers, transforms, and adapters.
- Identify scenario gates such as locale, region, environment, platform, auth mode, or feature flags.
- Record each relevant file, a tight line reference when useful, and one sentence on its role.
- Quote or paraphrase only the minimum evidence needed.

## Cross-repo checks

- Identify which repo owns the behavior and which repos only adapt or consume it.
- For upgraded or pinned dependencies, inspect both the consumer diff and the package surface.
- Search sibling repos intentionally instead of drifting across the filesystem.

## Common traps

- Editing before locating the true source of a field or gate.
- Missing sibling package ownership.
- Moving multiple scenario branches when only one should change.
- Treating a dependency change as local when its behavior lives in the package.
