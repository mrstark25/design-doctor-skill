# Design Quality Rubric

Score every surface 0–10. Used by the `design-auditor` agent and to know when a surface is done.

## The 10 qualities (one point each, present AND well-executed)

1. Committed visual direction (not "dark + accent") — see `DIRECTIONS.md`
2. Real type pairing with a characterful display face + tabular numerics
3. Visible structure: hairline rules, felt grid, numbered indices
4. Intentional, non-uniform spacing rhythm + generous whitespace
5. One disciplined accent used semantically (brand honored by execution, not gradients)
6. A signature element unique to the brand
7. A designed product visual / data surface as centerpiece (not just copy)
8. Depth via layered surfaces + restrained shadow
9. Subtle, purposeful, compositor-friendly motion; reduced-motion safe
10. Real interaction states incl. `:focus-visible` everywhere

## Bands

| Score | Band | Meaning |
|-------|------|---------|
| 9–10 | Exemplary | Believable as a real, premium product. Ship. |
| 7–8 | Strong | Good; push 1–2 qualities further |
| 5–6 | Generic / "looks AI" | Works but reads template. Clear upgrade path. |
| 3–4 | Weak | Flat, inconsistent, or austere-to-the-point-of-unfinished |
| 0–2 | Broken | Unstyled, blank-on-load, or overflowing |

A blank-on-load page (content hidden behind JS reveal) caps at 2 regardless of how nice the CSS is.

## Auto-fail conditions (fix before anything else)

- Any AI tell from `ANTI-AI.md` present (aurora, gradient text, glow-bento, rainbow, etc.)
- Any content hidden behind a JS scroll-reveal (`opacity:0` until JS)
- Absolute asset paths that break `file://`, or stale-cache showing the old version
- Above-the-fold not fully rendered on first paint

## Definition of done (per surface)

- score ≥ 8, no auto-fail conditions
- a real display typeface loads (verify, don't assume the fallback)
- signature element + product visual present
- hover/focus/active/focus-visible on every interactive element
- holds at 320 / 768 / 1024 / 1440 with no overflow
- respects `prefers-reduced-motion`
- serves HTTP 200; new markers confirmed in served output
