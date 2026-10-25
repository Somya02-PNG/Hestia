import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import FlowingMenu, { type FlowingMenuItem } from './reactbits/FlowingMenu'
import { MENU_CONFIG } from '../content/menu'

export default function MenuPreview() {
  const [activeTab, setActiveTab] = useState(MENU_CONFIG.categories[0].id)

  const flowingItems: FlowingMenuItem[] = MENU_CONFIG.categories.map(cat => ({
    id: cat.id,
    title: cat.name,
    category: cat.id,
    description: cat.description,
    highlights: cat.highlights,
    url: cat.verifiedUrl,
  }))

  const currentCategory = MENU_CONFIG.categories.find(c => c.id === activeTab) || MENU_CONFIG.categories[0]

  return (
    <section className="menu-preview-section section" id="menu" aria-labelledby="menu-title">
      <div className="container">
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '24px', marginBottom: '40px' }}>
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
              Curated Selections
            </span>
            <h2
              id="menu-title"
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(32px, 4vw, 54px)',
                fontWeight: 300,
                color: 'var(--color-text-inverse)',
                margin: 0,
              }}
            >
              Taste What Defines Us.
            </h2>
          </div>

          <a
            href={MENU_CONFIG.authoritativeMenuUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 24px',
              backgroundColor: 'var(--color-brass)',
              color: '#1F1A16',
              borderRadius: 'var(--radius-sm)',
              fontFamily: 'var(--font-sans)',
              fontSize: '12px',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              textDecoration: 'none',
            }}
          >
            <span>View Full Menu on Zomato</span>
            <ArrowUpRight size={16} />
          </a>
        </div>

        {/* Cuisine Category Tabs */}
        <div
          role="tablist"
          aria-label="Cuisine Categories"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px',
            marginBottom: '36px',
            borderBottom: '1px solid rgba(184, 154, 100, 0.15)',
            paddingBottom: '16px',
          }}
        >
          {MENU_CONFIG.categories.map(cat => {
            const isActive = activeTab === cat.id

            return (
              <button
                key={cat.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveTab(cat.id)}
                style={{
                  position: 'relative',
                  padding: '10px 20px',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '13px',
                  fontWeight: 500,
                  color: isActive ? 'var(--color-brass)' : 'rgba(246, 239, 228, 0.7)',
                  backgroundColor: isActive ? 'rgba(184, 154, 100, 0.12)' : 'transparent',
                  border: '1px solid',
                  borderColor: isActive ? 'var(--color-brass)' : 'transparent',
                  borderRadius: '24px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                {cat.name.split(' ')[0]}
                {isActive && (
                  <motion.div
                    layoutId="active-menu-tab"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      borderRadius: '24px',
                      border: '1px solid var(--color-brass)',
                      pointerEvents: 'none',
                    }}
                  />
                )}
              </button>
            )
          })}
        </div>

        {/* Selected Category Highlights Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentCategory.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            style={{
              padding: '32px',
              backgroundColor: 'rgba(38, 31, 26, 0.75)',
              borderRadius: '12px',
              border: '1px solid rgba(184, 154, 100, 0.15)',
              marginBottom: '48px',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '16px', marginBottom: '20px' }}>
              <div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '28px', fontWeight: 400, color: 'var(--color-text-inverse)', margin: '0 0 6px' }}>
                  {currentCategory.name}
                </h3>
                <p style={{ margin: 0, fontSize: '14px', color: 'rgba(246, 239, 228, 0.7)' }}>
                  {currentCategory.description}
                </p>
              </div>
              <a
                href={currentCategory.verifiedUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: '12px',
                  fontFamily: 'var(--font-sans)',
                  color: 'var(--color-brass)',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                }}
              >
                <span>Live Menu</span>
                <ArrowUpRight size={14} />
              </a>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {currentCategory.highlights.map((dish, i) => (
                <div
                  key={i}
                  style={{
                    padding: '8px 16px',
                    borderRadius: '20px',
                    backgroundColor: 'rgba(184, 154, 100, 0.08)',
                    border: '1px solid rgba(184, 154, 100, 0.18)',
                    color: 'var(--color-text-inverse)',
                    fontSize: '13px',
                    fontFamily: 'var(--font-sans)',
                  }}
                >
                  {dish}
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* FlowingMenu Category Exploration */}
        <div style={{ marginTop: '32px' }}>
          <h4
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--color-brass)',
              marginBottom: '16px',
            }}
          >
            Explore All Disciplines
          </h4>
          <FlowingMenu items={flowingItems} />
        </div>

        {/* Factual Disclaimer */}
        <p
          style={{
            marginTop: '24px',
            fontSize: '12px',
            color: 'rgba(246, 239, 228, 0.45)',
            fontStyle: 'italic',
            textAlign: 'center',
          }}
        >
          {MENU_CONFIG.disclaimer}
        </p>
      </div>
    </section>
  )
}
