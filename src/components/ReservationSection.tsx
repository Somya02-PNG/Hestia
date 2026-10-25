import { Phone, MapPin, ExternalLink, Calendar, Navigation } from 'lucide-react'
import ClickSpark from './reactbits/ClickSpark'
import { InstagramIcon } from './icons/InstagramIcon'
import { RESTAURANT } from '../content/restaurant'
import { RESERVATION_PROVIDERS } from '../content/reservations'

export default function ReservationSection() {
  return (
    <section className="reservation-section section" id="visit" aria-labelledby="visit-title" style={{ backgroundColor: '#1F1A16', borderTop: '1px solid rgba(184, 154, 100, 0.15)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'clamp(40px, 6vw, 80px)', alignItems: 'start' }}>
          {/* Reservation Actions */}
          <div>
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '11px',
                fontWeight: 600,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--color-brass)',
                display: 'block',
                marginBottom: '12px',
              }}
            >
              Reservations & Dining
            </span>

            <h2
              id="visit-title"
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(36px, 4.5vw, 64px)',
                fontWeight: 300,
                lineHeight: 1.05,
                color: 'var(--color-text-inverse)',
                marginBottom: '20px',
              }}
            >
              Your Table <br />
              <em style={{ fontStyle: 'italic', color: 'var(--color-brass-light)' }}>Is Waiting.</em>
            </h2>

            <p style={{ fontSize: '15px', lineHeight: 1.7, color: 'rgba(246, 239, 228, 0.75)', marginBottom: '32px' }}>
              Reserve your table instantly through our official dining partners or call our restaurant directly for group and private dining arrangements.
            </p>

            {/* Provider Buttons with ClickSpark */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' }}>
              {RESERVATION_PROVIDERS.map(provider => (
                <ClickSpark key={provider.id} sparkColor="var(--color-brass-light)">
                  <a
                    href={provider.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${provider.label} (opens in new tab)`}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '18px 24px',
                      backgroundColor: provider.id === 'district' ? 'var(--color-brass)' : 'rgba(38, 31, 26, 0.9)',
                      color: provider.id === 'district' ? '#1F1A16' : 'var(--color-text-inverse)',
                      border: '1px solid rgba(184, 154, 100, 0.25)',
                      borderRadius: '8px',
                      textDecoration: 'none',
                      transition: 'transform 0.2s, background-color 0.2s',
                    }}
                    className="provider-cta-btn"
                  >
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Calendar size={16} />
                        <span style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', fontWeight: 600, letterSpacing: '0.04em' }}>
                          {provider.label}
                        </span>
                      </div>
                      <span style={{ fontSize: '12px', opacity: 0.8, display: 'block', marginTop: '2px' }}>
                        {provider.description}
                      </span>
                    </div>

                    <ExternalLink size={16} />
                  </a>
                </ClickSpark>
              ))}
            </div>

            <p style={{ fontSize: '12px', fontStyle: 'italic', color: 'rgba(246, 239, 228, 0.5)' }}>
              Note: You will complete your booking directly on the partner platform. No advance payment required for standard tables.
            </p>
          </div>

          {/* Location, Contact & Hours Card */}
          <div
            style={{
              padding: '36px',
              backgroundColor: 'rgba(38, 31, 26, 0.85)',
              borderRadius: '12px',
              border: '1px solid rgba(184, 154, 100, 0.2)',
            }}
          >
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '28px', fontWeight: 300, color: 'var(--color-text-inverse)', margin: '0 0 24px' }}>
              Find & Contact Us
            </h3>

            {/* Address */}
            <div style={{ display: 'flex', gap: '14px', marginBottom: '24px' }}>
              <MapPin size={20} color="var(--color-brass)" style={{ flexShrink: 0, marginTop: '3px' }} />
              <div>
                <span style={{ display: 'block', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--color-brass)', marginBottom: '4px' }}>
                  Address
                </span>
                <p style={{ margin: 0, fontSize: '15px', color: 'var(--color-text-inverse)', lineHeight: 1.5 }}>
                  {RESTAURANT.address.line1} <br />
                  {RESTAURANT.address.locality}, {RESTAURANT.address.city} <br />
                  {RESTAURANT.address.state} — {RESTAURANT.address.postalCode}
                </p>
              </div>
            </div>

            {/* Phone */}
            <div style={{ display: 'flex', gap: '14px', marginBottom: '24px' }}>
              <Phone size={20} color="var(--color-brass)" style={{ flexShrink: 0, marginTop: '3px' }} />
              <div>
                <span style={{ display: 'block', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--color-brass)', marginBottom: '4px' }}>
                  Direct Phone & Enquiries
                </span>
                <a
                  href={`tel:${RESTAURANT.phone.e164}`}
                  style={{
                    fontSize: '16px',
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 600,
                    color: 'var(--color-brass-light)',
                    textDecoration: 'none',
                  }}
                >
                  {RESTAURANT.phone.display}
                </a>
              </div>
            </div>

            {/* Hours */}
            <div style={{ marginBottom: '32px' }}>
              <span style={{ display: 'block', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--color-brass)', marginBottom: '4px' }}>
                Service Hours
              </span>
              <p style={{ margin: 0, fontSize: '14px', color: 'rgba(246, 239, 228, 0.7)' }}>
                {RESTAURANT.hours.displayText}
              </p>
            </div>

            {/* Actions: Directions + Instagram */}
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a
                href={RESTAURANT.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 20px',
                  backgroundColor: 'rgba(184, 154, 100, 0.15)',
                  border: '1px solid rgba(184, 154, 100, 0.3)',
                  color: 'var(--color-brass-light)',
                  borderRadius: '6px',
                  fontSize: '13px',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 500,
                  textDecoration: 'none',
                }}
              >
                <Navigation size={15} />
                <span>Get Directions</span>
              </a>

              <a
                href={RESTAURANT.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 20px',
                  backgroundColor: 'transparent',
                  border: '1px solid rgba(184, 154, 100, 0.2)',
                  color: 'var(--color-text-inverse)',
                  borderRadius: '6px',
                  fontSize: '13px',
                  fontFamily: 'var(--font-sans)',
                  textDecoration: 'none',
                }}
              >
                <InstagramIcon size={15} />
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
