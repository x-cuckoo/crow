# Risk Review

## Isolation

- Prefer a fresh, context-isolated subagent or independent reviewer when available.
- Give the reviewer only the proposed plan, requirements, relevant evidence, constraints, and verification expectations.
- Do not pass prior reasoning, preferred conclusions, confidence claims, hidden assumptions, or suggested objections.
- If isolation is unavailable, perform a manual isolation pass from the raw plan and evidence, and state that fallback.

## Review Axes

- Design integrity: responsibility splits, coupling, invariants, state model, sequencing, transactional boundaries, idempotency, and whether the design is the safest reversible shape for the requirement.
- Boundary and ownership: crossed repos, services, modules, trust boundaries, data flows, external callers, feature gates, and no-touch areas.
- Permissions and authority: authn/authz, role checks, service credentials, least privilege, elevation paths, tenant isolation, secrets, and sensitive data access.
- Blast radius and user impact: affected users, tenants, traffic paths, background jobs, queues, caches, rate limits, failure amplification, and degraded-mode behavior.
- Historical data compatibility: old rows, nullable fields, defaults, backfills, migrations, ordering, duplicate processing, partial writes, and mixed old/new data.
- API and client compatibility: old clients, versioned contracts, response shape changes, removed fields, changed semantics, backward compatibility, and multi-version rollout.
- Rollout and rollback: feature flags, staged release, revert path, downgrade safety, data rollback limits, migration reversibility, and kill switches.
- Observability and operations: logs, metrics, alerts, auditability, support diagnosis, runbooks, and whether failure can be detected quickly.
- Dependency and supply-chain risk: new packages, version compatibility, current project support, lockfile impact, maintainer health, security advisories, and transitive risk.
- Edge and abuse cases: concurrency, retries, timeouts, clock/timezone, locale, huge or empty inputs, malformed state, abuse paths, and denial-of-service angles.

## Evidence Standard

- Name the violated boundary, invariant, or compatibility expectation for every serious objection.
- Prefer evidence from code, schema, tests, runtime behavior, official docs, or comparable primary sources.
- If decision-critical evidence is missing, name it. Return `Block` only when safe or feasible execution cannot be established; otherwise bound the uncertainty with `Proceed with changes`.
- Do not accept "seems fine" when the plan changes permissions, data shape, external contracts, or irreversible state.
