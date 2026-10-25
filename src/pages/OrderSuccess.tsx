import { Link } from 'react-router-dom'
import { CheckCircle2, Home, Phone } from 'lucide-react'
import PageHero from '../components/PageHero'
import PageClosingCta from '../components/PageClosingCta'
import { useDocumentMeta } from '../hooks/useDocumentMeta'
import { RESTAURANT } from '../content/restaurant'

export default function OrderSuccess() {
  useDocumentMeta(
    'Order Confirmation | Hestiia Restaurant',
    'Thank you for dining with Hestiia Restaurant Kanpur. Your dining request is received.'
  )

  return (
    <>
      <PageHero
        title="Order"
        accentWord="Confirmation"
        intro="Thank you for dining with Hestiia Restaurant. Your culinary request has been received."
        currentPage="Order Confirmation"
      />

      <section style={{ padding: '64px 0 80px', backgroundColor: '#16110E' }}>
        <div className="container">
          <div
            style={{
              maxWidth: '560px',
              margin: '0 auto',
              padding: '48px 36px',
              backgroundColor: 'rgba(38, 31, 26, 0.75)',
              borderRadius: '16px',
              border: '1px solid rgba(52, 168, 83, 0.35)',
              textAlign: 'center',
              boxShadow: '0 20px 48px rgba(0, 0, 0, 0.4)',
            }}
          >
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                backgroundColor: 'rgba(52, 168, 83, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
              }}
            >
              <CheckCircle2 size={36} color="#4ADE80" />
            </div>

            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '28px',
                margin: '0 0 12px 0',
                color: 'var(--color-text-inverse)',
                fontWeight: 300,
              }}
            >
              Order & Request <em style={{ fontStyle: 'italic', color: 'var(--color-brass-light)' }}>Received</em>
            </h2>

            <p style={{ fontSize: '14px', color: 'rgba(246, 239, 228, 0.75)', lineHeight: 1.7, margin: '0 0 28px 0' }}>
              Your order has been forwarded to our kitchen counter. For any quick modifications or urgent table queries, speak directly with our table manager.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px' }}>
              <Link
                to="/"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 22px',
                  backgroundColor: 'var(--color-brass)',
                  color: '#1F1A16',
                  borderRadius: '6px',
                  fontSize: '13px',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                  textDecoration: 'none',
                }}
              >
                <Home size={15} />
                <span>Return to Home</span>
              </Link>

              <a
                href={`tel:${RESTAURANT.phone.e164}`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 20px',
                  backgroundColor: 'rgba(38, 31, 26, 0.8)',
                  border: '1px solid rgba(184, 154, 100, 0.35)',
                  color: 'var(--color-text-inverse)',
                  borderRadius: '6px',
                  fontSize: '13px',
                  fontWeight: 500,
                  textDecoration: 'none',
                }}
              >
                <Phone size={15} color="var(--color-brass)" />
                <span>Call {RESTAURANT.phone.display}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <PageClosingCta />
    </>
  )
}
