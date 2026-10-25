import type { ReactNode, CSSProperties } from 'react'
import { motion, type HTMLMotionProps } from 'framer-motion'
import { useMotionMode } from '../../hooks/useMotionMode'
import { EASINGS, DURATIONS } from '../../lib/motion'

export interface TapScaleProps extends HTMLMotionProps<'div'> {
  children: ReactNode
  className?: string
  liftOnHover?: boolean
  hoverY?: number
  tapScale?: number
  style?: CSSProperties
}

export default function TapScale({
  children,
  className = '',
  liftOnHover = true,
  hoverY = -4,
  tapScale = 0.97,
  style = {},
  ...props
}: TapScaleProps) {
  const { canHover, reduced } = useMotionMode()

  if (reduced) {
    return (
      <div className={className} style={style}>
        {children}
      </div>
    )
  }

  const hoverProps = canHover && liftOnHover ? { y: hoverY } : {}

  return (
    <motion.div
      className={`tap-scale-wrapper ${className}`}
      whileHover={hoverProps}
      whileTap={{ scale: tapScale }}
      transition={{ duration: DURATIONS.fast, ease: EASINGS.default }}
      style={{ display: 'inline-block', ...style }}
      {...props}
    >
      {children}
    </motion.div>
  )
}
