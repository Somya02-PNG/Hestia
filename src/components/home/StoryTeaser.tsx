import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles } from 'lucide-react'
import interiorImg from '../../assets/images/restaurant_interior.jpg'
import RevealImage from '../motion/RevealImage'
import SplitText from '../reactbits/SplitText'
import ScrollReveal from '../reactbits/ScrollReveal'
import DrawLine from '../motion/DrawLine'
import Magnet from '../reactbits/Magnet'
import ClickSpark from '../reactbits/ClickSpark'
import { useMotionMode } from '../../hooks/useMotionMode'
import './StoryTeaser.css'

export default function StoryTeaser() {
  const { isDesktop } = useMotionMode()

  return (
    <section
      className="story-teaser section section-dark"
      aria-label="Story of Hestiia Restaurant"
    >
      <div className="container">
        <div className="story-teaser-grid">
          {/* Column 1: Image with RevealImage (clip wipe left-to-right, inner scale settle, desktop parallax) */}
          <div className="story-image-col">
            <RevealImage
              src={interiorImg}
              alt="Hestiia Restaurant Dining Sanctuary Interior in Shyam Nagar, Kanpur"
              direction="left"
              aspectRatio="4/3"
              parallax={isDesktop}
            />

            {/* Subtle corner ornament floating (desktop only) */}
            {isDesktop && (
              <div className="story-floating-ornament" aria-hidden="true">
                <svg viewBox="0 0 48 48" fill="none" style={{ width: '100%', height: '100%' }}>
                  <path
                    d="M24 4L28 20L44 24L28 28L24 44L20 28L4 24L20 20Z"
                    stroke="var(--color-brass, #B89A64)"
                    strokeWidth="1.2"
                    fill="rgba(184, 154, 100, 0.08)"
                  />
                  <circle cx="24" cy="24" r="3" fill="var(--color-brass, #B89A64)" />
                </svg>
              </div>
            )}
          </div>

          {/* Column 2: Text content with SplitText, DrawLine, ScrollReveal, and Magnet + ClickSpark CTA */}
          <div className="story-text-col">
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
                marginBottom: '14px',
              }}
            >
              <Sparkles size={12} color="var(--color-brass, #B89A64)" />
              Our Philosophy · Kanpur
            </span>

            {/* Heading with SplitText line/word reveal */}
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(28px, 4vw, 44px)',
                fontWeight: 300,
                color: 'var(--color-text-inverse, #F6EFE4)',
                margin: '0 0 16px 0',
                lineHeight: 1.2,
              }}
            >
              <SplitText
                text="A Sanctuary of Pure Vegetarian Heritage."
                splitType="words"
                delay={0.03}
                duration={0.7}
              />
            </h2>

            {/* Gold DrawLine divider */}
            <div style={{ maxWidth: '120px', margin: '0 0 20px 0' }}>
              <DrawLine orientation="horizontal" align="left" color="var(--color-brass, #B89A64)" />
            </div>

            {/* Paragraph word-by-word opacity scroll-scrub using existing ScrollReveal */}
            <div
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '15px',
                fontWeight: 300,
                lineHeight: 1.75,
                color: 'rgba(246, 239, 228, 0.82)',
                marginBottom: '32px',
              }}
            >
              <ScrollReveal progressRange={[0, 1]}>
                Rooted in Shyam Nagar, Hestiia is a certified pure vegetarian dining sanctuary where slow-simmered culinary traditions meet calm hospitality. Our kitchen honors authentic North Indian recipes, wok-tossed Indo-Chinese specialities, and hand-kneaded tandoori breads, crafted purely with cold-pressed oils, rich dairy, and fresh garden herbs for peaceful family feasts.
              </ScrollReveal>
            </div>

            {/* Button with Magnet (desktop) + ClickSpark (all) */}
            <div style={{ display: 'inline-block' }}>
              <Magnet padding={40} disabled={!isDesktop} strength={0.35}>
                <ClickSpark sparkColor="var(--color-brass, #B89A64)" sparkCount={10}>
                  <Link
                    to="/about"
                    className="story-cta-btn"
                    aria-label="Read Our Story about Hestiia Restaurant"
                  >
                    <span>Read Our Story</span>
                    <ArrowRight size={14} />
                  </Link>
                </ClickSpark>
              </Magnet>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
