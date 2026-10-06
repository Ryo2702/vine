import { computed, onMounted, onUnmounted, ref, type Ref } from 'vue'
import gsap from 'gsap'
import { animate } from 'motion'

// Measure attachment distance along the actual curve, not its horizontal span.
function attachment(path: SVGPathElement, x: number, y: number) {
  const length = path.getTotalLength()
  let distance = 0
  let best = Infinity
  for (let d = 0; d <= Math.ceil(length); d++) {
    const point = path.getPointAtLength(Math.min(d, length))
    const error = (point.x - x) ** 2 + (point.y - y) ** 2
    if (error < best) { best = error; distance = Math.min(d, length) }
  }
  return { fraction: distance / length, point: path.getPointAtLength(distance) }
}

export function useVineAnimation(host: Ref<HTMLElement | null>, playbackRate = 1) {
  const finished = ref(false)
  const visible = ref(false)
  const reduced = ref(false)
  const foreground = ref(true)
  const ambient = computed(() => finished.value && visible.value && foreground.value && !reduced.value)
  let dispose = () => {}

  onMounted(() => {
    const element = host.value!
    const svg = element.querySelector('svg')!
    const preference = matchMedia('(prefers-reduced-motion: reduce)')
    const strokes: { path: SVGPathElement; length: number; pixels: number; progress: number }[] = []
    function paint(stroke: typeof strokes[number]) {
      stroke.path.style.strokeDasharray = stroke.progress === 1 ? 'none' : `${stroke.pixels} ${stroke.pixels}`
      stroke.path.style.strokeDashoffset = String(stroke.pixels * (1 - stroke.progress))
    }
    function resizeStrokes() {
      const matrix = svg.getScreenCTM()
      const scale = matrix ? Math.hypot(matrix.a, matrix.b) : 1
      for (const stroke of strokes) { stroke.pixels = stroke.length * scale; paint(stroke) }
    }
    const drift = animate(svg, { y: [0, -1.5, 0] }, { duration: 9, repeat: Infinity, ease: 'easeInOut', autoplay: false })
    let timeline: gsap.core.Timeline
    const ctx = gsap.context(() => {
      const paths = [...element.querySelectorAll<SVGPathElement>('[data-name]')]
      const leaves = [...element.querySelectorAll<SVGGElement>('[data-leaf]')]
      const schedule = new Map<string, { path: SVGPathElement; start: number; duration: number }>()
      timeline = gsap.timeline({ paused: true, onComplete: () => { finished.value = true; sync() } })
      timeline.timeScale(playbackRate)
      gsap.set('[data-root], [data-details]', { opacity: 0 })
      timeline.to('[data-root]', { opacity: 1, duration: .35 }, 0)

      for (const path of paths) {
        const length = path.getTotalLength()
        const parent = schedule.get(path.dataset.parent ?? '')
        const startPoint = path.getPointAtLength(0)
        const start = parent
          ? parent.start + parent.duration * attachment(parent.path, startPoint.x, startPoint.y).fraction + .04
          : .25
        const duration = parent ? Math.max(1.2, length / 66) : 8.5
        schedule.set(path.dataset.name!, { path, start, duration })
        const stroke = { path, length, pixels: length, progress: 0 }
        strokes.push(stroke)
        gsap.set(path, { autoAlpha: 0 })
        // Linear drawing keeps measured parent progress and attachment timing identical.
        timeline.set(path, { autoAlpha: 1 }, start)
        timeline.to(stroke, { progress: 1, duration, ease: 'none', onUpdate: () => paint(stroke) }, start)
      }
      for (const leaf of leaves) {
        const parent = schedule.get(leaf.dataset.parent!)!
        const x = Number(leaf.dataset.x), y = Number(leaf.dataset.y)
        const { fraction, point } = attachment(parent.path, x, y)
        gsap.set(leaf, { x: point.x - x, y: point.y - y, svgOrigin: `${x} ${y}`, scale: .12, rotation: -12, opacity: 0 })
        timeline.to(leaf, { scale: 1, rotation: 0, opacity: 1, duration: 1.5, ease: 'sine.out' }, parent.start + parent.duration * fraction + .2)
      }
      timeline.to('[data-details]', { opacity: 1, duration: 1.6, ease: 'sine.inOut' }, timeline.duration())
    }, element)

    function sync() {
      const playing = visible.value && foreground.value
      if (reduced.value) {
        finished.value = true
        timeline.progress(1, true).pause()
        strokes.forEach(paint)
        drift.pause()
        drift.time = 0
      } else {
        if (!finished.value) playing ? timeline.play() : timeline.pause()
        playing && finished.value ? drift.play() : drift.pause()
      }
    }
    function updatePreference() { reduced.value = preference.matches; sync() }
    function updateVisibility() { foreground.value = !document.hidden; sync() }
    const observer = new IntersectionObserver(([entry]) => { visible.value = entry!.isIntersecting; sync() })
    const resizeObserver = new ResizeObserver(resizeStrokes)
    resizeObserver.observe(element)
    resizeStrokes()
    observer.observe(element)
    preference.addEventListener('change', updatePreference)
    document.addEventListener('visibilitychange', updateVisibility)
    updatePreference()
    updateVisibility()
    svg.style.visibility = 'visible'
    dispose = () => {
      observer.disconnect()
      resizeObserver.disconnect()
      preference.removeEventListener('change', updatePreference)
      document.removeEventListener('visibilitychange', updateVisibility)
      drift.cancel()
      ctx.revert()
      for (const { path } of strokes) { path.style.removeProperty('stroke-dasharray'); path.style.removeProperty('stroke-dashoffset') }
    }
  })
  onUnmounted(() => dispose())
  return { ambient }
}
