# Code Size and Splitting

Use project linter and repository limits first. Without them, treat the numbers below as approximate review prompts, never correctness gates or refactoring mandates. Prefer tool-reported metrics; otherwise assess non-blank, non-comment executable structure approximately and do not claim an exact count.

## Review Triggers

- Around 50 logical lines, more than two nested branch or loop levels, or multiple branches and state transitions: inspect a function or method for mixed responsibilities, phases, or abstraction levels.
- Around 100 logical lines: make an explicit split-or-keep decision from cohesion, complexity, and natural seams. A cohesive linear flow may remain intact.
- Around 500 lines in a behavior-bearing production file or module: inspect ownership before adding another responsibility. Around 800, put new non-trivial responsibility in a cohesive module unless splitting would make the architecture worse.
- Apply project-specific judgment to generated or vendored code, declarative tables, configuration, schemas, fixtures, snapshots, tests, and dispatch or registration code. Do not game counts with formatting or comments.

## Split by Structure

- Let complexity, cohesion, change reasons, state, branching, nesting, and navigation cost outweigh raw length.
- Split around a distinct responsibility, phase, state transition, policy and mechanism boundary, or I/O and domain boundary.
- Use guard clauses when they clarify control flow. Give extracted units intent-revealing names, cohesive contracts, and minimal explicit inputs and outputs; keep the parent flow traceable at one abstraction level.
- Move owned tests, types, documentation, and invariants with a file-level split when that keeps the boundary coherent.
- If extraction requires many mutable locals, parameters, or a context bag, reconsider the seam instead of hiding coupling.
- Do not create pass-through helpers without an independent responsibility, arbitrary one-function files, generic utility dumping grounds, or splits that hide a simple linear sequence.
- Do not refactor unchanged legacy code solely because it exceeds a trigger. Use a natural boundary exposed by the current change; otherwise stay surgical and mention the debt separately.
