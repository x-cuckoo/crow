# Decide

- Eliminate paths that fail correctness, explicit constraints, or required compatibility.
- Among viable paths, make collaborators' ability to understand, review, and continue the work the primary design goal. This includes the user and future human or AI collaborators who lack the author's conversation context.
- Balance code volume, concision, and cognitive load: consider reading volume, logic density, navigation, and state the reader must retain. Prefer the lowest total comprehension cost, not the shortest or most decomposed form. Diff size and delivery speed remain tie-breakers.
- Before choosing implementation structure, reduce related cases to shared conditions, invariants, and meaningful differences. Prefer a coherent rule over separate fixes for each case; preserve agreed semantics and call out any proposed change to them.
- Inspect existing paths and consumers before adding an abstraction or expanding an interface. Add structure only to close a concrete gap and reduce independent rules or total cognitive or change cost; hypothetical reuse or generality alone is insufficient.
- A smaller diff is not better when it gives an existing variable, field, or abstraction a second meaning; model distinct concepts explicitly.
- For generic capability, compare the standard library or current project capability, existing dependencies, mature stable compatible open-source libraries, and custom code on correctness, maintenance, compatibility, security, size, and adoption cost. Prefer them in that order unless total cost proves otherwise.
- If multiple repos are involved, identify which repo owns the behavior and which repos only adapt or consume it.
- If behavior is gated, verify where the gate originates and which scenarios must not move.
- Require only changes needed to fulfill agreed requirements and preserve affected existing contracts. Propose additional defenses, restrictions, or compatibility separately, explaining their benefit and cost; implement them only after user acceptance. Hypothetical risk alone does not make an enhancement necessary.
- If the direction is still uncertain or multiple paths remain plausible without a clear winner, ask the user for the decision instead of forcing a guess.
