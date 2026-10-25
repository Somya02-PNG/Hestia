import PageShell from '../components/layout/PageShell'
import { MENU_CONFIG } from '../content/menu'
import { ArrowUpRight } from 'lucide-react'

export default function MenuPage() {
  return (
    <PageShell
      title="Complete Culinary Menu"
      eyebrow="193 Pure Vegetarian Dishes · Kanpur"
      description="Explore our 21 authentic culinary disciplines across slow-cooked curries, signature paneer delicacies, tandoori breads, and house beverages."
    >
      <div style={{ maxWidth: '640px' }}>
        <p style={{ color: 'rgba(246, 239, 228, 0.75)', lineHeight: 1.7, marginBottom: '24px' }}>
          Our comprehensive 193-dish menu is fully mapped on our interactive homepage explorer and authoritative dining partners.
        </p>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <a
            href="/#menu"
            style={{
              padding: '12px 24px',
              backgroundColor: 'var(--color-brass)',
              color: '#1F1A16',
              borderRadius: '4px',
              fontWeight: 600,
              fontSize: '13px',
              textDecoration: 'none',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
            }}
          >
            Explore Interactive Menu
          </a>
          <a
            href={MENU_CONFIG.authoritativeMenuUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '12px 24px',
              border: '1px solid rgba(184, 154, 100, 0.3)',
              color: 'var(--color-text-inverse)',
              borderRadius: '4px',
              fontWeight: 500,
              fontSize: '13px',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <span>Live Zomato Menu</span>
            <ArrowUpRight size={14} color="var(--color-brass)" />
          </a>
        </div>
      </div>
    </PageShell>
  )
}
