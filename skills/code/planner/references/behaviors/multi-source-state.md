# Multi-Source and Async State

- State the business invariant independently of transport or source; source identity is business meaning only when the contract makes it so.
- Map sources, readers, writers, transforms, priority, fallback, and lifecycle events such as initialize, update, switch, clear, and restore.
- For asynchronous work, define request identity and freshness before applying a result; reject stale responses.
- Update contractually coupled fields together while preserving explicitly independent writes.
- Define the minimum necessary state and transition rules, then check them against representative scenarios and counterexamples; use a compact table when helpful. Add separate handling only for required differences the shared rules cannot express.
- Derive decisions from domain conditions, not proxy branches or source labels; cover missing, partial, and conflicting higher-priority data.
