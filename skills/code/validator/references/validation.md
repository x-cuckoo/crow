# Validation

## What to run

- Choose checks that prove the stated success criteria.
- Lint or type-check the touched surface when cheap.
- Run targeted tests if they already exist nearby.
- For bug fixes, prefer a test or command that reproduces the failure, then confirm it passes after the fix.
- For refactors, confirm behavior before and after when feasible.
- For scripts or services, validate startup or argument parsing if that changed.
- For routing or auth work, verify the request path and bypass conditions, not just the handler body.

## Pre-commit review

Run this after the executor completes the intended change set and before committing.

- Review the full diff, not each file in isolation.
- Check scope: every changed line should trace to the request; flag unrelated refactors, formatting churn, debug code, temporary files, secrets, or generated noise.
- Check behavior: the full path should be wired, not just locally edited.
- Check risk: boundaries, permissions, compatibility, data, rollback, privacy, and external contracts should not have obvious gaps.
- Check maintainability: comments, complexity, duplication, and abstractions should fit the local style and task size.
- Check naming specifically: changed names should be concise, clear, semantically precise, and appropriate to local conventions; flag vague names, misleading abbreviations, or names that need comments to explain them.
- Check evidence: targeted tests, lint, type checks, runtime checks, or a clear reason they were skipped.
- Check commit readiness: expected files are included, worktree state is understood, and the commit message can be a Conventional Commit message.

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
