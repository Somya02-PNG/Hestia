import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Image as ImageIcon } from 'lucide-react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { GALLERY_ITEMS } from '../../content/gallery'

gsap.registerPlugin(ScrollTrigger)

export default function GalleryTeaser() {
  const previewItems = GALLERY_ITEMS.slice(0, 6)
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const stripRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const ctx = gsap.context(() => {
      if (isReduced) {
        gsap.from([headerRef.current, stripRef.current ? stripRef.current.children : []], {
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

        if (stripRef.current) {
          const items = Array.from(stripRef.current.children)
          ScrollTrigger.batch(items, {
            start: 'top 85%',
            once: true,
            onEnter: batch => {
              gsap.from(batch, {
                opacity: 0,
                scale: 0.94,
                y: 20,
                duration: 0.75,
                stagger: 0.08,
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

        if (stripRef.current) {
          const items = Array.from(stripRef.current.children)
          ScrollTrigger.batch(items, {
            start: 'top 90%',
            once: true,
            onEnter: batch => {
              gsap.from(batch, {
                opacity: 0,
                x: 16,
                duration: 0.6,
                stagger: 0.06,
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
      className="gallery-teaser section section-dark"
      style={{
        padding: 'clamp(56px, 8vw, 88px) 0',
        backgroundColor: '#17120E',
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
            marginBottom: '32px',
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
              Sanctuary Ambience & Plates
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
              Glimpses into the Atmosphere.
            </h2>
          </div>

          <motion.div
            whileHover={{ x: 4 }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              to="/gallery"
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
              <span>View Full Gallery</span>
              <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>

        {/* Horizontal strip of 6 images with Framer Motion hover */}
        <div
          ref={stripRef}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: '14px',
            marginBottom: '28px',
          }}
        >
          {previewItems.map(item => (
            <motion.div
              key={item.id}
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                to="/gallery"
                style={{
                  position: 'relative',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  aspectRatio: '1/1',
                  border: '1px solid rgba(184, 154, 100, 0.2)',
                  display: 'block',
                  backgroundColor: '#120E0B',
                  transition: 'border-color 0.25s ease',
                }}
                className="gallery-strip-item"
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(184, 154, 100, 0.5)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(184, 154, 100, 0.2)'
                }}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.4s ease',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'scale(1.08)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'scale(1)'
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(18, 14, 11, 0.8) 0%, transparent 60%)',
                    opacity: 0.8,
                    display: 'flex',
                    alignItems: 'flex-end',
                    padding: '10px',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '11px',
                      color: 'rgba(246, 239, 228, 0.9)',
                      fontWeight: 500,
                      lineHeight: 1.2,
                    }}
                  >
                    {item.title}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <motion.div
            whileHover={{ x: 3 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            style={{ display: 'inline-block' }}
          >
            <Link
              to="/gallery"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '12px',
                fontFamily: 'var(--font-sans)',
                color: 'var(--color-brass)',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                textDecoration: 'none',
              }}
            >
              <ImageIcon size={14} />
              <span>Open Interactive Ambience Lightbox →</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
