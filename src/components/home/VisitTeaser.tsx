import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { MapPin, Clock, Phone, MessageSquare, Navigation, Calendar } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { RESTAURANT } from '../../content/restaurant'
import { useMotionMode } from '../../hooks/useMotionMode'
import Magnet from '../reactbits/Magnet'
import TapScale from '../motion/TapScale'
import SectionDivider from '../motion/SectionDivider'
import HomeGlowBackground from './HomeGlowBackground'
import './VisitTeaser.css'

gsap.registerPlugin(ScrollTrigger)

export default function VisitTeaser() {
  const { isDesktop, reduced } = useMotionMode()
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  const pinRef = useRef<HTMLDivElement>(null)
  const addressLinesRef = useRef<HTMLDivElement>(null)

  const [isOpenNow, setIsOpenNow] = useState(false)

  // Compute live Open / Closed status from RESTAURANT.hours (11:00 to 23:00 daily IST)
  useEffect(() => {
    const checkOpenStatus = () => {
      const now = new Date()
      // IST is UTC+5:30
      const utcTime = now.getTime() + now.getTimezoneOffset() * 60000
      const istTime = new Date(utcTime + 5.5 * 3600000)
      const currentHour = istTime.getHours()
      setIsOpenNow(currentHour >= 11 && currentHour < 23)
    }

    checkOpenStatus()
    const interval = setInterval(checkOpenStatus, 60000)
    return () => clearInterval(interval)
  }, [])

  // GSAP card slide-up + clip reveal, map-pin bounce drop, address lines stagger
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

      // Card slide up with clip reveal
      if (cardRef.current) {
        gsap.fromTo(
          cardRef.current,
          {
            opacity: 0,
            y: 40,
            clipPath: 'inset(20% 0% 0% 0%)',
          },
          {
            opacity: 1,
            y: 0,
            clipPath: 'inset(0% 0% 0% 0%)',
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: cardRef.current,
              start: 'top 86%',
            },
          }
        )
      }

      // Map pin drops and settles with bounce
      if (pinRef.current) {
        gsap.from(pinRef.current, {
          y: -36,
          opacity: 0,
          duration: 0.9,
          ease: 'bounce.out',
          scrollTrigger: {
            trigger: cardRef.current,
            start: 'top 82%',
          },
        })
      }

      // Address lines stagger in
      if (addressLinesRef.current) {
        gsap.from(addressLinesRef.current.children, {
          opacity: 0,
          y: 14,
          duration: 0.7,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardRef.current,
            start: 'top 80%',
          },
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [reduced])

  // Wrap buttons with Magnet on desktop, TapScale on mobile
  const renderActionButton = (content: React.ReactNode) => {
    if (isDesktop) {
      return (
        <Magnet strength={0.25} padding={25}>
          {content}
        </Magnet>
      )
    }

    return (
      <TapScale tapScale={0.97} liftOnHover={false}>
        {content}
      </TapScale>
    )
  }

  return (
    <section
      ref={sectionRef}
      className="visit-teaser section section-dark"
      aria-label="Visit Hestiia Restaurant"
    >
      <SectionDivider width="90%" />
      <HomeGlowBackground top="35%" left="50%" size="700px" />

      <div className="container" style={{ marginTop: '24px' }}>
        {/* Header */}
        <div ref={headerRef} className="visit-header">
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
            <MapPin size={12} color="var(--color-brass, #B89A64)" />
            Visit Our Sanctuary
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(28px, 4vw, 42px)',
              fontWeight: 300,
              color: 'var(--color-text-inverse, #F6EFE4)',
              margin: '0 0 12px 0',
              lineHeight: 1.2,
            }}
          >
            A Table Awaits You in Shyam Nagar.
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '14px',
              lineHeight: 1.6,
              color: 'rgba(246, 239, 228, 0.72)',
              margin: 0,
            }}
          >
            Conveniently situated in Kanpur with valet assistance, peaceful family seating, and warm North Indian hospitality.
          </p>
        </div>

        {/* Main Visit Card with Clip Reveal */}
        <div ref={cardRef} className="visit-main-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px' }}>
            {/* Left: Decorative Map Pin that drops and settles */}
            <div ref={pinRef} className="visit-pin-icon-wrap" aria-hidden="true">
              <MapPin size={22} />
            </div>

            {/* Right: Live Open / Closed Status Badge with Pulsing Dot */}
            <div className={`visit-status-badge ${isOpenNow ? 'open' : 'closed'}`}>
              <span className={`visit-status-dot ${isOpenNow ? 'pulse-green' : 'pulse-gold'}`} />
              <span>{isOpenNow ? 'Open Now (11:00 - 23:00)' : 'Opens at 11:00 AM Daily'}</span>
            </div>
          </div>

          {/* Staggered Address and Timing Details */}
          <div ref={addressLinesRef} style={{ marginTop: '8px' }}>
            <h3
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '26px',
                color: 'var(--color-text-inverse, #F6EFE4)',
                margin: '0 0 8px 0',
                fontWeight: 300,
              }}
            >
              {RESTAURANT.name}
            </h3>

            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '15px',
                lineHeight: 1.6,
                color: 'rgba(246, 239, 228, 0.85)',
                margin: '0 0 8px 0',
              }}
            >
              {RESTAURANT.address.fullDisplay}
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'rgba(246, 239, 228, 0.65)', fontSize: '13px' }}>
              <Clock size={14} color="var(--color-brass, #B89A64)" />
              <span>{RESTAURANT.hours.displayText}</span>
              <span>·</span>
              <span>{RESTAURANT.priceRange}</span>
            </div>
          </div>

          {/* Action Buttons with Magnet / TapScale and Icon Wiggle */}
          <div className="visit-actions-grid">
            {renderActionButton(
              <a
                href={`tel:${RESTAURANT.phone.e164}`}
                className="visit-action-btn primary"
                aria-label={`Call ${RESTAURANT.phone.display}`}
              >
                <Phone size={14} className="visit-btn-icon" />
                <span>Call Now</span>
              </a>
            )}

            {renderActionButton(
              <a
                href={RESTAURANT.whatsapp.chatUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="visit-action-btn outline"
                aria-label="Chat on WhatsApp"
              >
                <MessageSquare size={14} className="visit-btn-icon" />
                <span>WhatsApp</span>
              </a>
            )}

            {renderActionButton(
              <a
                href={RESTAURANT.platforms.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="visit-action-btn outline"
                aria-label="Get Directions on Google Maps"
              >
                <Navigation size={14} className="visit-btn-icon" />
                <span>Directions</span>
              </a>
            )}

            {renderActionButton(
              <Link
                to="/contact"
                className="visit-action-btn outline"
                aria-label="Plan your visit and reserve a table"
              >
                <Calendar size={14} className="visit-btn-icon" />
                <span>Reserve</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
