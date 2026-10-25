import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles, Plus } from 'lucide-react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { POPULAR_DISHES, MENU_CATEGORIES, type Dish } from '../../content/menu'
import { useMotionMode } from '../../hooks/useMotionMode'
import Magnet from '../reactbits/Magnet'
import ClickSpark from '../reactbits/ClickSpark'
import TapScale from '../motion/TapScale'
import ShinyText from '../reactbits/ShinyText'
import GradientText from '../reactbits/GradientText'
import './SignatureDishes.css'

gsap.registerPlugin(ScrollTrigger)

export default function SignatureDishes() {
  const featuredDishes = POPULAR_DISHES.slice(0, 6)
  const { isDesktop, reduced } = useMotionMode()

  const sectionRef = useRef<HTMLElement>(null)
  const pinWrapperRef = useRef<HTMLDivElement>(null)
  const cardsTrackRef = useRef<HTMLDivElement>(null)
  const progressLineRef = useRef<HTMLDivElement>(null)

  const mobileCarouselRef = useRef<HTMLDivElement>(null)
  const [activeMobileIdx, setActiveMobileIdx] = useState(0)

  // GSAP Desktop Horizontal Pin with ScrollTrigger
  useEffect(() => {
    if (reduced) return

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia()

      mm.add('(min-width: 1024px)', () => {
        if (!cardsTrackRef.current || !sectionRef.current || !pinWrapperRef.current) return

        const track = cardsTrackRef.current
        const viewport = track.parentElement

        if (!viewport) return

        // Calculate horizontal translation distance
        const scrollDistance = () => track.scrollWidth - viewport.clientWidth + 80

        const horizontalTween = gsap.to(track, {
          x: () => -scrollDistance(),
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: () => `+=${scrollDistance() * 1.2}`,
            pin: pinWrapperRef.current,
            scrub: 1,
            invalidateOnRefresh: true,
            onUpdate: self => {
              if (progressLineRef.current) {
                progressLineRef.current.style.transform = `scaleX(${self.progress})`
              }
            },
          },
        })

        // Inner image parallax inside each card scrubbed during horizontal slide
        const cards = track.querySelectorAll('.dish-card')
        cards.forEach(card => {
          const img = card.querySelector('.dish-parallax-img')
          if (img) {
            gsap.fromTo(
              img,
              { x: '6%' },
              {
                x: '-6%',
                ease: 'none',
                scrollTrigger: {
                  trigger: card,
                  containerAnimation: horizontalTween,
                  start: 'left right',
                  end: 'right left',
                  scrub: true,
                },
              }
            )
          }
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [reduced])

  // Mobile scroll-snap centered card tracking
  const handleMobileScroll = () => {
    const container = mobileCarouselRef.current
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

  // Dish Card Inner Component
  const renderDishCard = (dish: Dish) => {
    const category = MENU_CATEGORIES.find(c => c.id === dish.categoryId)
    const imgSrc = dish.image?.srcSmall || category?.fallbackImage.srcSmall || ''
    const imgAlt = dish.image?.alt || `${dish.name} — Pure Vegetarian Dining at Hestiia`

    return (
      <div className="dish-card" key={dish.id}>
        {/* Image wrap with parallax image */}
        <div className="dish-image-wrap">
          {imgSrc && (
            <img
              src={imgSrc}
              alt={imgAlt}
              loading="lazy"
              decoding="async"
              className="dish-parallax-img"
            />
          )}

          {/* Badges: Veg Mark with gentle pulse + Floating Popular Ribbon with ShinyText */}
          <div className="dish-card-badges">
            <div className="veg-mark-box" title="100% Pure Vegetarian">
              <div className="veg-pulse-dot" />
            </div>

            <div className="dish-popular-ribbon">
              <Sparkles size={10} color="#1F1A16" />
              <ShinyText text="Popular" speed={3.5} color="#1F1A16" shimmerColor="#FFF8E7" />
            </div>
          </div>

          {/* Price with Gold Underline */}
          <div className="dish-price-tag">
            <span>₹{dish.price}</span>
            <span className="dish-price-underline" />
          </div>
        </div>

        {/* Card Details */}
        <div className="dish-card-body">
          <div>
            <h3 className="dish-card-title">{dish.name}</h3>
            <p className="dish-card-desc">{dish.description}</p>
          </div>

          <div className="dish-card-actions">
            <Link to={`/menu/${dish.slug}`} className="dish-view-link">
              <span>View dish</span>
              <ArrowRight size={12} />
            </Link>

            {/* Add Button with Magnet (desktop) + ClickSpark (all) + TapScale */}
            <Magnet strength={0.25} disabled={!isDesktop} padding={20}>
              <ClickSpark sparkColor="var(--color-brass, #B89A64)" sparkCount={8}>
                <TapScale tapScale={0.97} liftOnHover={isDesktop}>
                  <button
                    type="button"
                    className="dish-add-btn"
                    onClick={e => e.stopPropagation()}
                    aria-label={`Add ${dish.name} to order`}
                  >
                    <Plus size={13} />
                    <span>Add</span>
                  </button>
                </TapScale>
              </ClickSpark>
            </Magnet>
          </div>
        </div>
      </div>
    )
  }

  return (
    <section
      ref={sectionRef}
      className="signature-section section section-dark"
      aria-label="Signature Dishes of Hestiia"
    >
      {/* Desktop Layout: Horizontal Pinned Track */}
      <div ref={pinWrapperRef} className="signature-pin-wrapper">
        <div className="container signature-pin-inner">
          {/* Pinned Heading on Left */}
          <div className="signature-pinned-heading">
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
                marginBottom: '12px',
              }}
            >
              <Sparkles size={12} color="var(--color-brass, #B89A64)" />
              Signatures of Hestiia
            </span>

            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(32px, 3.5vw, 46px)',
                fontWeight: 300,
                color: 'var(--color-text-inverse, #F6EFE4)',
                margin: '0 0 16px 0',
                lineHeight: 1.18,
              }}
            >
              Crafted with Heritage Spices.
            </h2>

            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '14px',
                fontWeight: 300,
                lineHeight: 1.7,
                color: 'rgba(246, 239, 228, 0.76)',
                marginBottom: '28px',
              }}
            >
              Slow-simmered vegetarian curries, clay-oven flatbreads, and aromatic gravies cherished by families across Kanpur.
            </p>

            {/* See Full Menu Button with GradientText */}
            <Link to="/menu" className="signature-menu-btn">
              <GradientText colors={['#B89A64', '#F6EFE4', '#E6C687', '#B89A64']} animationSpeed={7}>
                <span style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  See Full Menu (193 Dishes)
                </span>
              </GradientText>
              <ArrowRight size={14} className="menu-btn-arrow" />
            </Link>
          </div>

          {/* Sliding Cards Viewport */}
          <div className="signature-track-viewport">
            <div ref={cardsTrackRef} className="signature-cards-track">
              {featuredDishes.map(renderDishCard)}
            </div>
          </div>
        </div>

        {/* Progress Bar at Bottom of Pinned Track */}
        <div className="signature-progress-track">
          <div ref={progressLineRef} className="signature-progress-bar" />
        </div>
      </div>

      {/* Mobile/Tablet Layout: Native Swipe Row (No Pin) */}
      <div className="container signature-mobile-container">
        <div className="signature-mobile-header">
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
            Signatures of Hestiia
          </span>

          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(28px, 4vw, 36px)',
              fontWeight: 300,
              color: 'var(--color-text-inverse, #F6EFE4)',
              margin: '0 0 12px 0',
              lineHeight: 1.2,
            }}
          >
            Crafted with Heritage Spices.
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
            Slow-simmered vegetarian curries and clay-oven flatbreads.
          </p>
        </div>

        {/* Mobile Swipe Row with Center Card Scaling */}
        <div
          ref={mobileCarouselRef}
          className="signature-mobile-carousel"
          onScroll={handleMobileScroll}
        >
          {featuredDishes.map((dish, idx) => {
            const isActive = idx === activeMobileIdx

            return (
              <motion.div
                key={dish.id}
                className="signature-mobile-item-wrap"
                whileTap={{ scale: 0.98 }}
                style={{
                  transform: isActive ? 'scale(1)' : 'scale(0.94)',
                  opacity: isActive ? 1 : 0.75,
                }}
              >
                {renderDishCard(dish)}
              </motion.div>
            )
          })}
        </div>

        {/* Mobile CTA */}
        <div className="signature-mobile-footer">
          <Link to="/menu" className="signature-menu-btn">
            <GradientText colors={['#B89A64', '#F6EFE4', '#E6C687', '#B89A64']}>
              <span style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                See Full Menu (193 Dishes)
              </span>
            </GradientText>
            <ArrowRight size={14} className="menu-btn-arrow" />
          </Link>
        </div>
      </div>
    </section>
  )
}
