import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import interiorImg from '../../assets/images/restaurant_interior.jpg'

gsap.registerPlugin(ScrollTrigger)

export default function StoryTeaser() {
  const sectionRef = useRef<HTMLElement>(null)
  const imageWrapRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)
  const textColRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const ctx = gsap.context(() => {
      if (isReduced) {
        gsap.from([imageWrapRef.current, textColRef.current], {
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

      // Desktop: parallax image lag + mask reveal + staggered text
      mm.add('(min-width: 1024px)', () => {
        gsap.from(imageWrapRef.current, {
          opacity: 0,
          x: -30,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 78%',
          },
        })

        // Parallax image drift on scroll
        gsap.fromTo(
          imageRef.current,
          { yPercent: -5, scale: 1.08 },
          {
            yPercent: 5,
            scale: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1,
            },
          }
        )

        gsap.from(textColRef.current ? textColRef.current.children : [], {
          opacity: 0,
          y: 24,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
        })
      })

      // Mobile: shorter duration (0.6s), smaller distance, touch-optimized
      mm.add('(max-width: 1023px)', () => {
        gsap.from(imageWrapRef.current, {
          opacity: 0,
          y: 20,
          duration: 0.65,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
          },
        })

        gsap.from(textColRef.current ? textColRef.current.children : [], {
          opacity: 0,
          y: 16,
          duration: 0.65,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="story-teaser section section-dark"
      style={{
        padding: 'clamp(56px, 8vw, 88px) 0',
        backgroundColor: '#1F1A16',
        overflow: 'hidden',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'clamp(32px, 5vw, 64px)',
            alignItems: 'center',
          }}
        >
          {/* 1 Photo with Parallax Wrapper */}
          <div
            ref={imageWrapRef}
            style={{
              position: 'relative',
              borderRadius: '12px',
              overflow: 'hidden',
              border: '1px solid rgba(184, 154, 100, 0.25)',
              boxShadow: '0 16px 36px rgba(0, 0, 0, 0.55)',
            }}
          >
            <img
              ref={imageRef}
              src={interiorImg}
              alt="Hestiia Restaurant Dining Sanctuary Interior in Shyam Nagar, Kanpur"
              loading="lazy"
              decoding="async"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                aspectRatio: '4/3',
                objectFit: 'cover',
                willChange: 'transform',
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(31, 26, 22, 0.6) 0%, transparent 60%)',
                pointerEvents: 'none',
              }}
            />
          </div>

          {/* 60-word text + button to /about */}
          <div ref={textColRef}>
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '11px',
                fontWeight: 600,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--color-brass)',
                display: 'block',
                marginBottom: '12px',
              }}
            >
              Our Philosophy · Kanpur
            </span>

            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(28px, 4vw, 44px)',
                fontWeight: 300,
                color: 'var(--color-text-inverse)',
                margin: '0 0 16px 0',
                lineHeight: 1.2,
              }}
            >
              A Sanctuary of Pure Vegetarian Heritage.
            </h2>

            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '15px',
                fontWeight: 300,
                lineHeight: 1.75,
                color: 'rgba(246, 239, 228, 0.78)',
                marginBottom: '28px',
              }}
            >
              Rooted in Shyam Nagar, Hestiia is a certified pure vegetarian dining sanctuary where slow-simmered culinary traditions meet calm hospitality. Our kitchen honors authentic North Indian recipes, wok-tossed Indo-Chinese specialities, and hand-kneaded tandoori breads, crafted purely with cold-pressed oils, rich dairy, and fresh garden herbs for peaceful family feasts.
            </p>

            <motion.div
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              style={{ display: 'inline-block' }}
            >
              <Link
                to="/about"
                className="btn btn-outline"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 24px',
                  border: '1px solid var(--color-brass)',
                  borderRadius: 'var(--radius-sm)',
                  color: 'var(--color-brass)',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '12px',
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  transition: 'background-color 0.25s, color 0.25s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.backgroundColor = 'var(--color-brass)'
                  e.currentTarget.style.color = '#1F1A16'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.backgroundColor = 'transparent'
                  e.currentTarget.style.color = 'var(--color-brass)'
                }}
              >
                <span>Read Our Story</span>
                <ArrowRight size={14} />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
