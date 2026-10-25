import { useRef, useState, type ReactNode } from 'react'

export interface InfiniteScrollProps {
  items?: ReactNode[]
  children?: ReactNode
  speed?: number // seconds for one full loop
  direction?: 'left' | 'right'
  pauseOnHover?: boolean
  className?: string
  gap?: string
}

export default function InfiniteScroll({
  items,
  children,
  speed = 30,
  direction = 'left',
  pauseOnHover = true,
  className = '',
  gap = '32px',
}: InfiniteScrollProps) {
  const [isPaused, setIsPaused] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const content = items ? (
    <div style={{ display: 'flex', alignItems: 'center', gap }}>
      {items.map((item, idx) => (
        <div key={idx} style={{ flexShrink: 0 }}>
          {item}
        </div>
      ))}
    </div>
  ) : (
    <div style={{ display: 'flex', alignItems: 'center', gap }}>
      {children}
    </div>
  )

  const animationDirection = direction === 'left' ? 'normal' : 'reverse'

  return (
    <div
      ref={containerRef}
      className={`infinite-scroll-wrapper ${className}`}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
      style={{
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        display: 'flex',
        width: '100%',
        userSelect: 'none',
        maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
      }}
    >
      <div
        style={{
          display: 'flex',
          gap,
          animation: `infinite-marquee ${speed}s linear infinite`,
          animationDirection,
          animationPlayState: isPaused ? 'paused' : 'running',
          willChange: 'transform',
        }}
      >
        {content}
        {content}
      </div>
      <style>{`
        @keyframes infinite-marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  )
}
