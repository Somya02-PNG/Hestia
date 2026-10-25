import { useState } from 'react'

export interface CircularTextProps {
  text: string
  spinDuration?: number
  onHover?: 'speedUp' | 'slowDown' | 'pause' | 'goBonkers'
  className?: string
  radius?: number
}

export default function CircularText({
  text,
  spinDuration = 20,
  onHover = 'speedUp',
  className = '',
  radius = 60,
}: CircularTextProps) {
  const [isHovered, setIsHovered] = useState(false)

  const size = radius * 2 + 20
  const center = size / 2

  let currentDuration = spinDuration
  if (isHovered) {
    if (onHover === 'speedUp') currentDuration = spinDuration / 3
    else if (onHover === 'slowDown') currentDuration = spinDuration * 2.5
    else if (onHover === 'pause') currentDuration = 0
    else if (onHover === 'goBonkers') currentDuration = spinDuration / 8
  }

  const animationStyle =
    currentDuration === 0
      ? 'none'
      : `circular-spin ${currentDuration}s linear infinite`

  return (
    <div
      className={`circular-text-container ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: `${size}px`,
        height: `${size}px`,
        position: 'relative',
        cursor: 'default',
      }}
    >
      <svg
        viewBox={`0 0 ${size} ${size}`}
        width={size}
        height={size}
        style={{
          animation: animationStyle,
          transformOrigin: 'center center',
          display: 'block',
        }}
      >
        <defs>
          <path
            id="circular-text-path"
            d={`M ${center},${center} m -${radius},0 a ${radius},${radius} 0 1,1 ${
              radius * 2
            },0 a ${radius},${radius} 0 1,1 -${radius * 2},0`}
          />
        </defs>
        <text
          fill="var(--color-brass, #B89A64)"
          fontSize="11"
          fontFamily="var(--font-sans, sans-serif)"
          fontWeight="600"
          letterSpacing="0.18em"
        >
          <textPath href="#circular-text-path" startOffset="0%">
            {text}
          </textPath>
        </text>
      </svg>
      <style>{`
        @keyframes circular-spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  )
}
