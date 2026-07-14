# Handoff

- Summarize the current flow.
- Name the files that should change.
- State the intended behavior change, not just the code touch points.
- State what still needs validation during implementation.
- For non-trivial, cross-boundary, user-proposed, uncertain, or materially risky plans, invoke `crow-code-objector` before user review.
- Apply the objector result before user review: stop on `Block`, revise the plan for `Proceed with changes`, and proceed unchanged only for `Proceed as planned`.
- Present the plan for user review and wait for approval before execution starts.
- After any correction or change request, immediately present the full consolidated plan, not only the delta, and repeat review; only explicit approval of that version permits execution.
