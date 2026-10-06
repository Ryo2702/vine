# Living ornamental vines

`npm install` · `npm run dev` · `npm run build`

Import `src/components/DecorativeVine/CombinedVine.vue` into a Vue 3 app. The demo displays two visually separate vines growing outward from independent roots, with a clear center gap of about 12% of the component width. There are 27 leaves per side, 1.3px stems, and 1.05px tendrils. Both sides share one SVG, GSAP timeline, Motion drift, and demand-rendered Three.js environment. Geometry is not mirrored. The standalone `LeftVine.vue` and `RightVine.vue` remain available separately (their names describe growth direction).

The component and demo are transparent. Set `--vine-color` to customize the green. The ornament is decorative and hidden from assistive technology.

The combined composition runs at 2.6× the standalone speed: both continuous stems draw in about 3.3 seconds, and the full reveal finishes in about 5 seconds. Branch start times use measured parent arc lengths; leaves unfold at their attachment points, and decorative details finish after all growth. GSAP owns growth, Motion owns the subsequent 1.5px drift, and lazy-loaded Three.js renders faint dust with demand-driven pointer parallax. No textures or vine meshes are used.

Offscreen and hidden-tab motion pauses. Reduced motion immediately completes growth and disables ambient movement and WebGL. Unmount removes observers, listeners, animations, and GPU resources. WebGL failure leaves the SVG functional.

Run `npm test` with the dev server running (or set `VINE_URL`). The browser check covers growth ordering, reduced motion, mobile overflow, offscreen pause, and console errors. Install the browser once with `npx playwright install chromium` if necessary.

API references: [GSAP context](https://gsap.com/docs/v3/GSAP/gsap.context()), [Motion animate](https://motion.dev/docs/animate), [Three.js renderer](https://threejs.org/docs/pages/WebGLRenderer.html).
