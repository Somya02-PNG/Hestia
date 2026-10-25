import PageShell from '../components/layout/PageShell'
import { Link } from 'react-router-dom'
import { ShoppingBag, ArrowRight } from 'lucide-react'

export default function CartPage() {
  return (
    <PageShell
      title="Your Culinary Cart"
      eyebrow="Dining & Takeaway · Kanpur"
      description="Review your selected vegetarian specialties and prepare for seamless ordering."
    >
      <div
        style={{
          maxWidth: '560px',
          padding: '40px',
          backgroundColor: 'rgba(38, 31, 26, 0.65)',
          borderRadius: '12px',
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
        <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '24px', margin: '0 0 10px 0', color: 'var(--color-text-inverse)' }}>
          Your Cart is Empty
        </h3>
        <p style={{ fontSize: '14px', color: 'rgba(246, 239, 228, 0.7)', lineHeight: 1.6, margin: '0 0 24px 0' }}>
          Explore our complete 193-dish pure vegetarian menu to curate your dining selection.
        </p>
        <Link
          to="/#menu"
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
    </PageShell>
  )
}
