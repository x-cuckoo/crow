# Risk Review

## Isolation

- Use exactly one fresh, context-isolated reviewer whenever the capability is available.
- Give the reviewer only the proposed plan, requirements, relevant evidence, constraints, and verification expectations.
- Do not pass prior reasoning, preferred conclusions, confidence claims, hidden assumptions, or suggested objections.
- Do not allow the reviewer to delegate or create another review layer.
- Wait at most once with a bounded timeout appropriate to the tool; do not busy-poll.
- If no result returns, report independent review unavailable. Ask the user before a high-risk plan proceeds; for lower-risk plans, an internal adversarial pass may be used only when labeled as non-independent.

## Review Axes

- Design integrity: compare viable responsibility splits on cohesion, coupling, explicit boundaries, traceability, proportional complexity, invariants, state model, sequencing, transactional boundaries, and idempotency; challenge choices driven mainly by line count, diff size, or delivery speed, and prefer the safest reversible fit.
- Abstraction discipline: require every abstraction to isolate a real responsibility, boundary, or stable variation point and reduce total cognitive or change cost; reject compressed coupling and speculative, pass-through, or ornamental layers.
- Boundary and ownership: crossed repos, services, modules, trust boundaries, data flows, external callers, feature gates, and no-touch areas.
- Permissions and authority: authn/authz, role checks, service credentials, least privilege, elevation paths, tenant isolation, secrets, and sensitive data access.
- Blast radius and user impact: affected users, tenants, traffic paths, background jobs, queues, caches, rate limits, failure amplification, and degraded-mode behavior.
- Historical data compatibility: old rows, nullable fields, defaults, backfills, migrations, ordering, duplicate processing, partial writes, and mixed old/new data.
- API and client compatibility: old clients, versioned contracts, response shape changes, removed fields, changed semantics, backward compatibility, and multi-version rollout.
- Rollout and rollback: feature flags, staged release, revert path, downgrade safety, data rollback limits, migration reversibility, and kill switches.
- Observability and operations: logs, metrics, alerts, auditability, support diagnosis, runbooks, and whether failure can be detected quickly.
- Build versus reuse: compare standard or current project capability, installed dependencies, mature stable compatible libraries, and custom code on correctness, evidence quality, compatibility, maintenance, license, bundle and lockfile impact, security, and supply-chain cost; challenge the higher-cost option.
- Edge and abuse cases: concurrency, retries, timeouts, clock/timezone, locale, huge or empty inputs, malformed state, abuse paths, and denial-of-service angles.

## Evidence Standard

- Name the violated boundary, invariant, or compatibility expectation for every serious objection.
- Prefer evidence from code, schema, tests, runtime behavior, official docs, or comparable primary sources.
- If decision-critical evidence is missing, name it. Return `Block` only when safe or feasible execution cannot be established; otherwise bound the uncertainty with `Proceed with changes`.
- Do not accept "seems fine" when the plan changes permissions, data shape, external contracts, or irreversible state.
