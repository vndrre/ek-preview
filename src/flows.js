import {
  icon,
  mockAvatar,
  mockHomeCard,
  mockProductHero,
  mockProductThumb,
  mockSellPhoto,
} from './content.js'
import { resolveFlowVisual, screenshotDevice } from './screenshots.js'

const thumb = () => `<div class="mock-thumb mock-thumb--img">${mockProductThumb()}</div>`
const thumbRound = (who = 'andre', large = false) => {
  const lg = large ? ' mock-thumb--lg' : ''
  return `<div class="mock-thumb mock-thumb--round mock-thumb--img${lg}">${mockAvatar(who)}</div>`
}

/** Tume teema + telefoni proportsioon */
const D = 'mock mock--dark mock--device'
const DModal = 'mock mock--dark mock--device mock--modal'
/** Tehingu diagramm — lai kaart, mitte 9:16 telefon */
const DIAGRAM = 'mock mock--dark mock-users-diagram'

export const flowMocks = {
  login: `
    <div class="${D} mock--login">
      <div class="mock-login-top">
        <p class="mock-label">E-Kaltsukas</p>
        <span class="mock-link mock-link--caps">Register ${icon('arrow_forward')}</span>
      </div>
      <p class="mock-login-welcome">Welcome back</p>
      <p class="mock-muted mock-login-sub">Log in with your email and password.</p>
      <p class="mock-field-label">EMAIL ADDRESS</p>
      <p class="mock-field mock-field--input">aleppik7@gmail.com</p>
      <div class="mock-field-row">
        <p class="mock-field-label">PASSWORD</p>
        <span class="mock-link mock-link--caps">Show</span>
      </div>
      <p class="mock-field mock-field--input">••••••••••••••••</p>
      <p class="mock-link mock-link--caps mock-link--end">Forgot password?</p>
      <div class="mock-btn mock-btn--wide mock-btn--caps">Login</div>
      <p class="mock-muted mock-login-footer">No account yet? <span class="mock-link">Register</span></p>
    </div>
  `,

  home: `
    <div class="${D}">
      <div class="mock-bar">
        <span>${icon('menu')}</span>
        <span class="mock-logo">E-Kaltsukas</span>
        <span class="mock-bag">${icon('shopping_bag')}<span class="mock-badge">1</span></span>
      </div>
      <div class="mock-row-head"><span class="mock-h" style="margin:0">New Arrivals</span><span class="mock-link">View All</span></div>
      <div class="mock-product-card">
        <div class="mock-tile mock-tile--product">${mockHomeCard(1)}</div>
        <p class="mock-product-name">Black T-Shirt</p>
        <p class="mock-price">€5.00</p>
      </div>
      <div class="mock-tabbar">${tabBar('home')}</div>
    </div>
  `,

  explore: `
    <div class="${D}">
      <p class="mock-title-sm" style="margin-bottom:4px">Explore</p>
      <p class="mock-muted">Set filters to unlock a personalized feed</p>
      <p class="mock-field-label">Clothing for</p>
      <div class="mock-chips mock-chips--row">
        <span class="mock-chip">Women</span>
        <span class="mock-chip on">Men</span>
        <span class="mock-chip">Kids</span>
      </div>
      <p class="mock-field-label">Category</p>
      <div class="mock-select">t-shirts ▾</div>
      <p class="mock-field-label">Size</p>
      <div class="mock-select">M, L ▾</div>
      <div class="mock-tabbar">${tabBar('explore')}</div>
    </div>
  `,

  product: `
    <div class="${D}">
      <div class="mock-bar mock-bar--sparse">
        <span class="mock-icon-btn">${icon('arrow_back')}</span>
        <span class="mock-icon-btn">${icon('favorite')}</span>
        <span class="mock-icon-btn">${icon('shopping_bag')}</span>
      </div>
      <div class="mock-tile mock-tile--hero">${mockProductHero()}</div>
      <p class="mock-price-lg">€5.00</p>
      <p class="mock-muted mock-italic">great condition black basic black tee</p>
      <div class="mock-panel">
        <p class="mock-field-label">Item details</p>
        <div class="mock-detail-row"><span>Brand</span><strong>Nike</strong></div>
        <div class="mock-detail-row"><span>Size</span><strong>L</strong></div>
        <div class="mock-detail-row"><span>Condition</span><strong>Like new</strong></div>
      </div>
      <div class="mock-panel mock-panel--seller">
        <p class="mock-field-label">Seller</p>
        <div class="mock-line" style="border:0;padding:0">
          ${thumbRound('andre')}
          <div><strong>Andre</strong><br><span class="mock-muted">View closet</span></div>
        </div>
      </div>
      <div class="mock-row mock-row--btns">
        <div class="mock-btn mock-btn--ghost mock-btn--half">Message</div>
        <div class="mock-btn mock-btn--ghost mock-btn--half">Make offer</div>
      </div>
      <div class="mock-btn mock-btn--wide mock-btn--ghost">Already in cart</div>
    </div>
  `,

  checkout: `
    <div class="${D}">
      <div class="mock-bar mock-bar--center"><span class="mock-logo">Checkout</span></div>
      <div class="mock-panel">
        <p class="mock-field-label">Order summary</p>
        <div class="mock-detail-row"><span><span class="mock-muted">NIKE</span><br><strong>Black T-Shirt</strong></span><strong class="mock-price">€4.00</strong></div>
        <div class="mock-detail-row"><span>Shipping</span><strong>Included</strong></div>
        <div class="mock-detail-row mock-detail-row--total"><span>Total</span><strong class="mock-price-lg">€4.00</strong></div>
      </div>
      <div class="mock-panel">
        <p class="mock-field-label">Delivery</p>
        <p class="mock-field-label">Full name</p>
        <div class="mock-select">Andre Leppik</div>
        <p class="mock-field-label">Address</p>
        <div class="mock-select">Vallimaa 12, Kuressaare</div>
      </div>
      <div class="mock-btn mock-btn--wide">Continue to payment</div>
    </div>
  `,

  payment: `
    <div class="${D}">
      <div class="mock-bar mock-bar--center"><span class="mock-logo">Checkout</span></div>
      <div class="mock-panel">
        <p class="mock-field-label">Payment · Stripe</p>
        <p class="mock-muted" style="font-size:0.65rem">${icon('lock')} Secure card payment (demo)</p>
        <p class="mock-field-label">Card number</p>
        <div class="mock-select">4242 4242 4242 4242</div>
        <div class="mock-row" style="gap:8px">
          <div style="flex:1"><p class="mock-field-label">Expiry</p><div class="mock-select">12/28</div></div>
          <div style="flex:1"><p class="mock-field-label">CVC</p><div class="mock-select">•••</div></div>
        </div>
      </div>
      <div class="mock-btn mock-btn--wide">Pay €4.00</div>
    </div>
  `,

  sellPhotos: `
    <div class="${D}">
      <div class="mock-bar"><span class="mock-icon-btn">${icon('close')}</span><span class="mock-logo">Sell</span><span class="mock-link">Next</span></div>
      <div class="mock-panel">
        <p class="mock-field-label">Listing photos</p>
        <p class="mock-h" style="margin:0 0 8px">Add up to 4 photos</p>
        <p class="mock-muted">First photo = cover image</p>
        <div class="mock-upload-zone">
          ${icon('photo_camera')}
          <strong>1 photo added</strong>
          <span>1/4 selected</span>
        </div>
        <div class="mock-row mock-row--single-photo" style="margin-top:10px">
          <div class="mock-thumb mock-thumb--photo mock-thumb--img">${mockSellPhoto(1)}</div>
        </div>
        <div class="mock-btn mock-btn--wide" style="margin-top:12px">Upload from gallery</div>
      </div>
      <div class="mock-btn mock-btn--wide">Continue to review</div>
    </div>
  `,

  sellDetails: `
    <div class="${D}">
      <div class="mock-bar"><span class="mock-icon-btn">${icon('arrow_back')}</span><span class="mock-logo">Listing details</span><span class="mock-link">Draft</span></div>
      <p class="mock-h">Finish your post</p>
      <div class="mock-panel">
        <p class="mock-field-label">Category · Size · Brand</p>
        <div class="mock-select">t-shirts · L · Nike</div>
      </div>
      <div class="mock-panel">
        <p class="mock-field-label">Pricing</p>
        <p class="mock-price-lg">€ 10</p>
        <p class="mock-muted">Earnings after 10% fee: €9.00</p>
      </div>
      <div class="mock-chips mock-chips--wrap">
        <span class="mock-chip on">Like new</span>
        <span class="mock-chip">Very good</span>
        <span class="mock-chip">Good</span>
      </div>
      <div class="mock-btn mock-btn--wide">Publish listing</div>
    </div>
  `,

  confirmDelivery: `
    <div class="${DModal}">
      <div class="mock-modal">
        <div class="mock-modal-head">
          <strong>Confirm delivery</strong>
          <span class="mock-icon-btn">${icon('close')}</span>
        </div>
        <p class="mock-muted">Confirm only after the item arrived and matches the listing. This completes the order and releases payment to the seller.</p>
        <div class="mock-panel">
          <p class="mock-field-label">Order</p>
          <strong>Black T-Shirt</strong>
          <p class="mock-muted">DPD · 12093885759834</p>
        </div>
        <label class="mock-check on">
          <span class="mock-check-box">${icon('check')}</span>
          I have received this item and it matches the listing
        </label>
        <div class="mock-btn mock-btn--wide">Complete order</div>
        <p class="mock-link mock-link--center">Not yet</p>
      </div>
    </div>
  `,

  sellReview: `
    <div class="${D}">
      <div class="mock-bar"><span class="mock-icon-btn">${icon('arrow_back')}</span><span class="mock-logo">Review photos</span><span class="mock-link">Add</span></div>
      <p class="mock-muted">Reorder with arrows — first image is the cover</p>
      <div class="mock-thumb mock-thumb--photo mock-thumb--wide mock-thumb--img">${mockSellPhoto(1)}</div>
      <div class="mock-reorder-bar">
        <span class="mock-icon-btn off">${icon('keyboard_arrow_up')}</span>
        <span class="mock-icon-btn">${icon('keyboard_arrow_down')}</span>
        <span class="mock-icon-btn mock-icon-btn--accent">${icon('delete')}</span>
      </div>
      <div class="mock-btn mock-btn--wide">Continue to details</div>
    </div>
  `,

  profile: `
    <div class="${D}">
      <p class="mock-title-sm">Profile</p>
      <div class="mock-profile-center">
        ${thumbRound('andre', true)}
        <strong>Andre</strong>
        <span class="mock-link">@aleppik7</span>
        <div class="mock-btn mock-btn--ghost mock-btn--sm">Edit profile</div>
      </div>
      <div class="mock-stats">
        <span><strong>1</strong> Followers</span>
        <span><strong>0</strong> Following</span>
        <span><strong>7</strong> Listings</span>
      </div>
      <div class="mock-chips mock-chips--row">
        <span class="mock-chip on">Purchases</span>
        <span class="mock-chip">Sales</span>
      </div>
      <div class="mock-tabbar">${tabBar('profile')}</div>
    </div>
  `,

  orderBuyerPaid: `
    <div class="${D}">
      <div class="mock-bar mock-bar--center"><span class="mock-icon-btn">${icon('arrow_back')}</span><span class="mock-logo">Order</span></div>
      <div class="mock-panel">
        <div class="mock-line" style="border:0">
          ${thumb()}
          <div><strong>Black T-Shirt</strong><br><span class="mock-muted">Seller: Andre</span></div>
          <strong class="mock-price">€4</strong>
        </div>
        <span class="mock-status">Paid</span>
      </div>
      <div class="mock-panel">
        <p class="mock-field-label">Progress</p>
        <div class="mock-timeline">
          <div class="mock-timeline-item done"><span></span> Paid</div>
          <div class="mock-timeline-item"><span></span> Shipped</div>
          <div class="mock-timeline-item"><span></span> Confirmed</div>
        </div>
        <p class="mock-muted mock-hint-box">Confirm delivery appears after the seller ships your order.</p>
      </div>
    </div>
  `,

  orderBuyerShipped: `
    <div class="${D}">
      <div class="mock-bar mock-bar--center"><span class="mock-icon-btn">${icon('arrow_back')}</span><span class="mock-logo">Order</span></div>
      <div class="mock-panel">
        <div class="mock-line" style="border:0">
          ${thumb()}
          <div><strong>Black T-Shirt</strong><br><span class="mock-muted">Seller: Andre</span></div>
          <strong class="mock-price">€4</strong>
        </div>
        <span class="mock-status mock-status--ship">Shipped</span>
      </div>
      <div class="mock-panel">
        <p class="mock-field-label">Progress</p>
        <div class="mock-timeline">
          <div class="mock-timeline-item done"><span></span> Paid</div>
          <div class="mock-timeline-item current"><span></span> Shipped</div>
          <div class="mock-timeline-item"><span></span> Confirmed</div>
        </div>
        <p class="mock-field-label" style="margin-top:10px">Tracking</p>
        <p class="mock-muted" style="font-size:0.72rem">DPD · 12093885759834</p>
      </div>
      <div class="mock-btn mock-btn--wide">Confirm delivery</div>
    </div>
  `,

  orderSeller: `
    <div class="${D}">
      <div class="mock-bar mock-bar--center"><span class="mock-icon-btn">${icon('arrow_back')}</span><span class="mock-logo">Orders</span></div>
      <div class="mock-chips mock-chips--row" style="margin-bottom:12px">
        <span class="mock-chip">Purchases</span>
        <span class="mock-chip on">Sales</span>
      </div>
      <div class="mock-panel">
        <div class="mock-line" style="border:0">
          ${thumb()}
          <div><strong>Black T-Shirt</strong><br><span class="mock-muted">Buyer: Kaspar</span></div>
          <strong class="mock-price">€4</strong>
        </div>
        <span class="mock-status">Paid</span>
      </div>
      <p class="mock-muted">Mark as shipped when parcel is sent</p>
    </div>
  `,

  orderSellerShipped: `
    <div class="${D}">
      <div class="mock-bar mock-bar--center"><span class="mock-icon-btn">${icon('arrow_back')}</span><span class="mock-logo">Order</span></div>
      <div class="mock-panel">
        <div class="mock-line" style="border:0">
          ${thumb()}
          <div><strong>Black T-Shirt</strong><br><span class="mock-muted">Buyer: Kaspar</span></div>
          <strong class="mock-price">€4</strong>
        </div>
        <span class="mock-status mock-status--ship">Shipped</span>
      </div>
      <div class="mock-panel">
        <p class="mock-field-label">Tracking</p>
        <div class="mock-select">DPD · 12093885759834</div>
      </div>
      <p class="mock-muted mock-hint-box">Waiting for buyer to confirm delivery — then payout to wallet</p>
    </div>
  `,

  wallet: `
    <div class="${D}">
      <p class="mock-title-sm">Menu</p>
      <div class="mock-panel">
        <div class="mock-line" style="border:0">
          ${thumbRound('andre')}
          <div><strong>Andre</strong><br><span class="mock-link">@aleppik7</span></div>
        </div>
      </div>
      <div class="mock-panel mock-panel--wallet">
        <span>${icon('account_balance_wallet')}</span>
        <div>
          <p class="mock-field-label">Wallet</p>
          <p class="mock-price-lg">€4.00</p>
          <p class="mock-muted">Pending €0.00</p>
        </div>
      </div>
      <div class="mock-chips mock-chips--row">
        <span class="mock-chip on">System</span>
        <span class="mock-chip">Light</span>
        <span class="mock-chip">Dark</span>
      </div>
    </div>
  `,

  inbox: `
    <div class="${D}">
      <p class="mock-h">Inbox</p>
      <div class="mock-line on">
        ${thumb()}
        <div><strong>Andre · Black T-Shirt</strong><br><span class="mock-muted">Offer €4.00 · waiting</span></div>
      </div>
    </div>
  `,

  chatThread: `
    <div class="${D}">
      <div class="mock-bar"><span class="mock-icon-btn">${icon('arrow_back')}</span><span class="mock-logo">Andre</span></div>
      <p class="mock-muted mock-chat-context">Black T-Shirt · listed €5.00</p>
      <div class="mock-chat-bubble mock-chat-bubble--them">Is it still available?</div>
      <div class="mock-chat-bubble mock-chat-bubble--me">Yes — can ship this week</div>
      <div class="mock-chat-bubble mock-chat-bubble--them mock-chat-bubble--offer">
        <span class="mock-field-label">Offer</span>
        <strong>€4.00</strong>
        <span class="mock-muted">Pending</span>
      </div>
      <div class="mock-row mock-row--btns">
        <div class="mock-btn mock-btn--ghost mock-btn--half">Decline</div>
        <div class="mock-btn mock-btn--half">Accept</div>
      </div>
    </div>
  `,

  makeOffer: `
    <div class="${D}">
      <div class="mock-bar"><span class="mock-icon-btn">${icon('arrow_back')}</span><span class="mock-logo">Make offer</span></div>
      <div class="mock-panel mock-panel--item">
        <div class="mock-thumb mock-thumb--img mock-thumb--inline">${mockProductThumb()}</div>
        <div>
          <p class="mock-field-label">Item</p>
          <strong>Black T-Shirt</strong>
          <p class="mock-muted">Listed price €5.00</p>
        </div>
      </div>
      <p class="mock-field-label">Your offer</p>
      <div class="mock-select mock-select--price">€ 4.00</div>
      <p class="mock-muted">Seller can accept, decline, or reply in chat</p>
      <div class="mock-btn mock-btn--wide">Send offer</div>
    </div>
  `,

  profilePurchases: `
    <div class="${D}">
      <p class="mock-title-sm">Profile</p>
      <div class="mock-profile-center mock-profile-center--compact">
        ${thumbRound('kaspar')}
        <strong>Kaspar</strong>
      </div>
      <div class="mock-chips mock-chips--row">
        <span class="mock-chip on">Purchases</span>
        <span class="mock-chip">Sales</span>
      </div>
      <div class="mock-panel mock-panel--click">
        <div class="mock-line" style="border:0">
          ${thumb()}
          <div><strong>Black T-Shirt</strong><br><span class="mock-muted">Seller: Andre</span></div>
          <strong class="mock-price">€4</strong>
        </div>
        <span class="mock-status">Paid</span>
      </div>
      <p class="mock-muted">Tap order → full progress & tracking</p>
      <div class="mock-tabbar">${tabBar('profile')}</div>
    </div>
  `,

  profileSales: `
    <div class="${D}">
      <p class="mock-title-sm">Profile</p>
      <div class="mock-profile-center mock-profile-center--compact">
        ${thumbRound('andre')}
        <strong>Andre</strong>
      </div>
      <div class="mock-chips mock-chips--row">
        <span class="mock-chip">Purchases</span>
        <span class="mock-chip on">Sales</span>
      </div>
      <div class="mock-panel mock-panel--click">
        <div class="mock-line" style="border:0">
          ${thumb()}
          <div><strong>Black T-Shirt</strong><br><span class="mock-muted">Buyer: Kaspar</span></div>
          <strong class="mock-price">€4</strong>
        </div>
        <span class="mock-status">Paid</span>
      </div>
      <p class="mock-muted">Same order — seller’s view under Sales</p>
      <div class="mock-tabbar">${tabBar('profile')}</div>
    </div>
  `,

  ordersPurchases: `
    <div class="${D}">
      <div class="mock-bar mock-bar--center"><span class="mock-icon-btn">${icon('arrow_back')}</span><span class="mock-logo">Orders</span></div>
      <div class="mock-chips mock-chips--row" style="margin-bottom:12px">
        <span class="mock-chip on">Purchases</span>
        <span class="mock-chip">Sales</span>
      </div>
      <div class="mock-panel mock-panel--click">
        <div class="mock-line" style="border:0">
          ${thumb()}
          <div><strong>Black T-Shirt</strong><br><span class="mock-muted">Seller: Andre</span></div>
          <strong class="mock-price">€4</strong>
        </div>
        <span class="mock-status">Paid</span>
      </div>
    </div>
  `,

  twoUsers: `
    <div class="${DIAGRAM}">
      <p class="mock-diagram-kicker">Üks tellimus · kaks vaadet</p>
      <div class="mock-users-pipe mock-users-pipe--flow" aria-hidden="true">
        <span class="on">Paid</span>
        <span class="pipe-arrow">→</span>
        <span class="on">Shipped</span>
        <span class="pipe-arrow">→</span>
        <span>Confirmed</span>
      </div>
      <div class="mock-diagram-split">
        <article class="mock-user-col">
          <header class="mock-user-col-head">
            <span class="mock-user-icon">${icon('shopping_bag')}</span>
            <strong>Ostja</strong>
          </header>
          <ol class="mock-user-steps">
            <li>Otsib toodet</li>
            <li>Vestleb või teeb pakkumise</li>
            <li>Maksab tellimuse eest</li>
            <li><em>Purchases</em> → kinnitab kättesaamise</li>
          </ol>
        </article>
        <div class="mock-diagram-sync" aria-hidden="true">↔</div>
        <article class="mock-user-col">
          <header class="mock-user-col-head">
            <span class="mock-user-icon">${icon('sell')}</span>
            <strong>Müüja</strong>
          </header>
          <ol class="mock-user-steps">
            <li>Avaldab kuulutuse</li>
            <li>Vastab või aktsepteerib</li>
            <li><em>Sales</em> → märgib saadetuks</li>
            <li>Raha laekub rahakotti</li>
          </ol>
        </article>
      </div>
    </div>
  `,

}

