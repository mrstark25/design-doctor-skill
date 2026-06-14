# Signature Component Recipes

Copy-adaptable patterns for the centerpiece visuals. All are pure-HTML/CSS + the
`editorial-swiss.css` primitives. None hide content behind JS.

## Count-up stat (safe — fallback is the real number)

The span already contains the final value as static text, so it shows even with no JS. JS only
enhances it. (See the JS snippet at the bottom.)

```html
<dd><span data-count="48.2" data-prefix="$" data-suffix="B" data-dec="1">$48.2<small>B</small></span></dd>
```

## Live data table / screener (explorer pages)

```html
<table class="data-table">
  <thead><tr><th>#</th><th>Token</th><th>Price</th><th>24h</th><th>7d</th><th>Volume</th><th>AI</th></tr></thead>
  <tbody>
    <tr>
      <td>01</td><td>TURBO</td><td>$0.0094</td><td><span class="delta up">+28.1%</span></td>
      <td><svg class="spark up" viewBox="0 0 80 24"><polyline points="0,20 26,21 40,12 66,6 80,3"/></svg></td>
      <td>$77M</td><td><span class="score">84</span></td>
    </tr>
  </tbody>
</table>
```
```css
.spark { width: 80px; height: 24px; }
.spark polyline { fill: none; stroke-width: 2; vector-effect: non-scaling-stroke; }
.spark.up polyline { stroke: var(--up); } .spark.down polyline { stroke: var(--down); }
.score { display:inline-flex; min-width:2.1rem; justify-content:center; padding:.2rem .45rem;
  font-weight:600; font-variant-numeric:tabular-nums; border:1px solid var(--rule-2); border-radius:3px; }
```

## Swap / product panel (trade pages) — depth via hairline + soft shadow, not glass

```css
.panel { border: 1px solid var(--rule-2); background: var(--bg-2); border-radius: 6px; padding: 1.4rem;
  box-shadow: 0 2px 0 var(--rule), 0 30px 70px -34px oklch(0% 0 0 / 0.85); }
```
Include: labelled rows, big tabular amounts, crafted coin-marks (a circle with an initial — NOT a
rainbow chip), a route/detail box, and one accent CTA. Bars fill on load:
```css
.bar::before { content:""; position:absolute; inset:0 auto 0 0; width: var(--w);
  background: oklch(40% 0.12 var(--H) / .4); animation: fill 1.1s var(--ease) both; }
@keyframes fill { from { width: 0; } }   /* visible end-state; animates from 0 on load */
```

## Routing / pipeline diagram (signature explainer)

Inline SVG paths with `stroke-dasharray`/`stroke-dashoffset`, drawing on load (NOT gated on JS):
```css
.wire { fill:none; stroke:var(--rule-2); stroke-width:1.5; stroke-dasharray:640; stroke-dashoffset:640;
  animation: draw 1.4s var(--ease) forwards; }
.wire:nth-child(2){animation-delay:.1s} .wire:nth-child(3){animation-delay:.18s}
@keyframes draw { to { stroke-dashoffset: 0; } }
```

## Crafted coin / token mark (instead of rainbow chips or emoji)

```css
.coin i { width:1.5rem; height:1.5rem; border-radius:50%; display:inline-flex;
  align-items:center; justify-content:center; font-style:normal; font-size:.85rem;
  background: oklch(34% 0.02 var(--H)); color: oklch(92% 0.02 var(--H));
  box-shadow: inset 0 0 0 1px var(--rule-2); }
```

## The count-up JS (the ONLY JS-driven visual; content-safe)

```js
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const fmt = (n, dec) => dec ? n.toFixed(dec) : (Math.abs(n) >= 1000 ? Math.round(n).toLocaleString() : Math.round(n));
const run = (el) => {
  const target = parseFloat(el.dataset.count), dec = +(el.dataset.dec||0);
  const pre = el.dataset.prefix||'', suf = el.dataset.suffix||'';
  const render = v => `${pre}${fmt(v,dec)}${suf?`<small>${suf}</small>`:''}`;
  if (reduced) return void (el.innerHTML = render(target));
  const t0 = performance.now(), dur = 1100;
  const step = (now) => { const p = Math.min(1,(now-t0)/dur), e = 1-Math.pow(1-p,3);
    el.innerHTML = render(target*e); if (p<1) requestAnimationFrame(step); else el.innerHTML = render(target); };
  requestAnimationFrame(step);
};
const els = document.querySelectorAll('[data-count]');
if (reduced || !('IntersectionObserver' in window)) els.forEach(run);
else { const o = new IntersectionObserver((es)=>es.forEach(x=>{ if(x.isIntersecting){run(x.target);o.unobserve(x.target);} }),{threshold:.6});
  els.forEach(e=>o.observe(e)); }
```

## Reminders
- Relative asset paths (`./styles.css?v=1`); bump `?v=` on every change.
- `node --check` JS; check CSS brace balance; serve and curl 200 before claiming done.
- Run the `ANTI-AI.md` self-audit before declaring finished.
