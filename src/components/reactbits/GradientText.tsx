import type { ReactNode } from 'react'

export interface GradientTextProps {
  children: ReactNode
  className?: string
  colors?: string[]
  animationSpeed?: number
  showBorder?: boolean
}

export default function GradientText({
  children,
  className = '',
  colors = ['#B89A64', '#DFC390', '#F6EFE4', '#B89A64'],
  animationSpeed = 6,
  showBorder = false,
}: GradientTextProps) {
  const gradient = `linear-gradient(to right, ${colors.join(', ')})`

  return (
    <span
      className={`gradient-text ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: showBorder ? '4px 12px' : '0',
        borderRadius: showBorder ? '9999px' : '0',
        border: showBorder ? '1px solid rgba(184, 154, 100, 0.35)' : 'none',
        backgroundColor: showBorder ? 'rgba(38, 31, 26, 0.5)' : 'transparent',
      }}
    >
      <span
        style={{
          backgroundImage: gradient,
          backgroundSize: '300% 100%',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          animation: `gradient-shift ${animationSpeed}s ease infinite`,
          display: 'inline-block',
        }}
      >
        {children}
      </span>
      <style>{`
        @keyframes gradient-shift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </span>
  )
}