function tabBar(active, withLabels = false) {
  const tabs = [
    ['home', 'home', 'Home'],
    ['travel_explore', 'explore', 'Explore'],
    ['add', 'sell', 'Sell'],
    ['chat_bubble', 'inbox', 'Inbox'],
    ['person', 'profile', 'Profile'],
  ]
  return tabs
    .map(([ic, key, label]) => {
      if (key === 'sell') {
        return `<span class="sell" title="Sell">${icon('add')}</span>`
      }
      const on = key === active ? ' on' : ''
      if (withLabels) {
        return `<span class="mock-tab${on}">${icon(ic)}<small>${label}</small></span>`
      }
      return `<span${on ? ' class="on"' : ''}>${icon(ic)}</span>`
    })
    .join('')
}

/** Rakenduse ülesehitus — päris äpi screenshotid */
flowMocks.tabs = screenshotDevice('app-structure.png', { fitFull: true })
flowMocks.appMenu = screenshotDevice('app-menu.png', { fitFull: true })

export function flowSlideBody(steps, mockKey) {
  const stepsHtml = steps
    .map((s) => `<li><span class="flow-step-n">${s.n}</span><span>${s.text}</span></li>`)
    .join('')

  return `
    <div class="slide-flow">
      <ol class="slide-flow-steps">${stepsHtml}</ol>
      <div class="slide-flow-mock" aria-hidden="true">${resolveFlowVisual(mockKey, flowMocks)}</div>
    </div>
  `
}

