import './HomeGlowBackground.css'

interface HomeGlowBackgroundProps {
  top?: string
  left?: string
  size?: string
}

export default function HomeGlowBackground({
  top = '20%',
  left = '50%',
  size = '650px',
}: HomeGlowBackgroundProps) {
  return (
    <div
      className="home-glow-drifter"
      style={{
        top,
        left,
        width: size,
        height: size,
      }}
      aria-hidden="true"
    />
  )
}
