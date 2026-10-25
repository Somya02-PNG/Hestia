import { Star, ExternalLink, MessageSquare, Edit3 } from 'lucide-react'
import PageHero from '../components/PageHero'
import PageClosingCta from '../components/PageClosingCta'
import { useDocumentMeta } from '../hooks/useDocumentMeta'
import { RATINGS } from '../content/ratings'
import { RESTAURANT } from '../content/restaurant'

const GOOGLE_QUOTES = [
  'Good food Good service And prices are unmatched.. absolutely pocket friendly .',
  'I ordered honey chili potato and schezwan noddle.',
  'Superb experience with classy Ambience and food, services is rememberable.',
]

export default function Reviews() {
  useDocumentMeta(
    'Guest Reviews & Verified Ratings',
    'Read verified dining reviews and ratings for Hestiia Restaurant in Shyam Nagar, Kanpur across Google, Zomato, EazyDiner, and Justdial.'
  )

  const googleWriteReviewUrl = 'https://search.google.com/local/writereview?placeid=ChIJXQe5b0X_vDsR3bK2mCq0PBI'
  const googleViewAllUrl = RESTAURANT.platforms.googleMaps

  return (
    <>
      <PageHero
        title="Verified Guest"
        accentWord="Impressions"
        intro="Authentic community reviews and verified ratings from dining platforms across Kanpur."
        currentPage="Reviews"
      />

      {/* 1. Platform Ratings Grid */}
      <section style={{ padding: '64px 0 48px', backgroundColor: '#1A1410' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '44px' }}>
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '11px',
                fontWeight: 600,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--color-brass)',
                display: 'block',
                marginBottom: '10px',
              }}
            >
              Independent Platform Ratings
            </span>
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(28px, 3.5vw, 42px)',
                fontWeight: 300,
                color: 'var(--color-text-inverse)',
                margin: 0,
              }}
            >
              Our Community <em style={{ fontStyle: 'italic', color: 'var(--color-brass-light)' }}>Scorecard</em>
            </h2>
          </div>

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
      </section>

      {/* 2. Exactly 3 Verified Google Review Quotes */}
      <section
        style={{
          padding: '64px 0 80px',
          backgroundColor: '#16110E',
          borderTop: '1px solid rgba(184, 154, 100, 0.15)',
        }}
      >
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '44px' }}>
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '11px',
                fontWeight: 600,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--color-brass)',
                display: 'block',
                marginBottom: '10px',
              }}
            >
              Verified Guest Quotes
            </span>
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(28px, 3.5vw, 42px)',
                fontWeight: 300,
                color: 'var(--color-text-inverse)',
                margin: '0 auto 12px',
              }}
            >
              Words from <em style={{ fontStyle: 'italic', color: 'var(--color-brass-light)' }}>Our Diners</em>
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px',
              marginBottom: '48px',
            }}
          >
            {GOOGLE_QUOTES.map((quoteText, idx) => (
              <div
                key={idx}
                style={{
                  padding: '32px 28px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(38, 31, 26, 0.75)',
                  border: '1px solid rgba(184, 154, 100, 0.2)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '20px',
                }}
              >
                <div>
                  <div style={{ display: 'flex', color: 'var(--color-brass)', marginBottom: '14px' }}>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={15} fill="var(--color-brass)" stroke="var(--color-brass)" />
                    ))}
                  </div>

                  <blockquote
                    style={{
                      margin: 0,
                      fontFamily: 'var(--font-serif)',
                      fontSize: '18px',
                      lineHeight: 1.6,
                      color: 'var(--color-text-inverse)',
                      fontStyle: 'italic',
                    }}
                  >
                    “{quoteText}”
                  </blockquote>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '11px',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    color: 'var(--color-brass)',
                    paddingTop: '14px',
                    borderTop: '1px solid rgba(184, 154, 100, 0.12)',
                  }}
                >
                  <MessageSquare size={12} />
                  <span>Google review</span>
                </div>
              </div>
            ))}
          </div>

          {/* Action Buttons: Write a Google Review & View All Google Reviews */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '16px',
            }}
          >
            <a
              href={googleWriteReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 24px',
                borderRadius: '6px',
                backgroundColor: 'var(--color-brass)',
                color: '#1F1A16',
                fontFamily: 'var(--font-sans)',
                fontSize: '13px',
                fontWeight: 600,
                letterSpacing: '0.04em',
                textDecoration: 'none',
                boxShadow: '0 4px 16px rgba(184, 154, 100, 0.25)',
              }}
            >
              <Edit3 size={15} />
              <span>Write a Google Review</span>
            </a>

            <a
              href={googleViewAllUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 22px',
                borderRadius: '6px',
                backgroundColor: 'rgba(38, 31, 26, 0.8)',
                border: '1px solid rgba(184, 154, 100, 0.35)',
                color: 'var(--color-text-inverse)',
                fontFamily: 'var(--font-sans)',
                fontSize: '13px',
                fontWeight: 500,
                textDecoration: 'none',
              }}
            >
              <ExternalLink size={15} color="var(--color-brass)" />
              <span>View All Google Reviews</span>
            </a>
          </div>
        </div>
      </section>

      {/* 3. Closing CTA Band */}
      <PageClosingCta
        title="Experience the Quality for"
        accentWord="Yourself"
        subtitle="Join our community of satisfied diners at Shyam Nagar, Kanpur."
      />
    </>
  )
}
