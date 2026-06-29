# Planning

Use this loop unless the task is tiny.

## 1. Frame the task

- Identify the active repo, package, or service boundary.
- Restate the task as a concrete target: field, API, component, flag, schema, dependency, script, or workflow.
- Preserve explicit constraints and no-touch areas.

## 2. Recon before mutation

- If behavior spans files or layers, map the current flow first.
- Trace definitions before call sites for types, schemas, flags, props, and payloads.
- Trace call sites before edits when behavior already exists and must be adjusted.
- Use a read-only side investigation when a code map will materially de-risk the edit.

## 3. Decide the edit surface

- Prefer the smallest coherent change that matches the current architecture.
- If multiple repos are involved, identify which repo owns the behavior and which repos only adapt or consume it.
- If behavior is gated, verify where the gate originates and which scenarios must not move.

## 4. Hand off cleanly

- Summarize the current flow.
- Name the files that should change.
- State what still needs validation during implementation.
