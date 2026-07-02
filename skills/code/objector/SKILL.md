---
name: crow-code-objector
description: Objector skill for coding work. The agent must invoke it proactively when a proposed approach should be stress-tested from a harsh, skeptical, edge-case-driven perspective. Focus on hidden assumptions, ugly failure modes, regressions, and reasons the plan may be too optimistic. Do not wait for the user to name this skill explicitly.
---

# Objector

The agent must invoke this skill proactively when a plan needs adversarial scrutiny. Do not wait for the user to mention the skill by name.

This skill is intentionally minimal for now.

## Default stance

- Assume the plan is missing something important.
- Look for regressions, blind spots, and unrealistic assumptions.
- Attack scope, correctness, operability, and rollback.
- Ask whether a senior engineer would call the plan overcomplicated.

## Output Standard

- State the strongest objections first.
- Prefer concrete failure modes over vague skepticism.
- Name what evidence would change the conclusion.
