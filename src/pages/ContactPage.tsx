import PageShell from '../components/layout/PageShell'
import { RESTAURANT } from '../content/restaurant'
import { MapPin, Phone, Mail, Clock, MessageSquare, ExternalLink } from 'lucide-react'

export default function ContactPage() {
  return (
    <PageShell
      title="Contact & Location"
      eyebrow="Visit Our Sanctuary · Shyam Nagar, Kanpur"
      description="Find us in Kanpur, connect via phone or WhatsApp, or reserve your table in advance."
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '28px',
          maxWidth: '960px',
        }}
      >
        {/* Address & Navigation */}
        <div
          style={{
            padding: '28px',
            borderRadius: '10px',
            backgroundColor: 'rgba(38, 31, 26, 0.7)',
            border: '1px solid rgba(184, 154, 100, 0.2)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
            <MapPin size={20} color="var(--color-brass)" />
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '22px', margin: 0, color: 'var(--color-text-inverse)' }}>
              Location Address
            </h3>
          </div>
          <p style={{ fontSize: '14px', lineHeight: 1.7, color: 'rgba(246, 239, 228, 0.75)', marginBottom: '20px' }}>
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
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: 'var(--color-brass)',
              textDecoration: 'none',
            }}
          >
            <span>Open in Google Maps</span>
            <ExternalLink size={13} />
          </a>
        </div>

        {/* Operating Hours & Communication */}
        <div
          style={{
            padding: '28px',
            borderRadius: '10px',
            backgroundColor: 'rgba(38, 31, 26, 0.7)',
            border: '1px solid rgba(184, 154, 100, 0.2)',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Clock size={18} color="var(--color-brass)" />
            <div>
              <strong style={{ display: 'block', fontSize: '13px', color: 'var(--color-text-inverse)' }}>Operating Hours</strong>
              <span style={{ fontSize: '13px', color: 'rgba(246, 239, 228, 0.75)' }}>{RESTAURANT.hours.displayText}</span>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Phone size={18} color="var(--color-brass)" />
            <div>
              <strong style={{ display: 'block', fontSize: '13px', color: 'var(--color-text-inverse)' }}>Primary Phone</strong>
              <a href={`tel:${RESTAURANT.phone.e164}`} style={{ fontSize: '13px', color: 'var(--color-brass-light)', textDecoration: 'none' }}>
                {RESTAURANT.phone.display}
              </a>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <MessageSquare size={18} color="#25D366" />
            <div>
              <strong style={{ display: 'block', fontSize: '13px', color: 'var(--color-text-inverse)' }}>WhatsApp</strong>
              <a href={RESTAURANT.whatsapp.chatUrl} target="_blank" rel="noopener noreferrer" style={{ fontSize: '13px', color: '#4ADE80', textDecoration: 'none' }}>
                Chat on WhatsApp ({RESTAURANT.whatsapp.display})
              </a>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Mail size={18} color="var(--color-brass)" />
            <div>
              <strong style={{ display: 'block', fontSize: '13px', color: 'var(--color-text-inverse)' }}>Email</strong>
              <a href={`mailto:${RESTAURANT.email}`} style={{ fontSize: '13px', color: 'var(--color-brass-light)', textDecoration: 'none' }}>
                {RESTAURANT.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </PageShell>
  )
}
