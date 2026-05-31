#!/usr/bin/env node
/**
 * Teeb screenshotid live äpist (vajab playwright: npx playwright install chromium).
 *
 *   EK_EMAIL=you@example.com EK_PASSWORD=secret node scripts/capture-screenshots.mjs
 */
import { mkdir } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.dirname(fileURLToPath(import.meta.url))
const OUT = path.join(ROOT, '..', 'public', 'screenshots')
const BASE = process.env.EK_APP_URL || 'https://e-kaltsukas-frontend.vercel.app'
const EMAIL = process.env.EK_EMAIL
const PASSWORD = process.env.EK_PASSWORD

const VIEWPORT = { width: 390, height: 844 }

const routes = [
  ['home.png', '/'],
  ['explore.png', '/explore'],
  ['profile-screen.png', '/profile'],
]

async function main() {
  if (!EMAIL || !PASSWORD) {
    console.error('Set EK_EMAIL and EK_PASSWORD')
    process.exit(1)
  }

  let chromium
  try {
    ;({ chromium } = await import('playwright'))
  } catch {
    console.error('Install: npm i -D playwright && npx playwright install chromium')
    process.exit(1)
  }

  await mkdir(OUT, { recursive: true })
  const browser = await chromium.launch()
  const page = await browser.newPage({ viewport: VIEWPORT })

  await page.goto(BASE, { waitUntil: 'networkidle' })
  await page.getByPlaceholder(/you@example|email/i).fill(EMAIL)
  await page.getByPlaceholder(/\.\.\.\.|password/i).fill(PASSWORD)
  await page.getByRole('button', { name: /login/i }).click()
  await page.waitForURL(/\/(tabs)?\/?$|\/explore|\/profile/, { timeout: 20000 }).catch(() => {})

  for (const [file, route] of routes) {
    await page.goto(`${BASE}${route}`, { waitUntil: 'networkidle' })
    await page.waitForTimeout(800)
    await page.screenshot({ path: path.join(OUT, file) })
    console.log('✓', file)
  }

  await browser.close()
  console.log('\nDone. Add more routes in scripts/capture-screenshots.mjs as needed.')
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
