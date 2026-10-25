import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowUpRight, Phone } from 'lucide-react'
import Magnet from './reactbits/Magnet'
import { NAV_LINKS } from '../content/navigation'
import { RESTAURANT } from '../content/restaurant'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)

      // Active section spy
      const sections = NAV_LINKS.map(link => document.querySelector(link.href) as HTMLElement).filter(Boolean)
      const scrollPos = window.scrollY + 200

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i]
        if (sec && sec.offsetTop <= scrollPos) {
          setActiveSection(sec.id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll and listen for Escape key when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.classList.add('nav-open')
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setMobileOpen(false)
      }
      window.addEventListener('keydown', handleKeyDown)
      return () => {
        document.body.classList.remove('nav-open')
        window.removeEventListener('keydown', handleKeyDown)
      }
    } else {
      document.body.classList.remove('nav-open')
    }
  }, [mobileOpen])

  return (
    <>
      <header
        className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          transition: 'background-color 0.4s ease, border-color 0.4s ease, backdrop-filter 0.4s ease',
          backgroundColor: scrolled ? 'rgba(31, 26, 22, 0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(184, 154, 100, 0.15)' : '1px solid transparent',
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 'var(--header-height)' }}>
          {/* Logo — flex-shrink 0 so it never gets squeezed */}
          <a href="#home" className="navbar__logo" aria-label="Hestiia Restaurant Home" style={{ flexShrink: 0 }}>
            <span style={{ fontFamily: 'var(--font-serif)', fontSize: '26px', fontWeight: 300, letterSpacing: '0.04em', color: 'var(--color-text-inverse)' }}>
              Hestiia<span style={{ fontSize: '12px', verticalAlign: 'super', color: 'var(--color-brass)' }}>®</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="navbar__links" aria-label="Primary Navigation">
            <ul style={{ display: 'flex', alignItems: 'center', gap: '32px', listStyle: 'none', margin: 0, padding: 0 }}>
              {NAV_LINKS.map(link => {
                const isActive = activeSection === link.id
                return (
                  <li key={link.id}>
                    <a
                      href={link.href}
                      className={`navbar__link ${isActive ? 'navbar__link--active' : ''}`}
                      style={{
                        position: 'relative',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '13px',
                        fontWeight: 500,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        color: isActive ? 'var(--color-brass)' : 'rgba(246, 239, 228, 0.8)',
                        textDecoration: 'none',
                        transition: 'color 0.2s ease',
                      }}
                    >
                      {link.label}
                      {isActive && (
                        <motion.div
                          layoutId="nav-active-pill"
                          style={{
                            position: 'absolute',
                            bottom: '-4px',
                            left: 0,
                            right: 0,
                            height: '1px',
                            backgroundColor: 'var(--color-brass)',
                          }}
                        />
                      )}
                    </a>
                  </li>
                )
              })}
            </ul>
          </nav>

          {/* Desktop CTA with Magnet */}
          <div className="navbar__action" style={{ display: 'flex', alignItems: 'center', gap: '16px', flexShrink: 0 }}>
            <Magnet strength={0.25} padding={30}>
              <a
                href="#visit"
                className="btn btn-primary"
                id="nav-reserve-btn"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 24px',
                  backgroundColor: 'var(--color-brass)',
                  color: '#1F1A16',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '12px',
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  borderRadius: 'var(--radius-sm)',
                  textDecoration: 'none',
                  transition: 'background-color 0.2s ease, transform 0.2s ease',
                }}
              >
                Reserve a Table
              </a>
            </Magnet>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="navbar__hamburger"
              aria-label={mobileOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileOpen}
              style={{
                display: 'none',
                background: 'none',
                border: 'none',
                color: 'var(--color-text-inverse)',
                padding: '8px',
                cursor: 'pointer',
              }}
            >
              {mobileOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 99,
              backgroundColor: '#1F1A16',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: '100px 24px 48px',
            }}
          >
            <nav aria-label="Mobile Navigation">
              <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                {NAV_LINKS.map((link, index) => (
                  <motion.li
                    key={link.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 * index, duration: 0.35 }}
                    style={{ marginBottom: '24px' }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: 'clamp(38px, 9vw, 54px)',
                        fontWeight: 300,
                        fontStyle: 'italic',
                        textTransform: 'lowercase',
                        color: 'var(--color-text-inverse)',
                        textDecoration: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight size={24} color="var(--color-brass)" />
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>

            {/* Mobile Drawer Bottom Actions */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <a
                href="#visit"
                onClick={() => setMobileOpen(false)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '16px',
                  backgroundColor: 'var(--color-brass)',
                  color: '#1F1A16',
                  borderRadius: '6px',
                  fontSize: '14px',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                }}
              >
                Reserve a Table
              </a>

              <a
                href={`tel:${RESTAURANT.phone.e164}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  padding: '14px',
                  border: '1px solid rgba(184, 154, 100, 0.3)',
                  color: 'var(--color-text-inverse)',
                  borderRadius: '6px',
                  fontSize: '13px',
                  fontFamily: 'var(--font-sans)',
                  textDecoration: 'none',
                }}
              >
                <Phone size={16} color="var(--color-brass)" />
                <span>Call {RESTAURANT.phone.display}</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
