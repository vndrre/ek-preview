import './style.css'
import { getSlides } from './slides.js'
import { LIVE_LOGIN, REPO, icon } from './content.js'

const slides = getSlides()

function renderSlide(slide, index) {
  const variant = slide.variant || 'default'
  const layout = slide.layout || ''
  const isActive = index === 0 ? ' is-active' : ''
  const layoutClass =
    layout === 'stack-center'
      ? ' slide--stack-center'
      : layout === 'tech-fill'
        ? ' slide--tech-fill'
        : layout === 'team-table'
          ? ' slide--team-table'
          : layout
          ? ` slide--${layout.split(' ')[0].replace('-intro', '')}`
          : ''
  const textOnlyClass =
    !layout || layout === 'stack-center' ? ' slide--text' : ''

  const header = slide.variant === 'title'
    ? `
      <p class="slide-tag">${slide.tag}</p>
      <h1 class="slide-title slide-title--hero">${slide.title}</h1>
      ${slide.subtitle ? `<p class="slide-subtitle">${slide.subtitle}</p>` : ''}
    `
    : `
      <p class="slide-tag">${slide.tag}</p>
      <h2 class="slide-title">${slide.title}</h2>
    `

  const inner =
    layout === 'two-col'
      ? `
      <div class="slide-layout slide-layout--two-col">
        <div class="slide-main">${slide.body}</div>
        ${slide.aside ? `<aside class="slide-aside">${slide.aside}</aside>` : ''}
      </div>
    `
      : `<div class="slide-main">${slide.body}</div>`

  return `
    <section
      class="slide slide--${variant}${layoutClass}${textOnlyClass}${isActive}"
      data-slide="${index}"
      aria-hidden="${index !== 0}"
      role="group"
      aria-roledescription="slide"
      aria-label="${index + 1} / ${slides.length}: ${slide.title}"
    >
      <div class="slide-inner">
        <header class="slide-header">${header}</header>
        <div class="slide-body">${inner}</div>
      </div>
    </section>
  `
}

function renderDeck() {
  return `
    <div class="deck" id="deck">
      <div class="deck-progress" id="progress" role="progressbar" aria-valuemin="1" aria-valuemax="${slides.length}" aria-valuenow="1"></div>

      <div class="deck-slides" id="slides">
        ${slides.map(renderSlide).join('')}
      </div>

      <nav class="deck-ui" aria-label="Esitluse juhtimine">
        <button type="button" class="deck-btn deck-btn--prev" id="btn-prev" aria-label="Eelmine slaid" disabled>
          ${icon('chevron_left')}
        </button>

        <div class="deck-meta">
          <div class="deck-dots" id="dots" role="tablist">
            ${slides
              .map(
                (_, i) =>
                  `<button type="button" class="deck-dot${i === 0 ? ' is-active' : ''}" data-goto="${i}" role="tab" aria-label="Slaid ${i + 1}" aria-selected="${i === 0}"></button>`
              )
              .join('')}
          </div>
          <span class="deck-counter" id="counter">1 / ${slides.length}</span>
        </div>

        <button type="button" class="deck-btn deck-btn--next" id="btn-next" aria-label="Järgmine slaid">
          ${icon('chevron_right')}
        </button>
      </nav>

      <div class="deck-hit deck-hit--prev" id="hit-prev" aria-hidden="true"></div>
      <div class="deck-hit deck-hit--next" id="hit-next" aria-hidden="true"></div>

    </div>
  `
}

document.querySelector('#app').innerHTML = renderDeck()

let current = 0
const total = slides.length

const slideEls = [...document.querySelectorAll('.slide')]
const progressEl = document.getElementById('progress')
const counterEl = document.getElementById('counter')
const dotsEl = document.getElementById('dots')
const btnPrev = document.getElementById('btn-prev')
const btnNext = document.getElementById('btn-next')
const hitPrev = document.getElementById('hit-prev')
const hitNext = document.getElementById('hit-next')

function goTo(index) {
  if (index < 0 || index >= total || index === current) return

  slideEls[current].classList.remove('is-active')
  slideEls[current].setAttribute('aria-hidden', 'true')

  current = index

  slideEls[current].classList.add('is-active')
  slideEls[current].setAttribute('aria-hidden', 'false')

  const pct = ((current + 1) / total) * 100
  progressEl.style.width = `${pct}%`
  progressEl.setAttribute('aria-valuenow', String(current + 1))
  counterEl.textContent = `${current + 1} / ${total}`

  btnPrev.disabled = current === 0
  btnNext.disabled = current === total - 1

  dotsEl.querySelectorAll('.deck-dot').forEach((dot, i) => {
    const active = i === current
    dot.classList.toggle('is-active', active)
    dot.setAttribute('aria-selected', active ? 'true' : 'false')
    if (active) {
      dot.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
    }
  })

  history.replaceState(null, '', `#${current + 1}`)
}

function next() {
  goTo(current + 1)
}

function prev() {
  goTo(current - 1)
}

btnPrev.addEventListener('click', prev)
btnNext.addEventListener('click', next)
hitPrev.addEventListener('click', prev)
hitNext.addEventListener('click', next)

dotsEl.addEventListener('click', (e) => {
  const btn = e.target.closest('[data-goto]')
  if (btn) goTo(Number(btn.dataset.goto))
})

document.addEventListener('keydown', (e) => {
  if (e.target.closest('a, input, textarea, button.deck-dot')) return

  switch (e.key) {
    case 'ArrowRight':
    case 'ArrowDown':
    case ' ':
    case 'PageDown':
      e.preventDefault()
      next()
      break
    case 'ArrowLeft':
    case 'ArrowUp':
    case 'PageUp':
      e.preventDefault()
      prev()
      break
    case 'Home':
      e.preventDefault()
      goTo(0)
      break
    case 'End':
      e.preventDefault()
      goTo(total - 1)
      break
    default:
      break
  }
})

let touchStartX = 0
document.getElementById('deck').addEventListener(
  'touchstart',
  (e) => {
    touchStartX = e.changedTouches[0].screenX
  },
  { passive: true }
)
document.getElementById('deck').addEventListener(
  'touchend',
  (e) => {
    const dx = e.changedTouches[0].screenX - touchStartX
    if (Math.abs(dx) < 50) return
    if (dx < 0) next()
    else prev()
  },
  { passive: true }
)

const hash = Number.parseInt(location.hash.replace('#', ''), 10)
if (hash >= 1 && hash <= total) {
  goTo(hash - 1)
} else {
  progressEl.style.width = `${(1 / total) * 100}%`
}

document.body.classList.add('is-deck')

if (total > 18) {
  dotsEl.classList.add('deck-dots--many')
}
