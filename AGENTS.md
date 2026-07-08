# Agent Rules

- Commit messages must use Conventional Commits format, for example: `feat: add planner skill`.
- Do not assume the user's proposed solution is the best solution by default.
- If you find a better or more robust approach, propose it proactively and explain the tradeoff.
- If you observe that a local skill should be improved, do not wait for the user to ask. Detect it proactively, explain the intended optimization, and ask whether to apply it.
- For non-trivial coding tasks, state assumptions, tradeoffs, and success criteria before implementing.
- Think from the actual codebase and task constraints before accepting a proposed design.
- During planning, if anything remains ambiguous, confusing, or directionally uncertain, ask the user proactively for the decision instead of guessing.
- After creating an implementation plan, present it for user review and wait for approval before executing it.
- Prefer the simplest complete solution. Do not add speculative features, abstractions, configurability, or impossible-case handling.
- Make surgical changes only. Every changed line should trace directly to the user's request; clean up only artifacts introduced by your own change.
- Define how the work will be verified and loop until the relevant checks pass or the remaining gap is stated clearly.
- When choosing tools, libraries, or products, prefer mature and stable open-source options first. Newer options are welcome when they are already stable, but stability matters more than novelty.
- For open-source packages and dependencies, prefer what the current project can already support; when adding or upgrading, choose the latest stable version compatible with the project's runtime, package manager, and lockfile.
- If you are unsure which approach is best, research common practice from the web, open-source projects, or technical communities before deciding.
