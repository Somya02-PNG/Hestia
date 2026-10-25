import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Star, MessageSquare, Quote, ArrowRight, Edit3 } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { RATINGS } from '../../content/ratings'
import { useMotionMode } from '../../hooks/useMotionMode'
import CountUp from '../reactbits/CountUp'
import ClickSpark from '../reactbits/ClickSpark'
import SectionDivider from '../motion/SectionDivider'
import HomeGlowBackground from './HomeGlowBackground'
import './ReviewsTeaser.css'

gsap.registerPlugin(ScrollTrigger)

const GOOGLE_QUOTES = [
  {
    id: 'quote-1',
    text: 'Good food Good service And prices are unmatched.. absolutely pocket friendly .',
    author: 'Verified Diner',
    platform: 'Google Reviews',
    stars: 5,
  },
  {
    id: 'quote-2',
    text: 'I ordered honey chili potato and schezwan noddle. Pure vegetarian delicacy with authentic touch.',
    author: 'Kanpur Food Enthusiast',
    platform: 'Google Reviews',
    stars: 5,
  },
  {
    id: 'quote-3',
    text: 'Superb experience with classy Ambience and food, services is rememberable.',
    author: 'Family Diner',
    platform: 'Google Reviews',
    stars: 5,
  },
]

export default function ReviewsTeaser() {
  const scoredRatings = RATINGS.filter(r => r.score !== null)
  const { isDesktop, reduced } = useMotionMode()

  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const scoreGridRef = useRef<HTMLDivElement>(null)
  const marqueeTrackRef = useRef<HTMLDivElement>(null)
  const mobileCarouselRef = useRef<HTMLDivElement>(null)

  const [touchedMobile, setTouchedMobile] = useState(false)
  const [mobileActiveIdx, setMobileActiveIdx] = useState(0)

  // Duplicated quotes for seamless infinite marquee loop
  const marqueeQuotes = [...GOOGLE_QUOTES, ...GOOGLE_QUOTES, ...GOOGLE_QUOTES]

  const googleWriteReviewUrl = 'https://search.google.com/local/writereview?placeid=ChIJXQe5b0X_vDsR3bK2mCq0PBI'

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
            start: 'top 82%',
          },
        })
      }

      // Star icons fill left to right in sequence
      if (scoreGridRef.current) {
        const starSequences = scoreGridRef.current.querySelectorAll('.reviews-stars-seq')
        starSequences.forEach(seq => {
          const stars = seq.querySelectorAll('.reviews-star-icon')
          gsap.fromTo(
            stars,
            { scale: 0, opacity: 0 },
            {
              scale: 1,
              opacity: 1,
              duration: 0.4,
              stagger: 0.08,
              ease: 'back.out(2)',
              scrollTrigger: {
                trigger: seq,
                start: 'top 88%',
                once: true,
              },
            }
          )
        })
      }

      // Infinite slow marquee on desktop (pause on hover/touch)
      if (marqueeTrackRef.current) {
        const tween = gsap.to(marqueeTrackRef.current, {
          xPercent: -33.333,
          repeat: -1,
          duration: 32,
          ease: 'none',
        })

        const el = marqueeTrackRef.current
        const pause = () => tween.pause()
        const resume = () => tween.resume()

        el.addEventListener('mouseenter', pause)
        el.addEventListener('mouseleave', resume)
        el.addEventListener('touchstart', pause, { passive: true })
        el.addEventListener('touchend', resume)

        // Quote marks scale in
        const quoteIcons = el.querySelectorAll('.reviews-quote-icon')
        gsap.from(quoteIcons, {
          scale: 0,
          rotate: -20,
          duration: 0.6,
          stagger: 0.1,
          ease: 'back.out(1.8)',
          scrollTrigger: {
            trigger: marqueeTrackRef.current,
            start: 'top 85%',
            once: true,
          },
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [reduced])

  // Mobile auto-advance every 5s that stops after first user touch
  useEffect(() => {
    if (touchedMobile || isDesktop) return

    const timer = setInterval(() => {
      setMobileActiveIdx(prev => {
        const next = (prev + 1) % GOOGLE_QUOTES.length
        if (mobileCarouselRef.current) {
          const cardWidth = mobileCarouselRef.current.clientWidth * 0.86 + 16
          mobileCarouselRef.current.scrollTo({
            left: next * cardWidth,
            behavior: 'smooth',
          })
        }
        return next
      })
    }, 5000)

    return () => clearInterval(timer)
  }, [touchedMobile, isDesktop])

  return (
    <section
      ref={sectionRef}
      className="reviews-teaser section section-dark"
      aria-label="Verified Diner Impressions"
    >
      <SectionDivider width="90%" />
      <HomeGlowBackground top="30%" left="65%" size="650px" />

      <div className="container" style={{ marginTop: '24px' }}>
        {/* Header */}
        <div ref={headerRef} className="reviews-header">
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
              <MessageSquare size={12} color="var(--color-brass, #B89A64)" />
              Guest Impressions
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
              Stories Shared at the Table.
            </h2>
          </div>

          {/* Action buttons with ClickSpark */}
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <ClickSpark sparkColor="var(--color-brass, #B89A64)">
              <a
                href={googleWriteReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '9px 16px',
                  borderRadius: '4px',
                  backgroundColor: 'rgba(184, 154, 100, 0.15)',
                  border: '1px solid rgba(184, 154, 100, 0.35)',
                  color: 'var(--color-brass, #B89A64)',
                  fontSize: '11px',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  textDecoration: 'none',
                }}
              >
                <Edit3 size={13} />
                <span>Write a Review</span>
              </a>
            </ClickSpark>

            <ClickSpark sparkColor="var(--color-brass, #B89A64)">
              <Link
                to="/reviews"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '9px 18px',
                  borderRadius: '4px',
                  backgroundColor: 'var(--color-brass, #B89A64)',
                  color: '#1F1A16',
                  fontSize: '11px',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  textDecoration: 'none',
                }}
              >
                <span>Read All</span>
                <ArrowRight size={13} />
              </Link>
            </ClickSpark>
          </div>
        </div>

        {/* Scores Grid: CountUp numbers + Sequenced Star Fills */}
        <div ref={scoreGridRef} className="reviews-score-grid">
          {scoredRatings.map(item => (
            <div key={item.platform} className="reviews-score-card">
              <div>
                <span
                  style={{
                    display: 'block',
                    fontSize: '12px',
                    color: 'rgba(246, 239, 228, 0.68)',
                    fontFamily: 'var(--font-sans)',
                  }}
                >
                  {item.platform}
                </span>

                <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginTop: '3px' }}>
                  <span style={{ fontSize: '24px', fontWeight: 700, color: 'var(--color-brass, #B89A64)' }}>
                    <CountUp to={item.score!} decimals={1} duration={1.8} />
                  </span>
                  <span style={{ fontSize: '12px', color: 'rgba(246, 239, 228, 0.5)' }}>
                    / {item.outOf}
                  </span>
                </div>

                {/* Stars sequenced fill left-to-right via GSAP */}
                <div className="reviews-stars-seq" aria-label={`${item.score} out of 5 stars`}>
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={13}
                      className="reviews-star-icon"
                      fill={i < Math.floor(item.score!) ? 'var(--color-brass, #B89A64)' : 'transparent'}
                      stroke="var(--color-brass, #B89A64)"
                    />
                  ))}
                </div>
              </div>

              {item.count && (
                <span
                  style={{
                    fontSize: '11px',
                    color: 'rgba(184, 154, 100, 0.85)',
                    textAlign: 'right',
                    fontFamily: 'var(--font-sans)',
                  }}
                >
                  {item.count.toLocaleString()} {item.countLabel || 'ratings'}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Desktop 3 Google quote cards in an infinite slow marquee */}
      <div className="reviews-marquee-viewport">
        <div ref={marqueeTrackRef} className="reviews-marquee-track">
          {marqueeQuotes.map((q, idx) => (
            <div key={`${q.id}-${idx}`} className="reviews-quote-card">
              <Quote className="reviews-quote-icon" />

              <p className="reviews-quote-text">
                "{q.text}"
              </p>

              <div className="reviews-quote-footer">
                <span
                  style={{
                    fontSize: '12px',
                    fontWeight: 600,
                    fontFamily: 'var(--font-sans)',
                    color: 'var(--color-text-inverse, #F6EFE4)',
                  }}
                >
                  {q.author}
                </span>
                <span
                  style={{
                    fontSize: '11px',
                    color: 'var(--color-brass, #B89A64)',
                    letterSpacing: '0.04em',
                  }}
                >
                  {q.platform}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Swipe Snap Cards with auto-advance every 5s */}
      <div
        ref={mobileCarouselRef}
        className="reviews-mobile-carousel"
        onTouchStart={() => setTouchedMobile(true)}
      >
        {GOOGLE_QUOTES.map(q => (
          <div key={q.id} className="reviews-mobile-quote-wrap">
            <div className="reviews-quote-card" style={{ width: '100%' }}>
              <Quote className="reviews-quote-icon" />

              <p className="reviews-quote-text" style={{ fontSize: '15px' }}>
                "{q.text}"
              </p>

              <div className="reviews-quote-footer">
                <span
                  style={{
                    fontSize: '12px',
                    fontWeight: 600,
                    fontFamily: 'var(--font-sans)',
                    color: 'var(--color-text-inverse, #F6EFE4)',
                  }}
                >
                  {q.author}
                </span>
                <span
                  style={{
                    fontSize: '11px',
                    color: 'var(--color-brass, #B89A64)',
                  }}
                >
                  {q.platform}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Dot Indicators */}
      <div
        style={{
          display: isDesktop ? 'none' : 'flex',
          justifyContent: 'center',
          gap: '6px',
          marginTop: '12px',
        }}
        aria-hidden="true"
      >
        {GOOGLE_QUOTES.map((q, idx) => (
          <div
            key={q.id}
            style={{
              width: idx === mobileActiveIdx ? '18px' : '6px',
              height: '6px',
              borderRadius: '3px',
              backgroundColor: idx === mobileActiveIdx ? 'var(--color-brass, #B89A64)' : 'rgba(184, 154, 100, 0.25)',
              transition: 'all 0.3s ease',
            }}
          />
        ))}
      </div>
    </section>
  )
}
