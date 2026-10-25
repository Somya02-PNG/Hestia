import PageHero from '../components/PageHero'
import { RESTAURANT } from '../content/restaurant'

export default function Privacy() {
  return (
    <>
      <PageHero
        title="Privacy"
        accentWord="Policy"
        intro="How Hestiia Restaurant respects, safeguards, and handles your personal dining reservation details."
        currentPage="Privacy"
      />

      <div className="container" style={{ padding: '48px 0 80px' }}>
        <div style={{ maxWidth: '800px', display: 'flex', flexDirection: 'column', gap: '24px', fontSize: '14px', lineHeight: 1.8, color: 'rgba(246, 239, 228, 0.78)' }}>
          {/* TODO: Privacy policy verification */}
          <section>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '22px', color: 'var(--color-brass)', marginBottom: '8px' }}>
              1. Information Collection
            </h2>
            <p>
              We collect guest contact details (such as name, phone number, and reservation time) solely for verifying table bookings and accommodating dining preferences.
            </p>
          </section>

          <section>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '22px', color: 'var(--color-brass)', marginBottom: '8px' }}>
              2. Confidentiality
            </h2>
            <p>
              Your information is never sold, traded, or shared with unauthorized commercial entities. For inquiries, email {RESTAURANT.email}.
            </p>
          </section>
        </div>
      </div>
    </>
  )
}
