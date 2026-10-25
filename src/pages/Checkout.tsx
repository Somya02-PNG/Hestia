import { Phone, MessageSquare, CreditCard, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import PageClosingCta from '../components/PageClosingCta'
import { useDocumentMeta } from '../hooks/useDocumentMeta'
import { RESTAURANT } from '../content/restaurant'

export default function Checkout() {
  useDocumentMeta(
    'Dining & Takeaway Checkout',
    'Complete your order or table reservation at Hestiia Restaurant in Shyam Nagar, Kanpur.'
  )

  return (
    <>
      <PageHero
        title="Dining Order"
        accentWord="Checkout"
        intro="Review order specifications and coordinate dining preferences directly with our hospitality team."
        currentPage="Checkout"
      />

      <section style={{ padding: '64px 0 80px', backgroundColor: '#16110E' }}>
        <div className="container">
          <div
            style={{
              maxWidth: '560px',
              margin: '0 auto',
              padding: '44px 36px',
              backgroundColor: 'rgba(38, 31, 26, 0.75)',
              borderRadius: '16px',
              border: '1px solid rgba(184, 154, 100, 0.25)',
              textAlign: 'center',
              boxShadow: '0 20px 48px rgba(0, 0, 0, 0.35)',
            }}
          >
            <div
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                backgroundColor: 'rgba(184, 154, 100, 0.15)',
                border: '1px solid rgba(184, 154, 100, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
              }}
            >
              <CreditCard size={26} color="var(--color-brass)" />
            </div>

            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '26px',
                margin: '0 0 12px 0',
                color: 'var(--color-text-inverse)',
                fontWeight: 300,
              }}
            >
              Order & Dining <em style={{ fontStyle: 'italic', color: 'var(--color-brass-light)' }}>Coordination</em>
            </h2>

            <p style={{ fontSize: '14px', color: 'rgba(246, 239, 228, 0.75)', lineHeight: 1.7, margin: '0 0 28px 0' }}>
              For instantaneous table orders or direct takeaway pickups, connect with our counter directly via phone or WhatsApp.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
              <a
                href={`tel:${RESTAURANT.phone.e164}`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '13px 24px',
                  backgroundColor: 'var(--color-brass)',
                  color: '#1F1A16',
                  borderRadius: '6px',
                  fontSize: '13px',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                  textDecoration: 'none',
                }}
              >
                <Phone size={15} />
                <span>Call Desk: {RESTAURANT.phone.display}</span>
              </a>

              <a
                href={RESTAURANT.whatsapp.chatUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '13px 22px',
                  backgroundColor: 'rgba(37, 211, 102, 0.15)',
                  border: '1px solid rgba(37, 211, 102, 0.35)',
                  color: '#4ADE80',
                  borderRadius: '6px',
                  fontSize: '13px',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 600,
                  textDecoration: 'none',
                }}
              >
                <MessageSquare size={15} />
                <span>Coordinate via WhatsApp</span>
              </a>

              <Link
                to="/cart"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '12px',
                  color: 'rgba(246, 239, 228, 0.6)',
                  textDecoration: 'none',
                  marginTop: '12px',
                }}
              >
                <ArrowLeft size={13} />
                <span>Return to Cart</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <PageClosingCta />
    </>
  )
}
