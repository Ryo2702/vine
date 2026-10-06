import { onMounted, onUnmounted, watch, type Ref } from 'vue'

export function useVineEnvironment(host: Ref<HTMLElement | null>, active: Readonly<Ref<boolean>>) {
  let disposed = false
  let dispose = () => {}
  onMounted(() => {
    // Load WebGL only after growth; reduced-motion visitors never load Three.js.
    const stop = watch(active, async (enabled) => {
      if (!enabled) return
      stop()
      const THREE = await import('three').catch(() => null)
      if (!THREE) return
      if (disposed || !host.value) return
      const element = host.value
      let renderer: InstanceType<typeof THREE.WebGLRenderer>
      try { renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false, powerPreference: 'low-power' }) }
      catch { return } // SVG remains complete when WebGL is unavailable.
      renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5))
      renderer.setClearColor(0x000000, 0)
      renderer.domElement.setAttribute('aria-hidden', 'true')
      element.prepend(renderer.domElement)
      const scene = new THREE.Scene()
      const camera = new THREE.OrthographicCamera(-600, 600, 230, -230, .1, 100)
      camera.position.z = 10
      const positions = new Float32Array(18 * 3)
      for (let i = 0; i < 18; i++) {
        positions[i * 3] = Math.sin(i * 127.1) * 530
        positions[i * 3 + 1] = Math.cos(i * 311.7) * 135
        positions[i * 3 + 2] = Math.sin(i * 73.3) * 2
      }
      const geometry = new THREE.BufferGeometry()
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
      const material = new THREE.ShaderMaterial({
        transparent: true, depthWrite: false,
        uniforms: { pixelRatio: { value: renderer.getPixelRatio() } },
        vertexShader: 'uniform float pixelRatio; void main() { gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); gl_PointSize = 3.0 * pixelRatio; }',
        fragmentShader: 'void main() { float a = 1.0 - smoothstep(0.0, 0.5, length(gl_PointCoord - vec2(0.5))); gl_FragColor = vec4(0.40, 0.68, 0.28, a * 0.20); }',
      })
      const dust = new THREE.Points(geometry, material)
      scene.add(dust)
      let frame = 0, lastTime = 0
      let targetX = 0, targetY = 0
      function render(time: number) {
        frame = 0
        if (!active.value || disposed) return
        const blend = 1 - Math.exp(-Math.min(time - lastTime, 50) / 180)
        lastTime = time
        dust.position.x += (targetX - dust.position.x) * blend
        dust.position.y += (targetY - dust.position.y) * blend
        renderer.render(scene, camera)
        if (Math.abs(targetX - dust.position.x) + Math.abs(targetY - dust.position.y) > .015) request()
      }
      function request() { if (active.value && !frame) frame = requestAnimationFrame(render) }
      function pointer(event: PointerEvent) {
        if (event.pointerType !== 'mouse') return
        const bounds = element.getBoundingClientRect()
        targetX = ((event.clientX - bounds.left) / bounds.width - .5) * 3
        targetY = -((event.clientY - bounds.top) / bounds.height - .5) * 3
        request()
      }
      function leave() { targetX = targetY = 0; request() }
      const resize = new ResizeObserver(() => {
        renderer.setSize(element.clientWidth, element.clientHeight, false)
        request()
      })
      resize.observe(element)
      element.addEventListener('pointermove', pointer)
      element.addEventListener('pointerleave', leave)
      const stopActive = watch(active, (enabled) => {
        renderer.domElement.style.visibility = enabled ? 'visible' : 'hidden'
        if (enabled) request()
        else { cancelAnimationFrame(frame); frame = 0 }
      }, { immediate: true })
      dispose = () => {
        stopActive()
        cancelAnimationFrame(frame)
        resize.disconnect()
        element.removeEventListener('pointermove', pointer)
        element.removeEventListener('pointerleave', leave)
        geometry.dispose()
        material.dispose()
        renderer.dispose()
        renderer.domElement.remove()
      }
    })
    dispose = stop
  })
  onUnmounted(() => { disposed = true; dispose() })
}
