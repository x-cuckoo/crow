# Test Planning

- Before plan approval, list every proposed behavioral test or test group. Read-only discovery of existing tests and environments is allowed; without an approved test plan, no test may be created, changed, selected for execution, or run.
- For each entry, state the claim or risk, test level and rationale, environment and real dependencies, fixture ownership and isolation, preconditions, input and action, expected observable output or state, representative failure, command, deadline and retry policy, side effects and cleanup, and evidence boundary.
- Use unit tests for owned logic, real integration tests when one boundary's semantics are the claim, and real E2E when a user-visible workflow or coordination across multiple boundaries is the claim. Choose the highest-value feasible evidence, not a fixed E2E ratio.
- For material protocol, persistence, transaction, timing, concurrency, browser, or service behavior, prefer a controlled production-representative dependency over mocks or in-memory substitutes.
- Use controlled isolated data and deterministic cleanup. Production or shared-environment mutation requires separate explicit approval and is not ordinary test evidence.
- If required proof is infeasible, ask the user to provide the environment, narrow the claim, accept it as unverified, or defer the change; do not silently substitute mocks.
- Re-review the plan when scenarios, level, dependency, data scope, mutation behavior, expected observable, or cleanup changes. A command-path correction that preserves the approved claim and setup does not require reapproval.
- Cheap side-effect-free static checks such as diff checks, type checks, lint, and formatting are outside this approval gate.
