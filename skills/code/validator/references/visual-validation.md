# Visual Validation

- Start from the acceptance criteria and supplied visual reference; without one, do not invent a pixel-perfect standard.
- Confirm the target URL or runtime, served build, and current page state, including any needed refresh or rebuild. Render the required viewport, platform, theme, data, and interactions in that instance.
- Compare relevant geometry, spacing, color, typography, borders, clipping, and scrolling with the available reference.
- Exercise repeated motion, transitions, or scrolling only when the task requires replay or state persistence.
- Use rendered screenshots, overlays, computed values, or DOM evidence as appropriate; source values and tests alone do not prove visual fidelity.
- Report states or target instances that could not be checked; evidence from another instance does not prove the user's reported issue is resolved.
