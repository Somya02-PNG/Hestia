import PageHero from '../components/PageHero'
import { Link } from 'react-router-dom'
import { Home, Compass } from 'lucide-react'

export default function NotFound() {
  return (
    <>
      <PageHero
        eyebrow="404 — Culinary Path Uncharted"
        title="Sanctuary"
        accentWord="Not Found"
        intro="The page or dish you are looking for does not exist, has been moved, or is taking a quiet culinary pause."
        currentPage="404 Not Found"
      />

      <div className="container" style={{ padding: '64px 0 100px', textAlign: 'center' }}>
        <div style={{ maxWidth: '480px', margin: '0 auto', display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
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
            to="/menu"
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
    </>
  )
}
