# Test Evidence

Use this when adding, changing, or choosing tests or verification. A test is worthwhile only when it provides effective, feasible, and bounded evidence.

## Approval Gate

- Before creating, changing, selecting for execution, or running a behavioral test or starting its runtime environment, present a test plan and obtain explicit user approval. An approved implementation plan containing the complete test plan satisfies this gate.
- Without approval, only inspect tests and environments. If runtime validation was explicitly skipped, perform the agreed static review and report the gap instead of proposing it again.
- Keep the plan proportional to risk: claim, setup and command, expected observable, and evidence boundary; expand dependency, data isolation, side-effect, cleanup, deadline, and retry details only where material.
- Re-submit the plan when scenarios, test level, dependency, data scope, mutation behavior, expected observable, or cleanup changes. A command-path correction that preserves the approved claim and setup may proceed.
- Cheap side-effect-free static checks such as diff checks, type checks, lint, and formatting do not require this approval.

## Evidence Design

- For each non-trivial test or group, name the behavior or risk and representative failure it proves; do not add coverage-only or ceremonial tests.
- Use unit tests for owned logic, real integration tests when one boundary's semantics are the claim, and real E2E when a user-visible workflow or coordination across multiple boundaries is the claim. Choose the highest-value feasible evidence, not a fixed E2E ratio.
- Prefer observable behavior or state over implementation interactions; verify interactions only when the interaction itself is the contract.
- Use mocks, stubs, and spies only to prove encoded caller behavior or interaction contracts. They do not prove unexercised external runtime semantics.
- A fake or emulator proves only explicitly named semantics it demonstrably models; add scoped conformance checks when drift is a material risk.
- When material correctness depends on external protocol, persistence, transaction, timing, concurrency, browser, or service semantics, prefer a controlled disposable real dependency if project support or the benefit justifies its cost.
- Use project-supported tooling with a pinned, production-representative version and relevant configuration; keep state isolated and setup and cleanup deterministic. Failed cleanup makes the result incomplete.
- Production or shared-environment mutation requires separate explicit approval and is not ordinary test evidence.
- Treat real-dependency results as proof only for the exercised version, configuration, and path, not untested production topology or operational behavior.
- If required proof is infeasible, ask the user to provide the environment, narrow the claim, accept it as unverified, or defer the change. Do not replace it with mocks and claim success.
