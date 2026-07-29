# Decide

- Prefer the smallest coherent change that matches the current architecture.
- Surface a simpler approach when it fully solves the task.
- For generic capability, compare the standard library or current project capability, existing dependencies, mature stable compatible open-source libraries, and custom code on correctness, maintenance, compatibility, security, size, and adoption cost. Prefer them in that order unless total cost proves otherwise.
- If multiple repos are involved, identify which repo owns the behavior and which repos only adapt or consume it.
- If behavior is gated, verify where the gate originates and which scenarios must not move.
- Do not add fallback, dual-read, or compatibility paths for states explicitly ruled out unless current code, data, or callers prove they are needed.
- If the direction is still uncertain or multiple paths remain plausible without a clear winner, ask the user for the decision instead of forcing a guess.
