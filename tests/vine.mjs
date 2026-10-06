import assert from 'node:assert/strict'
import { chromium } from 'playwright'

const browser = await chromium.launch({ headless: true })
try {
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } })
  const errors = []
  page.on('pageerror', error => errors.push(error.message))
  await page.clock.install()
  await page.clock.pauseAt(new Date(Date.now() + 1000))
  await page.goto(process.env.VINE_URL || 'http://localhost:5173')
  await page.clock.runFor(200)
  assert.equal(await page.locator('.combined-vine svg').count(), 1)
  assert.equal(await page.locator('[data-root]').count(), 2)
  assert.equal(await page.locator('[data-leaf]').count(), 54)
  for (const side of ['left', 'right']) {
    assert(await page.locator(`[data-name="${side}MainStem"]`).evaluate((path, side) => {
      const length = path.getTotalLength()
      const direction = side === 'left' ? -1 : 1
      let previous = path.getPointAtLength(0).x
      for (let d = 1; d <= length; d++) {
        const x = path.getPointAtLength(d).x
        if ((x - previous) * direction < 0) return false
        previous = x
      }
      const matrix = path.getCTM()
      const start = path.getPointAtLength(0).matrixTransform(matrix)
      const end = path.getPointAtLength(length).matrixTransform(matrix)
      const center = path.ownerSVGElement.clientWidth / 2
      return matrix.a > 0 && (start.x - center) * direction > 30 && Math.abs(end.x - center) > Math.abs(start.x - center)
    }, side), `${side} stem must grow outward without reflection`)
  }
  const state = () => page.locator('[data-name]').evaluateAll(paths => Object.fromEntries(paths.map(p => [p.dataset.name, { remaining: parseFloat(getComputedStyle(p).strokeDashoffset), length: p.getTotalLength() * Math.hypot(p.getScreenCTM().a, p.getScreenCTM().b) }])))
  let paths = await state()
  assert(paths.leftMainStem.remaining > 0 && paths.leftMainStem.remaining < paths.leftMainStem.length, 'Stem must physically draw')
  assert(Math.abs(paths.leftBranch01.remaining - paths.leftBranch01.length) < .1, 'Branch must wait for stem')
  await page.clock.runFor(1000)
  paths = await state()
  assert(paths.leftBranch01.remaining < paths.leftBranch01.length, 'First branch should now grow')
  assert(Math.abs(paths.leftBranch04.remaining - paths.leftBranch04.length) < .1, 'Later branches must wait')
  // Move the actual component offscreen, then verify its current draw position holds.
  await page.locator('.combined-vine').evaluate(el => { el.style.transform = 'translateY(2000px)' })
  await page.clock.runFor(200)
  const paused = (await state()).leftMainStem.remaining
  await page.clock.runFor(400)
  assert.equal((await state()).leftMainStem.remaining, paused, 'Offscreen growth must pause')
  await page.locator('.combined-vine').evaluate(el => { el.style.transform = '' })
  await page.clock.runFor(5000)
  assert.equal(await page.locator('[data-details]').evaluate(el => getComputedStyle(el).opacity), '1', 'Fast reveal must finish within six seconds of active time')
  assert.equal((await state()).leftMainStem.remaining, 0)
  assert(await page.locator('[data-name]').evaluateAll(paths => paths.every(p => getComputedStyle(p).strokeDasharray === 'none')), 'Completed strokes must have no gaps at any viewport scale')
  const gap = await page.locator('[data-root]').evaluateAll(roots => {
    const x = roots.map(root => root.getBoundingClientRect().x).sort((a, b) => a - b)
    return (x[1] - x[0]) / roots[0].ownerSVGElement.clientWidth
  })
  assert(gap > .11 && gap < .13, 'Separate roots must leave a clear center gap')
  await page.screenshot({ path: '/tmp/combined-vine-desktop.png', omitBackground: true })
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.reload()
  await page.clock.runFor(300)
  paths = await state()
  assert(Object.values(paths).every(p => p.remaining === 0), 'Reduced motion must immediately complete every path')
  assert.equal(await page.locator('canvas').count(), 0, 'Reduced motion must not initialize WebGL')
  assert.equal(await page.locator('[data-name$="MainStem"]').count(), 2, 'Exactly two outward-growing stems')
  await page.setViewportSize({ width: 390, height: 844 })
  assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), 'Mobile must not overflow')
  await page.screenshot({ path: '/tmp/combined-vine-mobile.png', omitBackground: true })
  assert(await page.locator('body, main, .combined-vine').evaluateAll(elements => elements.every(el => getComputedStyle(el).backgroundColor === 'rgba(0, 0, 0, 0)')), 'Composition and demo must remain transparent')
  assert.deepEqual(errors, [])
  console.log('Passed: native outward geometry, one composition, 54 leaves, drawing, branch ordering, offscreen pause, completion, reduced motion, mobile, and runtime errors.')
} finally { await browser.close() }
