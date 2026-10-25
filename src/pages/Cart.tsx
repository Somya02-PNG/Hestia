import { Link } from 'react-router-dom'
import { ShoppingBag, ArrowRight, Phone, MessageSquare } from 'lucide-react'
import PageHero from '../components/PageHero'
import PageClosingCta from '../components/PageClosingCta'
import { useDocumentMeta } from '../hooks/useDocumentMeta'
import { RESTAURANT } from '../content/restaurant'

export default function Cart() {
  useDocumentMeta(
    'Your Dining Cart',
    'Review your curated pure vegetarian dishes before ordering or dining at Hestiia Restaurant Kanpur.'
  )

  return (
    <>
      <PageHero
        title="Your Dining"
        accentWord="Cart"
        intro="Review your pure vegetarian selections for dining or takeaway from our Shyam Nagar kitchen."
        currentPage="Cart"
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
              border: '1px solid rgba(184, 154, 100, 0.25)',
              textAlign: 'center',
              boxShadow: '0 20px 48px rgba(0, 0, 0, 0.35)',
            }}
          >
            <div
              style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                backgroundColor: 'rgba(184, 154, 100, 0.15)',
                border: '1px solid rgba(184, 154, 100, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
              }}
            >
              <ShoppingBag size={26} color="var(--color-brass)" />
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
              Your Cart is Currently <em style={{ fontStyle: 'italic', color: 'var(--color-brass-light)' }}>Empty</em>
            </h2>

            <p style={{ fontSize: '14px', color: 'rgba(246, 239, 228, 0.75)', lineHeight: 1.7, margin: '0 0 28px 0' }}>
              Explore our complete 193-dish pure vegetarian menu to curate your dining selection or call us to order directly.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', alignItems: 'center' }}>
              <Link
                to="/menu"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '13px 26px',
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
                <span>Browse Full Menu</span>
                <ArrowRight size={15} />
              </Link>

              <div style={{ display: 'flex', gap: '12px', marginTop: '8px' }}>
                <a
                  href={`tel:${RESTAURANT.phone.e164}`}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '12px',
                    color: 'var(--color-brass-light)',
                    textDecoration: 'none',
                  }}
                >
                  <Phone size={13} />
                  <span>Call to Order ({RESTAURANT.phone.display})</span>
                </a>
                <span style={{ color: 'rgba(246, 239, 228, 0.3)' }}>·</span>
                <a
                  href={RESTAURANT.whatsapp.chatUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '12px',
                    color: '#4ADE80',
                    textDecoration: 'none',
                  }}
                >
                  <MessageSquare size={13} />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PageClosingCta />
    </>
  )
}
