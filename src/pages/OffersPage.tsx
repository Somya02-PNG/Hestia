import PageShell from '../components/layout/PageShell'
import { OFFERS_CONFIG } from '../content/offers'
import { Link } from 'react-router-dom'
import { Tag } from 'lucide-react'

export default function OffersPage() {
  const hasOffers = OFFERS_CONFIG.enabled && OFFERS_CONFIG.items.length > 0

  return (
    <PageShell
      title="Special Privileges & Offers"
      eyebrow="Dining Incentives · Shyam Nagar, Kanpur"
      description="Exclusive dining privileges, celebratory vouchers, and festive culinary offerings at Hestiia."
    >
      {hasOffers ? (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px' }}>
          {OFFERS_CONFIG.items.map(offer => (
            <div
              key={offer.id}
              style={{
                backgroundColor: 'rgba(38, 31, 26, 0.7)',
                borderRadius: '8px',
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
            maxWidth: '600px',
            padding: '36px',
            backgroundColor: 'rgba(38, 31, 26, 0.6)',
            borderRadius: '8px',
            border: '1px solid rgba(184, 154, 100, 0.2)',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              backgroundColor: 'rgba(184, 154, 100, 0.12)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 16px',
            }}
          >
            <Tag size={22} color="var(--color-brass)" />
          </div>
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '24px', margin: '0 0 10px 0', color: 'var(--color-text-inverse)' }}>
            No Active Promotional Offers
          </h3>
          <p style={{ fontSize: '14px', color: 'rgba(246, 239, 228, 0.7)', lineHeight: 1.6, margin: '0 0 20px 0' }}>
            We focus on genuine pure vegetarian excellence every day. Please check back for seasonal festive celebrations or contact us directly for group events.
          </p>
          <Link
            to="/#menu"
            style={{
              display: 'inline-block',
              padding: '10px 22px',
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
            Explore Today's Menu
          </Link>
        </div>
      )}
    </PageShell>
  )
}
