# Decide

- Eliminate paths that fail correctness, explicit constraints, or required compatibility.
- Among viable paths, make collaborators' ability to understand, review, and continue the work the primary design goal. This includes the user and future human or AI collaborators who lack the author's conversation context.
- Use cohesion, low coupling, clear boundaries, and proportional abstraction to reduce comprehension and maintenance cost. Line count, diff size, and delivery speed are only tie-breakers between otherwise equivalent paths.
- Before adding an abstraction or expanding an interface, inspect applicable existing paths and consumers and identify the concrete requirement or invariant they cannot satisfy. Add structure only when it closes that gap and reduces total cognitive or change cost; hypothetical reuse or generality alone is insufficient.
- A smaller diff is not better when it gives an existing variable, field, or abstraction a second meaning; model distinct concepts explicitly.
- For generic capability, compare the standard library or current project capability, existing dependencies, mature stable compatible open-source libraries, and custom code on correctness, maintenance, compatibility, security, size, and adoption cost. Prefer them in that order unless total cost proves otherwise.
- If multiple repos are involved, identify which repo owns the behavior and which repos only adapt or consume it.
- If behavior is gated, verify where the gate originates and which scenarios must not move.
- Require only changes needed to fulfill agreed requirements and preserve affected existing contracts. Propose additional defenses, restrictions, or compatibility separately, explaining their benefit and cost; implement them only after user acceptance. Hypothetical risk alone does not make an enhancement necessary.
- If the direction is still uncertain or multiple paths remain plausible without a clear winner, ask the user for the decision instead of forcing a guess.
