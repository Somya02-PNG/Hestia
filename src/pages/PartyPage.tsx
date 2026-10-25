import PageShell from '../components/layout/PageShell'
import { RESTAURANT } from '../content/restaurant'
import { Phone, Users, Calendar } from 'lucide-react'

export default function PartyPage() {
  return (
    <PageShell
      title="Parties & Private Dining"
      eyebrow="Celebrations · Shyam Nagar, Kanpur"
      description="Host intimate family milestones, corporate gatherings, and festive feasts in our refined pure vegetarian dining sanctuary."
    >
      <div
        style={{
          maxWidth: '720px',
          padding: '36px',
          backgroundColor: 'rgba(38, 31, 26, 0.7)',
          borderRadius: '12px',
          border: '1px solid rgba(184, 154, 100, 0.22)',
        }}
      >
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '28px' }}>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <Users size={20} color="var(--color-brass)" />
            <div>
              <strong style={{ display: 'block', fontSize: '13px', color: 'var(--color-text-inverse)' }}>Group Dining</strong>
              <span style={{ fontSize: '12px', color: 'rgba(246, 239, 228, 0.65)' }}>Custom pure veg menus</span>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <Calendar size={20} color="var(--color-brass)" />
            <div>
              <strong style={{ display: 'block', fontSize: '13px', color: 'var(--color-text-inverse)' }}>Reservations</strong>
              <span style={{ fontSize: '12px', color: 'rgba(246, 239, 228, 0.65)' }}>{RESTAURANT.hours.displayText}</span>
            </div>
          </div>
        </div>

        <p style={{ color: 'rgba(246, 239, 228, 0.75)', lineHeight: 1.7, margin: '0 0 24px 0', fontSize: '14px' }}>
          For private gatherings, birthday banquets, or customized multi-course culinary arrangements, speak directly with our hospitality manager.
        </p>

        <a
          href={`tel:${RESTAURANT.phone.e164}`}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '12px 24px',
            backgroundColor: 'var(--color-brass)',
            color: '#1F1A16',
            borderRadius: '4px',
            fontSize: '13px',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            textDecoration: 'none',
          }}
        >
          <Phone size={15} />
          <span>Call {RESTAURANT.phone.display}</span>
        </a>
      </div>
    </PageShell>
  )
}
