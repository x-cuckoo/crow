# Validation

## What to run

- Choose checks that prove the stated success criteria.
- Lint or type-check the touched surface when cheap.
- Run targeted tests if they already exist nearby.
- For bug fixes, prefer a test or command that reproduces the failure, then confirm it passes after the fix.
- For refactors, confirm behavior before and after when feasible.
- For scripts or services, validate startup or argument parsing if that changed.
- For routing or auth work, verify the request path and bypass conditions, not just the handler body.

## When full runtime validation is expensive

- Validate the relevant code path.
- Validate imports and types.
- Validate nearby tests.
- Say clearly what you did not run.

## Close-out standard

- Explain the user-visible behavior change.
- Mention the verification command or reason it was skipped.
- Mention remaining risk boundaries, dependencies, flags, or environment requirements.
- Distinguish verified behavior from assumed behavior.
