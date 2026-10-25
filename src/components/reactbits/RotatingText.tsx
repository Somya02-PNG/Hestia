import { useState, useEffect } from 'react'
import { motion, AnimatePresence, type Transition } from 'framer-motion'

export interface RotatingTextProps {
  texts: string[]
  transition?: Transition
  rotationInterval?: number
  className?: string
  elementLevelClassName?: string
}

export default function RotatingText({
  texts,
  transition = { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  rotationInterval = 2500,
  className = '',
  elementLevelClassName = '',
}: RotatingTextProps) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (texts.length <= 1) return

    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % texts.length)
    }, rotationInterval)

    return () => clearInterval(interval)
  }, [texts, rotationInterval])

  const currentText = texts[index] || ''

  return (
    <span
      className={`rotating-text ${className}`}
      style={{
        display: 'inline-flex',
        position: 'relative',
        overflow: 'hidden',
        verticalAlign: 'middle',
      }}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ y: '100%', opacity: 0, filter: 'blur(4px)' }}
          animate={{ y: '0%', opacity: 1, filter: 'blur(0px)' }}
          exit={{ y: '-100%', opacity: 0, filter: 'blur(4px)' }}
          transition={transition}
          className={elementLevelClassName}
          style={{
            display: 'inline-block',
            whiteSpace: 'nowrap',
          }}
        >
          {currentText}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}
