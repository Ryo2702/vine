import assert from 'node:assert/strict'
import { chromium } from 'playwright'

const browser = await chromium.launch({ headless: true })
try {
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } })
  const errors = []
  page.on('pageerror', error => errors.push(error.message))
  await page.goto(process.env.VINE_URL || 'http://localhost:5173')
  await page.waitForTimeout(500)
  assert.equal(await page.locator('.left-vine').count(), 1)
  assert.equal(await page.locator('.right-vine').count(), 0)
  assert(await page.locator('[data-name="mainStem"]').evaluate(path => {
    const length = path.getTotalLength()
    let previous = path.getPointAtLength(0).x
    for (let d = 1; d <= length; d++) {
      const x = path.getPointAtLength(d).x
      if (x > previous) return false
      previous = x
    }
    return path.getPointAtLength(0).x > 1100 && path.getPointAtLength(length).x < 100 && path.getScreenCTM().a > 0
  }), 'Native path geometry must travel right to left without reflection')
  const state = () => page.locator('[data-name]').evaluateAll(paths => Object.fromEntries(paths.map(p => [p.dataset.name, { remaining: parseFloat(getComputedStyle(p).strokeDashoffset), length: p.getTotalLength() * Math.hypot(p.getScreenCTM().a, p.getScreenCTM().b) }])))
  let paths = await state()
  assert(paths.mainStem.remaining > 0 && paths.mainStem.remaining < paths.mainStem.length, 'Stem must physically draw')
  assert(Math.abs(paths.branch01.remaining - paths.branch01.length) < .1, 'Branch must wait for stem')
  await page.waitForTimeout(2000)
  paths = await state()
  assert(paths.branch01.remaining < paths.branch01.length, 'First branch should now grow')
  assert(Math.abs(paths.branch04.remaining - paths.branch04.length) < .1, 'Later branches must wait')
  // Move the actual component offscreen, then verify its current draw position holds.
  await page.locator('.left-vine').evaluate(el => { el.style.transform = 'translateY(2000px)' })
  await page.waitForTimeout(200)
  const paused = (await state()).mainStem.remaining
  await page.waitForTimeout(400)
  assert.equal((await state()).mainStem.remaining, paused, 'Offscreen growth must pause')
  await page.locator('.left-vine').evaluate(el => { el.style.transform = '' })
  await page.waitForFunction(() => getComputedStyle(document.querySelector('[data-details]')).opacity === '1', null, { timeout: 20000 })
  assert.equal((await state()).mainStem.remaining, 0)
  assert(await page.locator('[data-name]').evaluateAll(paths => paths.every(p => getComputedStyle(p).strokeDasharray === 'none')), 'Completed strokes must have no gaps at any viewport scale')
  await page.screenshot({ path: '/tmp/left-vine-desktop.png' })
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.reload()
  await page.waitForTimeout(300)
  paths = await state()
  assert(Object.values(paths).every(p => p.remaining === 0), 'Reduced motion must immediately complete every path')
  assert.equal(await page.locator('canvas').count(), 0, 'Reduced motion must not initialize WebGL')
  assert.equal(await page.locator('[data-name="mainStem"]').count(), 1, 'Exactly one vine')
  await page.setViewportSize({ width: 390, height: 844 })
  assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), 'Mobile must not overflow')
  await page.screenshot({ path: '/tmp/left-vine-mobile.png' })
  assert.deepEqual(errors, [])
  console.log('Passed: native leftward geometry, single vine, drawing, branch ordering, offscreen pause, completion, reduced motion, mobile, and runtime errors.')
} finally { await browser.close() }
