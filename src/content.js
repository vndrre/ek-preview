export const LIVE_APP = 'https://e-kaltsukas-frontend.vercel.app'
/** Expo web — login on juurteel, /login ei ole eraldi marsruut */
export const LIVE_LOGIN = LIVE_APP
export const LIVE_APP_LABEL = 'e-kaltsukas-frontend.vercel.app'
export const REPO =
  'https://github.com/vndrre/e-kaltsukas/tree/front-end-final'

export function icon(name) {
  return `<span class="material-symbols-outlined" aria-hidden="true">${name}</span>`
}

/** Toote- ja profiilipildid mockides */
export const MOCK_IMG = {
  tshirt1: '/screenshots/tshirt-1.png',
  tshirt2: '/screenshots/tshirt-2.png',
  avatarDefault: '/screenshots/avatar-default.png',
  /** Andre päris äpi profiil (kukk) */
  profileAndre: '/screenshots/profile.png',
}

export function mockProductHero() {
  return `<img src="${MOCK_IMG.tshirt1}" alt="" class="mock-img mock-img--hero" loading="lazy" decoding="async" />`
}

export function mockProductThumb() {
  return `<img src="${MOCK_IMG.tshirt2}" alt="" class="mock-img mock-img--thumb" loading="lazy" decoding="async" />`
}

export function mockHomeCard(which = 1) {
  const src = which === 2 ? MOCK_IMG.tshirt2 : MOCK_IMG.tshirt1
  return `<img src="${src}" alt="" class="mock-img mock-img--card" loading="lazy" decoding="async" />`
}

export function mockSellPhoto(which = 1) {
  const src = which === 2 ? MOCK_IMG.tshirt2 : MOCK_IMG.tshirt1
  return `<img src="${src}" alt="" class="mock-img mock-img--photo" loading="lazy" decoding="async" />`
}

export function mockAvatar(who = 'andre') {
  const src = who === 'andre' ? MOCK_IMG.profileAndre : MOCK_IMG.avatarDefault
  return `<img src="${src}" alt="" class="mock-img mock-img--avatar" loading="lazy" decoding="async" />`
}
