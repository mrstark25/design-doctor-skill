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

## 6. Stripe-grade Fintech (light, precise)

Lineage: **Stripe + Spiekermann + Rams.** Light/white canvas, near-black crisp type, ONE interactive
accent (iris/indigo). A slow gradient mesh is allowed **only** confined to the upper third behind
crisp type — the single sanctioned "blob." Light-weight (300–400) display sans with per-size negative
tracking; generous whitespace; one decisive CTA per hero; tabular numerals for money. **Use for:**
payments, fintech, dev infra, premium B2B. **Centerpiece:** a real product UI (API snippet, dashboard).

## 7. Product-Minimal (dark, engineered)

Lineage: **Linear + Vercel/Geist + Crouwel.** Near-monochrome dark precision, ONE exclusive accent
(violet/indigo). Engineered type — a variable sans with OpenType swaps at an off-default weight; or a
sans+mono family used semantically. Depth via a **luminance ladder, not drop shadows** (Raycast). Snappy
100–200ms motion. **Use for:** dev tools, technical SaaS, infra, AI products. **Centerpiece:** the real
product UI / a command palette / code blocks.

## 8. Friendly DeFi / Consumer (warm, rounded, one brand color)

Lineage: **Uniswap + Phantom + Aave.** Light or warm canvas, soft 16–24px radii, generous padding, ONE
confident brand color used flat (pink/purple/lavender — never a gradient soup). Optional committed
mascot (ghost/cat) or none. **Use for:** consumer DeFi, wallets, swaps, lending that needs instant
trust and reach. **Centerpiece:** the **swap card** or **portfolio** (the most-copied DeFi objects) —
designed, not a glassy float.

## 9. Crypto-Brutalist Terminal (dark, dense, pro)

Lineage: **Blur + dYdX + Vignelli's bars.** Near-black (often blue-tinted) canvas, maximum data
density, hairline gridlines, tabular near-mono numerics, ONE surgical accent (orange/violet) only on
price/CTA/live state. Zero decoration. **Use for:** perps, orderbook exchanges, pro NFT/lending
terminals — "cockpit, not onboarding." **Centerpiece:** the **orderbook / desk / depth chart**.

## 10. Dark Gallery / Curation (Lafys-style — image-forward, oversized type)

Lineage: **Lafys + Awwwards/Mobbin/Godly + Vercel-grotesk restraint.** A premium, content-forward
gallery: **warm near-black canvas, crisp white grotesque type, and an image-led card grid where the
color comes from the content thumbnails — NOT from a brand accent.** Chrome is minimal: a centered,
letter-spaced wordmark, a thin row of category filter chips, hairline card borders. The signature is
**oversized editorial type as punctuation** (a giant "Next" / section word) against the dense grid,
and the imagery doing the visual work.

- **Palette:** canvas `oklch(15% 0.003 270)` warm near-black; card `oklch(18% 0.004 270)`; hairline
  `oklch(100% 0 0 / 0.08)`; text near-white `oklch(96% 0 0)`, muted `oklch(66% 0 0)`. **No saturated
  brand accent** — at most one tiny electric blue `oklch(70% 0.16 250)` for links/"Premium" badges.
  Let the card images supply all the color.
- **Type:** one clean neutral grotesque (Geist / Inter / Suisse-like) for UI + metadata; a
  letter-spaced wordmark (mono or tracked grotesk). The oversized accent word can go to
  `clamp(4rem, 8vw, 11rem)`. Tabular numerals for counts.
- **Structure:** responsive masonry/uniform card grid (3–4 cols), each card = a 16:10 preview image +
  title + a creator avatar + tag chips + an optional "Premium" badge. Generous gutter, hairline
  dividers, lots of black breathing room. Centered top wordmark; filter chips below.
- **Signature:** image-forward cards · oversized type pagination/section words · avatar+tag metadata
  rows · the near-black canvas making thumbnails glow.
- **Depth & motion:** card hover = subtle lift + image scale (`transform`, compositor-friendly) and a
  hairline-border brighten; reduced-motion safe. Optional restrained 3D only on a *featured* tile.
- **Use for:** directories, showcases, design/prompt/template galleries, portfolios, "wall of work,"
  marketplace/library products, AI-product galleries, blogs/case-study indexes. **Centerpiece:** the
  grid itself + one oversized-type moment. *Avoid:* adding a loud brand accent or gradients — they
  fight the content; the restraint is the point.

---

## Crypto/DeFi-native references (borrow the discipline, not the logo)

- **Uniswap** — friendly pink `#FF007A`, rounded, Basel Grotesk; the elevated **swap card** hero.
- **Aave** — light + lavender `#9896FF` ramp, semicircle motif, Ghost mascot; FT Regola + Inter; friendly infrastructure.
- **Phantom** — warm purple, rounded F37 custom face, expressive ghost; consumer wallet warmth.
- **Rainbow** — joyful full-spectrum gradient identity + mascots, SF Pro Rounded; delight-first (needs real motion budget).
- **Jupiter** — dark cosmic + lime-green `#C7F284` accent + cat mascot; trader-grade with community personality.
- **Coinbase** — institutional Blue `#0052FF`, Coinbase Sans + **mono numerals**, light AND dark; regulated trust.
- **dYdX** — blue-black ramp, violet `#6966FF` accent, Satoshi; the perps **desk** (orderbook + depth + order entry).
- **Blur** — black canvas, surgical orange, near-mono numerics; the NFT **bidding-pool orderbook**.
- **1inch** — post-rebrand light, restrained, "grown-up crypto"; swap-card centerpiece, killed its mascot.
- **pump.fun / friend.tech** — crypto-native **maximalist**: loud, lime-on-black, heavy geometric sans, live churning grids; FOMO/casino energy. Use only for memecoin/launchpad/SocialFi — and commit fully.

