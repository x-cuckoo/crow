# Finish

## Ready for validation

- Ensure the intended behavior is fully wired, not just locally edited.
- Leave imports, types, and touched call paths coherent.
- Treat consecutive refinements to the same uncommitted scope as one change set; do not hand off after each micro-edit.
- Make sure the next step is `crow-code-validator` review of the complete change set, not more discovery or a per-file review.
- Before any commit, run `crow-code-validator` for pre-commit review.

## Handoff standard

- State what changed in behavior terms.
- State which files carried the behavior change.
- State what still needs verification.
