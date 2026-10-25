import { type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Home } from 'lucide-react'

interface PageShellProps {
  title: string
  eyebrow?: string
  description?: string
  children?: ReactNode
}

export default function PageShell({
  title,
  eyebrow = 'Hestiia Pure Vegetarian Dining · Kanpur',
  description,
  children,
}: PageShellProps) {
  return (
    <div
      style={{
        minHeight: '75vh',
        backgroundColor: '#1F1A16',
        color: 'var(--color-text-inverse)',
        paddingTop: 'calc(var(--header-height) + 48px)',
        paddingBottom: '80px',
      }}
    >
      <div className="container">
        {/* Navigation Breadcrumb / Back Link */}
        <div style={{ marginBottom: '28px' }}>
          <Link
            to="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontFamily: 'var(--font-sans)',
              fontSize: '12px',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--color-brass)',
              textDecoration: 'none',
              transition: 'color 0.2s ease',
            }}
          >
            <ArrowLeft size={14} />
            <Home size={14} />
            <span>Return to Sanctuary</span>
          </Link>
        </div>

        {/* Page Header */}
        <header style={{ marginBottom: '40px', maxWidth: '820px' }}>
          {eyebrow && (
            <span
              style={{
                display: 'block',
                fontFamily: 'var(--font-sans)',
                fontSize: '11px',
                fontWeight: 600,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--color-brass)',
                marginBottom: '12px',
              }}
            >
              {eyebrow}
            </span>
          )}
          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(32px, 5vw, 52px)',
              fontWeight: 300,
              lineHeight: 1.15,
              color: 'var(--color-text-inverse)',
              margin: '0 0 16px 0',
            }}
          >
            {title}
          </h1>
          {description && (
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '16px',
                fontWeight: 300,
                lineHeight: 1.7,
                color: 'rgba(246, 239, 228, 0.75)',
                margin: 0,
              }}
            >
              {description}
            </p>
          )}
        </header>

        {/* Divider */}
        <div
          style={{
            height: '1px',
            backgroundColor: 'rgba(184, 154, 100, 0.18)',
            marginBottom: '40px',
          }}
        />

        {/* Page Main Content Area */}
        <div style={{ minHeight: '200px' }}>
          {children || (
            <div
              style={{
                padding: '36px',
                borderRadius: '8px',
                backgroundColor: 'rgba(38, 31, 26, 0.6)',
                border: '1px dashed rgba(184, 154, 100, 0.25)',
                textAlign: 'center',
                maxWidth: '640px',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '14px',
                  color: 'rgba(246, 239, 228, 0.7)',
                  margin: '0 0 16px 0',
                }}
              >
                This section is part of the Hestiia digital experience architecture. Full interactive content and capabilities are being connected in upcoming releases.
              </p>
              <Link
                to="/#menu"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '10px 20px',
                  backgroundColor: 'var(--color-brass)',
                  color: '#1F1A16',
                  borderRadius: '4px',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '12px',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  textDecoration: 'none',
                }}
              >
                Browse Our Menu (193 Dishes)
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
