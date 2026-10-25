import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Tag, ArrowRight, Copy, Check } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { OFFERS_CONFIG } from '../../content/offers'
import ShinyText from '../reactbits/ShinyText'
import RotatingText from '../reactbits/RotatingText'
import CircularText from '../reactbits/CircularText'
import './OffersBand.css'

export default function OffersBand() {
  const [copied, setCopied] = useState(false)

  // Render ONLY when offers.enabled and items exist; otherwise render nothing
  if (!OFFERS_CONFIG.enabled || !OFFERS_CONFIG.items || OFFERS_CONFIG.items.length === 0) {
    return null
  }

  const offerTitles = OFFERS_CONFIG.items.map(o => o.title)
  const primaryOffer = OFFERS_CONFIG.items[0]

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <section className="container">
      <motion.div
        className="offers-band"
        initial={{ opacity: 0, x: -50, clipPath: 'inset(0 100% 0 0)' }}
        whileInView={{ opacity: 1, x: 0, clipPath: 'inset(0 0% 0 0)' }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        aria-label="Exclusive Dining Offers"
      >
        {/* Animated slow conic gradient border */}
        <div className="offers-conic-border" aria-hidden="true" />

        <div className="offers-band-inner">
          {/* Left: Icon + ShinyText Headline + RotatingText Titles */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flex: 1 }}>
            <div
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '8px',
                backgroundColor: 'rgba(184, 154, 100, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-brass, #B89A64)',
                flexShrink: 0,
              }}
            >
              <Tag size={20} />
            </div>

            <div>
              <div style={{ marginBottom: '4px' }}>
                <ShinyText
                  text="LIMITED CELEBRATION OFFER"
                  speed={4}
                  color="var(--color-brass, #B89A64)"
                  shimmerColor="#FFF4DD"
                />
              </div>

              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', color: 'var(--color-text-inverse, #F6EFE4)' }}>
                {offerTitles.length > 1 ? (
                  <RotatingText texts={offerTitles} rotationInterval={3000} />
                ) : (
                  <span>{primaryOffer.title}</span>
                )}
              </div>

              <p style={{ margin: '4px 0 0 0', fontSize: '13px', color: 'rgba(246, 239, 228, 0.72)' }}>
                {primaryOffer.description}
              </p>
            </div>
          </div>

          {/* Center: CircularText badge rotating slowly (desktop and tablet, hidden on small mobile) */}
          <div className="offers-circular-badge">
            <CircularText
              text="HESTIIA • EXCLUSIVE OFFER • "
              spinDuration={24}
              onHover="speedUp"
              radius={38}
            />
          </div>

          {/* Right: Coupon Code Button with copy micro-animation + View Offer link */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
            {primaryOffer.code && (
              <motion.button
                type="button"
                className="offers-coupon-btn"
                onClick={() => handleCopyCode(primaryOffer.code!)}
                whileTap={{ scale: 0.95 }}
                title="Click to copy coupon code"
              >
                <AnimatePresence mode="wait">
                  {copied ? (
                    <motion.span
                      key="check"
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.5, opacity: 0 }}
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', color: '#4ADE80' }}
                    >
                      <Check size={14} /> Copied!
                    </motion.span>
                  ) : (
                    <motion.span
                      key="copy"
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.5, opacity: 0 }}
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                    >
                      <Copy size={13} /> {primaryOffer.code}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
            )}

            <motion.div whileHover={{ x: 3 }} whileTap={{ scale: 0.96 }}>
              <Link
                to="/offers"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '9px 18px',
                  backgroundColor: 'var(--color-brass, #B89A64)',
                  color: '#1F1A16',
                  borderRadius: '4px',
                  fontSize: '12px',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  textDecoration: 'none',
                }}
              >
                <span>View Offer</span>
                <ArrowRight size={13} />
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
