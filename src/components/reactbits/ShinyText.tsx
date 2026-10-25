export interface ShinyTextProps {
  text: string
  disabled?: boolean
  speed?: number
  className?: string
  color?: string
  shimmerColor?: string
}

export default function ShinyText({
  text,
  disabled = false,
  speed = 4,
  className = '',
  color = 'rgba(246, 239, 228, 0.75)',
  shimmerColor = '#F6EFE4',
}: ShinyTextProps) {
  if (disabled) {
    return <span className={className} style={{ color }}>{text}</span>
  }

  const animationDuration = `${speed}s`

  return (
    <>
      <span
        className={`shiny-text ${className}`}
        style={{
          color,
          backgroundImage: `linear-gradient(120deg, ${color} 0%, ${color} 35%, ${shimmerColor} 50%, ${color} 65%, ${color} 100%)`,
          backgroundSize: '250% 100%',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          animation: `shiny-sweep ${animationDuration} linear infinite`,
          display: 'inline-block',
        }}
      >
        {text}
      </span>
      <style>{`
        @keyframes shiny-sweep {
          0% {
            background-position: 150% 0;
          }
          100% {
            background-position: -150% 0;
          }
        }
      `}</style>
    </>
  )
}
