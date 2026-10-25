import PageShell from '../components/layout/PageShell'
import { RESTAURANT } from '../content/restaurant'
import { ExternalLink } from 'lucide-react'

export default function DeliveryPolicyPage() {
  return (
    <PageShell
      title="Delivery & Takeaway Policy"
      eyebrow="Pure Vegetarian Kitchen · Shyam Nagar, Kanpur"
      description="Service parameters for home delivery and takeout across Kanpur."
    >
      <div style={{ maxWidth: '800px', display: 'flex', flexDirection: 'column', gap: '24px', fontSize: '14px', lineHeight: 1.8, color: 'rgba(246, 239, 228, 0.78)' }}>
        <section>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '22px', color: 'var(--color-brass)', marginBottom: '8px' }}>
            1. Authorized Delivery Partners
          </h2>
          <p>
            Online delivery is fulfilled by certified delivery executives via Zomato and Swiggy. Freshness-sealed, pure-vegetarian packaging is used for all orders.
          </p>
          <div style={{ display: 'flex', gap: '16px', marginTop: '12px', flexWrap: 'wrap' }}>
            <a
              href={RESTAURANT.platforms.zomato}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--color-brass)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
            >
              <span>Order on Zomato</span>
              <ExternalLink size={13} />
            </a>
            <a
              href={RESTAURANT.platforms.swiggy}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--color-brass)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
            >
              <span>Order on Swiggy</span>
              <ExternalLink size={13} />
            </a>
          </div>
        </section>

        <section>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '22px', color: 'var(--color-brass)', marginBottom: '8px' }}>
            2. Direct Restaurant Takeaway
          </h2>
          <p>
            Guests may call {RESTAURANT.phone.display} to place pre-orders for in-person pickup at our Shyam Nagar location.
          </p>
        </section>
      </div>
    </PageShell>
  )
}
