# Living ornamental vines

`npm install` · `npm run dev` · `npm run build`

Import `src/components/DecorativeVine/LeftVine.vue` into a Vue 3 app. The demo displays only this left-growing vine, with a root on the right. `RightVine.vue` remains available separately. Each has its own hand-authored geometry; neither uses reflection. Both share thin strokes, botanical details, animation helpers, and `vine.css`.

The component container is responsive and transparent; the demo alone supplies a pale background. Set `--vine-color` to customize the green. The ornament is decorative and hidden from assistive technology.

One continuous root-to-tip SVG stem draws over 8.5 seconds. Branch start times use measured parent arc lengths; leaves unfold at their attachment points, and decorative details finish the sequence. GSAP owns growth, Motion owns the subsequent 1.5px drift, and lazy-loaded Three.js renders faint dust with demand-driven pointer parallax. No textures or vine meshes are used.

Offscreen and hidden-tab motion pauses. Reduced motion immediately completes growth and disables ambient movement and WebGL. Unmount removes observers, listeners, animations, and GPU resources. WebGL failure leaves the SVG functional.

Run `npm test` with the dev server running (or set `VINE_URL`). The browser check covers growth ordering, reduced motion, mobile overflow, offscreen pause, and console errors. Install the browser once with `npx playwright install chromium` if necessary.

API references: [GSAP context](https://gsap.com/docs/v3/GSAP/gsap.context()), [Motion animate](https://motion.dev/docs/animate), [Three.js renderer](https://threejs.org/docs/pages/WebGLRenderer.html).
