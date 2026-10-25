import PageHero from '../components/PageHero'
import { OFFERS_CONFIG } from '../content/offers'
import { Link } from 'react-router-dom'
import { Tag, Sparkles } from 'lucide-react'

export default function Offers() {
  const hasOffers = OFFERS_CONFIG.enabled && OFFERS_CONFIG.items.length > 0

  return (
    <>
      <PageHero
        title="Special Privileges &"
        accentWord="Offers"
        intro="Curated seasonal dining privileges, celebratory vouchers, and festive culinary offerings."
        currentPage="Offers"
      />

      <div className="container" style={{ padding: '56px 0 80px' }}>
        {hasOffers ? (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px' }}>
            {OFFERS_CONFIG.items.map(offer => (
              <div
                key={offer.id}
                style={{
                  backgroundColor: 'rgba(38, 31, 26, 0.7)',
                  borderRadius: '12px',
                  border: '1px solid rgba(184, 154, 100, 0.2)',
                  padding: '24px',
                }}
              >
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '22px', margin: '0 0 8px 0', color: 'var(--color-brass)' }}>
                  {offer.title}
                </h3>
                <p style={{ fontSize: '14px', color: 'rgba(246, 239, 228, 0.8)', margin: '0 0 16px 0', lineHeight: 1.6 }}>
                  {offer.description}
                </p>
                {offer.code && (
                  <span style={{ display: 'inline-block', padding: '4px 10px', backgroundColor: 'rgba(184, 154, 100, 0.15)', borderRadius: '4px', fontSize: '12px', fontWeight: 600, color: 'var(--color-brass)' }}>
                    Code: {offer.code}
                  </span>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div
            style={{
              maxWidth: '640px',
              padding: '48px 36px',
              backgroundColor: 'rgba(38, 31, 26, 0.7)',
              borderRadius: '16px',
              border: '1px solid rgba(184, 154, 100, 0.2)',
              textAlign: 'center',
              boxShadow: '0 16px 36px rgba(0, 0, 0, 0.5)',
            }}
          >
            <div
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                backgroundColor: 'rgba(184, 154, 100, 0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
              }}
            >
              <Tag size={26} color="var(--color-brass)" />
            </div>

            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '4px 12px',
                borderRadius: '20px',
                backgroundColor: 'rgba(184, 154, 100, 0.12)',
                color: 'var(--color-brass)',
                fontSize: '11px',
                fontFamily: 'var(--font-sans)',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: '16px',
              }}
            >
              <Sparkles size={12} />
              Coming Soon
            </span>

            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(26px, 4vw, 36px)',
                fontWeight: 400,
                margin: '0 0 12px 0',
                color: 'var(--color-text-inverse)',
              }}
            >
              Exclusive Privileges Coming Soon.
            </h2>

            <p
              style={{
                fontSize: '14px',
                fontFamily: 'var(--font-sans)',
                color: 'rgba(246, 239, 228, 0.75)',
                lineHeight: 1.7,
                margin: '0 0 28px 0',
              }}
            >
              We are curating bespoke dining privileges and seasonal festival rewards. In the meantime, join us daily in Shyam Nagar to experience our complete pure vegetarian a la carte menu.
            </p>

            <Link
              to="/menu"
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
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                textDecoration: 'none',
              }}
            >
              Explore 193 Menu Delicacies
            </Link>
          </div>
        )}
      </div>
    </>
  )
}
