# Decide

- Eliminate paths that fail correctness, explicit constraints, or required compatibility.
- Compare viable paths on cohesion, coupling, responsibility boundaries, abstraction fit, isolation, traceability, testability, operability, maintenance, cognitive load, and accidental complexity.
- Choose the best total design with proportional structural complexity. Use line count, diff size, and delivery speed only as tie-breakers between otherwise equivalent paths.
- Every abstraction must isolate a real responsibility, boundary, or stable variation point and reduce total cognitive or change cost; otherwise keep the flow direct.
- A smaller diff is not better when it gives an existing variable, field, or abstraction a second meaning; model distinct concepts explicitly.
- For generic capability, compare the standard library or current project capability, existing dependencies, mature stable compatible open-source libraries, and custom code on correctness, maintenance, compatibility, security, size, and adoption cost. Prefer them in that order unless total cost proves otherwise.
- If multiple repos are involved, identify which repo owns the behavior and which repos only adapt or consume it.
- If behavior is gated, verify where the gate originates and which scenarios must not move.
- Do not add fallback, dual-read, or compatibility paths for states explicitly ruled out unless current code, data, or callers prove they are needed.
- If the direction is still uncertain or multiple paths remain plausible without a clear winner, ask the user for the decision instead of forcing a guess.
