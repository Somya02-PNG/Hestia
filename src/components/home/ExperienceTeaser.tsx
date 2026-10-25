import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Users, Music, HeartHandshake, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useMotionMode } from '../../hooks/useMotionMode'
import SpotlightCard from '../reactbits/SpotlightCard'
import TapScale from '../motion/TapScale'
import SectionDivider from '../motion/SectionDivider'
import HomeGlowBackground from './HomeGlowBackground'
import './ExperienceTeaser.css'

gsap.registerPlugin(ScrollTrigger)

export default function ExperienceTeaser() {
  const { reduced } = useMotionMode()
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const desktopGridRef = useRef<HTMLDivElement>(null)
  const mobileStackRef = useRef<HTMLDivElement>(null)

  const cards = [
    {
      id: 'family-dining',
      title: 'Family Dining Sanctuary',
      badge: 'Certified Pure Veg',
      isPulse: false,
      badgeColor: '#4ADE80',
      description: 'Generous table layouts, warm acoustic pacing, and dedicated hospitality designed for relaxed family dinners and celebrations.',
      icon: HeartHandshake,
    },
    {
      id: 'private-dining',
      title: 'Private Dining Space',
      badge: 'Ask us',
      isPulse: true,
      badgeColor: 'var(--color-brass, #B89A64)',
      description: 'Dedicated private dining area for birthday banquets, intimate anniversaries, and family get-togethers in Shyam Nagar.',
      icon: Users,
    },
    {
      id: 'live-music',
      title: 'Acoustic Evenings',
      badge: 'Ask us',
      isPulse: true,
      badgeColor: 'var(--color-brass, #B89A64)',
      description: 'Mellow acoustic performances and soothing soundscapes during select weekend dinner gatherings.',
      icon: Music,
    },
  ]

  useEffect(() => {
    if (reduced) return

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia()

      // Desktop: entrance with stagger + scale 0.96 -> 1 + icon rotate-settle
      mm.add('(min-width: 1024px)', () => {
        if (headerRef.current) {
          gsap.from(headerRef.current.children, {
            opacity: 0,
            y: 20,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 82%',
            },
          })
        }

        if (desktopGridRef.current) {
          const cardsEl = Array.from(desktopGridRef.current.children)
          gsap.from(cardsEl, {
            opacity: 0,
            scale: 0.96,
            y: 32,
            duration: 0.85,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: desktopGridRef.current,
              start: 'top 85%',
            },
          })

          const iconBoxes = desktopGridRef.current.querySelectorAll('.experience-icon-box')
          gsap.from(iconBoxes, {
            scale: 0.7,
            rotate: -20,
            duration: 0.7,
            stagger: 0.12,
            ease: 'back.out(2)',
            scrollTrigger: {
              trigger: desktopGridRef.current,
              start: 'top 85%',
            },
          })
        }
      })

      // Mobile: Sticky stacking effect (cards slide over previous, buried card subtly scales down)
      mm.add('(max-width: 1023px)', () => {
        if (headerRef.current) {
          gsap.from(headerRef.current, {
            opacity: 0,
            y: 16,
            duration: 0.65,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 88%',
            },
          })
        }

        if (mobileStackRef.current) {
          const stackCards = Array.from(
            mobileStackRef.current.querySelectorAll<HTMLElement>('.experience-sticky-card-wrap')
          )

          stackCards.forEach((card, i) => {
            if (i < stackCards.length - 1) {
              const nextCard = stackCards[i + 1]
              gsap.to(card, {
                scale: 0.94,
                opacity: 0.7,
                ease: 'none',
                scrollTrigger: {
                  trigger: nextCard,
                  start: 'top 60%',
                  end: 'top 20%',
                  scrub: true,
                },
              })
            }
          })
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [reduced])

  return (
    <section
      ref={sectionRef}
      className="experience-teaser section section-dark"
      aria-label="Dining Experience and Atmosphere"
    >
      <SectionDivider width="90%" />
      <HomeGlowBackground top="35%" left="40%" size="650px" />

      <div className="container" style={{ marginTop: '24px' }}>
        {/* Header */}
        <div ref={headerRef} className="experience-header">
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
              <Sparkles size={12} color="var(--color-brass, #B89A64)" />
              Guest Hospitality
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
              The Sanctuary Experience.
            </h2>
          </div>

          <motion.div
            whileHover={{ x: 4 }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              to="/experience"
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
              <span>Explore The Experience</span>
              <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>

        {/* Desktop 3 Cards with SpotlightCard cursor glow */}
        <div ref={desktopGridRef} className="experience-grid-desktop">
          {cards.map(card => {
            const Icon = card.icon

            return (
              <SpotlightCard
                key={card.id}
                spotlightColor="rgba(184, 154, 100, 0.2)"
                className="h-full"
              >
                <div className="experience-card-inner">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div className="experience-icon-box">
                      <Icon size={24} />
                    </div>

                    {card.isPulse ? (
                      <span className="experience-pulse-chip">
                        {card.badge}
                      </span>
                    ) : (
                      <span
                        style={{
                          fontSize: '11px',
                          fontWeight: 600,
                          color: card.badgeColor,
                          textTransform: 'uppercase',
                          letterSpacing: '0.06em',
                        }}
                      >
                        {card.badge}
                      </span>
                    )}
                  </div>

                  <h3
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '22px',
                      color: 'var(--color-text-inverse, #F6EFE4)',
                      margin: '12px 0 10px 0',
                    }}
                  >
                    {card.title}
                  </h3>

                  <p
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '14px',
                      lineHeight: 1.65,
                      color: 'rgba(246, 239, 228, 0.72)',
                      margin: 0,
                    }}
                  >
                    {card.description}
                  </p>
                </div>
              </SpotlightCard>
            )
          })}
        </div>

        {/* Mobile Sticky Stacking Layout with Tap Feedback */}
        <div ref={mobileStackRef} className="experience-stack-mobile">
          {cards.map((card, idx) => {
            const Icon = card.icon

            return (
              <div
                key={card.id}
                className="experience-sticky-card-wrap"
                style={{ '--stack-idx': idx } as React.CSSProperties}
              >
                <TapScale tapScale={0.97} liftOnHover={false}>
                  <div className="experience-mobile-card">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <div className="experience-icon-box" style={{ width: '42px', height: '42px', marginBottom: '14px' }}>
                        <Icon size={20} />
                      </div>

                      {card.isPulse ? (
                        <span className="experience-pulse-chip">
                          {card.badge}
                        </span>
                      ) : (
                        <span
                          style={{
                            fontSize: '11px',
                            fontWeight: 600,
                            color: card.badgeColor,
                            textTransform: 'uppercase',
                            letterSpacing: '0.06em',
                          }}
                        >
                          {card.badge}
                        </span>
                      )}
                    </div>

                    <h3
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '20px',
                        color: 'var(--color-text-inverse, #F6EFE4)',
                        margin: '6px 0 8px 0',
                      }}
                    >
                      {card.title}
                    </h3>

                    <p
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '13px',
                        lineHeight: 1.6,
                        color: 'rgba(246, 239, 228, 0.72)',
                        margin: 0,
                      }}
                    >
                      {card.description}
                    </p>
                  </div>
                </TapScale>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
