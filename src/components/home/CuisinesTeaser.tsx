import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, UtensilsCrossed } from 'lucide-react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CUISINES } from '../../content/cuisines'
import TiltedCard from '../reactbits/TiltedCard'
import './CuisinesTeaser.css'

gsap.registerPlugin(ScrollTrigger)

export default function CuisinesTeaser() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const gridDesktopRef = useRef<HTMLDivElement>(null)
  const mobileCarouselRef = useRef<HTMLDivElement>(null)
  const [activeMobileIdx, setActiveMobileIdx] = useState(0)

  // GSAP desktop stagger entrance with rotateX
  useEffect(() => {
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const ctx = gsap.context(() => {
      if (isReduced) return

      const mm = gsap.matchMedia()

      mm.add('(min-width: 1024px)', () => {
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
              start: 'top 80%',
            },
          })
        }

        // Cards enter with stagger + rotate-in (rotateX 8 -> 0) from below
        if (gridDesktopRef.current) {
          const cards = Array.from(gridDesktopRef.current.children)
          gsap.from(cards, {
            opacity: 0,
            y: 40,
            rotateX: 8,
            transformPerspective: 1000,
            duration: 0.9,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: gridDesktopRef.current,
              start: 'top 82%',
            },
          })
        }
      })

      mm.add('(max-width: 1023px)', () => {
        if (headerRef.current) {
          gsap.from(headerRef.current, {
            opacity: 0,
            y: 16,
            duration: 0.65,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 85%',
            },
          })
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  // Mobile scroll tracking for active card scale and dot indicators
  const handleMobileScroll = () => {
    const container = mobileCarouselRef.current
    if (!container) return

    const containerCenter = container.getBoundingClientRect().left + container.clientWidth / 2
    const children = Array.from(container.children) as HTMLElement[]

    let closestIdx = 0
    let minDistance = Infinity

    children.forEach((child, idx) => {
      const childRect = child.getBoundingClientRect()
      const childCenter = childRect.left + childRect.width / 2
      const distance = Math.abs(containerCenter - childCenter)

      if (distance < minDistance) {
        minDistance = distance
        closestIdx = idx
      }
    })

    setActiveMobileIdx(closestIdx)
  }

  return (
    <section
      ref={sectionRef}
      className="cuisines-teaser section section-dark"
      aria-label="Culinary Cuisines Spectrum"
    >
      <div className="container">
        {/* Header */}
        <div ref={headerRef} className="cuisines-header">
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
              <UtensilsCrossed size={12} color="var(--color-brass, #B89A64)" />
              Culinary Spectrum
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
              Four Dedicated Culinary Disciplines.
            </h2>
          </div>

          <motion.div
            whileHover={{ x: 4 }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              to="/cuisines"
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
              }}
            >
              <span>Explore All Cuisines</span>
              <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>

        {/* Desktop 4 Cards with TiltedCard (hover tilt + glare, rotateX entrance) */}
        <div ref={gridDesktopRef} className="cuisines-grid-desktop">
          {CUISINES.map(item => (
            <TiltedCard key={item.id} maxTilt={8} scale={1.02} className="h-full">
              <Link
                to="/cuisines"
                className="cuisine-card-link"
                aria-label={`Explore ${item.title}`}
              >
                <div className="cuisine-card-img-wrap">
                  <img
                    src={item.image}
                    alt={`${item.title} at Hestiia Restaurant`}
                    loading="lazy"
                    decoding="async"
                    className="cuisine-card-img"
                  />
                </div>

                <div className="cuisine-card-body">
                  <div className="cuisine-card-title-group">
                    <span className="cuisine-card-subtitle">{item.subtitle}</span>
                    <h3 className="cuisine-card-title">{item.title}</h3>
                    <p className="cuisine-card-desc">{item.description}</p>
                  </div>

                  <div className="cuisine-card-action">
                    <span>Explore Cuisine</span>
                    <ArrowRight size={12} />
                  </div>
                </div>
              </Link>
            </TiltedCard>
          ))}
        </div>

        {/* Mobile Swipe Carousel with Scroll-Snap, Centered Card Scaling, and Dot Indicators */}
        <div
          ref={mobileCarouselRef}
          className="cuisines-mobile-carousel"
          onScroll={handleMobileScroll}
        >
          {CUISINES.map((item, idx) => {
            const isActive = idx === activeMobileIdx

            return (
              <motion.div
                key={item.id}
                className="cuisines-mobile-item-wrap"
                whileTap={{ scale: 0.96 }}
                style={{
                  transform: isActive ? 'scale(1)' : 'scale(0.94)',
                  opacity: isActive ? 1 : 0.72,
                }}
              >
                <Link
                  to="/cuisines"
                  className="cuisine-card-link"
                  aria-label={`Explore ${item.title}`}
                >
                  <div className="cuisine-card-img-wrap">
                    <img
                      src={item.image}
                      alt={`${item.title} at Hestiia Restaurant`}
                      loading="lazy"
                      decoding="async"
                      className="cuisine-card-img"
                    />
                  </div>

                  <div className="cuisine-card-body">
                    <div className="cuisine-card-title-group">
                      <span className="cuisine-card-subtitle">{item.subtitle}</span>
                      <h3 className="cuisine-card-title" style={{ fontSize: '18px' }}>
                        {item.title}
                      </h3>
                      <p className="cuisine-card-desc">{item.description}</p>
                    </div>

                    <div className="cuisine-card-action">
                      <span>Explore</span>
                      <ArrowRight size={12} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>

        {/* Mobile Gold Dot Indicators */}
        <div className="cuisines-dots-indicator" aria-hidden="true">
          {CUISINES.map((item, idx) => (
            <div
              key={item.id}
              className={`cuisine-dot ${idx === activeMobileIdx ? 'active' : ''}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
