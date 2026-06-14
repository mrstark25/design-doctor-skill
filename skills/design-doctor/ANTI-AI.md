# Anti-AI Checklist

The single most important file in this skill. The goal is output that looks like a senior designer
made it — not the generic "AI-generated crypto/SaaS landing page." Read this before writing CSS.

## The AI Tells — BANNED

If you catch yourself reaching for any of these, stop. They are the fingerprints of AI-generated UI:

1. **Aurora / gradient blob backgrounds** — drifting multi-color radial gradients behind the hero.
   The #1 tell. Banned. (A single, faint, static spotlight behind ONE focal element is the most
   you may use, and only if it adds real depth.)
2. **Gradient-filled headline text** — `background-clip: text` rainbow headings. Banned. Use a real
   typeface and weight/italic for emphasis instead.
3. **Glowing glassmorphic cards** — frosted blur + colored glow + uniform big radius on every card.
   Banned. Use hairline borders and flat surfaces with intentional depth.
4. **Rainbow chips / colored-dot pills everywhere** — every tag a different neon. Banned. Color
   must carry meaning (up/down, status), not decorate.
5. **System-sans-only** (`-apple-system, system-ui`) with no deliberate type choice. Banned as a
   *display* face. Pair a characterful display font with a clean text/grotesk.
6. **Everything centered + pulsing** — centered hero, centered everything, pulsing dots, bouncing
   arrows. Banned as a default. Use editorial left-alignment and restraint.
7. **Uniform everything** — same radius, same shadow, same padding on every element. Banned.
   Hierarchy comes from deliberate contrast.
8. **Emoji as icons** in a serious product. Banned. Use typographic marks, SVG, or crafted CSS.
9. **Bento grid for its own sake** — a grid of glassy tiles with no information hierarchy. Banned
   unless the content genuinely earns a bento composition.
10. **Over-animation** — things flying in from every direction. Banned. Motion clarifies; it doesn't
    perform.

## The Fatal Bug — NEVER hide content behind JS

This caused multiple failed iterations: a scroll-reveal that sets `opacity:0` on sections and waits
for JS + IntersectionObserver to un-hide them. The result is a **blank page** until the user
scrolls (or forever, if JS is cached/slow/disabled).

**Rule:** content renders visible by default. Period.
- No `opacity:0` / `visibility:hidden` on real content that depends on JS to reverse.
- Entrance animations, if any, animate **from** a visible baseline using pure CSS that plays on
  load — they can decorate but can never leave content blank.
- Above-the-fold content must be fully visible on first paint with zero JS.
- The only JS-driven visuals allowed are *additive* ones whose fallback is the real content (e.g. a
  count-up whose span already contains the final number as static text).

## Required Qualities — the page must demonstrate most of these

1. A committed, specific visual direction (see `DIRECTIONS.md`).
2. A real type pairing with a characterful display face + tabular numerics for data.
3. Visible structure: hairline rules, a felt grid, numbered indices.
4. Intentional, non-uniform spacing rhythm and generous whitespace.
5. One disciplined accent used as ink (brand color honored by execution, not gradients).
6. A signature element (ticker, masthead detail, numbered ledger) unique to the brand.
7. A designed product visual / data surface as the centerpiece (not just copy).
8. Depth via layered surfaces + soft shadow, used sparingly.
9. Subtle, purposeful, compositor-friendly motion (transform/opacity), reduced-motion safe.
10. Real interaction states (hover/focus/active/focus-visible) on every interactive element.

## Quick self-audit before declaring done

- [ ] Could this be mistaken for a default template? If yes, it's not done.
- [ ] Is there any `opacity:0` on content that needs JS to reveal? If yes, remove it.
- [ ] Does the top of the page render fully without scrolling or JS?
- [ ] Is there a real display typeface, or did I default to system sans?
- [ ] Is there exactly one accent, used with meaning — not a rainbow?
- [ ] Is there a signature element and a designed centerpiece?
- [ ] Do hover/focus-visible states exist everywhere?
- [ ] Does it respect `prefers-reduced-motion`?