export function flowSlideBodyDual(
  steps,
  mockKeyA,
  labelA,
  mockKeyB,
  labelB,
  { flowClass = '' } = {}
) {
  const stepsHtml = steps
    .map((s) => `<li><span class="flow-step-n">${s.n}</span><span>${s.text}</span></li>`)
    .join('')
  const flowExtra = flowClass ? ` ${flowClass}` : ''

  return `
    <div class="slide-flow slide-flow--dual-mock${flowExtra}">
      <ol class="slide-flow-steps">${stepsHtml}</ol>
      <div class="slide-flow-mocks-pair" aria-hidden="true">
        <div class="slide-flow-mock-wrap">
          <p class="mock-caption">${labelA}</p>
          ${resolveFlowVisual(mockKeyA, flowMocks)}
        </div>
        <div class="slide-flow-mock-wrap">
          <p class="mock-caption">${labelB}</p>
          ${resolveFlowVisual(mockKeyB, flowMocks)}
        </div>
      </div>
    </div>
  `
}

export function flowSlideBodyDiagram(steps, diagramKey = 'twoUsers') {
  const stepsHtml = steps
    .map((s) => `<li><span class="flow-step-n">${s.n}</span><span>${s.text}</span></li>`)
    .join('')

  const diagramExtra = diagramKey === 'twoUsers' ? ' slide-flow--two-users' : ''

  return `
    <div class="slide-flow slide-flow--diagram${diagramExtra}">
      <ol class="slide-flow-steps">${stepsHtml}</ol>
      <div class="slide-flow-mock slide-flow-mock--wide" aria-hidden="true">${resolveFlowVisual(diagramKey, flowMocks)}</div>
    </div>
  `
}
