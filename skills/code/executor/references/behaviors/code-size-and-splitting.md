# Code Size and Splitting

Follow project linter and repository limits. Otherwise judge boundaries by comprehension and change cost, not fixed line or nesting counts.

- Inspect mixed responsibilities, hidden dependencies, shared mutable state, and repeated navigation when deciding whether to split or combine code. Length alone does not establish a need to refactor.
- Organize around shared rules, state, and design decisions so changes to the same knowledge stay local. Execution phases alone are not a reason to split; policy/mechanism or I/O/domain boundaries help when they separate knowledge and responsibilities.
- Split or combine when it reduces what readers must understand together or how many places must change. Preserve a cohesive linear flow when extraction would merely scatter it.
- Use guard clauses when they clarify control flow. Give extracted units intent-revealing names, cohesive contracts, and minimal explicit inputs and outputs; keep the parent flow traceable. Count call order, state assumptions, and failure behavior as part of the interface callers must understand.
- Move owned tests, types, documentation, and invariants with a file-level split when that keeps the boundary coherent.
- If extraction requires many mutable locals, parameters, or a context bag, reconsider the seam instead of hiding coupling.
- Do not create pass-through helpers without an independent responsibility, arbitrary one-function files, or generic utility dumping grounds.
- Keep refactoring within the current change's scope. Use a natural boundary exposed by that change; mention unrelated legacy debt separately.
