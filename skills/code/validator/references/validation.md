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

## Pre-commit review

Run this after the executor completes the intended change set and before committing.

- Review the full diff, not each file in isolation.
- Check scope: every changed line should be necessary for the agreed task. Flag unapproved defensive behavior or restrictions, even if beneficial, alongside unrelated refactors, formatting churn, debug code, temporary files, secrets, or generated noise.
- Check behavior: verify the full path. For stateful behavior, check ownership and the set/read/clear lifecycle, including repeated entry, stale data, and source-specific state.
- Check replacement contracts: verify only agreed behavior changed, including data transforms and wrappers; completion and errors reach downstream callers; retries, side effects, observability, and user-visible output remain consistent with the plan.
- Check design quality: when multiple paths are viable, the chosen path should optimize correctness, cohesion, coupling, boundaries, traceability, testability, maintenance, cognitive load, and proportional complexity; line count, diff size, and delivery speed are only tie-breakers.
- Check abstraction: every layer must isolate a real responsibility, boundary, or stable variation point and reduce total cost. Flag compressed coupling, pass-through layers, unsupported extension points, and abstraction for appearance.
- Check logical size and splitting: follow project limits first. Otherwise use roughly 50 and 100 logical function lines, more than two nested control-flow levels, and roughly 500 and 800 lines in behavior-bearing production files as increasingly strong review prompts, never automatic violations. Require a cohesive split-or-keep rationale; flag overloaded units, fragmentation, and unrelated legacy cleanup.
- Check reuse: prefer supported mature libraries when they improve total quality, but reject dependencies whose compatibility, maintenance, size, or supply-chain cost exceeds their benefit.
- Check repository and deployment ownership: reject unapproved imports, runtime paths, install-time coupling, or asset reads from sibling checkouts, reference repositories, and user-specific absolute paths. Every dependency must resolve from the supported package, repository, build, and deployment environment.
- Check impact and compatibility: keep changes within intended scenarios and preserve APIs, data shapes, migrations, flags, old clients, historical data, and existing behavior unless explicitly changed.
- Check risk: inspect boundaries, permissions, data, rollback, privacy, external contracts, and operational failure modes.
- Check maintainability and naming: complexity, duplication, comments, abstractions, and changed names should fit local style; names must be concise, precise, and domain-meaningful. Booleans should read as predicates without generic `flag`, `status`, `done`, or `check` names, double negatives, multi-purpose values, or positional modes.
- Check variable semantics: type compatibility is insufficient; assigned values must fit the variable's named role and scope. Flag hidden second meanings or implicit sentinel states introduced only to minimize code or diff size.
- Check evidence: conclusions must not exceed the test setup; state the tested boundary, relevant checks, and residual production differences.
- Check disclosure: sanitize command evidence and final summaries; do not expose secrets, credentials, private URLs, or sensitive identifiers unless the exact value is required and safe to share.
- Check commit readiness: expected files are included, worktree state is understood, and the commit message can be a Conventional Commit message.

## Close-out standard

- State the user-visible change, verification command or skip reason, remaining risk or environment boundaries, and which behavior is verified versus assumed.
