# Handoff

- Summarize the current flow.
- Name the files that should change.
- State the intended behavior change, not just the code touch points.
- State what still needs validation during implementation.
- For non-trivial, cross-boundary, document-driven, user-proposed, or risky plans, invoke `crow-code-objector` before user review.
- Apply the objector result before user review: stop on `Block`, revise the plan for `Proceed with changes`, and proceed unchanged only for `Proceed as planned`.
- Present the plan for user review and wait for approval before execution starts.
- If the user gives corrections or change requests, update the plan and repeat review; do not treat feedback as execution approval.
