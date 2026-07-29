# Backend API and Auth

- Map the route path and prefix, URL derivation, auth guard, request shape, service, and persistence model before editing.
- For open or no-auth endpoints, reuse the existing bypass pattern instead of inventing a new one.
- Confirm allowlists or middleware registration before assuming handler-level auth.
