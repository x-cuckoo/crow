# Test Planning

- Honor an explicit runtime-validation skip: plan only the agreed static review and state the evidence gap. Otherwise, list proposed behavioral tests before plan approval; without an approved test plan, only read-only discovery of tests and environments is allowed.
- Keep each test entry proportional to risk: state the claim, setup and command, expected observable, and evidence boundary. Expand dependency, data isolation, side-effect, cleanup, deadline, and retry details where they affect safety, cost, or validity; omit irrelevant checklist fields.
- Use unit tests for owned logic, real integration tests when one boundary's semantics are the claim, and real E2E when a user-visible workflow or coordination across multiple boundaries is the claim. Choose the highest-value feasible evidence, not a fixed E2E ratio.
- For material protocol, persistence, transaction, timing, concurrency, browser, or service behavior, prefer a controlled production-representative dependency over mocks or in-memory substitutes.
- Use controlled isolated data and deterministic cleanup. Production or shared-environment mutation requires separate explicit approval and is not ordinary test evidence.
- If required proof is infeasible, ask the user to provide the environment, narrow the claim, accept it as unverified, or defer the change; do not silently substitute mocks.
- Re-review the plan when scenarios, level, dependency, data scope, mutation behavior, expected observable, or cleanup changes. A command-path correction that preserves the approved claim and setup does not require reapproval.
- Cheap side-effect-free static checks such as diff checks, type checks, lint, and formatting are outside this approval gate.
