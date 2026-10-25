export interface NavLink {
  id: string
  label: string
  href: string
  isSectionLink: boolean
  order: number
  showInFooter: boolean
}

export const NAV_LINKS: NavLink[] = [
  { id: 'story', label: 'Our Story', href: '/#story', isSectionLink: true, order: 1, showInFooter: true },
  { id: 'cuisine', label: 'Cuisines', href: '/#cuisine', isSectionLink: true, order: 2, showInFooter: true },
  { id: 'gallery', label: 'Gallery', href: '/#gallery', isSectionLink: true, order: 3, showInFooter: true },
  { id: 'experience', label: 'Experience', href: '/#experience', isSectionLink: true, order: 4, showInFooter: true },
  { id: 'menu', label: 'Menu', href: '/#menu', isSectionLink: true, order: 5, showInFooter: true },
  { id: 'offers', label: 'Offers', href: '/offers', isSectionLink: false, order: 6, showInFooter: true },
  { id: 'visit', label: 'Visit & Reserve', href: '/#visit', isSectionLink: true, order: 7, showInFooter: true },
]

export interface RouteLink {
  label: string
  path: string
  category: 'main' | 'dining' | 'policies' | 'account'
}

export const ALL_ROUTES: RouteLink[] = [
  { label: 'Home', path: '/', category: 'main' },
  { label: 'Our Story / About', path: '/about', category: 'main' },
  { label: 'Full Menu', path: '/menu', category: 'dining' },
  { label: 'Gallery', path: '/gallery', category: 'dining' },
  { label: 'Dining Experience', path: '/experience', category: 'dining' },
  { label: 'Exclusive Offers', path: '/offers', category: 'main' },
  { label: 'Guest Reviews', path: '/reviews', category: 'main' },
  { label: 'Private Parties & Dining', path: '/party', category: 'dining' },
  { label: 'Contact & Location', path: '/contact', category: 'main' },
  { label: 'Your Cart', path: '/cart', category: 'account' },
  { label: 'Checkout', path: '/checkout', category: 'account' },
  { label: 'Order Confirmation', path: '/order-success', category: 'account' },
  { label: 'Terms & Conditions', path: '/terms', category: 'policies' },
  { label: 'Privacy Policy', path: '/privacy', category: 'policies' },
  { label: 'Refund & Cancellation Policy', path: '/refund-policy', category: 'policies' },
  { label: 'Delivery Policy', path: '/delivery-policy', category: 'policies' },
]
