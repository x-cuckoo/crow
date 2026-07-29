# Test Evidence

Use this when adding, changing, or choosing tests or verification. A test is worthwhile only when it provides effective, feasible, and bounded evidence.

- For each non-trivial test or group, name the behavior or risk and representative failure it proves; do not add coverage-only or ceremonial tests.
- Choose the cheapest setup that can prove the claim; keep owned business logic in fast unit tests.
- Prefer observable behavior or state over implementation interactions; verify interactions only when the interaction itself is the contract.
- Use mocks, stubs, and spies only to prove encoded caller behavior or interaction contracts. They do not prove unexercised external runtime semantics.
- A fake or emulator proves only explicitly named semantics it demonstrably models; add scoped conformance checks when drift is a material risk.
- When material correctness depends on external protocol, persistence, transaction, timing, concurrency, or failure semantics, prefer a controlled disposable real dependency if project support or the benefit justifies its cost.
- Use project-supported tooling with a pinned, production-representative version and relevant configuration; keep state isolated and setup and cleanup deterministic.
- Treat real-dependency results as proof only for the exercised version, configuration, and path, not untested production topology or operational behavior.
- If the required environment cannot be established, run useful lower-level checks and report that runtime or integration criterion as blocked or unverified. Do not replace it with mocks and claim success.
