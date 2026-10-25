export interface NavLink {
  id: string
  label: string
  href: string
  order: number
  showInFooter: boolean
}

export const NAV_LINKS: NavLink[] = [
  { id: 'story', label: 'Our Story', href: '#story', order: 1, showInFooter: true },
  { id: 'cuisine', label: 'Cuisines', href: '#cuisine', order: 2, showInFooter: true },
  { id: 'gallery', label: 'Gallery', href: '#gallery', order: 3, showInFooter: true },
  { id: 'experience', label: 'Experience', href: '#experience', order: 4, showInFooter: true },
  { id: 'menu', label: 'Menu', href: '#menu', order: 5, showInFooter: true },
  { id: 'visit', label: 'Visit & Reserve', href: '#visit', order: 6, showInFooter: true },
]
