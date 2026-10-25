import { Link } from 'react-router-dom'
import { Home, Compass } from 'lucide-react'

export default function NotFoundPage() {
  return (
    <div
      style={{
        minHeight: '80vh',
        backgroundColor: '#1F1A16',
        color: 'var(--color-text-inverse)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '120px 24px 80px',
      }}
    >
      <div
        style={{
          maxWidth: '620px',
          textAlign: 'center',
          padding: '48px 32px',
          backgroundColor: 'rgba(38, 31, 26, 0.75)',
          borderRadius: '16px',
          border: '1px solid rgba(184, 154, 100, 0.25)',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.6)',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '12px',
            fontWeight: 600,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: 'var(--color-brass)',
            display: 'block',
            marginBottom: '16px',
          }}
        >
          404 — Culinary Path Uncharted
        </span>

        <h1
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(36px, 6vw, 64px)',
            fontWeight: 300,
            lineHeight: 1.1,
            color: 'var(--color-text-inverse)',
            margin: '0 0 16px 0',
          }}
        >
          Sanctuary Not Found.
        </h1>

        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '15px',
            lineHeight: 1.7,
            color: 'rgba(246, 239, 228, 0.75)',
            margin: '0 auto 32px auto',
            maxWidth: '460px',
          }}
        >
          The page or dish you are looking for does not exist, has been moved, or is taking a quiet culinary pause.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
          <Link
            to="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 24px',
              backgroundColor: 'var(--color-brass)',
              color: '#1F1A16',
              borderRadius: '4px',
              fontFamily: 'var(--font-sans)',
              fontSize: '12px',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              transition: 'transform 0.2s ease',
            }}
          >
            <Home size={15} />
            <span>Return to Home</span>
          </Link>

          <Link
            to="/#menu"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 24px',
              border: '1px solid rgba(184, 154, 100, 0.35)',
              color: 'var(--color-text-inverse)',
              borderRadius: '4px',
              fontFamily: 'var(--font-sans)',
              fontSize: '12px',
              fontWeight: 500,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              transition: 'background-color 0.2s ease',
            }}
          >
            <Compass size={15} color="var(--color-brass)" />
            <span>Explore 193 Dishes</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
