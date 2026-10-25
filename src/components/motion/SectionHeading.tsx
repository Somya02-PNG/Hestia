import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SplitText from '../reactbits/SplitText'
import BlurText from '../reactbits/BlurText'
import { EASINGS, DURATIONS } from '../../lib/motion'

export interface SectionHeadingProps {
  eyebrow: string
  title: string
  accentWord?: string
  intro?: string
  align?: 'left' | 'center' | 'right'
  className?: string
  animationType?: 'split' | 'blur'
}

export default function SectionHeading({
  eyebrow,
  title,
  accentWord,
  intro,
  align = 'center',
  className = '',
  animationType = 'split',
}: SectionHeadingProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.3 })

  const isCenter = align === 'center'
  const isRight = align === 'right'

  return (
    <div
      ref={containerRef}
      className={`section-heading ${className}`}
      style={{
        textAlign: align,
        marginBottom: '40px',
        maxWidth: isCenter ? '720px' : '640px',
        marginInline: isCenter ? 'auto' : isRight ? 'auto 0' : '0 auto',
      }}
    >
      {/* 1. Small Gold Label / Eyebrow */}
      <motion.span
        initial={{ opacity: 0, y: 12 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: DURATIONS.normal, ease: EASINGS.default }}
        style={{
          display: 'block',
          fontFamily: 'var(--font-sans)',
          fontSize: '11px',
          fontWeight: 600,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'var(--color-brass)',
          marginBottom: '10px',
        }}
      >
        {eyebrow}
      </motion.span>

      {/* 2. Big Serif Title with Accent Word */}
      <h2
        style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(30px, 4.2vw, 48px)',
          fontWeight: 300,
          lineHeight: 1.18,
          color: 'var(--color-text-inverse)',
          margin: '0 0 14px',
          letterSpacing: '-0.01em',
        }}
      >
        {animationType === 'blur' ? (
          <BlurText text={title} delay={60} animateBy="words" direction="top" />
        ) : (
          <SplitText
            text={title}
            delay={0.03}
            duration={0.6}
            splitType="words"
            textAlign={align}
          />
        )}
        {accentWord && (
          <>
            {' '}
            <em
              style={{
                fontStyle: 'italic',
                color: 'var(--color-brass-light)',
                fontWeight: 300,
              }}
            >
              {accentWord}
            </em>
          </>
        )}
      </h2>

      {/* 3. Intro Paragraph Fade */}
      {intro && (
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: DURATIONS.slow, delay: 0.15, ease: EASINGS.default }}
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '15px',
            lineHeight: 1.7,
            color: 'rgba(246, 239, 228, 0.72)',
            margin: '0 auto',
            maxWidth: '580px',
          }}
        >
          {intro}
        </motion.p>
      )}
    </div>
  )
}
