# Repo Recon

Read this when the user asks where behavior comes from, how it is wired, or why only one branch is affected.

## Start at the boundary

- For UI changes: find the rendered component first, then trace props upward.
- For API changes: find the route or controller first, then trace auth, validation, service, model, and storage.
- For flags and gated behavior: find the consuming condition first, then trace the flag source.
- For jobs and payloads: find the type or schema first, then trace producer, transport, consumer, and retry logic.

## Build a code map

- Identify definition sites.
- Identify readers and writers.
- Identify transforms and adapters between layers.
- Identify scenario gates such as locale, region, environment, platform, auth mode, or feature flags.

## Evidence format

- File path.
- Tight line reference if useful.
- One sentence on the file's role in the flow.
- Only quote or paraphrase the minimal snippet needed.

## Multi-repo tracing

- Check whether the active repo owns the behavior or only consumes a package.
- If a dependency was upgraded or pinned, inspect both the consumer diff and the package surface.
- If sibling repos are involved, search them intentionally instead of drifting across the filesystem.

## Common traps

- Editing before understanding the true source of a field or gate.
- Missing sibling package ownership.
- Moving multiple scenario branches together when only one should change.
- Treating dependency upgrades as local-only changes when the real behavior lives in the package.
