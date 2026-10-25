import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export interface SplitTextProps {
  text: string
  className?: string
  delay?: number
  duration?: number
  textAlign?: 'left' | 'center' | 'right' | 'justify'
  onLetterAnimationComplete?: () => void
  splitType?: 'words' | 'chars'
}

export default function SplitText({
  text = '',
  className = '',
  delay = 0.05,
  duration = 0.5,
  textAlign = 'center',
  splitType = 'chars',
  onLetterAnimationComplete,
}: SplitTextProps) {
  const containerRef = useRef<HTMLParagraphElement>(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.3 })

  const words = text.split(' ')

  return (
    <p
      ref={containerRef}
      className={`split-text ${className}`}
      style={{
        display: 'inline-block',
        textAlign,
        overflow: 'hidden',
        margin: 0,
      }}
    >
      {words.map((word, wordIndex) => {
        if (splitType === 'words') {
          return (
            <span
              key={wordIndex}
              style={{
                display: 'inline-block',
                whiteSpace: 'nowrap',
                marginRight: '0.25em',
              }}
            >
              <motion.span
                initial={{ opacity: 0, y: 24, filter: 'blur(4px)' }}
                animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
                transition={{
                  duration,
                  delay: wordIndex * delay,
                  ease: [0.22, 1, 0.36, 1],
                }}
                onAnimationComplete={
                  wordIndex === words.length - 1 ? onLetterAnimationComplete : undefined
                }
                style={{ display: 'inline-block', willChange: 'transform, opacity' }}
              >
                {word}
              </motion.span>
            </span>
          )
        }

        const chars = Array.from(word)
        return (
          <span
            key={wordIndex}
            style={{
              display: 'inline-block',
              whiteSpace: 'nowrap',
              marginRight: '0.25em',
            }}
          >
            {chars.map((char, charIndex) => {
              const globalIndex =
                words.slice(0, wordIndex).reduce((acc, curr) => acc + curr.length, 0) +
                charIndex

              return (
                <motion.span
                  key={charIndex}
                  initial={{ opacity: 0, y: 20, filter: 'blur(3px)' }}
                  animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
                  transition={{
                    duration,
                    delay: globalIndex * delay,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  onAnimationComplete={
                    wordIndex === words.length - 1 && charIndex === chars.length - 1
                      ? onLetterAnimationComplete
                      : undefined
                  }
                  style={{ display: 'inline-block', willChange: 'transform, opacity' }}
                >
                  {char}
                </motion.span>
              )
            })}
          </span>
        )
      })}
    </p>
  )
}
