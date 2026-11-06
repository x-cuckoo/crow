# Validation

Read `references/behaviors/test-evidence.md` in `crow-code-executor` for the shared approval, setup, and evidence rules before selecting or running checks.

## What to run

- Execute only the approved scenarios and setup.
- Reuse completed validation while the relevant behavior, dependencies, environment, and tested assumptions remain unchanged. Before repeating or broadening it, name the change, failure, or unresolved concern that invalidates or exceeds the existing evidence, then check only the affected claims. Comment, formatting, and lint-suppression edits normally need only targeted static checks unless their effects can change behavior or test semantics. Honor explicit verification requests and required project checks.
- Prefer the cheapest targeted lint, type, test, or runtime check near the changed surface.
- For bugs, reproduce the failure before claiming the fix; for refactors, compare behavior before and after when feasible.
- For changed scripts or services, check startup or arguments; for routing or auth, check the request path and bypass conditions.
- Before expensive runtime validation, confirm the applicable target owner, command, surface, data route, and required services.
- If the canonical command is unavailable, resolve the project's runtime or package-manager path before bypassing wrappers. Use a lower-level runner only when project configuration, environment, setup, and test-selection semantics remain equivalent.
- Poll by condition with a deadline; retry an equivalent no-progress result at most once, then diagnose prerequisites or revise the proof path.

## Close-out standard

- State the user-visible change, verification command or skip reason, remaining risk or environment boundaries, and which behavior is verified versus assumed.
