/**
 * Kasutajavoogude slaididel päris äpi screenshotid (kui fail on olemas).
 * Muuda USE_SCREENSHOTS = false, et tagasi HTML-mockide juurde.
 */
export const USE_SCREENSHOTS = false

/** mockKey → fail public/screenshots/ kaustas */
export const FLOW_SCREENSHOTS = {
  tabs: 'app-structure.png',
  appMenu: 'app-menu.png',
  home: 'home.png',
  explore: 'explore.png',
  product: 'product.png',
  sellPhotos: 'sell-photos.png',
  sellReview: 'sell-review.png',
  sellDetails: 'sell-details.png',
  checkout: 'checkout.png',
  payment: 'payment.png',
  profilePurchases: 'profile-screen.png',
  profileSales: 'profile-screen.png',
  orderBuyerPaid: 'order-buyer-paid.png',
  orderBuyerShipped: 'order-buyer-shipped.png',
  confirmDelivery: 'confirm-delivery.png',
  orderSeller: 'order-seller.png',
  orderSellerShipped: 'order-buyer-shipped.png',
  wallet: 'wallet-menu.png',
  // Puuduvad failid → HTML-mock (inbox, chatThread, makeOffer, ordersPurchases, twoUsers, login)
}

export function screenshotPath(file) {
  return `/screenshots/${file}`
}

export function screenshotDevice(file, { modal = false, fitFull = false } = {}) {
  const modalCls = modal ? ' mock--modal' : ''
  const fitCls = fitFull ? ' mock--screenshot-fit' : ''
  return `
    <div class="mock mock--screenshot mock--device${modalCls}${fitCls}">
      <img
        src="${screenshotPath(file)}"
        alt=""
        class="mock-screenshot-img"
        loading="lazy"
        decoding="async"
      />
    </div>
  `
}

/** Tagastab screenshoti HTML või flowMocks[key] */
export function resolveFlowVisual(mockKey, flowMocks) {
  if (!USE_SCREENSHOTS) {
    return flowMocks[mockKey] ?? ''
  }
  const file = FLOW_SCREENSHOTS[mockKey]
  if (!file) {
    return flowMocks[mockKey] ?? ''
  }
  const modal = mockKey === 'confirmDelivery'
  return screenshotDevice(file, { modal })
}
