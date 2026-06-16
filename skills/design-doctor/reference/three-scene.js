/* ============================================================
   Design Doctor — three-scene.js
   A DISCIPLINED Three.js layer. Read 3D.md before using this.

   Philosophy: 3D here is *additive depth*, never the content and
   never decoration-for-its-own-sake. This module is built so the
   page is fully usable with WebGL disabled, JS off, or reduced
   motion on — the <canvas> only ever enhances a real DOM element
   that already says everything.

   Hard rules baked in:
   - PROGRESSIVE ENHANCEMENT — feature-detect WebGL; bail to the
     static fallback (the real DOM content) if anything is missing.
   - REDUCED MOTION — render ONE static frame, never animate.
   - LAZY — Three.js is only imported when the canvas nears the
     viewport (IntersectionObserver), so it never costs the hero.
   - TOKEN-DRIVEN — colors are read from the page's CSS custom
     properties so the 3D matches the chosen direction's palette.
     No hardcoded neon. No rainbow.
   - CHEAP — DPR capped, low geometry counts, paused when offscreen
     or the tab is hidden, fully disposed on teardown.

   Usage (see starter.html / patterns.md):
     <canvas data-dd3d="wireframe" data-accent="--ink"></canvas>
     <script type="module" src="./three-scene.js?v=1"></script>
   or programmatically:
     import { mountScene } from './three-scene.js';
     const handle = mountScene(canvasEl, { scene: 'lattice' });
     // later: handle.destroy();
   ============================================================ */

// Pin the version: reproducible, and no surprise breakage on a CDN bump.
const THREE_URL = 'https://esm.sh/three@0.160.1';

// Tunables — kept conservative on purpose (this is depth, not a demo).
const MAX_DPR = 1.75;
const REDUCED = matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---- WebGL capability check (cheap, synchronous) ---------- */
function webglSupported() {
  try {
    const c = document.createElement('canvas');
    return !!(window.WebGLRenderingContext &&
      (c.getContext('webgl2') || c.getContext('webgl')));
  } catch (_) { return false; }
}

/* ---- Resolve a CSS color (incl. oklch) to linear-ish RGB ---
   Paints the *computed* color to a 1x1 canvas so any color space
   (oklch/lab/hsl) is normalized to bytes. Lets the 3D inherit the
   active direction's tokens instead of inventing colors. */
function resolveColor(value, fallback) {
  try {
    const probe = document.createElement('span');
    probe.style.cssText = 'display:none;color:' + value;
    document.body.appendChild(probe);
    const resolved = getComputedStyle(probe).color || value;
    probe.remove();
    const cv = document.createElement('canvas');
    cv.width = cv.height = 1;
    const ctx = cv.getContext('2d');
    ctx.fillStyle = '#000';
    ctx.fillStyle = resolved;
    ctx.fillRect(0, 0, 1, 1);
    const d = ctx.getImageData(0, 0, 1, 1).data;
    return [d[0] / 255, d[1] / 255, d[2] / 255];
  } catch (_) {
    return fallback;
  }
}

/* ---- Soft radial glow sprite texture (for nodes/packets) ---
   A canvas radial gradient → CanvasTexture. Tinted per-material and
   drawn with additive blending so nodes read as energy on a dark
   surface — disciplined glow that carries meaning (a live network),
   NOT a decorative nebula. */
function makeGlow(THREE) {
  const s = 64;
  const cv = document.createElement('canvas');
  cv.width = cv.height = s;
  const ctx = cv.getContext('2d');
  const g = ctx.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2);
  g.addColorStop(0, 'rgba(255,255,255,1)');
  g.addColorStop(0.22, 'rgba(255,255,255,0.85)');
  g.addColorStop(0.5, 'rgba(255,255,255,0.32)');
  g.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, s, s);
  const tex = new THREE.CanvasTexture(cv);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

/* ---- Scene builders ---------------------------------------
   Each returns { object, tick(t, pointer) }. They are crafted to
   read like the editorial direction: hairline edges, restrained
   point fields, monochrome with ONE accent — not a particle nebula. */
