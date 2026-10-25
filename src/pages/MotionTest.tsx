import { useRef } from 'react'
import PageHero from '../components/PageHero'
import PageClosingCta from '../components/PageClosingCta'
import SectionHeading from '../components/motion/SectionHeading'
import RevealImage from '../components/motion/RevealImage'
import DrawLine from '../components/motion/DrawLine'
import TapScale from '../components/motion/TapScale'
import SplitText from '../components/reactbits/SplitText'
import CountUp from '../components/reactbits/CountUp'
import ShinyText from '../components/reactbits/ShinyText'
import GradientText from '../components/reactbits/GradientText'
import RotatingText from '../components/reactbits/RotatingText'
import CircularText from '../components/reactbits/CircularText'
import InfiniteScroll from '../components/reactbits/InfiniteScroll'
import { useMotionMode } from '../hooks/useMotionMode'
import { useSectionReveal } from '../hooks/useSectionReveal'
import interiorImg from '../assets/images/restaurant_interior.jpg'
import thaliImg from '../assets/images/hero_thali.jpg'

export default function MotionTest() {
  const motionMode = useMotionMode()
  const sectionRevealRef = useRef<HTMLDivElement>(null)

  // Test useSectionReveal hook
  useSectionReveal(sectionRevealRef, {
    selector: '.batch-card',
    stagger: 0.12,
    yOffset: 28,
  })

  return (
    <>
      <PageHero
        eyebrow="Development Lab · ANIM-0"
        title="Shared Animation"
        accentWord="Toolkit"
        intro="Interactive showcase of all motion helpers, React Bits components, and responsive hooks."
        currentPage="Motion Toolkit Lab"
      />

      <div style={{ backgroundColor: '#16110E', padding: '60px 0 100px' }}>
        <div className="container">
          {/* Real-time Motion Mode Status Bar */}
          <div
            style={{
              padding: '18px 24px',
              borderRadius: '10px',
              backgroundColor: 'rgba(38, 31, 26, 0.85)',
              border: '1px solid rgba(184, 154, 100, 0.3)',
              marginBottom: '56px',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '20px',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <strong style={{ display: 'block', fontSize: '13px', color: 'var(--color-brass)' }}>
                Live `useMotionMode()` Telemetry
              </strong>
              <span style={{ fontSize: '12px', color: 'rgba(246, 239, 228, 0.7)' }}>
                Resize viewport or toggle device mode to observe real-time state adaptation.
              </span>
            </div>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <span
                style={{
                  padding: '4px 10px',
                  borderRadius: '20px',
                  fontSize: '11px',
                  fontWeight: 600,
                  backgroundColor: motionMode.isDesktop ? 'rgba(52, 168, 83, 0.15)' : 'rgba(235, 53, 53, 0.15)',
                  color: motionMode.isDesktop ? '#4ADE80' : '#F87171',
                  border: '1px solid currentColor',
                }}
              >
                isDesktop: {motionMode.isDesktop ? 'true (≥1024px)' : 'false'}
              </span>

              <span
                style={{
                  padding: '4px 10px',
                  borderRadius: '20px',
                  fontSize: '11px',
                  fontWeight: 600,
                  backgroundColor: motionMode.canHover ? 'rgba(52, 168, 83, 0.15)' : 'rgba(184, 154, 100, 0.15)',
                  color: motionMode.canHover ? '#4ADE80' : 'var(--color-brass-light)',
                  border: '1px solid currentColor',
                }}
              >
                canHover: {motionMode.canHover ? 'true' : 'false (touch)'}
              </span>

              <span
                style={{
                  padding: '4px 10px',
                  borderRadius: '20px',
                  fontSize: '11px',
                  fontWeight: 600,
                  backgroundColor: motionMode.reduced ? 'rgba(235, 53, 53, 0.15)' : 'rgba(52, 168, 83, 0.15)',
                  color: motionMode.reduced ? '#F87171' : '#4ADE80',
                  border: '1px solid currentColor',
                }}
              >
                reduced: {motionMode.reduced ? 'true (reduced-motion)' : 'false (full motion)'}
              </span>
            </div>
          </div>

          {/* 1. SectionHeading Showcase */}
          <section style={{ marginBottom: '64px' }}>
            <span style={{ fontSize: '12px', color: 'var(--color-brass)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Helper 1: SectionHeading (SplitText & BlurText)
            </span>
            <div style={{ marginTop: '20px', padding: '36px', borderRadius: '12px', backgroundColor: 'rgba(38, 31, 26, 0.5)', border: '1px solid rgba(184, 154, 100, 0.15)' }}>
              <SectionHeading
                eyebrow="Artisanal Sanctuary"
                title="Crafted with Heritage"
                accentWord="Devotion"
                intro="Demonstrating SectionHeading with gold eyebrow, split letter entrance, and smooth subtitle reveal."
              />
            </div>
          </section>

          {/* 2. DrawLine Showcase */}
          <section style={{ marginBottom: '64px' }}>
            <span style={{ fontSize: '12px', color: 'var(--color-brass)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Helper 2: DrawLine (Scroll-Triggered Draw-On)
            </span>
            <div style={{ marginTop: '20px', padding: '36px', borderRadius: '12px', backgroundColor: 'rgba(38, 31, 26, 0.5)', border: '1px solid rgba(184, 154, 100, 0.15)', textAlign: 'center' }}>
              <p style={{ color: 'rgba(246, 239, 228, 0.7)', fontSize: '14px', marginBottom: '16px' }}>
                Center-origin gold line drawing horizontally on scroll into view:
              </p>
              <DrawLine align="center" length="60%" thickness="1.5px" />
            </div>
          </section>

          {/* 3. RevealImage Showcase */}
          <section style={{ marginBottom: '64px' }}>
            <span style={{ fontSize: '12px', color: 'var(--color-brass)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Helper 3: RevealImage (Clip-Path Reveal + Scale Settle 1.15 to 1 + Parallax)
            </span>
            <div
              style={{
                marginTop: '20px',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '24px',
              }}
            >
              <div>
                <span style={{ fontSize: '12px', color: 'rgba(246, 239, 228, 0.6)', display: 'block', marginBottom: '8px' }}>
                  Direction: 'up' with Parallax
                </span>
                <RevealImage
                  src={interiorImg}
                  alt="Atmospheric Dining Sanctuary Interior"
                  parallax={true}
                  direction="up"
                />
              </div>
              <div>
                <span style={{ fontSize: '12px', color: 'rgba(246, 239, 228, 0.6)', display: 'block', marginBottom: '8px' }}>
                  Direction: 'left'
                </span>
                <RevealImage
                  src={thaliImg}
                  alt="Grand Vegetarian Thali Feast"
                  parallax={false}
                  direction="left"
                />
              </div>
            </div>
          </section>

          {/* 4. TapScale Showcase */}
          <section style={{ marginBottom: '64px' }}>
            <span style={{ fontSize: '12px', color: 'var(--color-brass)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Helper 4: TapScale (Tactile 0.97 Tap + canHover Lift)
            </span>
            <div style={{ marginTop: '20px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <TapScale>
                <button
                  style={{
                    padding: '14px 28px',
                    borderRadius: '6px',
                    backgroundColor: 'var(--color-brass)',
                    color: '#1F1A16',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '13px',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                  Interactive Button
                </button>
              </TapScale>

              <TapScale hoverY={-6}>
                <div
                  style={{
                    padding: '14px 24px',
                    borderRadius: '6px',
                    backgroundColor: 'rgba(38, 31, 26, 0.85)',
                    border: '1px solid rgba(184, 154, 100, 0.3)',
                    color: 'var(--color-text-inverse)',
                    fontSize: '13px',
                    cursor: 'pointer',
                  }}
                >
                  Interactive Card Element
                </div>
              </TapScale>
            </div>
          </section>

          {/* 5. React Bits Showcase */}
          <section style={{ marginBottom: '64px' }}>
            <span style={{ fontSize: '12px', color: 'var(--color-brass)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              React Bits Collection (TypeScript + CSS Variants)
            </span>

            <div
              style={{
                marginTop: '20px',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '24px',
              }}
            >
              {/* CountUp */}
              <div style={{ padding: '28px', borderRadius: '12px', backgroundColor: 'rgba(38, 31, 26, 0.75)', border: '1px solid rgba(184, 154, 100, 0.2)' }}>
                <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-brass)' }}>
                  React Bit: CountUp
                </span>
                <div style={{ fontSize: '36px', fontWeight: 700, color: 'var(--color-text-inverse)', marginTop: '8px' }}>
                  <CountUp to={193} duration={2} suffix=" Dishes" />
                </div>
                <p style={{ fontSize: '12px', color: 'rgba(246, 239, 228, 0.6)', margin: '8px 0 0' }}>
                  Ratings: <CountUp to={4.4} decimals={1} duration={2.5} prefix="★ " /> / 5.0
                </p>
              </div>

              {/* ShinyText */}
              <div style={{ padding: '28px', borderRadius: '12px', backgroundColor: 'rgba(38, 31, 26, 0.75)', border: '1px solid rgba(184, 154, 100, 0.2)' }}>
                <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-brass)' }}>
                  React Bit: ShinyText
                </span>
                <div style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', marginTop: '12px' }}>
                  <ShinyText text="Pure Vegetarian Dining Sanctuary" speed={3.5} />
                </div>
                <p style={{ fontSize: '12px', color: 'rgba(246, 239, 228, 0.6)', margin: '8px 0 0' }}>
                  Continuous shimmering gradient sweep across the text.
                </p>
              </div>

              {/* GradientText */}
              <div style={{ padding: '28px', borderRadius: '12px', backgroundColor: 'rgba(38, 31, 26, 0.75)', border: '1px solid rgba(184, 154, 100, 0.2)' }}>
                <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-brass)' }}>
                  React Bit: GradientText
                </span>
                <div style={{ fontSize: '22px', fontFamily: 'var(--font-serif)', marginTop: '12px' }}>
                  <GradientText showBorder={true}>
                    Heritage Flavours · Kanpur
                  </GradientText>
                </div>
              </div>

              {/* RotatingText */}
              <div style={{ padding: '28px', borderRadius: '12px', backgroundColor: 'rgba(38, 31, 26, 0.75)', border: '1px solid rgba(184, 154, 100, 0.2)' }}>
                <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-brass)' }}>
                  React Bit: RotatingText
                </span>
                <div style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', marginTop: '12px', color: 'var(--color-text-inverse)' }}>
                  Craving{' '}
                  <span style={{ color: 'var(--color-brass)' }}>
                    <RotatingText
                      texts={['Dal Makhani?', 'Shahi Paneer?', 'Hakka Noodles?', 'Gulab Jamun?']}
                      rotationInterval={2200}
                    />
                  </span>
                </div>
              </div>

              {/* CircularText */}
              <div style={{ padding: '28px', borderRadius: '12px', backgroundColor: 'rgba(38, 31, 26, 0.75)', border: '1px solid rgba(184, 154, 100, 0.2)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-brass)', alignSelf: 'flex-start' }}>
                  React Bit: CircularText
                </span>
                <div style={{ marginTop: '12px' }}>
                  <CircularText text="HESTIIA RESTAURANT · PURE VEGETARIAN · " radius={45} onHover="speedUp" />
                </div>
                <span style={{ fontSize: '11px', color: 'rgba(246, 239, 228, 0.5)', marginTop: '8px' }}>
                  Hover to speed up
                </span>
              </div>

              {/* SplitText standalone */}
              <div style={{ padding: '28px', borderRadius: '12px', backgroundColor: 'rgba(38, 31, 26, 0.75)', border: '1px solid rgba(184, 154, 100, 0.2)' }}>
                <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-brass)' }}>
                  React Bit: SplitText (Chars)
                </span>
                <div style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', color: 'var(--color-text-inverse)', marginTop: '12px' }}>
                  <SplitText text="Handcrafted Daily" splitType="chars" delay={0.04} />
                </div>
              </div>
            </div>
          </section>

          {/* 6. InfiniteScroll Marquee Showcase */}
          <section style={{ marginBottom: '64px' }}>
            <span style={{ fontSize: '12px', color: 'var(--color-brass)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              React Bit: InfiniteScroll (Marquee Infinite Scroller)
            </span>
            <div style={{ marginTop: '20px', padding: '24px 0', borderRadius: '12px', backgroundColor: 'rgba(38, 31, 26, 0.5)', border: '1px solid rgba(184, 154, 100, 0.15)' }}>
              <InfiniteScroll speed={25} pauseOnHover={true}>
                {['Paneer Butter Masala', 'Signature Dal Makhani', 'Hakka Noodles', 'Saffron Kheer', 'Malai Kofta', 'Crispy Chilli Paneer'].map(
                  (dish, idx) => (
                    <div
                      key={idx}
                      style={{
                        padding: '10px 20px',
                        borderRadius: '24px',
                        backgroundColor: 'rgba(184, 154, 100, 0.12)',
                        border: '1px solid rgba(184, 154, 100, 0.3)',
                        fontSize: '13px',
                        fontFamily: 'var(--font-sans)',
                        color: 'var(--color-text-inverse)',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      ★ {dish}
                    </div>
                  )
                )}
              </InfiniteScroll>
            </div>
          </section>

          {/* 7. useSectionReveal Hook Batch Showcase */}
          <section style={{ marginBottom: '64px' }}>
            <span style={{ fontSize: '12px', color: 'var(--color-brass)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Hook: useSectionReveal (ScrollTrigger.batch Stagger)
            </span>
            <div
              ref={sectionRevealRef}
              style={{
                marginTop: '20px',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '16px',
              }}
            >
              {[1, 2, 3, 4].map(num => (
                <div
                  key={num}
                  className="batch-card"
                  style={{
                    padding: '24px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(38, 31, 26, 0.8)',
                    border: '1px solid rgba(184, 154, 100, 0.2)',
                    textAlign: 'center',
                  }}
                >
                  <span style={{ color: 'var(--color-brass)', fontSize: '24px', fontWeight: 700 }}>
                    0{num}
                  </span>
                  <p style={{ fontSize: '13px', color: 'rgba(246, 239, 228, 0.75)', margin: '8px 0 0' }}>
                    Batch Stagger Card {num}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      <PageClosingCta />
    </>
  )
}
