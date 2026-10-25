import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

export interface CountUpProps {
  to: number
  from?: number
  direction?: 'up' | 'down'
  delay?: number
  duration?: number
  className?: string
  startWhen?: boolean
  separator?: string
  prefix?: string
  suffix?: string
  decimals?: number
}

export default function CountUp({
  to,
  from = 0,
  direction = 'up',
  delay = 0,
  duration = 2,
  className = '',
  startWhen = true,
  separator = '',
  prefix = '',
  suffix = '',
  decimals = 0,
}: CountUpProps) {
  const [count, setCount] = useState<number>(from)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.4 })
  const hasStarted = useRef(false)

  useEffect(() => {
    if (!isInView || !startWhen || hasStarted.current) return
    hasStarted.current = true

    let startTimestamp: number | null = null
    const startValue = direction === 'down' ? to : from
    const endValue = direction === 'down' ? from : to

    const timeout = setTimeout(() => {
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp
        const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1)

        // Ease-out cubic: 1 - Math.pow(1 - progress, 3)
        const easeProgress = 1 - Math.pow(1 - progress, 3)
        const currentVal = startValue + (endValue - startValue) * easeProgress

        setCount(currentVal)

        if (progress < 1) {
          window.requestAnimationFrame(step)
        } else {
          setCount(endValue)
        }
      }

      window.requestAnimationFrame(step)
    }, delay * 1000)

    return () => clearTimeout(timeout)
  }, [isInView, startWhen, from, to, direction, delay, duration])

  const formattedCount = decimals > 0 ? count.toFixed(decimals) : Math.floor(count).toString()

  const formattedWithSeparator = separator
    ? formattedCount.replace(/\B(?=(\d{3})+(?!\d))/g, separator)
    : formattedCount

  return (
    <span ref={ref} className={`count-up ${className}`} style={{ fontVariantNumeric: 'tabular-nums' }}>
      {prefix}
      {formattedWithSeparator}
      {suffix}
    </span>
  )
}
