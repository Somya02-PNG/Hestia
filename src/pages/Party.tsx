import { Users, Phone, Calendar, MessageSquare, Sparkles } from 'lucide-react'
import PageHero from '../components/PageHero'
import PageClosingCta from '../components/PageClosingCta'
import { useDocumentMeta } from '../hooks/useDocumentMeta'
import { RESTAURANT } from '../content/restaurant'

export default function Party() {
  useDocumentMeta(
    'Parties & Celebration Enquiries',
    'Plan family celebrations, kitty parties, birthdays, and banquets at Hestiia Restaurant in Shyam Nagar, Kanpur with custom pure vegetarian catering.'
  )

  return (
    <>
      <PageHero
        title="Parties & Private"
        accentWord="Celebrations"
        intro="Dedicated pure vegetarian gathering spaces, customized multi-course menus, and attentive hospitality in Shyam Nagar."
        currentPage="Parties & Enquiries"
      />

      <section style={{ padding: '64px 0 80px', backgroundColor: '#16110E' }}>
        <div className="container">
          <div
            style={{
              maxWidth: '720px',
              margin: '0 auto',
              backgroundColor: 'rgba(38, 31, 26, 0.75)',
              borderRadius: '16px',
              border: '1px solid rgba(184, 154, 100, 0.25)',
              padding: 'clamp(28px, 4vw, 44px)',
              boxShadow: '0 20px 48px rgba(0, 0, 0, 0.35)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <Sparkles size={18} color="var(--color-brass)" />
              <span
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '11px',
                  fontWeight: 600,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'var(--color-brass)',
                }}
              >
                Celebration Arrangements
              </span>
            </div>

            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(26px, 3.5vw, 36px)',
                fontWeight: 300,
                color: 'var(--color-text-inverse)',
                margin: '0 0 16px',
              }}
            >
              Celebrate Life’s Milestones at <em style={{ fontStyle: 'italic', color: 'var(--color-brass-light)' }}>Hestiia</em>
            </h2>

            <p style={{ color: 'rgba(246, 239, 228, 0.78)', lineHeight: 1.7, margin: '0 0 28px', fontSize: '14px' }}>
              From intimate birthday gatherings and kitty parties to multi-course family anniversary banquets, our kitchen prepares authentic pure vegetarian spreads tailored to your group size and taste preferences.
            </p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '20px',
                marginBottom: '32px',
                padding: '20px',
                borderRadius: '10px',
                backgroundColor: 'rgba(26, 20, 16, 0.6)',
                border: '1px solid rgba(184, 154, 100, 0.15)',
              }}
            >
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <Users size={22} color="var(--color-brass)" />
                <div>
                  <strong style={{ display: 'block', fontSize: '13px', color: 'var(--color-text-inverse)' }}>
                    Group Enquiries
                  </strong>
                  <span style={{ fontSize: '12px', color: 'rgba(246, 239, 228, 0.65)' }}>10 to 40+ Guests</span>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <Calendar size={22} color="var(--color-brass)" />
                <div>
                  <strong style={{ display: 'block', fontSize: '13px', color: 'var(--color-text-inverse)' }}>
                    Kitchen Hours
                  </strong>
                  <span style={{ fontSize: '12px', color: 'rgba(246, 239, 228, 0.65)' }}>{RESTAURANT.hours.displayText}</span>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px' }}>
              <a
                href={`tel:${RESTAURANT.phone.e164}`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '13px 24px',
                  backgroundColor: 'var(--color-brass)',
                  color: '#1F1A16',
                  borderRadius: '6px',
                  fontSize: '13px',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                  textDecoration: 'none',
                }}
              >
                <Phone size={15} />
                <span>Call {RESTAURANT.phone.display}</span>
              </a>

              <a
                href={RESTAURANT.whatsapp.chatUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '13px 22px',
                  backgroundColor: 'rgba(37, 211, 102, 0.15)',
                  border: '1px solid rgba(37, 211, 102, 0.35)',
                  color: '#4ADE80',
                  borderRadius: '6px',
                  fontSize: '13px',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 600,
                  textDecoration: 'none',
                }}
              >
                <MessageSquare size={15} />
                <span>Enquire via WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <PageClosingCta
        title="Plan Your Celebration with"
        accentWord="Us"
        subtitle="Speak directly with our banquet manager to customize your pure vegetarian gathering in Shyam Nagar."
      />
    </>
  )
}
