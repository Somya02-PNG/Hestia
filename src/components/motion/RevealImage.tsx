import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { EASINGS, DURATIONS } from '../../lib/motion'

gsap.registerPlugin(ScrollTrigger)

export interface RevealImageProps {
  src: string
  alt: string
  aspectRatio?: string
  parallax?: boolean
  direction?: 'up' | 'left' | 'down'
  className?: string
  borderRadius?: string
  imgStyle?: React.CSSProperties
}

export default function RevealImage({
  src,
  alt,
  aspectRatio = '4/3',
  parallax = false,
  direction = 'up',
  className = '',
  borderRadius = '12px',
  imgStyle = {},
}: RevealImageProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!containerRef.current || !imageRef.current) return

    const ctx = gsap.context(() => {
      if (isReduced) {
        gsap.from(containerRef.current, {
          opacity: 0,
          duration: 0.6,
          ease: EASINGS.gsapDefault,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 85%',
          },
        })
        return
      }

      // Initial clip-path based on direction
      let initialClip = 'inset(100% 0% 0% 0%)'
      if (direction === 'left') initialClip = 'inset(0% 100% 0% 0%)'
      else if (direction === 'down') initialClip = 'inset(0% 0% 100% 0%)'

      // 1. Container Clip-Path Wipe
      gsap.fromTo(
        containerRef.current,
        { clipPath: initialClip, opacity: 0 },
        {
          clipPath: 'inset(0% 0% 0% 0%)',
          opacity: 1,
          duration: DURATIONS.editorial,
          ease: EASINGS.gsapDefault,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 82%',
          },
        }
      )

      // 2. Inner Image Scale Settle (1.15 -> 1)
      gsap.fromTo(
        imageRef.current,
        { scale: 1.15 },
        {
          scale: 1,
          duration: DURATIONS.editorial + 0.2,
          ease: EASINGS.gsapDefault,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 82%',
          },
        }
      )

      // 3. Optional Scroll-driven Parallax (Desktop Only)
      if (parallax && window.matchMedia('(min-width: 1024px)').matches) {
        gsap.fromTo(
          imageRef.current,
          { yPercent: -5 },
          {
            yPercent: 5,
            ease: 'none',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.2,
            },
          }
        )
      }
    }, containerRef)

    return () => ctx.revert()
  }, [direction, parallax])

  return (
    <div
      ref={containerRef}
      className={`reveal-image-wrapper ${className}`}
      style={{
        position: 'relative',
        borderRadius,
        overflow: 'hidden',
        border: '1px solid rgba(184, 154, 100, 0.25)',
        boxShadow: '0 16px 36px rgba(0, 0, 0, 0.45)',
        width: '100%',
        aspectRatio,
        backgroundColor: '#16120F',
      }}
    >
      <img
        ref={imageRef}
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
          willChange: 'transform',
          ...imgStyle,
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, transparent 65%, rgba(26, 20, 16, 0.6) 100%)',
          pointerEvents: 'none',
        }}
      />
    </div>
  )
}
