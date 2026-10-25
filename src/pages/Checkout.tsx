import PageHero from '../components/PageHero'
import { Link } from 'react-router-dom'
import { CreditCard, ArrowLeft } from 'lucide-react'

export default function Checkout() {
  return (
    <>
      <PageHero
        title="Order"
        accentWord="Checkout"
        intro="Review order specifications and dining preferences."
        currentPage="Checkout"
      />

      <div className="container" style={{ padding: '56px 0 80px' }}>
        <div
          style={{
            maxWidth: '560px',
            padding: '40px',
            backgroundColor: 'rgba(38, 31, 26, 0.7)',
            borderRadius: '16px',
            border: '1px solid rgba(184, 154, 100, 0.2)',
            textAlign: 'center',
          }}
        >
          <CreditCard size={32} color="var(--color-brass)" style={{ margin: '0 auto 16px' }} />
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '24px', margin: '0 0 12px 0', color: 'var(--color-text-inverse)' }}>
            Checkout Module
          </h2>
          <p style={{ fontSize: '14px', color: 'rgba(246, 239, 228, 0.7)', lineHeight: 1.6, margin: '0 0 24px 0' }}>
            {/* TODO: Checkout workflow integration */}
            Direct online ordering is undergoing integration. In the interim, please use our certified Zomato / Swiggy delivery channels or call us directly.
          </p>
          <Link
            to="/cart"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 20px',
              backgroundColor: 'rgba(184, 154, 100, 0.15)',
              border: '1px solid rgba(184, 154, 100, 0.3)',
              color: 'var(--color-brass)',
              borderRadius: '4px',
              fontSize: '12px',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              textDecoration: 'none',
            }}
          >
            <ArrowLeft size={14} />
            <span>Back to Cart</span>
          </Link>
        </div>
      </div>
    </>
  )
}
