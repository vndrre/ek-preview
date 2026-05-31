import { icon } from './content.js'

/** Tume teema — nagu päris rakenduses */
const D = 'mock mock--dark'

export const flowMocks = {
  login: `
    <div class="${D}">
      <p class="mock-label">E-Kaltsukas</p>
      <p class="mock-title-sm">Tere tulemast tagasi</p>
      <p class="mock-field-label">E-POST</p>
      <p class="mock-field">kasutaja@email.ee</p>
      <p class="mock-field-label">PAROOL</p>
      <p class="mock-field">••••••••</p>
      <div class="mock-btn">Logi sisse</div>
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
        <div class="mock-tile mock-tile--product"></div>
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
      <div class="mock-tile mock-tile--hero"></div>
      <p class="mock-price-lg">€5.00</p>
      <p class="mock-muted mock-italic">great condition black basic tee</p>
      <div class="mock-panel">
        <p class="mock-field-label">Item details</p>
        <div class="mock-detail-row"><span>Brand</span><strong>Nike</strong></div>
        <div class="mock-detail-row"><span>Size</span><strong>L</strong></div>
        <div class="mock-detail-row"><span>Condition</span><strong>Like new</strong></div>
      </div>
      <div class="mock-panel mock-panel--seller">
        <p class="mock-field-label">Seller</p>
        <div class="mock-line" style="border:0;padding:0">
          <div class="mock-thumb mock-thumb--round"></div>
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
      <div class="mock-bar mock-bar--center"><span class="mock-icon-btn">${icon('arrow_back')}</span><span class="mock-logo">Checkout</span></div>
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
      <div class="mock-bar mock-bar--center"><span class="mock-icon-btn">${icon('arrow_back')}</span><span class="mock-logo">Checkout</span></div>
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
          <strong>2 photos added</strong>
          <span>2/4 selected</span>
        </div>
        <div class="mock-row" style="margin-top:10px">
          <div class="mock-thumb mock-thumb--photo"></div>
          <div class="mock-thumb mock-thumb--photo"></div>
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
    <div class="${D} mock--modal">
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
      <div class="mock-thumb mock-thumb--photo mock-thumb--wide"></div>
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
        <div class="mock-thumb mock-thumb--round mock-thumb--lg"></div>
        <strong>Andre</strong>
        <span class="mock-link">@aleppik7</span>
        <div class="mock-btn mock-btn--ghost mock-btn--sm">Edit profile</div>
      </div>
      <div class="mock-stats">
        <span><strong>0</strong> Followers</span>
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

  orderBuyer: `
    <div class="${D}">
      <div class="mock-bar mock-bar--center"><span class="mock-icon-btn">${icon('arrow_back')}</span><span class="mock-logo">Order</span></div>
      <div class="mock-panel">
        <div class="mock-line" style="border:0">
          <div class="mock-thumb"></div>
          <div><strong>Black T-Shirt</strong><br><span class="mock-muted">Seller: Andre</span></div>
          <strong class="mock-price">€4</strong>
        </div>
        <span class="mock-status">Paid</span>
      </div>
      <div class="mock-panel">
        <p class="mock-field-label">Progress</p>
        <div class="mock-timeline">
          <div class="mock-timeline-item done"><span></span> Paid</div>
          <div class="mock-timeline-item current"><span></span> Shipped</div>
          <div class="mock-timeline-item"><span></span> Confirmed</div>
        </div>
        <p class="mock-muted" style="margin-top:10px;font-size:0.65rem">Tracking: DPD · 12093885759834</p>
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
          <div class="mock-thumb"></div>
          <div><strong>Black T-Shirt</strong><br><span class="mock-muted">Buyer: Kaspar</span></div>
          <strong class="mock-price">€4</strong>
        </div>
        <span class="mock-status">Paid</span>
      </div>
      <p class="mock-muted">After buyer confirms → payment to wallet</p>
    </div>
  `,

  wallet: `
    <div class="${D}">
      <p class="mock-title-sm">Menu</p>
      <div class="mock-panel">
        <div class="mock-line" style="border:0">
          <div class="mock-thumb mock-thumb--round"></div>
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
      <p class="mock-h">Postkast</p>
      <div class="mock-line">
        <div class="mock-thumb"></div>
        <div><strong>Kaspar · Black T-Shirt</strong><br><span class="mock-muted">Is it still available?</span></div>
        <span class="mock-badge">1</span>
      </div>
      <div class="mock-btn mock-btn--ghost mock-btn--wide">Message seller</div>
    </div>
  `,

  twoUsers: `
    <div class="mock-users-diagram ${D}">
      <div class="mock-user-col">
        <div class="mock-user-head">${icon('shopping_bag')}</div>
        <strong>Ostja</strong>
        <ul class="mock-user-steps">
          <li>Otsib / filtreerib</li>
          <li>Lisab korvi</li>
          <li>Maksab kassas</li>
          <li>Kinnitab kättesaamise</li>
        </ul>
      </div>
      <div class="mock-users-mid">
        <div class="mock-users-app">
          <span class="mock-logo">E-Kaltsukas</span>
          <div class="mock-users-pipe">
            <span class="on">Paid</span>
            <span class="on">Shipped</span>
            <span>Done</span>
          </div>
          <p class="mock-muted">Üks tellimus, kaks vaadet</p>
        </div>
      </div>
      <div class="mock-user-col">
        <div class="mock-user-head">${icon('sell')}</div>
        <strong>Müüja</strong>
        <ul class="mock-user-steps">
          <li>Avaldab kuulutuse</li>
          <li>Vastab vestluses</li>
          <li>Märgib saadetuks</li>
          <li>Saab raha rahakotti</li>
        </ul>
      </div>
    </div>
  `,

}

function tabBar(active) {
  const tabs = [
    ['home', 'home'],
    ['travel_explore', 'explore'],
    ['add', 'sell'],
    ['chat_bubble', 'inbox'],
    ['person', 'profile'],
  ]
  return tabs
    .map(([ic, key]) => {
      if (key === 'sell')
        return `<span class="sell">${icon('add')}</span>`
      const cls = key === active ? ' class="on"' : ''
      return `<span${cls}>${icon(ic)}</span>`
    })
    .join('')
}

flowMocks.tabs = `
  <div class="mock mock--phone mock--dark">
    <div class="mock-screen-mini">
      <div class="mock-bar">
        <span>${icon('menu')}</span>
        <span class="mock-logo">E-Kaltsukas</span>
        <span>${icon('shopping_bag')}</span>
      </div>
      <div class="mock-row-head"><span class="mock-h" style="margin:0">New Arrivals</span></div>
      <div class="mock-row">
        <div class="mock-tile mock-tile--tall"></div>
        <div class="mock-tile mock-tile--tall"></div>
      </div>
      <div class="mock-tabbar">${tabBar('home')}</div>
    </div>
  </div>
`

export function flowSlideBody(steps, mockKey) {
  const stepsHtml = steps
    .map((s) => `<li><span class="flow-step-n">${s.n}</span><span>${s.text}</span></li>`)
    .join('')

  return `
    <div class="slide-flow">
      <ol class="slide-flow-steps">${stepsHtml}</ol>
      <div class="slide-flow-mock" aria-hidden="true">${flowMocks[mockKey]}</div>
    </div>
  `
}

export function flowSlideBodyDual(steps, mockKeyA, labelA, mockKeyB, labelB) {
  const stepsHtml = steps
    .map((s) => `<li><span class="flow-step-n">${s.n}</span><span>${s.text}</span></li>`)
    .join('')

  return `
    <div class="slide-flow slide-flow--dual-mock">
      <ol class="slide-flow-steps">${stepsHtml}</ol>
      <div class="slide-flow-mocks-pair" aria-hidden="true">
        <div class="slide-flow-mock-wrap">
          <p class="mock-caption">${labelA}</p>
          ${flowMocks[mockKeyA]}
        </div>
        <div class="slide-flow-mock-wrap">
          <p class="mock-caption">${labelB}</p>
          ${flowMocks[mockKeyB]}
        </div>
      </div>
    </div>
  `
}

export function flowSlideBodyDiagram(steps, diagramKey = 'twoUsers') {
  const stepsHtml = steps
    .map((s) => `<li><span class="flow-step-n">${s.n}</span><span>${s.text}</span></li>`)
    .join('')

  return `
    <div class="slide-flow slide-flow--diagram">
      <ol class="slide-flow-steps">${stepsHtml}</ol>
      <div class="slide-flow-mock slide-flow-mock--wide" aria-hidden="true">${flowMocks[diagramKey]}</div>
    </div>
  `
}
