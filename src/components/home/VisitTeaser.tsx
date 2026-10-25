import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { MapPin, Clock, Phone, MessageSquare, Navigation, Calendar, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { RESTAURANT } from '../../content/restaurant'

gsap.registerPlugin(ScrollTrigger)

export default function VisitTeaser() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const ctx = gsap.context(() => {
      if (isReduced) {
        gsap.from([headerRef.current, cardRef.current], {
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

        gsap.from(cardRef.current, {
          opacity: 0,
          y: 32,
          duration: 0.85,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardRef.current,
            start: 'top 85%',
          },
        })
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

        gsap.from(cardRef.current, {
          opacity: 0,
          y: 20,
          duration: 0.65,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardRef.current,
            start: 'top 88%',
          },
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="visit-teaser section section-dark"
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
            marginBottom: '36px',
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
              Sanctuary Location
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
              Join Us in Shyam Nagar.
            </h2>
          </div>

          <motion.div
            whileHover={{ x: 4 }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              to="/contact"
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
              <span>Full Location & Booking</span>
              <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>

        {/* Small Static Card */}
        <div
          ref={cardRef}
          style={{
            backgroundColor: 'rgba(38, 31, 26, 0.75)',
            borderRadius: '12px',
            border: '1px solid rgba(184, 154, 100, 0.22)',
            padding: 'clamp(24px, 4vw, 36px)',
            maxWidth: '920px',
            boxShadow: '0 12px 32px rgba(0, 0, 0, 0.35)',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '28px',
              marginBottom: '32px',
            }}
          >
            {/* Address */}
            <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(184, 154, 100, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <MapPin size={18} color="var(--color-brass)" />
              </div>
              <div>
                <strong style={{ display: 'block', fontSize: '13px', color: 'var(--color-text-inverse)', marginBottom: '4px' }}>
                  Sanctuary Address
                </strong>
                <p style={{ margin: 0, fontSize: '13px', lineHeight: 1.6, color: 'rgba(246, 239, 228, 0.75)' }}>
                  {RESTAURANT.address.fullDisplay}
                </p>
              </div>
            </div>

            {/* Hours & Dining */}
            <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(184, 154, 100, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <Clock size={18} color="var(--color-brass)" />
              </div>
              <div>
                <strong style={{ display: 'block', fontSize: '13px', color: 'var(--color-text-inverse)', marginBottom: '4px' }}>
                  Dining Hours
                </strong>
                <p style={{ margin: 0, fontSize: '13px', lineHeight: 1.6, color: 'rgba(246, 239, 228, 0.75)' }}>
                  {RESTAURANT.hours.displayText}
                </p>
                <span style={{ fontSize: '11px', color: 'var(--color-brass-light)' }}>
                  {RESTAURANT.priceRange}
                </span>
              </div>
            </div>
          </div>

          {/* Action Row: Call, WhatsApp, Directions, Reserve a Table with Framer Motion tap */}
          <div
            style={{
              paddingTop: '24px',
              borderTop: '1px solid rgba(184, 154, 100, 0.15)',
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '12px',
            }}
          >
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.96 }}>
              <Link
                to="/contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 22px',
                  backgroundColor: 'var(--color-brass)',
                  color: '#1F1A16',
                  borderRadius: '4px',
                  fontSize: '12px',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                }}
              >
                <Calendar size={14} />
                <span>Reserve a Table</span>
              </Link>
            </motion.div>

            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.96 }}>
              <a
                href={`tel:${RESTAURANT.phone.e164}`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '12px 18px',
                  backgroundColor: 'rgba(38, 31, 26, 0.8)',
                  border: '1px solid rgba(184, 154, 100, 0.25)',
                  color: 'var(--color-text-inverse)',
                  borderRadius: '4px',
                  fontSize: '12px',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 500,
                  textDecoration: 'none',
                }}
              >
                <Phone size={14} color="var(--color-brass)" />
                <span>Call {RESTAURANT.phone.display}</span>
              </a>
            </motion.div>

            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.96 }}>
              <a
                href={RESTAURANT.whatsapp.chatUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '12px 18px',
                  backgroundColor: 'rgba(38, 31, 26, 0.8)',
                  border: '1px solid rgba(184, 154, 100, 0.25)',
                  color: 'var(--color-text-inverse)',
                  borderRadius: '4px',
                  fontSize: '12px',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 500,
                  textDecoration: 'none',
                }}
              >
                <MessageSquare size={14} color="#25D366" />
                <span>WhatsApp</span>
              </a>
            </motion.div>

            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.96 }}>
              <a
                href={RESTAURANT.platforms.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '12px 18px',
                  backgroundColor: 'rgba(38, 31, 26, 0.8)',
                  border: '1px solid rgba(184, 154, 100, 0.25)',
                  color: 'var(--color-text-inverse)',
                  borderRadius: '4px',
                  fontSize: '12px',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 500,
                  textDecoration: 'none',
                }}
              >
                <Navigation size={14} color="var(--color-brass)" />
                <span>Directions</span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
