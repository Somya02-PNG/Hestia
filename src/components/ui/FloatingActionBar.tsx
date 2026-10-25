import { useState, useEffect } from 'react'
import { Phone, Navigation, Calendar } from 'lucide-react'
import { RESTAURANT } from '../../content/restaurant'

export default function FloatingActionBar() {
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window === 'undefined') return false
    const heroEl = document.getElementById('home')
    return !heroEl
  })

  useEffect(() => {
    const heroEl = document.getElementById('home')
    if (!heroEl) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        // If hero is in view, hide floating action bar
        setIsVisible(!entry.isIntersecting)
      },
      { threshold: 0.1 }
    )

    observer.observe(heroEl)
    return () => observer.disconnect()
  }, [])

  if (!isVisible) return null

  return (
    <aside
      className="floating-action-bar"
      aria-label="Quick restaurant actions"
      style={{
        position: 'fixed',
        bottom: '16px',
        left: '16px',
        right: '16px',
        zIndex: 90,
        transition: 'opacity 0.3s ease, transform 0.3s ease',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '8px 12px',
          backgroundColor: 'rgba(31, 26, 22, 0.92)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderRadius: '40px',
          border: '1px solid rgba(184, 154, 100, 0.25)',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
        }}
      >
        <a
          href={`tel:${RESTAURANT.phone.e164}`}
          className="floating-btn"
          aria-label="Call Hestiia Restaurant"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            padding: '10px 16px',
            color: 'var(--color-text-inverse)',
            fontSize: '13px',
            fontFamily: 'var(--font-sans)',
            fontWeight: 500,
            textDecoration: 'none',
          }}
        >
          <Phone size={15} color="var(--color-brass)" />
          <span>Call</span>
        </a>

        <div style={{ width: '1px', height: '20px', backgroundColor: 'rgba(184, 154, 100, 0.2)' }} />

        <a
          href={RESTAURANT.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="floating-btn"
          aria-label="Get directions on Google Maps (opens in new tab)"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            padding: '10px 16px',
            color: 'var(--color-text-inverse)',
            fontSize: '13px',
            fontFamily: 'var(--font-sans)',
            fontWeight: 500,
            textDecoration: 'none',
          }}
        >
          <Navigation size={15} color="var(--color-brass)" />
          <span>Directions</span>
        </a>

        <div style={{ width: '1px', height: '20px', backgroundColor: 'rgba(184, 154, 100, 0.2)' }} />

        <a
          href="#visit"
          className="floating-btn-primary"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            padding: '10px 18px',
            backgroundColor: 'var(--color-brass)',
            color: '#1F1A16',
            borderRadius: '24px',
            fontSize: '13px',
            fontFamily: 'var(--font-sans)',
            fontWeight: 600,
            textDecoration: 'none',
          }}
        >
          <Calendar size={15} />
          <span>Reserve</span>
        </a>
      </div>
    </aside>
  )
}
