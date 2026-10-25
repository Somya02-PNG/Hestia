import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Star, ShieldCheck, MapPin, ArrowUpRight, ArrowRight } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { RATINGS } from '../../content/ratings'
import CountUp from '../reactbits/CountUp'
import ShinyText from '../reactbits/ShinyText'
import DrawLine from '../motion/DrawLine'
import './RatingsStrip.css'

gsap.registerPlugin(ScrollTrigger)

export default function RatingsStrip() {
  const stripRef = useRef<HTMLElement>(null)
  const desktopRowRef = useRef<HTMLDivElement>(null)
  const mobileRowRef = useRef<HTMLDivElement>(null)
  const [activeMobileIdx, setActiveMobileIdx] = useState(0)

  // Stagger entrance with GSAP
  useEffect(() => {
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const ctx = gsap.context(() => {
      if (isReduced) return

      if (desktopRowRef.current) {
        const cards = desktopRowRef.current.querySelectorAll('.rating-item-card')
        gsap.from(cards, {
          opacity: 0,
          y: 16,
          duration: 0.7,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: stripRef.current,
            start: 'top 92%',
          },
        })
      }
    }, stripRef)

    return () => ctx.revert()
  }, [])

  // Mobile scroll-snap centered card detection for 1.0 vs 0.94 scale
  const handleMobileScroll = () => {
    const container = mobileRowRef.current
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
      ref={stripRef}
      className="ratings-strip"
      aria-label="Guest Ratings and Certifications"
    >
      {/* Animated gold line that draws across */}
      <DrawLine orientation="horizontal" align="center" color="var(--color-brass, #B89A64)" />

      <div className="container" style={{ paddingTop: '12px' }}>
        <div className="ratings-strip-container">
          {/* Certification & City Badge */}
          <div className="ratings-badges">
            <div className="ratings-badge-veg">
              <ShieldCheck size={16} color="var(--color-veg, #4ADE80)" />
              <span>100% Pure Vegetarian</span>
            </div>

            <div className="ratings-badge-divider" />

            <div className="ratings-badge-location">
              <MapPin size={14} color="var(--color-brass, #B89A64)" />
              <span>Shyam Nagar, Kanpur</span>
            </div>
          </div>

          {/* Desktop Cards Row */}
          <div ref={desktopRowRef} className="ratings-cards-desktop">
            {RATINGS.map(item => {
              const hasScore = item.score !== null

              return (
                <a
                  key={item.platform}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rating-item-card"
                  aria-label={`${item.platform} Rating`}
                >
                  <Star size={13} fill="var(--color-brass, #B89A64)" stroke="var(--color-brass, #B89A64)" />

                  {hasScore ? (
                    <>
                      <div className="rating-score-val">
                        <CountUp to={item.score!} decimals={1} duration={1.8} />
                        <span className="rating-score-out">/{item.outOf}</span>
                      </div>

                      <ShinyText
                        text={item.platform}
                        speed={5}
                        color="rgba(246, 239, 228, 0.75)"
                        shimmerColor="#FFF4DD"
                      />

                      {item.count && (
                        <span className="rating-count">
                          ({item.count})
                        </span>
                      )}
                    </>
                  ) : (
                    <>
                      <ShinyText
                        text={item.platform}
                        speed={6}
                        color="rgba(246, 239, 228, 0.75)"
                        shimmerColor="#FFF4DD"
                      />
                      <span className="rating-view-action">
                        View rating
                        <ArrowUpRight size={12} className="rating-arrow-nudge" />
                      </span>
                    </>
                  )}

                  {/* Underline slide effect */}
                  <span className="rating-item-underline" />
                </a>
              )
            })}

            <Link
              to="/reviews"
              className="rating-item-card"
              style={{
                borderColor: 'rgba(184, 154, 100, 0.4)',
                backgroundColor: 'rgba(184, 154, 100, 0.08)',
              }}
            >
              <span
                style={{
                  fontSize: '11px',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--color-brass, #B89A64)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                }}
              >
                All Reviews
                <ArrowRight size={12} className="rating-arrow-nudge" />
              </span>
              <span className="rating-item-underline" />
            </Link>
          </div>

          {/* Mobile Snap Row (Active card scales 1.0 vs 0.94) */}
          <div
            ref={mobileRowRef}
            className="ratings-cards-mobile"
            onScroll={handleMobileScroll}
          >
            {RATINGS.map((item, idx) => {
              const isActive = idx === activeMobileIdx
              const hasScore = item.score !== null

              return (
                <div
                  key={item.platform}
                  className="ratings-mobile-item-wrap"
                  style={{
                    transform: isActive ? 'scale(1)' : 'scale(0.94)',
                    opacity: isActive ? 1 : 0.8,
                  }}
                >
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rating-item-card"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    <Star size={13} fill="var(--color-brass, #B89A64)" stroke="var(--color-brass, #B89A64)" />

                    {hasScore ? (
                      <>
                        <div className="rating-score-val">
                          <CountUp to={item.score!} decimals={1} duration={1.6} />
                          <span className="rating-score-out">/{item.outOf}</span>
                        </div>
                        <ShinyText
                          text={item.platform}
                          speed={5}
                          color="rgba(246, 239, 228, 0.75)"
                          shimmerColor="#FFF4DD"
                        />
                        {item.count && (
                          <span className="rating-count">({item.count})</span>
                        )}
                      </>
                    ) : (
                      <>
                        <ShinyText
                          text={item.platform}
                          speed={5}
                          color="rgba(246, 239, 228, 0.75)"
                          shimmerColor="#FFF4DD"
                        />
                        <span className="rating-view-action">
                          View rating
                          <ArrowUpRight size={12} className="rating-arrow-nudge" />
                        </span>
                      </>
                    )}

                    <span className="rating-item-underline" />
                  </a>
                </div>
              )
            })}

            <div
              className="ratings-mobile-item-wrap"
              style={{
                transform: RATINGS.length === activeMobileIdx ? 'scale(1)' : 'scale(0.94)',
                opacity: RATINGS.length === activeMobileIdx ? 1 : 0.8,
              }}
            >
              <Link
                to="/reviews"
                className="rating-item-card"
                style={{
                  borderColor: 'rgba(184, 154, 100, 0.4)',
                  whiteSpace: 'nowrap',
                }}
              >
                <span
                  style={{
                    fontSize: '11px',
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'var(--color-brass, #B89A64)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}
                >
                  All Reviews
                  <ArrowRight size={12} />
                </span>
                <span className="rating-item-underline" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
