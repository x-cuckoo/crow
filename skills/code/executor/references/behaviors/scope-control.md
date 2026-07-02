# Scope Control

Use this when one scenario must move and others must stay fixed.

- Identify the exact gate or branch that separates the target scenario.
- Preserve all non-target branches explicitly.
- Re-check nearby derived behavior such as labels, filters, secondary conditions, or fallback paths.
- Avoid cleanup or refactor work that obscures the scoped change.
- Every changed line should trace directly to the requested behavior.
