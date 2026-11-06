# Validation

## What to run

- Honor an explicit runtime-validation skip with the agreed static review and an evidence-gap report. Otherwise, require an approved test plan before behavioral tests or runtime setup; an approved implementation plan containing it is sufficient. Without approval, only inspect tests and environments.
- Execute only the approved scenarios and setup. Re-submit changes to test level, dependency, data scope, mutation behavior, expected observable, cleanup, or scenarios; command-path corrections that preserve the claim and setup may proceed.
- Cheap side-effect-free static checks such as diff checks, type checks, lint, and formatting remain automatic.
- Match checks to success criteria; for each non-trivial test or group, identify the claim and a representative failure it can detect.
- Reuse completed validation while the relevant behavior, dependencies, environment, and tested assumptions remain unchanged. Before repeating or broadening it, name the change, failure, or unresolved concern that invalidates or exceeds the existing evidence, then check only the affected claims. Comment, formatting, and lint-suppression edits normally need only targeted static checks unless their effects can change behavior or test semantics. Honor explicit verification requests and required project checks.
- Prefer the cheapest targeted lint, type, test, or runtime check near the changed surface.
- For bugs, reproduce the failure before claiming the fix; for refactors, compare behavior before and after when feasible.
- For changed scripts or services, check startup or arguments; for routing or auth, check the request path and bypass conditions.
- Before expensive runtime validation, confirm the applicable target owner, command, surface, data route, and required services.
- If the canonical command is unavailable, resolve the project's runtime or package-manager path before bypassing wrappers. Use a lower-level runner only when project configuration, environment, setup, and test-selection semantics remain equivalent.
- Accept mocks, stubs, fakes, and emulators only within the semantics they explicitly exercise; they cannot prove unexercised external runtime behavior.
- When material correctness depends on external semantics, require a controlled real dependency or scoped conformance evidence proportional to the risk.
- If the required environment is unavailable, run useful lower-level checks but report only that criterion as blocked or unverified. Ask the user to provide the environment, narrow the claim, accept it as unverified, or defer the change; do not substitute mocks.
- Treat failed or unverified cleanup as incomplete validation, not a pass.
- Poll by condition with a deadline; retry an equivalent no-progress result at most once, then diagnose prerequisites or revise the proof path.

## Close-out standard

- State the user-visible change, verification command or skip reason, remaining risk or environment boundaries, and which behavior is verified versus assumed.
