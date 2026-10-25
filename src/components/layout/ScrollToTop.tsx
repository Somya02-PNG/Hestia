import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { smoothScroller } from '../../lib/lenis'

export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      // Allow DOM to settle before calculating section positions
      const timer = setTimeout(() => {
        const id = hash.replace('#', '')
        const el = document.getElementById(id)
        if (el) {
          smoothScroller.scrollTo(el, { offset: -70 })
        }
      }, 80)
      return () => clearTimeout(timer)
    } else {
      // Standard page change: scroll immediately to top
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
      smoothScroller.scrollTo(0, { duration: 0.1 })
    }
  }, [pathname, hash])

  return null
}