## 3D within a direction (optional — see `3D.md`)

3D is not a direction; it's a depth treatment layered onto one. Keep it token-driven so it inherits
the direction's palette, and keep it hairline. Per-direction fit:

- **Editorial Trading Desk / Swiss** → a slow-turning **wireframe** product object, or a sparse
  **lattice** depth field behind the masthead. Monochrome + the one accent. (Both ship in
  `reference/three-scene.js`.)
- **Dark Luxury** → a single restrained metallic/edge object as the centerpiece. No bloom, no
  iridescence — that's the AI tell.
- **Neo-Brutalist** → flat, faceted, low-poly with hard edges and visible wireframe; honest and raw.
- **Light Editorial / Paper** → usually **no 3D**; if any, the faintest line-art depth, never a dark
  glowing canvas that breaks the paper feel.

Whatever the direction: over a real fallback, lazy + pinned, reduced-motion = static. Default to none.

## Sector → lineage playbook (pick the direction the product actually wants)

First **profile the site** (sector · audience: retail vs pro vs institutional · tone · brand
maturity). Then pick a direction. Each line lists strong options + the AI cliché to refuse.

- **DeFi swap / DEX** → #8 Friendly DeFi (Uniswap, retail) · #9 Crypto-Brutalist (pro) · #6 Stripe-grade light (institutional/1inch). *Avoid:* dark + purple gradient + glassy swap card floating on an aurora blob.
- **Lending / money-market** → #8 (Aave light+lavender) · institutional #6 · Coinbase-sober. *Avoid:* neon-green APY glowing on black with a 3D coin + gradient mesh.
- **Perps / derivatives** → #9 Crypto-Brutalist (dYdX/Blur) · TradingView-native desk. *Avoid:* soft pastel rounded cards that hide the data — pros read it as a toy.
- **NFT marketplace** → #9 (flippers/Blur) · #8 colorful gallery (collectors) · editorial gallery-white (art drops). *Avoid:* purple-glow card grid + glassmorphic navbar over a blurred hero.
- **Wallet** → #8 (Phantom warm / Rainbow joyful) · Coinbase-sober (custodial). *Avoid:* glowing balance card + "gateway to Web3" gradient headline + faceless 3D blob.
- **Centralized exchange** → Coinbase institutional (#6-adjacent) · #9 desk for the pro tab. *Avoid:* casino-neon + rainbow candlestick glow undercutting credibility.
- **L1 / L2 infra** → #5 Swiss / #1 Editorial-technical · #7 Product-Minimal with real diagrams. *Avoid:* cosmic purple + aurora blobs + "future of scalability" + floating glowing nodes.
- **Web2 SaaS / dashboard** → #7 Product-Minimal (Linear/Vercel) · #1 data-dense with tabular numerals · bento for feature overview. *Avoid:* the shadcn/Tailwind template — uniform card grid, one indigo accent, identical radii/shadows, gray-on-white.
- **Developer tool** → #7 (Vercel/Linear, real code blocks) · #5 Swiss-mono · #3 Brutalist. *Avoid:* purple gradient + glassy floating code window + "ship faster" + glow-on-everything.
- **Fintech / payments** → #6 Stripe-grade · Coinbase mono-money · Rainbow/Cash-App joyful (consumer). *Avoid:* blue-gradient hero + floating glass phone + "banking, reimagined."
- **Consumer marketing** → #2 Light Editorial / Scher-maximalist type · scrollytelling · bold type + real photography. *Avoid:* centered headline + gradient blob + two-button CTA + uniform 3-card row.
- **Luxury / premium consumer** → #4 Dark Luxury · #2 Light · Hara-emptiness (calm premium). *Avoid:* glow and gradients — they cheapen it.
- **AI product** → #7 Product-Minimal with real product shots · #2 editorial with strong type · #5 Swiss to signal substance. *Avoid:* the full cliché — dark+purple gradient, mesh blobs, glass cards, gradient text, neural-orb motif.
- **Directory / gallery / showcase / template or prompt library / portfolio wall** → #10 Dark Gallery (Lafys) · #2 Light Editorial for an art-forward variant. *Avoid:* a loud brand accent or gradients competing with the content thumbnails — let the imagery carry the color.

## The AI tell, per sector (and the fix)

The generic AI look = dark canvas + purple/blue gradient everything · aurora/mesh blobs behind a
centered headline · glowing glassmorphic uniform cards · gradient-text headline · a faceless 3D
orb/coin. The fix is always the same shape: **commit to one brand color used semantically; replace
the blob with real substance (the actual product UI, a geometric motif, honest grain); build depth
with layered surfaces or a luminance ladder; set high-character solid type with a concrete claim;
earn a real identity (committed mascot or disciplined typography) — never a default render.** Full
list in `ANTI-AI.md`; design vocabulary in `LINEAGES.md`.

## Committing

Profile → pick ONE direction + ONE master lineage (Part A of `LINEAGES.md`) for principle + ONE
modern system (Part B) for execution detail. Define tokens once. Make every surface converge. Do
**not** default to dark mode just because the product is crypto — choose what the product wants.
