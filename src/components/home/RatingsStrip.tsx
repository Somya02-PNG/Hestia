import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Star, ShieldCheck, MapPin } from 'lucide-react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { RATINGS } from '../../content/ratings'

gsap.registerPlugin(ScrollTrigger)

export default function RatingsStrip() {
  const scoredRatings = RATINGS.filter(r => r.score !== null)
  const stripRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const ctx = gsap.context(() => {
      if (isReduced) {
        gsap.from(contentRef.current, {
          opacity: 0,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: stripRef.current,
            start: 'top 92%',
          },
        })
        return
      }

      // Smooth scroll entrance with subtle reveal
      gsap.from(contentRef.current, {
        opacity: 0,
        y: 14,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: stripRef.current,
          start: 'top 90%',
        },
      })
    }, stripRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={stripRef}
      className="ratings-strip"
      aria-label="Guest Ratings & Certifications"
      style={{
        backgroundColor: '#17120E',
        borderTop: '1px solid rgba(184, 154, 100, 0.15)',
        borderBottom: '1px solid rgba(184, 154, 100, 0.15)',
        padding: '16px 0',
        overflow: 'hidden',
      }}
    >
      <div
        ref={contentRef}
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px',
        }}
      >
        {/* Certification & City Badge */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <ShieldCheck size={16} color="#4ADE80" />
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '12px',
                fontWeight: 600,
                color: 'var(--color-veg)',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
              }}
            >
              100% Pure Vegetarian
            </span>
          </div>

          <div style={{ width: '1px', height: '14px', backgroundColor: 'rgba(184, 154, 100, 0.25)' }} />

          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <MapPin size={14} color="var(--color-brass)" />
            <span style={{ fontSize: '12px', color: 'rgba(246, 239, 228, 0.7)', fontFamily: 'var(--font-sans)' }}>
              Shyam Nagar, Kanpur
            </span>
          </div>
        </div>

        {/* Platform Scores */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
          {scoredRatings.map(item => (
            <motion.div
              key={item.platform}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'default' }}
            >
              <Star size={13} fill="var(--color-brass)" stroke="var(--color-brass)" />
              <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-text-inverse)' }}>
                {item.score?.toFixed(1)}
              </span>
              <span style={{ fontSize: '12px', color: 'rgba(246, 239, 228, 0.65)' }}>
                {item.platform}
              </span>
              {item.count && (
                <span style={{ fontSize: '11px', color: 'rgba(184, 154, 100, 0.75)' }}>
                  ({item.count})
                </span>
              )}
            </motion.div>
          ))}

          <motion.div
            whileHover={{ x: 3 }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              to="/reviews"
              style={{
                fontSize: '11px',
                fontFamily: 'var(--font-sans)',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--color-brass)',
                textDecoration: 'none',
                marginLeft: '4px',
                display: 'inline-block',
              }}
            >
              All Reviews →
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
