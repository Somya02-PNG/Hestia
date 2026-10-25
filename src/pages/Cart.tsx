import PageHero from '../components/PageHero'
import { Link } from 'react-router-dom'
import { ShoppingBag, ArrowRight } from 'lucide-react'

export default function Cart() {
  return (
    <>
      <PageHero
        title="Your Culinary"
        accentWord="Cart"
        intro="Review your pure vegetarian selections before dining or takeaway."
        currentPage="Cart"
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
          <div
            style={{
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              backgroundColor: 'rgba(184, 154, 100, 0.12)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 16px',
            }}
          >
            <ShoppingBag size={24} color="var(--color-brass)" />
          </div>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '26px', margin: '0 0 10px 0', color: 'var(--color-text-inverse)' }}>
            Your Cart is Empty
          </h2>
          <p style={{ fontSize: '14px', color: 'rgba(246, 239, 228, 0.7)', lineHeight: 1.6, margin: '0 0 24px 0' }}>
            {/* TODO: Cart context and localStorage state integration */}
            Explore our complete 193-dish pure vegetarian menu to curate your dining selection.
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
              fontSize: '12px',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              textDecoration: 'none',
            }}
          >
            <span>Explore Dishes</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </>
  )
}