const SCENES = {
  /* A slow-turning wireframe solid — a real centerpiece "object",
     rendered as thin edges (the hairline aesthetic, in 3D). */
  wireframe(THREE, colors, opts) {
    const group = new THREE.Group();
    const detail = opts.detail ?? 1;
    const geo = new THREE.IcosahedronGeometry(1.15, detail);

    const edges = new THREE.LineSegments(
      new THREE.EdgesGeometry(geo),
      new THREE.LineBasicMaterial({ color: new THREE.Color().setRGB(...colors.ink, THREE.SRGBColorSpace), transparent: true, opacity: 0.9 })
    );
    // A faint inner solid gives the edges something to sit on (depth, not glow).
    const fill = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({
      color: new THREE.Color().setRGB(...colors.bg2, THREE.SRGBColorSpace),
      transparent: true, opacity: 0.55, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 1,
    }));
    group.add(fill, edges);

    return {
      object: group,
      tick(t, p) {
        group.rotation.y = t * 0.18 + p.x * 0.5;
        group.rotation.x = -0.25 + Math.sin(t * 0.12) * 0.12 + p.y * 0.4;
      },
    };
  },

  /* A sparse depth lattice — a field of fine points on a few planes
     that parallaxes to the pointer. Reads as "instrument depth"
     behind a hero, NOT an aurora. Low count, monochrome + a few
     accent nodes. */
  lattice(THREE, colors, opts) {
    const group = new THREE.Group();
    const N = opts.density ?? 420;
    const pos = new Float32Array(N * 3);
    const col = new Float32Array(N * 3);
    const base = colors.faint, accent = colors.ink;
    for (let i = 0; i < N; i++) {
      // Distribute on a gently warped slab — feels gridded, not random soup.
      const gx = (Math.floor(i % 21) / 20 - 0.5) * 9;
      const gy = (Math.floor((i / 21) % 21) / 20 - 0.5) * 5;
      const gz = (Math.floor(i / 441) / 1 - 0.5) * 4 - Math.random() * 2;
      pos[i * 3] = gx + (Math.random() - 0.5) * 0.3;
      pos[i * 3 + 1] = gy + (Math.random() - 0.5) * 0.3;
      pos[i * 3 + 2] = gz;
      const isAccent = i % 17 === 0;            // a disciplined few, not rainbow
      const c = isAccent ? accent : base;
      col[i * 3] = c[0]; col[i * 3 + 1] = c[1]; col[i * 3 + 2] = c[2];
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
    const pts = new THREE.Points(geo, new THREE.PointsMaterial({
      size: 0.045, sizeAttenuation: true, vertexColors: true,
      transparent: true, opacity: 0.85, depthWrite: false,
    }));
    group.add(pts);

    return {
      object: group,
      tick(t, p) {
        group.rotation.y = Math.sin(t * 0.06) * 0.18 + p.x * 0.35;
        group.rotation.x = Math.cos(t * 0.05) * 0.08 + p.y * 0.2;
      },
    };
  },

  /* DeFi multi-chain network — a hub (portfolio) linked to chain nodes,
     each linked to token satellites, with bright packets streaming along
     the edges (live transactions). This VISUALIZES the page's thesis
     ("your assets across chains, unified"), so the depth carries meaning.
     Glowing nodes + hairline edges + moving packets; token-driven, no
     rainbow. Reads unmistakably as a live on-chain network. */
  network(THREE, colors, opts) {
    const group = new THREE.Group();
    const glow = makeGlow(THREE);
    const C = (rgb) => new THREE.Color().setRGB(rgb[0], rgb[1], rgb[2], THREE.SRGBColorSpace);
    const ink = C(colors.ink), paper = C(colors.paper), faint = C(colors.faint);

    const nodes = [];                       // {x,y,z,size,color}
    const edges = [];                       // [aIndex, bIndex]
    const add = (x, y, z, size, color) => { nodes.push({ x, y, z, size, color }); return nodes.length - 1; };

    const HUB = add(0, 0, 0, 0.62, ink);    // the portfolio
    const CHAINS = opts.chains ?? 4;        // ETH · Base · Polygon · Solana
    const TOKENS = opts.tokens ?? 3;
    for (let i = 0; i < CHAINS; i++) {
      const a = (i / CHAINS) * Math.PI * 2 + 0.4;
      const cx = Math.cos(a) * 2.0, cy = Math.sin(a) * 0.75, cz = Math.sin(a) * 1.3;
      const ci = add(cx, cy, cz, 0.4, ink);
      edges.push([HUB, ci]);
      for (let j = 0; j < TOKENS; j++) {
        const aa = a + (j - 1) * 0.5;
        const rr = 1.4 + 0.55 * j;
        const tx = cx + Math.cos(aa) * rr * 0.9;
        const ty = cy + (j - 1) * 0.7 + Math.sin(aa) * 0.4;
        const tz = cz + Math.sin(aa * 1.4) * 1.2 - 0.4;
        edges.push([ci, add(tx, ty, tz, 0.22, faint)]);
      }
    }

    // glowing nodes (additive sprites)
    nodes.forEach((n) => {
      const sp = new THREE.Sprite(new THREE.SpriteMaterial({
        map: glow, color: n.color, transparent: true,
        blending: THREE.AdditiveBlending, depthWrite: false, opacity: 0.95,
      }));
      sp.position.set(n.x, n.y, n.z);
      sp.scale.setScalar(n.size);
      group.add(sp);
    });

    // hairline edges
    const epos = new Float32Array(edges.length * 6);
    edges.forEach((e, k) => {
      const a = nodes[e[0]], b = nodes[e[1]];
      epos.set([a.x, a.y, a.z, b.x, b.y, b.z], k * 6);
    });
    const egeo = new THREE.BufferGeometry();
    egeo.setAttribute('position', new THREE.BufferAttribute(epos, 3));
    group.add(new THREE.LineSegments(egeo, new THREE.LineBasicMaterial({
      color: ink, transparent: true, opacity: 0.3, blending: THREE.AdditiveBlending, depthWrite: false,
    })));

    // packets travelling along the edges (transactions)
    const pgeo = new THREE.BufferGeometry();
    pgeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(edges.length * 3), 3));
    group.add(new THREE.Points(pgeo, new THREE.PointsMaterial({
      map: glow, color: paper, size: 0.5, sizeAttenuation: true,
      transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, opacity: 0.95,
    })));
    const speed = edges.map((_, i) => 0.16 + (i % 5) * 0.05);
    const phase = edges.map((_, i) => (i * 0.137) % 1);

    group.rotation.x = -0.18;
    return {
      object: group,
      tick(t, p) {
        group.rotation.y = t * 0.12 + p.x * 0.45;
        group.rotation.x = -0.18 + Math.sin(t * 0.08) * 0.08 + p.y * 0.3;
        const arr = pgeo.attributes.position.array;
        for (let k = 0; k < edges.length; k++) {
          const tt = (phase[k] + t * speed[k]) % 1;
          const a = nodes[edges[k][0]], b = nodes[edges[k][1]];
          arr[k * 3] = a.x + (b.x - a.x) * tt;
          arr[k * 3 + 1] = a.y + (b.y - a.y) * tt;
          arr[k * 3 + 2] = a.z + (b.z - a.z) * tt;
        }
        pgeo.attributes.position.needsUpdate = true;
      },
    };
  },

  /* A realistic metallic token/coin — a beveled disc + rim, lit so it reads
     as a struck coin (a real product object for a foreground centerpiece).
     Token-driven color; lights travel with the group. */
  coin(THREE, colors, opts) {
    const group = new THREE.Group();
    const ink = new THREE.Color().setRGB(colors.ink[0], colors.ink[1], colors.ink[2], THREE.SRGBColorSpace);
    const disc = new THREE.Mesh(
      new THREE.CylinderGeometry(1.15, 1.15, 0.2, 72),
      new THREE.MeshStandardMaterial({ color: ink, metalness: 0.6, roughness: 0.28 })
    );
    disc.rotation.x = Math.PI / 2;          // faces toward the camera (Z)
    const rim = new THREE.Mesh(
      new THREE.TorusGeometry(1.15, 0.045, 18, 90),
      new THREE.MeshStandardMaterial({ color: ink, metalness: 0.85, roughness: 0.22 })
    );
    const inner = new THREE.Mesh(
      new THREE.TorusGeometry(0.78, 0.02, 14, 80),
      new THREE.MeshStandardMaterial({ color: ink, metalness: 0.7, roughness: 0.3 })
    );
    group.add(disc, rim, inner);

    const key = new THREE.DirectionalLight(0xffffff, 2.4); key.position.set(3, 4, 5);
    const fill = new THREE.DirectionalLight(0xffffff, 0.9); fill.position.set(-4, -1, 2);
    const rimL = new THREE.DirectionalLight(0xffffff, 1.4); rimL.position.set(-2, 3, -4);
    group.add(new THREE.AmbientLight(0xffffff, 0.45), key, fill, rimL);

    return {
      object: group,
      tick(t, p) {
        group.rotation.y = t * 0.5 + p.x * 0.7;
        group.rotation.x = Math.sin(t * 0.3) * 0.14 + p.y * 0.3;
      },
    };
  },
};

