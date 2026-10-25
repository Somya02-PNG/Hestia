import PageHero from '../components/PageHero'
import { RATINGS } from '../content/ratings'
import { Star, ExternalLink } from 'lucide-react'

export default function Reviews() {
  return (
    <>
      <PageHero
        title="Verified Guest"
        accentWord="Impressions"
        intro="Authentic community reviews and verified ratings from dining platforms across Kanpur."
        currentPage="Reviews"
      />

      <div className="container" style={{ padding: '56px 0 80px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '24px',
          }}
        >
          {RATINGS.map(item => (
            <div
              key={item.platform}
              style={{
                padding: '28px',
                borderRadius: '12px',
                backgroundColor: 'rgba(38, 31, 26, 0.75)',
                border: '1px solid rgba(184, 154, 100, 0.2)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '16px',
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <h3
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '22px',
                      fontWeight: 400,
                      color: 'var(--color-text-inverse)',
                      margin: 0,
                    }}
                  >
                    {item.platform}
                  </h3>
                  <span style={{ fontSize: '11px', color: 'rgba(246, 239, 228, 0.45)', fontFamily: 'var(--font-sans)' }}>
                    As of {item.asOf}
                  </span>
                </div>

                {item.score !== null ? (
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                      <div style={{ display: 'flex', color: 'var(--color-brass)' }}>
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            fill={i < Math.floor(item.score!) ? 'var(--color-brass)' : 'transparent'}
                            stroke="var(--color-brass)"
                          />
                        ))}
                      </div>
                      <span style={{ fontSize: '20px', fontWeight: 700, color: 'var(--color-brass)' }}>
                        {item.score.toFixed(1)}
                      </span>
                      <span style={{ fontSize: '13px', color: 'rgba(246, 239, 228, 0.6)' }}>
                        / {item.outOf}
                      </span>
                    </div>
                    {item.count && (
                      <p style={{ fontSize: '12px', color: 'rgba(246, 239, 228, 0.65)', margin: 0 }}>
                        Based on {item.count.toLocaleString()} {item.countLabel || 'reviews'}
                      </p>
                    )}
                  </div>
                ) : (
                  <div>
                    <p style={{ fontSize: '13px', color: 'rgba(246, 239, 228, 0.7)', margin: '0 0 4px 0' }}>
                      Verified Dining Profile
                    </p>
                    <span style={{ fontSize: '12px', color: 'var(--color-brass)' }}>
                      Live community feedback on platform
                    </span>
                  </div>
                )}
              </div>

              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '12px',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 600,
                  color: 'var(--color-brass)',
                  textDecoration: 'none',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  paddingTop: '12px',
                  borderTop: '1px solid rgba(184, 154, 100, 0.12)',
                }}
              >
                <span>{item.score !== null ? `View on ${item.platform}` : 'View rating'}</span>
                <ExternalLink size={13} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
