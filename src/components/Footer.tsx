import { ExternalLink } from 'lucide-react'
import ScrollFloat from './reactbits/ScrollFloat'
import { InstagramIcon } from './icons/InstagramIcon'
import { RESTAURANT } from '../content/restaurant'
import { NAV_LINKS } from '../content/navigation'
import { RESERVATION_PROVIDERS } from '../content/reservations'
import { MENU_CONFIG } from '../content/menu'

const YEAR = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="footer" style={{ backgroundColor: '#140F0C', borderTop: '1px solid rgba(184, 154, 100, 0.15)', overflow: 'hidden' }}>
      {/* Giant Brand Floating Wordmark Effect */}
      <div style={{ paddingTop: '48px', paddingBottom: '16px' }} aria-hidden="true">
        <ScrollFloat text="HESTIIA" />
      </div>

      <div className="container" style={{ paddingBottom: '48px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '40px',
            paddingTop: '32px',
            borderTop: '1px solid rgba(184, 154, 100, 0.12)',
            marginBottom: '48px',
          }}
        >
          {/* Brand Info & Descriptor */}
          <div>
            <span style={{ fontFamily: 'var(--font-serif)', fontSize: '26px', fontWeight: 300, color: 'var(--color-text-inverse)', display: 'block', marginBottom: '12px' }}>
              Hestiia<span style={{ fontSize: '12px', verticalAlign: 'super', color: 'var(--color-brass)' }}>®</span>
            </span>
            <p style={{ fontSize: '13px', lineHeight: 1.7, color: 'rgba(246, 239, 228, 0.65)', maxWidth: '280px', marginBottom: '16px' }}>
              A pure vegetarian culinary sanctuary in Shyam Nagar, Kanpur, celebrating traditional North Indian recipes and Indo-Chinese flavours.
            </p>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '11px',
                fontFamily: 'var(--font-sans)',
                color: 'var(--color-veg)',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}
            >
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--color-veg)' }} />
              Certified Pure Vegetarian
            </span>
          </div>

          {/* Navigation Links */}
          <div>
            <span style={{ display: 'block', fontSize: '11px', fontFamily: 'var(--font-sans)', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-brass)', marginBottom: '16px' }}>
              Navigation
            </span>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {NAV_LINKS.map(link => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    style={{
                      fontSize: '13px',
                      color: 'rgba(246, 239, 228, 0.7)',
                      textDecoration: 'none',
                      transition: 'color 0.2s',
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Reservations & Menus */}
          <div>
            <span style={{ display: 'block', fontSize: '11px', fontFamily: 'var(--font-sans)', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-brass)', marginBottom: '16px' }}>
              Dining & Menus
            </span>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li>
                <a
                  href={MENU_CONFIG.authoritativeMenuUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: '13px', color: 'rgba(246, 239, 228, 0.7)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}
                >
                  <span>Full Menu (Zomato)</span>
                  <ExternalLink size={12} color="var(--color-brass)" />
                </a>
              </li>
              {RESERVATION_PROVIDERS.map(p => (
                <li key={p.id}>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: '13px', color: 'rgba(246, 239, 228, 0.7)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}
                  >
                    <span>{p.label}</span>
                    <ExternalLink size={12} color="var(--color-brass)" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact (NAP) */}
          <div>
            <span style={{ display: 'block', fontSize: '11px', fontFamily: 'var(--font-sans)', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-brass)', marginBottom: '16px' }}>
              Location & Hours
            </span>
            <p style={{ fontSize: '13px', lineHeight: 1.6, color: 'rgba(246, 239, 228, 0.7)', marginBottom: '12px' }}>
              {RESTAURANT.address.fullDisplay}
            </p>
            <a
              href={`tel:${RESTAURANT.phone.e164}`}
              style={{ fontSize: '13px', color: 'var(--color-brass-light)', textDecoration: 'none', display: 'block', marginBottom: '8px' }}
            >
              {RESTAURANT.phone.display}
            </a>
            <p style={{ fontSize: '12px', color: 'rgba(246, 239, 228, 0.45)', margin: 0 }}>
              {RESTAURANT.hours.displayText}
            </p>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Social */}
        <div
          style={{
            paddingTop: '24px',
            borderTop: '1px solid rgba(184, 154, 100, 0.1)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px',
            fontSize: '12px',
            color: 'rgba(246, 239, 228, 0.5)',
          }}
        >
          <p style={{ margin: 0 }}>
            © {YEAR} Hestiia Restaurant. All rights reserved. · Pure Vegetarian Dining · Shyam Nagar, Kanpur
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <a
              href={RESTAURANT.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram profile"
              style={{ color: 'var(--color-brass)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}
            >
              <InstagramIcon size={14} />
              <span>@hestiiarestaurant</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
