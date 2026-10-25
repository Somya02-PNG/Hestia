import PageHero from '../components/PageHero'
import { RESTAURANT } from '../content/restaurant'
import { Users, Phone, Calendar } from 'lucide-react'

export default function Party() {
  return (
    <>
      <PageHero
        title="Parties & Private"
        accentWord="Dining"
        intro="Dedicated pure vegetarian banquet spaces, customized menus, and bespoke hospitality in Shyam Nagar."
        currentPage="Parties"
      />

      <div className="container" style={{ padding: '56px 0 80px' }}>
        <div
          style={{
            maxWidth: '680px',
            backgroundColor: 'rgba(38, 31, 26, 0.75)',
            borderRadius: '16px',
            border: '1px solid rgba(184, 154, 100, 0.22)',
            padding: 'clamp(28px, 4vw, 40px)',
          }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '28px' }}>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <Users size={22} color="var(--color-brass)" />
              <div>
                <strong style={{ display: 'block', fontSize: '13px', color: 'var(--color-text-inverse)' }}>Private Banqueting</strong>
                <span style={{ fontSize: '12px', color: 'rgba(246, 239, 228, 0.65)' }}>Family milestones & birthdays</span>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <Calendar size={22} color="var(--color-brass)" />
              <div>
                <strong style={{ display: 'block', fontSize: '13px', color: 'var(--color-text-inverse)' }}>Booking Hours</strong>
                <span style={{ fontSize: '12px', color: 'rgba(246, 239, 228, 0.65)' }}>{RESTAURANT.hours.displayText}</span>
              </div>
            </div>
          </div>

          <p style={{ color: 'rgba(246, 239, 228, 0.78)', lineHeight: 1.7, margin: '0 0 24px 0', fontSize: '14px' }}>
            {/* TODO: Full interactive party enquiry workflow arrives in R7 */}
            Our dedicated team coordinates private reservations, custom multi-course thali menus, and seating arrangements for intimate gatherings. Speak directly with our hospitality manager to arrange your event.
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
              fontSize: '12px',
              fontFamily: 'var(--font-sans)',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              textDecoration: 'none',
            }}
          >
            <Phone size={14} />
            <span>Call to Inquire ({RESTAURANT.phone.display})</span>
          </a>
        </div>
      </div>
    </>
  )
}
