# JavaScript and TypeScript

- In TypeScript, represent finite sets of business options with `enum` and reference enum members instead of magic strings or string-literal unions. Ordinary text does not need an enum.
- Use JSDoc (`/** ... */`) for documentation of functions, classes, modules, and other declarations, placed immediately before the documented code.
- Keep descriptions concise. Add tags such as `@param` and `@returns` only when they convey useful information; do not fill a template mechanically.
- In JavaScript, use JSDoc types when needed. In TypeScript, keep types in code declarations rather than repeating them in comments; document relevant meaning or constraints instead.
- Local implementation explanations may use ordinary comments such as `//`. Do not add documentation to every declaration merely to satisfy this format rule.
