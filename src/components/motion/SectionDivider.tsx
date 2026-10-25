import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export interface SectionDividerProps {
  className?: string
  width?: string
  hasOrnament?: boolean
}

export default function SectionDivider({
  className = '',
  width = '100%',
  hasOrnament = true,
}: SectionDividerProps) {
  const dividerRef = useRef<HTMLDivElement>(null)
  const lineLeftRef = useRef<HTMLDivElement>(null)
  const lineRightRef = useRef<HTMLDivElement>(null)
  const ornamentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (isReduced) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: dividerRef.current,
          start: 'top 92%',
          once: true,
        },
      })

      if (lineLeftRef.current && lineRightRef.current) {
        tl.fromTo(
          [lineLeftRef.current, lineRightRef.current],
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 0.85,
            ease: 'power3.out',
          }
        )
      }

      if (ornamentRef.current) {
        tl.fromTo(
          ornamentRef.current,
          { scale: 0, rotate: -45, opacity: 0 },
          {
            scale: 1,
            rotate: 0,
            opacity: 1,
            duration: 0.6,
            ease: 'back.out(1.8)',
          },
          '-=0.5'
        )
      }
    }, dividerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={dividerRef}
      className={`section-divider ${className}`}
      style={{
        width,
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        height: '32px',
        overflow: 'hidden',
      }}
      aria-hidden="true"
    >
      <div
        ref={lineLeftRef}
        style={{
          flex: 1,
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(184, 154, 100, 0.35))',
          transformOrigin: 'right center',
        }}
      />

      {hasOrnament && (
        <div
          ref={ornamentRef}
          style={{
            margin: '0 16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--color-brass, #B89A64)',
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"
              fill="rgba(184, 154, 100, 0.15)"
              stroke="var(--color-brass, #B89A64)"
              strokeWidth="1.2"
            />
            <circle cx="12" cy="12" r="2" fill="var(--color-brass, #B89A64)" />
          </svg>
        </div>
      )}

      <div
        ref={lineRightRef}
        style={{
          flex: 1,
          height: '1px',
          background: 'linear-gradient(90deg, rgba(184, 154, 100, 0.35), transparent)',
          transformOrigin: 'left center',
        }}
      />
    </div>
  )
}
