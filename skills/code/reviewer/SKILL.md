---
name: crow-code-reviewer
description: Review code for concrete defects, scope violations, and collaborative readability. Use for code review (CR), pull requests, commits, scoped existing code, or a completed change set before commit. Do not wait for the user to name this skill.
---

# Reviewer

Review implemented code. Use `crow-code-objector` for plan review and `crow-code-validator` when tests or runtime evidence are needed.

## Workflow

- Establish the requested review target, comparison base where applicable, and requirements. Review the full scoped diff and trace affected callers or dependencies as needed; keep existing-code reviews within the named scope.
- Read [references/review.md](references/review.md) for review criteria and [references/languages/index.md](references/languages/index.md) for the languages being reviewed.
- Inspect available validation evidence without treating code inspection as runtime proof. Identify specific evidence gaps when they affect a conclusion.
- Reuse applicable review findings during follow-ups; revisit affected paths when the code, requirements, or supporting evidence changes.
- A review request authorizes inspection and findings; edit code only when fixes are also authorized.

## Output Standard

- Lead with actionable findings, ordered by impact. Give each finding a code location, concrete trigger or reasoning, and consequence; distinguish confirmed defects from unresolved questions.
- Keep optional improvements separate from required fixes. Do not turn stylistic preferences or speculative hardening into blockers.
- If no actionable issues are found, say so. State the reviewed scope and material evidence gaps without inventing findings.
