import { Link } from 'react-router-dom'
import { OFFERS_CONFIG } from '../../content/offers'
import { Tag, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export default function OffersBand() {
  if (!OFFERS_CONFIG.enabled || !OFFERS_CONFIG.items || OFFERS_CONFIG.items.length === 0) {
    return null
  }

  const primaryOffer = OFFERS_CONFIG.items[0]

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="offers-band"
      style={{
        backgroundColor: '#261F1A',
        borderTop: '1px solid var(--color-brass)',
        borderBottom: '1px solid var(--color-brass)',
        padding: '24px 0',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Tag size={20} color="var(--color-brass)" />
          <div>
            <strong style={{ fontFamily: 'var(--font-serif)', fontSize: '18px', color: 'var(--color-text-inverse)' }}>
              {primaryOffer.title}
            </strong>
            <p style={{ margin: 0, fontSize: '13px', color: 'rgba(246, 239, 228, 0.75)' }}>
              {primaryOffer.description}
            </p>
          </div>
        </div>

        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.96 }}>
          <Link
            to="/offers"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '8px 16px',
              backgroundColor: 'var(--color-brass)',
              color: '#1F1A16',
              borderRadius: '4px',
              fontSize: '12px',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              textDecoration: 'none',
            }}
          >
            <span>View Offer</span>
            <ArrowRight size={13} />
          </Link>
        </motion.div>
      </div>
    </motion.section>
  )
}
