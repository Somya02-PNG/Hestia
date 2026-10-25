import type { RefObject } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { EASINGS, DURATIONS } from '../lib/motion'

gsap.registerPlugin(ScrollTrigger, useGSAP)

export interface UseSectionRevealOptions {
  selector?: string
  stagger?: number
  yOffset?: number
  duration?: number
  start?: string
  once?: boolean
}

/**
 * Custom GSAP hook powered by @gsap/react useGSAP scope.
 * Reveals child elements via ScrollTrigger.batch, automatically disabling transforms
 * when prefers-reduced-motion is active.
 */
export function useSectionReveal(
  scopeRef: RefObject<HTMLElement | null>,
  options: UseSectionRevealOptions = {}
) {
  const {
    selector = '.reveal-item',
    stagger = 0.1,
    yOffset = 24,
    duration = DURATIONS.slow,
    start = 'top 85%',
    once = true,
  } = options

  useGSAP(
    () => {
      if (!scopeRef.current) return

      const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      const targets = gsap.utils.toArray<HTMLElement>(selector, scopeRef.current)

      if (targets.length === 0) return

      if (isReduced) {
        // Fallback: simple opacity fade with no translation
        ScrollTrigger.batch(targets, {
          start,
          once,
          onEnter: batch => {
            gsap.from(batch, {
              opacity: 0,
              duration: 0.6,
              ease: EASINGS.gsapDefault,
              stagger: 0.05,
              overwrite: true,
            })
          },
        })
        return
      }

      // Default animation: batch stagger with transform & opacity
      ScrollTrigger.batch(targets, {
        start,
        once,
        onEnter: batch => {
          gsap.from(batch, {
            opacity: 0,
            y: yOffset,
            duration,
            stagger,
            ease: EASINGS.gsapDefault,
            overwrite: true,
          })
        },
      })
    },
    { scope: scopeRef, dependencies: [selector, stagger, yOffset, duration, start, once] }
  )
}
