# Domain Playbooks

## Frontend gates

- Start at the UI behavior that must change.
- Trace the controlling prop, store field, or config value backward.
- Confirm region, platform, device, and page boundaries before editing.
- Change the narrowest gating condition first.
- Re-check related filters, labels, and derived UI under the same gate.

## Backend API and auth

- Map route path, base prefix, auth middleware or guard, request shape, service layer, and persistence model before editing.
- For open or no-auth endpoints, reuse the existing bypass pattern instead of inventing a new one.
- Verify where route prefixes are configured and how URLs are derived.
- Confirm allowlists or middleware registration before assuming handler-level auth.

## Bootstrap and scaffolding

- Get package manager, lint, format, types, entrypoint, and run mode working first.
- For local services or scripts, wire restart behavior and operational config early if the task asks for it.
- Prefer proven defaults over speculative architecture.

## Knowledge-first changes

- If prior architecture or conventions matter, read the existing project knowledge source before editing.
- Use prior knowledge to narrow search terms, not to skip code verification.
