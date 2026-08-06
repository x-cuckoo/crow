# Handoff

- Summarize the current flow, evidence versus assumptions and user decisions, files to change, intended behavior, scenario boundaries, and implementation-time validation.
- Match each validation claim to the cheapest evidence that can prove it; claims about external runtime semantics require a controlled real dependency or scoped conformance evidence, not mock behavior alone.
- Invoke `crow-code-objector` once after consolidating a plan when unresolved uncertainty or failure cost is material, especially across auth, data, migrations, compatibility, rollout, dependencies, or operations. Non-trivial, multi-file, or user-proposed work alone is insufficient.
- Reuse the applied verdict while the contract, evidence, constraints, feasibility, and risk remain unchanged; review again only after a material change.
- Apply and summarize the verdict before user review: stop on `Block`, revise for `Proceed with changes`, and keep the plan only for `Proceed as planned`.
- Present the full consolidated plan for review. After any correction, present it again; execute only after explicit approval of the latest version.
