# Design Lineages — the vocabulary

The reference library Design Doctor draws on so a redesign has a **point of view from a real design
tradition**, not a template. Read this after `ANTI-AI.md`; pair it with `DIRECTIONS.md` (which maps
sectors → lineages → committed directions).

**How to use it:** profile the site (sector, audience, tone, brand maturity), pick ONE lineage as the
spine, and **translate its discipline into tokens/type/layout — never clone a brand 1:1.** Borrow the
*principle* (Rams' subtraction, Stripe's confined gradient, Linear's one-accent restraint), not the
logo. Most pages are one master lineage + one modern system for execution detail.

---

## Part A — Masters (the principles layer)

The timeless rules. Each teaches one transferable defense against generic AI UI.

### Dieter Rams — Braun functionalist · "Weniger, aber besser"
- **Do:** subtract until only functional essentials remain, then make those impeccable; clear primary/secondary hierarchy; neutral surfaces, one functional accent (signal green/orange).
- **Type/color:** off-white, grey, black + one accent; neutral grotesque. **Use for:** tools, hardware, dashboards, settings. **Lesson:** *remove until it breaks* — AI adds decoration to fill space.

### Massimo Vignelli — modernist absolutist · "The Canon"
- **Do:** one rigorous grid governs everything; a tiny typeface lockset (Helvetica/Garamond/Bodoni); flat red/black/white; thick rules/bars as structure.
- **Use for:** transit, institutional, museum, design-led B2B. **Lesson:** *constrain the type system to 1–2 families and commit* — restraint reads as authority.

### Josef Müller-Brockmann — Swiss grid · objective communication
- **Do:** make the grid felt; flush-left sans; dramatic scale jumps inside a strict system; whitespace as structure, not padding.
- **Use for:** content-heavy, docs, editorial, event sites. **Lesson:** *real scale contrast + asymmetry inside a grid* — AI spaces everything uniformly.

### Jan Tschichold — typographer · rule-maker then rule-breaker
- **Do:** tune the invisible 5% — measure, leading, margins, optical alignment; classical proportion for reading.
- **Use for:** long-form, publishing, literary/luxury. **Lesson:** *typographic micro-detail is the craft* — AI ships defaults that are merely "fine."

### Paul Rand — corporate-identity intellect
- **Do:** start from ONE strong idea and design around it; witty, reductive marks; bold flat color; confident negative space.
- **Use for:** brand/identity, tech marketing with a single thesis. **Lesson:** *every mark carries meaning* — AI decorates without an idea.

### Otl Aicher — systems designer · the manual & pictogram
- **Do:** build a generative rule set (icons on a 0/45/90 grid, color families, spacing) so everything looks related; the system is the deliverable.
- **Use for:** design systems, wayfinding, multi-surface brands, icon sets. **Lesson:** *make the system, not ad-hoc screens.*

### Wim Crouwel — "Gridnik" · the experimental systematist
- **Do:** make the visible grid and engineered letterforms the aesthetic; monospace rhythm, rounded grid corners.
- **Use for:** tech/AI products, design-forward portfolios. **Lesson:** *structure as the look* — don't hide it behind generic prettiness.

### Stefan Sagmeister — provocateur · emotion & the hand
- **Do:** inject a human hand and a point of view; tactile/photographic type; one big idea per piece; deliberate imperfection.
- **Use for:** culture, music, fashion, bold campaigns, hero moments. **Lesson:** *imperfection and emotional risk read as authored* — AI is relentlessly safe-slick.

### Paula Scher / Pentagram — typographic maximalist
- **Do:** type as image at architectural scale — packed, overlapping, angled; bold flat color fields; words as texture.
- **Use for:** cultural institutions, bold consumer brands, hero sections. **Lesson:** *let typography do the heavy lifting* — not a timid centered headline in whitespace.

### David Carson — deconstructionist · "the end of print"
- **Do:** break the grid on purpose, with intent; expressive type-as-texture; controlled chaos.
- **Use for:** music, youth/skate, fashion editorial, art. **Avoid for:** transactional/accessibility-critical. **Lesson:** *deliberate rule-breaking signals a present author* — but only when deliberate.

### Neville Brody — post-punk type pioneer
- **Do:** draw or heavily customize the display face; constructivist structure under rebellious type.
- **Use for:** media, music, fashion, editorial with edge. **Lesson:** *the headline face is where brand is won* — AI reaches for default Google Fonts.

### Erik Spiekermann — information typographer
- **Do:** engineer the type ladder (weights, sizes, spacing, optical sizes) for the real reading context; humanist sans with character at small sizes.
- **Use for:** info-dense products, transit, fintech, docs, dashboards. **Lesson:** *tune type for the actual reading environment* — not one generic size/weight.

### Kenya Hara (MUJI) — emptiness as design · "Ku"
- **Do:** use generous void with intent; muted natural tones; let one object resonate.
- **Type/color:** off-white, kraft, soft grey, near-black. **Use for:** lifestyle, wellness, premium-everyday, craft. **Lesson:** *confident emptiness reads premium* — AI fills space nervously.

### Jony Ive (Apple industrial) — material honesty · obsessive detail
- **Do:** single-gesture forms; obsess over radii/edges/shadow depth/easing; chrome defers so content leads.
- **Type/color:** neutral white/silver/grey, content-driven color, SF-grade sans, huge whitespace. **Use for:** premium product/app launches, hardware. **Lesson:** *the precision of the 1% (radii, easing, spacing) is the signature.*

**Cross-cutting (what the masters collectively teach):** ① commit to a POV and go all the way · ② constrain type+color, then exploit scale/weight contrast · ③ make structure intentional and visible (grid, asymmetry, frame-breaking) · ④ sweat the invisible craft (measure, leading, radii, easing) · ⑤ add a human signature (custom letterform, a hand, one idea, deliberate imperfection) — the one thing AI defaults can't fake.

---

## Part B — Modern product & landing systems (the execution layer)

How today's best digital products look senior-designed. Borrow the craft signal, adapt the tokens.

### Stripe — the fintech gradient standard, restraint at scale
- **Signal:** a slow WebGL gradient mesh confined to the **upper third**, under crisp dark-on-white type + ONE CTA. Söhne at light **weight 300**, per-size negative tracking. Iris `#533afd` for interaction; near-black `#061b31` on white.
- **Tell:** gradient *confined*, optical letter-spacing tuned, 300 weight at display size. **Use for:** fintech, payments, premium B2B/dev infra. (The gradient is the *only* sanctioned blob — confined, slow, behind crisp type.)

### Linear — engineered minimalism, one violet accent
- **Signal:** near-monochrome dark precision, Indigo `#5e6ad2` as the *exclusive* interactive signal, **Inter** with `cv01`+`ss03` features on at weight **510**, snappy 100–200ms (non-springy) motion. Base Nordic Gray `#222326` / Mercury `#F4F5F8`.
- **Tell:** re-engineered Inter glyphs, off-default 510 weight, ruthless one-accent. **Use for:** dev tools, issue/project tracking, technical SaaS.

### Vercel / Geist — black-and-white Swiss, grid as visible element
- **Signal:** stark monochrome; **Geist Sans + Geist Mono** as one family (mono used semantically); 10-step semantic P3 color scales; visible grid dividers; one accent.
- **Tell:** sans+mono engineered together, semantic scales, grid as composition. **Use for:** dev platforms, infra/hosting, docs, open-source.

### Apple — Liquid Glass (2025): physically-simulated translucent depth
- **Signal:** translucent glass that reflects/refracts/lenses its surroundings with motion-tracking specular highlights; chrome shrinks on scroll; SF type, 8pt grid; color derives from content behind the glass.
- **Tell:** real lensing + specular highlights (not flat `backdrop-filter: blur`). **Use for:** premium consumer OS/hardware/app launches. **Caution:** true Liquid Glass is expensive; a flat frosted card is *not* it — and naive glass is an AI tell.

### Google — Material 3 Expressive: springy, shape-morphing
- **Signal:** wallpaper-derived dynamic color (vibrant purple/coral); **Roboto Flex** large+heavy for emotional hierarchy; 35-shape morphing system; hand-tuned spring physics (squish, morph loaders).
- **Tell:** real spring dynamics + shape-morphing vs. linear/ease defaults. **Use for:** Android/cross-device consumer apps wanting personality.

### IBM Carbon — Swiss-rational enterprise, token-rigorous
- **Signal:** **IBM Plex** (Sans/Serif/Mono), Productive vs Expressive type duality; Blue 60 `#0f62fe` (active Blue 80); the 2x (8px) grid; every interaction state tokenized across 4 themes.
- **Tell:** explicit per-theme state tokens on a strict grid. **Use for:** enterprise SaaS, data-dense dashboards, cloud consoles, regulated software.

### Framer — dark, cinematic, scroll-3D (the tool is the demo)
- **Signal:** near-black canvas, ONE bright accent (Framer Blue `#0099FF`), Urbanist/Lexend; sticky `preserve-3d` zoom reveals, word-by-word reveals, cursor-reactive 3D; 4px grid.
- **Tell:** real z-depth layering + controllable shaders with extreme palette/type discipline — ONE spectacular motion moment, not canned transitions. **Use for:** design/dev/AI tools, agencies, design-forward startups.

### Notion — warm minimalism with hand-drawn character
- **Signal:** near-Swiss restraint warmed by monochrome line illustrations/characters; **Inter** everywhere (heavy for headlines), Lyon serif only for sparing pull-quotes; warm off-white surface `#F7F6F3`, text `#373530`.
- **Tell:** a hand-drawn, cel-animated character system (not algorithmic). **Use for:** productivity, collaboration, human B2B tools.

### Raycast — dark luminance ladder, one red gradient, ⌘K hero
- **Signal:** dark-only, depth from a **surface-luminance ladder with ZERO drop shadows**; one red diagonal gradient moment (`#FF5757→#A1131A`); Inter with `ss03`; a realistic command-palette as the hero visual.
- **Tell:** elevation via 4-step luminance (no shadows), accent quarantined to illustrations. **Use for:** dev tools, launchers, keyboard-first SaaS.

### Superlist — a single geometric constraint as brand (the 24° angle)
- **Signal:** the **24° angle** cut into a bespoke headline face and recurring as motif; coral `#ff3a27` + periwinkle `#9187ff` over ink `#181825`; near-real animated product UI as hero.
- **Tell:** one constraint with a full conceptual through-line (heritage→type→motif→icon). **Use for:** consumer/prosumer productivity wanting personality.

### Mailchimp — one loud color, custom serif, purposeful-playful illustration
- **Signal:** full-bleed **Cavendish Yellow `#FFE01B`** field + chunky rounded display (Cooper-derived) + one deliberately-rough surreal illustration; Peppercorn near-black on cream.
- **Tell:** "slightly wrong on purpose" hand illustration + a one-color system. **Use for:** approachable B2B/SMB marketing for non-technical users.

### Airbnb — warm rounded geometry, photography-forward
- **Signal:** soft rounded forms, frame-filling photography, **Cereal VF**; Rausch `#FF5A5F` primary; 2025 added 3D clay icons via the patented 60fps "Lava" format; pill search bar, rounded photo cards.
- **Tell:** cross-medium-tuned variable face + custom motion codec. **Use for:** consumer marketplace, travel, hospitality, trust-dependent transactional.

### Figma — colorful-yet-enterprise, outline-free layered shapes
- **Signal:** bright multicolor on white, **outline-free** flat-but-layered abstract "primitives," oversized bold grotesque (**Figma Sans**, rectangular i-dot); deliberate 15fps handmade motion.
- **Tell:** anti-default details (rectangular dot, 15fps) + varied primitives rejecting uniformity. **Use for:** creative/collaborative builder SaaS that must feel playful yet enterprise-credible.

### Lafys — dark premium curation gallery, image-forward, oversized type
- **Signal:** warm near-black canvas + crisp white grotesque + an **image-led card grid** where color
  comes from the content thumbnails, not a brand accent. Minimal chrome: centered letter-spaced
  wordmark, thin filter chips, hairline card borders. Oversized editorial type as punctuation (a giant
  "Next"/section word). Awwwards/Mobbin/Godly-adjacent.
- **Tell:** restraint + content-as-color — no loud accent, no gradients; the near-black makes thumbnails
  glow, and one oversized-type moment carries the personality. **Use for:** directories, galleries,
  showcases, template/prompt libraries, portfolios, marketplace indexes. (Full spec: direction #10 in
  `DIRECTIONS.md`.)

**What modern systems teach (senior-designed signals):** ① type is *engineered* (variable/custom faces, OpenType swaps, per-size tracking, deliberate weights — never defaults) · ② systematic spacing rhythm on a base unit (4/8px), composed not uniform · ③ restraint + ONE accent used semantically; saturated color quarantined · ④ real motion, physically grounded (springs, lensing, scroll-3D) not linear/ease defaults · ⑤ depth via layered surfaces/luminance ladders, not stock drop-shadows · ⑥ one conceptual through-line propagated everywhere.

---

See `DIRECTIONS.md` for crypto/DeFi-native brand references, the **sector → lineage** playbook, and the committed directions (with token specs) derived from these lineages.
