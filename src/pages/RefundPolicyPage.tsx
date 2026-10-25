import PageShell from '../components/layout/PageShell'
import { RESTAURANT } from '../content/restaurant'

export default function RefundPolicyPage() {
  return (
    <PageShell
      title="Refund & Cancellation Policy"
      eyebrow="Dining Bookings & Orders · Kanpur"
      description="Guidelines governing reservation cancellations and culinary service guarantees."
    >
      <div style={{ maxWidth: '800px', display: 'flex', flexDirection: 'column', gap: '24px', fontSize: '14px', lineHeight: 1.8, color: 'rgba(246, 239, 228, 0.78)' }}>
        <section>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '22px', color: 'var(--color-brass)', marginBottom: '8px' }}>
            1. Dining Reservations
          </h2>
          <p>
            Standard table bookings require no deposit and can be cancelled or rescheduled at any time without charge. Please notify us at {RESTAURANT.phone.display} if your schedule changes.
          </p>
        </section>

        <section>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '22px', color: 'var(--color-brass)', marginBottom: '8px' }}>
            2. Orders Placed via Partner Platforms
          </h2>
          <p>
            For food delivery orders through Zomato or Swiggy, cancellation and refund policies are administered per the respective platform’s terms of service.
          </p>
        </section>
      </div>
    </PageShell>
  )
}
