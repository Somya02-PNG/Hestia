import { useState, useEffect } from 'react'
import { MOTION_BREAKPOINTS } from '../lib/motion'

export interface MotionMode {
  isDesktop: boolean
  canHover: boolean
  reduced: boolean
}

export function useMotionMode(): MotionMode {
  const [mode, setMode] = useState<MotionMode>(() => {
    if (typeof window === 'undefined') {
      return { isDesktop: true, canHover: true, reduced: false }
    }

    return {
      isDesktop: window.matchMedia(`(min-width: ${MOTION_BREAKPOINTS.desktop}px)`).matches,
      canHover: window.matchMedia('(hover: hover) and (pointer: fine)').matches,
      reduced: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    }
  })

  useEffect(() => {
    if (typeof window === 'undefined') return

    const desktopQuery = window.matchMedia(`(min-width: ${MOTION_BREAKPOINTS.desktop}px)`)
    const hoverQuery = window.matchMedia('(hover: hover) and (pointer: fine)')
    const reducedQuery = window.matchMedia('(prefers-reduced-motion: reduce)')

    const updateMode = () => {
      setMode({
        isDesktop: desktopQuery.matches,
        canHover: hoverQuery.matches,
        reduced: reducedQuery.matches,
      })
    }

    // Initial sync
    updateMode()

    desktopQuery.addEventListener('change', updateMode)
    hoverQuery.addEventListener('change', updateMode)
    reducedQuery.addEventListener('change', updateMode)
    window.addEventListener('resize', updateMode)

    return () => {
      desktopQuery.removeEventListener('change', updateMode)
      hoverQuery.removeEventListener('change', updateMode)
      reducedQuery.removeEventListener('change', updateMode)
      window.removeEventListener('resize', updateMode)
    }
  }, [])

  return mode
}
