import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { EASINGS, DURATIONS } from '../../lib/motion'

gsap.registerPlugin(ScrollTrigger)

export interface DrawLineProps {
  orientation?: 'horizontal' | 'vertical'
  color?: string
  thickness?: string
  length?: string
  align?: 'left' | 'center' | 'right'
  className?: string
  duration?: number
  delay?: number
  margin?: string
}

export default function DrawLine({
  orientation = 'horizontal',
  color = 'var(--color-brass, #B89A64)',
  thickness = '1px',
  length = '100%',
  align = 'center',
  className = '',
  duration = DURATIONS.slow,
  delay = 0,
  margin = '24px auto',
}: DrawLineProps) {
  const lineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!lineRef.current) return

    const transformOrigin =
      align === 'left' ? 'left center' : align === 'right' ? 'right center' : 'center center'

    const ctx = gsap.context(() => {
      if (isReduced) {
        gsap.fromTo(
          lineRef.current,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.5,
            delay,
            ease: EASINGS.gsapDefault,
            scrollTrigger: {
              trigger: lineRef.current,
              start: 'top 90%',
            },
          }
        )
        return
      }

      if (orientation === 'horizontal') {
        gsap.fromTo(
          lineRef.current,
          { scaleX: 0, opacity: 0 },
          {
            scaleX: 1,
            opacity: 1,
            duration,
            delay,
            transformOrigin,
            ease: EASINGS.gsapDefault,
            scrollTrigger: {
              trigger: lineRef.current,
              start: 'top 90%',
            },
          }
        )
      } else {
        gsap.fromTo(
          lineRef.current,
          { scaleY: 0, opacity: 0 },
          {
            scaleY: 1,
            opacity: 1,
            duration,
            delay,
            transformOrigin: 'top center',
            ease: EASINGS.gsapDefault,
            scrollTrigger: {
              trigger: lineRef.current,
              start: 'top 90%',
            },
          }
        )
      }
    }, lineRef)

    return () => ctx.revert()
  }, [orientation, align, duration, delay])

  const isHoriz = orientation === 'horizontal'

  return (
    <div
      ref={lineRef}
      className={`draw-line ${className}`}
      style={{
        width: isHoriz ? length : thickness,
        height: isHoriz ? thickness : length,
        backgroundColor: color,
        margin,
        display: 'block',
        willChange: isHoriz ? 'transform' : 'transform',
      }}
    />
  )
}
