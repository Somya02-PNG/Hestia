import PageShell from '../components/layout/PageShell'
import { Link } from 'react-router-dom'
import { CheckCircle2, Home } from 'lucide-react'

export default function OrderSuccessPage() {
  return (
    <PageShell
      title="Order Confirmation"
      eyebrow="Pure Vegetarian Kitchen · Kanpur"
      description="Thank you for dining with Hestiia."
    >
      <div
        style={{
          maxWidth: '560px',
          padding: '40px',
          backgroundColor: 'rgba(38, 31, 26, 0.7)',
          borderRadius: '12px',
          border: '1px solid rgba(47, 125, 79, 0.4)',
          textAlign: 'center',
        }}
      >
        <CheckCircle2 size={44} color="#2F7D4F" style={{ margin: '0 auto 16px' }} />
        <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '26px', margin: '0 0 12px 0', color: 'var(--color-text-inverse)' }}>
          Order Received
        </h3>
        <p style={{ fontSize: '14px', color: 'rgba(246, 239, 228, 0.75)', lineHeight: 1.7, margin: '0 0 24px 0' }}>
          Your dining request has been registered with our team. We look forward to delighting you with authentic pure vegetarian delicacies.
        </p>
        <Link
          to="/"
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
          <Home size={14} />
          <span>Return to Homepage</span>
        </Link>
      </div>
    </PageShell>
  )
}