/* ---- Mount one scene onto one canvas ----------------------- */
export function mountScene(canvas, options = {}) {
  if (!canvas || !webglSupported()) return null;  // → static fallback shows

  const opts = Object.assign({ scene: 'wireframe', accent: '--ink' }, options);
  let raf = 0, alive = true, three = null, ctx = null, t0 = 0;
  const pointer = { x: 0, y: 0, tx: 0, ty: 0 };

  // Listen on window, not the canvas, so a background layer can keep
  // pointer-events:none (never blocking clicks) and still parallax.
  const onPointer = (e) => {
    const r = canvas.getBoundingClientRect();
    if (!r.width || !r.height) return;
    pointer.tx = ((e.clientX - r.left) / r.width - 0.5) * 2;
    pointer.ty = ((e.clientY - r.top) / r.height - 0.5) * 2;
  };

  async function boot() {
    let THREE;
    try { THREE = await import(/* @vite-ignore */ THREE_URL); }
    catch (_) { return; }                           // offline/CSP → fallback stays
    if (!alive) return;

    const colors = {
      ink:   resolveColor('var(' + opts.accent + ')', [0.62, 0.4, 0.95]),
      bg:    resolveColor('var(--bg)',    [0.08, 0.08, 0.1]),
      bg2:   resolveColor('var(--bg-2)',  [0.11, 0.11, 0.13]),
      faint: resolveColor('var(--faint)', [0.4, 0.4, 0.45]),
      paper: resolveColor('var(--paper)', [0.92, 0.92, 0.95]),
    };

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'low-power' });
    renderer.setClearColor(0x000000, 0);            // transparent → sits over real CSS bg
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
    camera.position.z = 5;

    const build = (SCENES[opts.scene] || SCENES.wireframe)(THREE, colors, opts);
    scene.add(build.object);

    const resize = () => {
      const w = canvas.clientWidth || 1, h = canvas.clientHeight || 1;
      renderer.setPixelRatio(Math.min(devicePixelRatio || 1, MAX_DPR));
      renderer.setSize(w, h, false);
      camera.aspect = w / h; camera.updateProjectionMatrix();
    };
    const ro = new ResizeObserver(resize); ro.observe(canvas); resize();

    const renderFrame = (tSec) => {
      pointer.x += (pointer.tx - pointer.x) * 0.06;
      pointer.y += (pointer.ty - pointer.y) * 0.06;
      build.tick(tSec, pointer);
      renderer.render(scene, camera);
    };

    if (REDUCED) {                                  // one static, composed frame; no loop
      renderFrame(0.6);
      ctx = { dispose() { ro.disconnect(); renderer.dispose(); } };
      return;
    }

    window.addEventListener('pointermove', onPointer, { passive: true });
    const loop = (now) => {
      if (!alive) return;
      if (!t0) t0 = now;
      renderFrame((now - t0) / 1000);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    const onVis = () => {                           // don't burn cycles on a hidden tab
      if (document.hidden) { cancelAnimationFrame(raf); raf = 0; }
      else if (!raf && alive) { t0 = 0; raf = requestAnimationFrame(loop); }
    };
    document.addEventListener('visibilitychange', onVis);

    ctx = {
      dispose() {
        cancelAnimationFrame(raf);
        document.removeEventListener('visibilitychange', onVis);
        window.removeEventListener('pointermove', onPointer);
        ro.disconnect();
        scene.traverse((o) => { o.geometry?.dispose?.(); o.material?.dispose?.(); });
        renderer.dispose();
      },
    };
  }

  // Lazy: only spin Three.js up when the canvas is near the viewport.
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      if (entries.some((e) => e.isIntersecting)) { io.disconnect(); boot(); }
    }, { rootMargin: '200px' });
    io.observe(canvas);
    three = { _io: io };
  } else {
    boot();
  }

  return {
    destroy() {
      alive = false;
      three?._io?.disconnect?.();
      ctx?.dispose?.();
    },
  };
}

/* ---- Auto-wire: any <canvas data-dd3d="..."> on the page ----
   Opt-in by attribute so the module is safe to drop in globally. */
function autoMount() {
  document.querySelectorAll('canvas[data-dd3d]').forEach((cv) => {
    mountScene(cv, {
      scene: cv.dataset.dd3d || 'wireframe',
      accent: cv.dataset.accent || '--ink',
      density: cv.dataset.density ? +cv.dataset.density : undefined,
      detail: cv.dataset.detail ? +cv.dataset.detail : undefined,
      chains: cv.dataset.chains ? +cv.dataset.chains : undefined,
      tokens: cv.dataset.tokens ? +cv.dataset.tokens : undefined,
    });
  });
}
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', autoMount);
} else {
  autoMount();
}
