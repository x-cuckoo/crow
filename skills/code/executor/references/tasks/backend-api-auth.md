# Backend API and Auth

- Map route path, base prefix, auth middleware or guard, request shape, service layer, and persistence model before editing.
- For open or no-auth endpoints, reuse the existing bypass pattern instead of inventing a new one.
- Verify where route prefixes are configured and how URLs are derived.
- Confirm allowlists or middleware registration before assuming handler-level auth.
