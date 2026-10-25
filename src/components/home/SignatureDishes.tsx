import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { POPULAR_DISHES, MENU_CATEGORIES } from '../../content/menu'

gsap.registerPlugin(ScrollTrigger)

export default function SignatureDishes() {
  const featuredDishes = POPULAR_DISHES.slice(0, 6)
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
          const cards = Array.from(gridRef.current.children)
          ScrollTrigger.batch(cards, {
            start: 'top 85%',
            once: true,
            onEnter: batch => {
              gsap.from(batch, {
                opacity: 0,
                y: 28,
                duration: 0.8,
                stagger: 0.1,
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
          const cards = Array.from(gridRef.current.children)
          ScrollTrigger.batch(cards, {
            start: 'top 90%',
            once: true,
            onEnter: batch => {
              gsap.from(batch, {
                opacity: 0,
                y: 18,
                duration: 0.6,
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
      className="signature-dishes-teaser section section-dark"
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
              Signatures of Hestiia
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
              Crafted with Heritage Spices.
            </h2>
          </div>

          <motion.div
            whileHover={{ x: 4 }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              to="/menu"
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
              <span>See Full Menu (193 Dishes)</span>
              <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>

        {/* 6 Dish Cards Grid with Framer Motion hover & tap */}
        <div
          ref={gridRef}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '24px',
            marginBottom: '36px',
          }}
        >
          {featuredDishes.map(dish => {
            const category = MENU_CATEGORIES.find(c => c.id === dish.categoryId)
            const imgSrc = dish.image?.srcSmall || category?.fallbackImage.srcSmall || ''
            const imgAlt = dish.image?.alt || `${dish.name} — Pure Vegetarian Dining at Hestiia`

            return (
              <motion.div
                key={dish.id}
                whileHover={{ y: -6, transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] } }}
                whileTap={{ scale: 0.98 }}
                style={{
                  backgroundColor: 'rgba(38, 31, 26, 0.75)',
                  borderRadius: '12px',
                  border: '1px solid rgba(184, 154, 100, 0.18)',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'border-color 0.25s ease, box-shadow 0.25s ease',
                }}
                className="dish-teaser-card"
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(184, 154, 100, 0.45)'
                  e.currentTarget.style.boxShadow = '0 16px 32px rgba(0, 0, 0, 0.5)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(184, 154, 100, 0.18)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                {/* Image */}
                <div style={{ position: 'relative', width: '100%', paddingTop: '62%', overflow: 'hidden', backgroundColor: '#16120F' }}>
                  {imgSrc && (
                    <img
                      src={imgSrc}
                      alt={imgAlt}
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
                  )}

                  {/* Badges */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '10px',
                      left: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      zIndex: 2,
                    }}
                  >
                    {/* Pure Veg Mark */}
                    <div
                      style={{
                        width: '16px',
                        height: '16px',
                        border: '1.5px solid #2F7D4F',
                        borderRadius: '3px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'rgba(31, 26, 22, 0.88)',
                      }}
                    >
                      <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#2F7D4F' }} />
                    </div>

                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                        padding: '2px 6px',
                        borderRadius: '10px',
                        backgroundColor: 'var(--color-brass)',
                        color: '#1F1A16',
                        fontSize: '10px',
                        fontWeight: 700,
                      }}
                    >
                      <Sparkles size={10} />
                      Signature
                    </span>
                  </div>

                  {/* Price */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '10px',
                      right: '10px',
                      zIndex: 2,
                      padding: '3px 8px',
                      borderRadius: '4px',
                      backgroundColor: 'rgba(31, 26, 22, 0.9)',
                      border: '1px solid rgba(184, 154, 100, 0.35)',
                      color: 'var(--color-brass)',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '13px',
                      fontWeight: 700,
                    }}
                  >
                    ₹{dish.price}
                  </div>
                </div>

                {/* Details */}
                <div style={{ padding: '20px', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <h3
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '20px',
                        color: 'var(--color-text-inverse)',
                        margin: '0 0 6px 0',
                      }}
                    >
                      {dish.name}
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
                      {dish.description}
                    </p>
                  </div>

                  <div style={{ marginTop: '16px' }}>
                    <Link
                      to={`/menu/${dish.slug}`}
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
                      <span>View dish</span>
                      <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Center CTA */}
        <div style={{ textAlign: 'center' }}>
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            style={{ display: 'inline-block' }}
          >
            <Link
              to="/menu"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 28px',
                backgroundColor: 'var(--color-brass)',
                color: '#1F1A16',
                borderRadius: 'var(--radius-sm)',
                fontFamily: 'var(--font-sans)',
                fontSize: '12px',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                textDecoration: 'none',
              }}
            >
              <span>See Full 193-Dish Menu</span>
              <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
