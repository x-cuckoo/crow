# Validation

## What to run

- Match checks to success criteria; for each non-trivial test or group, identify the claim and a representative failure it can detect.
- Prefer the cheapest targeted lint, type, test, or runtime check near the changed surface.
- For bugs, reproduce the failure before claiming the fix; for refactors, compare behavior before and after when feasible.
- For changed scripts or services, check startup or arguments; for routing or auth, check the request path and bypass conditions.
- Before expensive runtime validation, confirm the applicable target owner, command, surface, data route, and required services.
- Accept mocks, stubs, fakes, and emulators only within the semantics they explicitly exercise; they cannot prove unexercised external runtime behavior.
- When material correctness depends on external semantics, require a controlled real dependency or scoped conformance evidence proportional to the risk.
- If the required environment is unavailable, run useful lower-level checks but report only that criterion as blocked or unverified.
- Poll by condition with a deadline; retry an equivalent no-progress result at most once, then diagnose prerequisites or revise the proof path.

## Pre-commit review

Run this after the executor completes the intended change set and before committing.

- Review the full diff, not each file in isolation.
- Check scope: every changed line should trace to the request; flag unrelated refactors, formatting churn, debug code, temporary files, secrets, or generated noise.
- Check behavior: verify the full path. For stateful behavior, check ownership and the set/read/clear lifecycle, including repeated entry, stale data, and source-specific state.
- Check simplicity and reuse: prefer smaller, clearer existing seams or supported mature libraries, but reject dependencies whose compatibility, maintenance, size, or supply-chain cost exceeds their benefit.
- Check impact and compatibility: keep changes within intended scenarios and preserve APIs, data shapes, migrations, flags, old clients, historical data, and existing behavior unless explicitly changed.
- Check risk: inspect boundaries, permissions, data, rollback, privacy, external contracts, and operational failure modes.
- Check maintainability and naming: complexity, duplication, comments, abstractions, and changed names should fit local style; names must be concise, precise, and domain-meaningful. Booleans should read as predicates without generic `flag`, `status`, `done`, or `check` names, double negatives, multi-purpose values, or positional modes.
- Check variable semantics: type compatibility is insufficient; assigned values must fit the variable's named role and scope. Flag hidden second meanings or implicit sentinel states introduced only to minimize code or diff size.
- Check evidence: conclusions must not exceed the test setup; state the tested boundary, relevant checks, and residual production differences.
- Check disclosure: sanitize command evidence and final summaries; do not expose secrets, credentials, private URLs, or sensitive identifiers unless the exact value is required and safe to share.
- Check commit readiness: expected files are included, worktree state is understood, and the commit message can be a Conventional Commit message.

## Close-out standard

- State the user-visible change, verification command or skip reason, remaining risk or environment boundaries, and which behavior is verified versus assumed.
