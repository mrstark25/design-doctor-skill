# Committed Visual Directions

Pick ONE and execute it fully. A direction is a complete decision about palette, type, structure,
and motion — not a vibe. Below are battle-tested directions; the first is fully specified because
it's the proven default for data/finance/DeFi products.

---

## 1. Editorial "Trading Desk" (Swiss) — proven default for finance/data/DeFi

The opposite of the AI-crypto look: precise, gridded, typographic, restrained.

**Palette** (warm near-black, bone ink, ONE flat accent — see `reference/editorial-swiss.css`):
- canvas: `oklch(16% 0.006 H)` warm near-black (H = brand hue, kept very low chroma)
- ink/text: `oklch(94% 0.006 H)` bone
- secondary/tertiary text + hairlines on a tight neutral ramp
- accent: the brand hue at ~`oklch(66% 0.17 H)`, used FLAT as ink — markers, emphasis, hover,
  one CTA. Never as glow or gradient.
- functional: a restrained green/red for up/down data only.

**Type:** a characterful display serif (e.g. **Fraunces**, optical-sized) paired with a grotesk
(e.g. **Space Grotesk**) for UI/labels/data. Tabular numbers for all figures. Italic display for
emphasis words (instead of gradient text).

**Structure:** hairline rules dividing every section; numbered section indices (01–0N); a
two-column "spread" (sticky label + content); data shown as real tables; a stat/figure block.

**Signature:** a market **ticker** strip; a wordmark with a fine `®`/`sup`; roman-numeral ledgers.

**Motion:** count-ups; draw-on-load SVG diagrams; bar fills; hover lifts. All pure-CSS-on-load or
additive — never hiding content.

**Centerpiece per page type:** swap → a designed swap panel + route split; explorer → a live
screener table with sparklines + score chips; portfolio → a holdings table + allocation; generic
→ a routing/architecture diagram.

---

## 2. Light Editorial / Paper

Warm off-white canvas, near-black ink, one strong editorial accent (signal red or cobalt). Big
confident serif headlines, fine rules, lots of margin. Reads like a print magazine / premium
fintech. Strongest way to escape "AI dark mode" entirely.

## 3. Neo-Brutalist

Hard edges, heavy borders, mono type, raw grid, one loud accent, visible structure, blunt
hierarchy. Confident and anti-template. Good for tools and dev products.

## 4. Dark Luxury (disciplined)

Deep near-black, restrained metallic/jewel accent, generous space, high type contrast, soft real
shadows. Premium without the glow. Risk: drifts toward the AI look if you add gradients — don't.

## 5. Swiss / International

Grid-first, Helvetica-grotesk lineage, red accent, asymmetric balance, zero decoration. Timeless.

---

## How to choose

- Finance / trading / data / DeFi → **#1 Editorial Trading Desk** (default) or #5 Swiss.
- Editorial / brand / marketing → #2 Light Editorial.
- Dev tools / infra → #3 Brutalist or #5 Swiss.
- Luxury / premium consumer → #4 Dark Luxury or #2 Light.

Commit, define tokens once, and make every surface converge on that decision. Do **not** default to
dark mode just because the product is crypto — choose the direction the product actually wants.
