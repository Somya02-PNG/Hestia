import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CUISINES } from '../../content/cuisines'

gsap.registerPlugin(ScrollTrigger)

export default function CuisinesTeaser() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

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

      // Desktop: staggered header + cards batch reveal
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
          const cards = Array.from(gridRef.current.children)
          ScrollTrigger.batch(cards, {
            start: 'top 85%',
            once: true,
            onEnter: batch => {
              gsap.from(batch, {
                opacity: 0,
                y: 32,
                duration: 0.85,
                stagger: 0.12,
                ease: 'power3.out',
                overwrite: true,
              })
            },
          })
        }
      })

      // Mobile: shorter duration (0.6s), smaller distance
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
          const cards = Array.from(gridRef.current.children)
          ScrollTrigger.batch(cards, {
            start: 'top 90%',
            once: true,
            onEnter: batch => {
              gsap.from(batch, {
                opacity: 0,
                y: 20,
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
      className="cuisines-teaser section section-dark"
      style={{
        padding: 'clamp(56px, 8vw, 88px) 0',
        backgroundColor: '#191410',
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
              Culinary Spectrum
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
                color: 'var(--color-brass)',
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

        {/* 4 Small Cards with Framer Motion hover & tap */}
        <div
          ref={gridRef}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '24px',
          }}
        >
          {CUISINES.map(item => (
            <motion.div
              key={item.id}
              whileHover={{ y: -6, transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] } }}
              whileTap={{ scale: 0.98 }}
              style={{ display: 'flex' }}
            >
              <Link
                to="/cuisines"
                style={{
                  backgroundColor: 'rgba(38, 31, 26, 0.75)',
                  borderRadius: '12px',
                  border: '1px solid rgba(184, 154, 100, 0.18)',
                  overflow: 'hidden',
                  textDecoration: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  width: '100%',
                  transition: 'border-color 0.25s ease, box-shadow 0.25s ease',
                }}
                className="cuisine-teaser-card"
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(184, 154, 100, 0.45)'
                  e.currentTarget.style.boxShadow = '0 16px 32px rgba(0, 0, 0, 0.5)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(184, 154, 100, 0.18)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <div style={{ position: 'relative', width: '100%', paddingTop: '60%', overflow: 'hidden' }}>
                  <img
                    src={item.image}
                    alt={`${item.title} at Hestiia Restaurant`}
                    loading="lazy"
                    decoding="async"
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.transform = 'scale(1.06)'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.transform = 'scale(1)'
                    }}
                  />
                </div>

                <div style={{ padding: '20px', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <span
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '10px',
                        fontWeight: 600,
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        color: 'var(--color-brass)',
                        display: 'block',
                        marginBottom: '6px',
                      }}
                    >
                      {item.subtitle}
                    </span>
                    <h3
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '20px',
                        color: 'var(--color-text-inverse)',
                        margin: '0 0 10px 0',
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '13px',
                        lineHeight: 1.6,
                        color: 'rgba(246, 239, 228, 0.7)',
                        margin: 0,
                      }}
                    >
                      {item.description}
                    </p>
                  </div>

                  <div
                    style={{
                      marginTop: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '11px',
                      color: 'var(--color-brass-light)',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                    }}
                  >
                    <span>Learn more</span>
                    <ArrowRight size={12} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
