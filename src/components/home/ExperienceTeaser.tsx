import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Users, Music, HeartHandshake } from 'lucide-react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function ExperienceTeaser() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  const cards = [
    {
      id: 'family-dining',
      title: 'Family Dining Sanctuary',
      badge: 'Certified Pure Veg',
      badgeColor: '#4ADE80',
      description: 'Generous table layouts, warm acoustic pacing, and dedicated hospitality designed for relaxed family dinners and celebrations.',
      icon: HeartHandshake,
    },
    {
      id: 'private-dining',
      title: 'Private Dining Space',
      badge: 'Ask us',
      badgeColor: 'var(--color-brass)',
      description: 'Dedicated private dining area for birthday banquets, intimate anniversaries, and family get-togethers.',
      icon: Users,
    },
    {
      id: 'live-music',
      title: 'Acoustic Evenings',
      badge: 'Ask us',
      badgeColor: 'var(--color-brass)',
      description: 'Mellow acoustic performances and soothing soundscapes during select weekend dinner gatherings.',
      icon: Music,
    },
  ]

  useEffect(() => {
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const ctx = gsap.context(() => {
      if (isReduced) {
        gsap.from([headerRef.current, gridRef.current ? gridRef.current.children : []], {
          opacity: 0,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
          },
        })
        return
      }

      const mm = gsap.matchMedia()

      // Desktop
      mm.add('(min-width: 1024px)', () => {
        gsap.from(headerRef.current ? headerRef.current.children : [], {
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

        if (gridRef.current) {
          const cardsEl = Array.from(gridRef.current.children)
          ScrollTrigger.batch(cardsEl, {
            start: 'top 85%',
            once: true,
            onEnter: batch => {
              gsap.from(batch, {
                opacity: 0,
                y: 30,
                duration: 0.8,
                stagger: 0.12,
                ease: 'power3.out',
                overwrite: true,
              })
            },
          })
        }
      })

      // Mobile
      mm.add('(max-width: 1023px)', () => {
        gsap.from(headerRef.current, {
          opacity: 0,
          y: 16,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 88%',
          },
        })

        if (gridRef.current) {
          const cardsEl = Array.from(gridRef.current.children)
          ScrollTrigger.batch(cardsEl, {
            start: 'top 90%',
            once: true,
            onEnter: batch => {
              gsap.from(batch, {
                opacity: 0,
                y: 18,
                duration: 0.65,
                stagger: 0.08,
                ease: 'power3.out',
                overwrite: true,
              })
            },
          })
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="experience-teaser section section-dark"
      style={{
        padding: 'clamp(56px, 8vw, 88px) 0',
        backgroundColor: '#1F1A16',
        borderTop: '1px solid rgba(184, 154, 100, 0.12)',
        overflow: 'hidden',
      }}
    >
      <div className="container">
        {/* Header */}
        <div
          ref={headerRef}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexWrap: 'wrap',
            gap: '20px',
            marginBottom: '40px',
          }}
        >
          <div>
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '11px',
                fontWeight: 600,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--color-brass)',
                display: 'block',
                marginBottom: '10px',
              }}
            >
              The Hestiia Experience
            </span>
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(28px, 4vw, 42px)',
                fontWeight: 300,
                color: 'var(--color-text-inverse)',
                margin: 0,
                lineHeight: 1.2,
              }}
            >
              Hospitality Beyond the Plate.
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
                color: 'var(--color-brass)',
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

        {/* 3 Cards with Framer Motion hover & tap */}
        <div
          ref={gridRef}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px',
          }}
        >
          {cards.map(card => {
            const Icon = card.icon
            return (
              <motion.div
                key={card.id}
                whileHover={{ y: -6, transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] } }}
                whileTap={{ scale: 0.98 }}
                style={{
                  backgroundColor: 'rgba(38, 31, 26, 0.75)',
                  borderRadius: '12px',
                  border: '1px solid rgba(184, 154, 100, 0.18)',
                  padding: '28px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'border-color 0.25s ease, box-shadow 0.25s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(184, 154, 100, 0.45)'
                  e.currentTarget.style.boxShadow = '0 16px 32px rgba(0, 0, 0, 0.5)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(184, 154, 100, 0.18)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                    <div
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '8px',
                        backgroundColor: 'rgba(184, 154, 100, 0.12)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Icon size={20} color="var(--color-brass)" />
                    </div>

                    <span
                      style={{
                        fontSize: '11px',
                        fontFamily: 'var(--font-sans)',
                        fontWeight: 600,
                        letterSpacing: '0.04em',
                        padding: '3px 8px',
                        borderRadius: '4px',
                        backgroundColor: 'rgba(31, 26, 22, 0.8)',
                        border: `1px solid ${card.badgeColor}`,
                        color: card.badgeColor,
                      }}
                    >
                      {card.badge}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '22px',
                      color: 'var(--color-text-inverse)',
                      margin: '0 0 10px 0',
                    }}
                  >
                    {card.title}
                  </h3>

                  <p
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '13px',
                      lineHeight: 1.65,
                      color: 'rgba(246, 239, 228, 0.7)',
                      margin: 0,
                    }}
                  >
                    {card.description}
                  </p>
                </div>

                <div style={{ marginTop: '20px' }}>
                  <Link
                    to="/experience"
                    style={{
                      fontSize: '11px',
                      fontFamily: 'var(--font-sans)',
                      fontWeight: 600,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: 'var(--color-brass)',
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                    }}
                  >
                    <span>Read details</span>
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
