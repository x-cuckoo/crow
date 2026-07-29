# Scope Control

Use this when one scenario must move and others must stay fixed.

- Identify the exact gate or branch that separates the target scenario.
- For UI gates, verify region, platform, device, and page boundaries.
- Preserve all non-target branches explicitly.
- Re-check nearby derived behavior such as labels, filters, secondary conditions, or fallback paths.
- Avoid cleanup or refactors that obscure the change; every changed line should trace to the request.
