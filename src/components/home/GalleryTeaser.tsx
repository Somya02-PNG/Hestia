import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Image as ImageIcon, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { GALLERY_ITEMS, type GalleryItem } from '../../content/gallery'
import { useMotionMode } from '../../hooks/useMotionMode'
import Magnet from '../reactbits/Magnet'
import SectionDivider from '../motion/SectionDivider'
import HomeGlowBackground from './HomeGlowBackground'
import './GalleryTeaser.css'

gsap.registerPlugin(ScrollTrigger)

export default function GalleryTeaser() {
  const { isDesktop, reduced } = useMotionMode()
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const row1Ref = useRef<HTMLDivElement>(null)
  const row2Ref = useRef<HTMLDivElement>(null)

  const [activeLightboxItem, setActiveLightboxItem] = useState<GalleryItem | null>(null)

  // Split gallery items into two distinct rows, duplicated for seamless infinite marquee loop
  const row1Items = [...GALLERY_ITEMS.slice(0, 4), ...GALLERY_ITEMS.slice(0, 4)]
  const row2Items = [...GALLERY_ITEMS.slice(4, 8), ...GALLERY_ITEMS.slice(4, 8)]

  useEffect(() => {
    if (reduced) return

    const ctx = gsap.context(() => {
      // Header entrance
      if (headerRef.current) {
        gsap.from(headerRef.current.children, {
          opacity: 0,
          y: 20,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
          },
        })
      }

      // Clip path stagger reveal on initial view
      const cards = sectionRef.current?.querySelectorAll('.gallery-item-card')
      if (cards) {
        gsap.fromTo(
          cards,
          { clipPath: 'inset(100% 0 0 0)', opacity: 0 },
          {
            clipPath: 'inset(0% 0 0 0)',
            opacity: 1,
            duration: 0.9,
            stagger: 0.05,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%',
              once: true,
            },
          }
        )
      }

      // Infinite Marquee: Row 1 moves Left, Row 2 moves Right
      const tween1 = gsap.to(row1Ref.current, {
        xPercent: -50,
        repeat: -1,
        duration: 28,
        ease: 'none',
      })

      const tween2 = gsap.fromTo(
        row2Ref.current,
        { xPercent: -50 },
        {
          xPercent: 0,
          repeat: -1,
          duration: 28,
          ease: 'none',
        }
      )

      // Hover and touch hold pause/resume
      const r1 = row1Ref.current
      const r2 = row2Ref.current

      const pauseTweens = () => {
        tween1.pause()
        tween2.pause()
      }
      const resumeTweens = () => {
        tween1.resume()
        tween2.resume()
      }

      if (r1 && r2) {
        r1.addEventListener('mouseenter', pauseTweens)
        r1.addEventListener('mouseleave', resumeTweens)
        r1.addEventListener('touchstart', pauseTweens, { passive: true })
        r1.addEventListener('touchend', resumeTweens)

        r2.addEventListener('mouseenter', pauseTweens)
        r2.addEventListener('mouseleave', resumeTweens)
        r2.addEventListener('touchstart', pauseTweens, { passive: true })
        r2.addEventListener('touchend', resumeTweens)
      }

      // Scroll Velocity: adds skewX and temporary speed burst
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'bottom top',
        onUpdate: self => {
          const velocity = self.getVelocity()
          const clampedSkew = Math.max(-6, Math.min(6, velocity / 350))

          gsap.to([row1Ref.current, row2Ref.current], {
            skewX: clampedSkew,
            duration: 0.35,
            ease: 'power1.out',
            overwrite: 'auto',
          })
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [reduced])

  const handleCardClick = (item: GalleryItem) => {
    if (!isDesktop) {
      setActiveLightboxItem(item)
    }
  }

  return (
    <section
      ref={sectionRef}
      className="gallery-teaser section section-dark"
      aria-label="Dining Sanctuary & Culinary Gallery"
    >
      {/* Center Section Divider */}
      <SectionDivider width="90%" />

      {/* Soft Drifting Background Glow */}
      <HomeGlowBackground top="30%" left="60%" size="600px" />

      <div className="container" style={{ marginTop: '24px' }}>
        {/* Header */}
        <div ref={headerRef} className="gallery-teaser-header">
          <div>
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '11px',
                fontWeight: 600,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--color-brass, #B89A64)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                marginBottom: '10px',
              }}
            >
              <ImageIcon size={12} color="var(--color-brass, #B89A64)" />
              Visual Sanctuary
            </span>
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(28px, 4vw, 42px)',
                fontWeight: 300,
                color: 'var(--color-text-inverse, #F6EFE4)',
                margin: 0,
                lineHeight: 1.2,
              }}
            >
              Captured Moments of Feasting.
            </h2>
          </div>

          {/* Button with Magnet */}
          <Magnet strength={0.3} disabled={!isDesktop} padding={30}>
            <Link
              to="/gallery"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                color: 'var(--color-brass, #B89A64)',
                fontFamily: 'var(--font-sans)',
                fontSize: '12px',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                padding: '8px 16px',
                borderRadius: '4px',
                border: '1px solid rgba(184, 154, 100, 0.3)',
                backgroundColor: 'rgba(38, 31, 26, 0.6)',
              }}
            >
              <span>View Full Gallery</span>
              <ArrowRight size={14} />
            </Link>
          </Magnet>
        </div>
      </div>

      {/* Two Opposite Marquee Rows */}
      <div className="gallery-marquee-container">
        {/* Row 1: Leftward */}
        <div ref={row1Ref} className="gallery-marquee-row">
          {row1Items.map((item, idx) => (
            <div
              key={`row1-${item.id}-${idx}`}
              className="gallery-item-card"
              onClick={() => handleCardClick(item)}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                decoding="async"
                className="gallery-item-img"
              />
              <div className="gallery-item-caption">
                <span className="gallery-caption-tag">{item.category}</span>
                <h4 className="gallery-caption-title">{item.title}</h4>
              </div>
            </div>
          ))}
        </div>

        {/* Row 2: Rightward */}
        <div ref={row2Ref} className="gallery-marquee-row">
          {row2Items.map((item, idx) => (
            <div
              key={`row2-${item.id}-${idx}`}
              className="gallery-item-card"
              onClick={() => handleCardClick(item)}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                decoding="async"
                className="gallery-item-img"
              />
              <div className="gallery-item-caption">
                <span className="gallery-caption-tag">{item.category}</span>
                <h4 className="gallery-caption-title">{item.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Lightbox Modal with Framer Motion layoutId */}
      <AnimatePresence>
        {activeLightboxItem && (
          <motion.div
            className="gallery-lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveLightboxItem(null)}
          >
            <motion.div
              className="gallery-lightbox-content"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              onClick={e => e.stopPropagation()}
            >
              <button
                type="button"
                className="gallery-lightbox-close"
                onClick={() => setActiveLightboxItem(null)}
                aria-label="Close image preview"
              >
                <X size={20} />
              </button>

              <img
                src={activeLightboxItem.src}
                alt={activeLightboxItem.alt}
                className="gallery-lightbox-img"
              />

              <div style={{ marginTop: '14px', textAlign: 'center' }}>
                <span
                  style={{
                    fontSize: '11px',
                    fontFamily: 'var(--font-sans)',
                    color: 'var(--color-brass, #B89A64)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                  }}
                >
                  {activeLightboxItem.category}
                </span>
                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    color: 'var(--color-text-inverse, #F6EFE4)',
                    fontSize: '18px',
                    margin: '4px 0 0 0',
                  }}
                >
                  {activeLightboxItem.title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
