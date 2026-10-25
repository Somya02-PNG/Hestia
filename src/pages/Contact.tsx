import { useState } from 'react'
import { MapPin, Phone, MessageSquare, Mail, Clock, Wallet, Navigation, ExternalLink, Calendar } from 'lucide-react'
import PageHero from '../components/PageHero'
import PageClosingCta from '../components/PageClosingCta'
import { useDocumentMeta } from '../hooks/useDocumentMeta'
import { RESTAURANT } from '../content/restaurant'
import { InstagramIcon } from '../components/icons/InstagramIcon'

export default function Contact() {
  useDocumentMeta(
    'Visit & Reserve a Table | Contact Details',
    'Find Hestiia Restaurant in Shyam Nagar, Kanpur. Operating hours 11 AM to 11 PM, Google Maps directions, phone, WhatsApp, and table reservation info.'
  )

  const [reserveModalOpen, setReserveModalOpen] = useState(false)

  // Map embed URL with address query (no API key required)
  const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
    'Hestiia Restaurant, 1-B, Ram Puram, Shyam Nagar, Kanpur, Uttar Pradesh 208013'
  )}&t=&z=16&ie=UTF8&iwloc=&output=embed`

  return (
    <>
      <PageHero
        title="Visit & Connect with"
        accentWord="Hestiia"
        intro="Find our pure vegetarian sanctuary in Shyam Nagar, Kanpur, get directions, reserve a table, or reach our hospitality team."
        currentPage="Visit & Reserve"
      />

      <section
        style={{
          padding: '64px 0 80px',
          backgroundColor: '#16110E',
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '36px',
              marginBottom: '56px',
            }}
          >
            {/* 1. Core Contact & Hours Card */}
            <div
              style={{
                padding: '36px 32px',
                borderRadius: '14px',
                backgroundColor: 'rgba(38, 31, 26, 0.75)',
                border: '1px solid rgba(184, 154, 100, 0.25)',
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
                boxShadow: '0 16px 40px rgba(0, 0, 0, 0.35)',
              }}
            >
              <div>
                <span
                  style={{
                    display: 'block',
                    fontSize: '11px',
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 600,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: 'var(--color-brass)',
                    marginBottom: '8px',
                  }}
                >
                  Sanctuary Coordinates
                </span>
                <h2
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '30px',
                    fontWeight: 300,
                    color: 'var(--color-text-inverse)',
                    margin: 0,
                  }}
                >
                  Direct Contact & Info
                </h2>
              </div>

              {/* Address */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <MapPin size={20} color="var(--color-brass)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong style={{ display: 'block', fontSize: '13px', color: 'var(--color-text-inverse)', marginBottom: '4px' }}>
                    Address
                  </strong>
                  <p style={{ fontSize: '14px', lineHeight: 1.6, color: 'rgba(246, 239, 228, 0.8)', margin: '0 0 10px' }}>
                    {RESTAURANT.address.fullDisplay}
                  </p>
                  <a
                    href={RESTAURANT.platforms.googleMaps}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '12px',
                      fontFamily: 'var(--font-sans)',
                      fontWeight: 600,
                      color: 'var(--color-brass)',
                      textDecoration: 'none',
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                    }}
                  >
                    <Navigation size={13} />
                    <span>Get Directions</span>
                  </a>
                </div>
              </div>

              {/* Operating Hours */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <Clock size={20} color="var(--color-brass)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong style={{ display: 'block', fontSize: '13px', color: 'var(--color-text-inverse)', marginBottom: '4px' }}>
                    Operating Hours
                  </strong>
                  <span style={{ fontSize: '14px', color: 'rgba(246, 239, 228, 0.85)', display: 'block' }}>
                    Daily 11:00 AM to 11:00 PM (11:00 – 23:00)
                  </span>
                  <span style={{ fontSize: '12px', color: 'rgba(246, 239, 228, 0.5)' }}>
                    Lunch, Evening Bites & Dinner Service
                  </span>
                </div>
              </div>

              {/* Price Range */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <Wallet size={20} color="var(--color-brass)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong style={{ display: 'block', fontSize: '13px', color: 'var(--color-text-inverse)', marginBottom: '4px' }}>
                    Price Range
                  </strong>
                  <span style={{ fontSize: '14px', color: 'rgba(246, 239, 228, 0.85)' }}>
                    ₹200–400 per person
                  </span>
                </div>
              </div>

              {/* Direct Tap-To-Call */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <Phone size={20} color="var(--color-brass)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong style={{ display: 'block', fontSize: '13px', color: 'var(--color-text-inverse)', marginBottom: '4px' }}>
                    Direct Telephone
                  </strong>
                  <a
                    href={`tel:${RESTAURANT.phone.e164}`}
                    style={{
                      fontSize: '15px',
                      fontWeight: 600,
                      color: 'var(--color-brass-light)',
                      textDecoration: 'none',
                    }}
                  >
                    {RESTAURANT.phone.display}
                  </a>
                  <span style={{ display: 'block', fontSize: '12px', color: 'rgba(246, 239, 228, 0.5)', marginTop: '2px' }}>
                    Tap to call table manager
                  </span>
                </div>
              </div>

              {/* WhatsApp */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <MessageSquare size={20} color="#25D366" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong style={{ display: 'block', fontSize: '13px', color: 'var(--color-text-inverse)', marginBottom: '4px' }}>
                    WhatsApp Desk
                  </strong>
                  <a
                    href={RESTAURANT.whatsapp.chatUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontSize: '14px',
                      color: '#4ADE80',
                      textDecoration: 'none',
                      fontWeight: 500,
                    }}
                  >
                    Chat on WhatsApp ({RESTAURANT.whatsapp.display})
                  </a>
                </div>
              </div>

              {/* Email */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <Mail size={20} color="var(--color-brass)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong style={{ display: 'block', fontSize: '13px', color: 'var(--color-text-inverse)', marginBottom: '4px' }}>
                    Email
                  </strong>
                  <a
                    href={`mailto:${RESTAURANT.email}`}
                    style={{ fontSize: '14px', color: 'var(--color-brass-light)', textDecoration: 'none' }}
                  >
                    {RESTAURANT.email}
                  </a>
                </div>
              </div>

              {/* Reserve a Table Button (Triggers Table Reservation Action) */}
              <div style={{ paddingTop: '12px', borderTop: '1px solid rgba(184, 154, 100, 0.15)' }}>
                <button
                  onClick={() => setReserveModalOpen(true)}
                  style={{
                    width: '100%',
                    padding: '14px 20px',
                    borderRadius: '8px',
                    backgroundColor: 'var(--color-brass)',
                    color: '#1F1A16',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '13px',
                    fontWeight: 600,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    boxShadow: '0 4px 16px rgba(184, 154, 100, 0.25)',
                  }}
                >
                  <Calendar size={16} />
                  <span>Reserve a Table</span>
                </button>
              </div>
            </div>

            {/* 2. Embedded Google Map (No API Key, Lazy Loaded, min-height 320px) */}
            <div
              style={{
                borderRadius: '14px',
                overflow: 'hidden',
                border: '1px solid rgba(184, 154, 100, 0.25)',
                boxShadow: '0 16px 40px rgba(0, 0, 0, 0.35)',
                minHeight: '320px',
                height: '100%',
                position: 'relative',
              }}
            >
              <iframe
                title="Hestiia Restaurant Location Map"
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  minHeight: '340px',
                  height: '100%',
                  display: 'block',
                  filter: 'contrast(1.05) saturate(1.1)',
                }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* 3. Official Platform Links Row */}
          <div
            style={{
              padding: '36px',
              borderRadius: '14px',
              backgroundColor: 'rgba(38, 31, 26, 0.65)',
              border: '1px solid rgba(184, 154, 100, 0.2)',
            }}
          >
            <div style={{ textAlign: 'center', marginBottom: '24px' }}>
              <span
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '11px',
                  fontWeight: 600,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'var(--color-brass)',
                  display: 'block',
                  marginBottom: '8px',
                }}
              >
                Official Dining Profiles
              </span>
              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '24px',
                  color: 'var(--color-text-inverse)',
                  margin: 0,
                }}
              >
                Explore Us on Food & Dining Platforms
              </h3>
            </div>

            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '14px',
              }}
            >
              {/* Instagram */}
              {RESTAURANT.social.instagram && (
                <a
                  href={RESTAURANT.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '10px 18px',
                    borderRadius: '6px',
                    backgroundColor: 'rgba(225, 48, 108, 0.12)',
                    border: '1px solid rgba(225, 48, 108, 0.35)',
                    color: 'var(--color-text-inverse)',
                    fontSize: '13px',
                    textDecoration: 'none',
                    fontWeight: 500,
                  }}
                >
                  <InstagramIcon size={14} />
                  <span>Instagram</span>
                  <ExternalLink size={12} color="rgba(246, 239, 228, 0.5)" />
                </a>
              )}

              {/* Zomato */}
              <a
                href={RESTAURANT.platforms.zomato}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 18px',
                  borderRadius: '6px',
                  backgroundColor: 'rgba(235, 53, 53, 0.12)',
                  border: '1px solid rgba(235, 53, 53, 0.35)',
                  color: 'var(--color-text-inverse)',
                  fontSize: '13px',
                  textDecoration: 'none',
                  fontWeight: 500,
                }}
              >
                <span>Zomato</span>
                <ExternalLink size={12} color="var(--color-brass)" />
              </a>

              {/* Swiggy */}
              <a
                href={RESTAURANT.platforms.swiggy}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 18px',
                  borderRadius: '6px',
                  backgroundColor: 'rgba(252, 128, 25, 0.12)',
                  border: '1px solid rgba(252, 128, 25, 0.35)',
                  color: 'var(--color-text-inverse)',
                  fontSize: '13px',
                  textDecoration: 'none',
                  fontWeight: 500,
                }}
              >
                <span>Swiggy Dineout</span>
                <ExternalLink size={12} color="var(--color-brass)" />
              </a>

              {/* EazyDiner */}
              <a
                href={RESTAURANT.platforms.eazydiner}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 18px',
                  borderRadius: '6px',
                  backgroundColor: 'rgba(184, 154, 100, 0.15)',
                  border: '1px solid rgba(184, 154, 100, 0.35)',
                  color: 'var(--color-text-inverse)',
                  fontSize: '13px',
                  textDecoration: 'none',
                  fontWeight: 500,
                }}
              >
                <span>EazyDiner</span>
                <ExternalLink size={12} color="var(--color-brass)" />
              </a>

              {/* District */}
              <a
                href={RESTAURANT.platforms.district}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 18px',
                  borderRadius: '6px',
                  backgroundColor: 'rgba(184, 154, 100, 0.15)',
                  border: '1px solid rgba(184, 154, 100, 0.35)',
                  color: 'var(--color-text-inverse)',
                  fontSize: '13px',
                  textDecoration: 'none',
                  fontWeight: 500,
                }}
              >
                <span>District by Zomato</span>
                <ExternalLink size={12} color="var(--color-brass)" />
              </a>

              {/* Justdial */}
              <a
                href={RESTAURANT.platforms.justdial}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 18px',
                  borderRadius: '6px',
                  backgroundColor: 'rgba(184, 154, 100, 0.15)',
                  border: '1px solid rgba(184, 154, 100, 0.35)',
                  color: 'var(--color-text-inverse)',
                  fontSize: '13px',
                  textDecoration: 'none',
                  fontWeight: 500,
                }}
              >
                <span>Justdial</span>
                <ExternalLink size={12} color="var(--color-brass)" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Reservation Assistance Modal */}
      {reserveModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99999,
            backgroundColor: 'rgba(10, 8, 6, 0.9)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
          }}
          onClick={() => setReserveModalOpen(false)}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              maxWidth: '480px',
              width: '100%',
              backgroundColor: '#1E1814',
              borderRadius: '14px',
              border: '1px solid rgba(184, 154, 100, 0.35)',
              padding: '32px',
              boxShadow: '0 24px 60px rgba(0, 0, 0, 0.6)',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                backgroundColor: 'rgba(184, 154, 100, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px',
                color: 'var(--color-brass)',
              }}
            >
              <Calendar size={22} />
            </div>

            <h3
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '24px',
                fontWeight: 300,
                color: 'var(--color-text-inverse)',
                margin: '0 0 10px',
              }}
            >
              Reserve Your Table
            </h3>

            <p style={{ fontSize: '13px', lineHeight: 1.6, color: 'rgba(246, 239, 228, 0.75)', marginBottom: '24px' }}>
              For immediate table confirmation, please connect directly with our table manager via phone, WhatsApp, or through Zomato / EazyDiner dining portals.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px' }}>
              <a
                href={`tel:${RESTAURANT.phone.e164}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  padding: '12px',
                  borderRadius: '6px',
                  backgroundColor: 'var(--color-brass)',
                  color: '#1F1A16',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '13px',
                  fontWeight: 600,
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
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  padding: '12px',
                  borderRadius: '6px',
                  backgroundColor: 'rgba(37, 211, 102, 0.15)',
                  border: '1px solid rgba(37, 211, 102, 0.35)',
                  color: '#4ADE80',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '13px',
                  fontWeight: 600,
                  textDecoration: 'none',
                }}
              >
                <MessageSquare size={15} />
                <span>Reserve via WhatsApp</span>
              </a>
            </div>

            <button
              onClick={() => setReserveModalOpen(false)}
              style={{
                background: 'transparent',
                border: 'none',
                fontSize: '12px',
                color: 'rgba(246, 239, 228, 0.5)',
                cursor: 'pointer',
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Closing CTA Band */}
      <PageClosingCta
        title="We Look Forward to Your"
        accentWord="Visit"
        subtitle="Experience pure vegetarian dining crafted with care in Shyam Nagar, Kanpur."
      />
    </>
  )
}
