import { useParams, Link } from 'react-router-dom'
import PageShell from '../components/layout/PageShell'
import { DISHES, MENU_CATEGORIES } from '../content/menu'
import { Sparkles, ArrowLeft } from 'lucide-react'

export default function DishDetailPage() {
  const { slug } = useParams<{ slug: string }>()

  const dish = DISHES.find(d => d.slug === slug || d.id === slug)
  const category = dish ? MENU_CATEGORIES.find(c => c.id === dish.categoryId) : null

  if (!dish) {
    return (
      <PageShell
        title="Dish Not Found"
        eyebrow="Pure Vegetarian Menu · Kanpur"
        description="The requested culinary creation is not currently listed in our authentic 193-dish menu."
      >
        <div style={{ textAlign: 'center', padding: '40px 20px' }}>
          <p style={{ color: 'rgba(246, 239, 228, 0.7)', marginBottom: '24px' }}>
            Browse all 193 pure vegetarian dishes arranged across 21 culinary categories.
          </p>
          <Link
            to="/#menu"
            style={{
              padding: '12px 24px',
              backgroundColor: 'var(--color-brass)',
              color: '#1F1A16',
              borderRadius: '4px',
              fontWeight: 600,
              fontSize: '13px',
              textDecoration: 'none',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <ArrowLeft size={16} />
            <span>Return to Menu</span>
          </Link>
        </div>
      </PageShell>
    )
  }

  const imageSrc = dish.image?.src || category?.fallbackImage.src
  const imageSrcSmall = dish.image?.srcSmall || category?.fallbackImage.srcSmall

  return (
    <PageShell
      title={dish.name}
      eyebrow={`${category?.name || 'Culinary Speciality'} · Pure Vegetarian`}
      description={dish.description}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '36px',
          alignItems: 'start',
          maxWidth: '900px',
        }}
      >
        {/* Dish Image */}
        {imageSrcSmall && (
          <div
            style={{
              borderRadius: '12px',
              overflow: 'hidden',
              border: '1px solid rgba(184, 154, 100, 0.25)',
              backgroundColor: '#16120F',
            }}
          >
            <img
              src={imageSrcSmall}
              srcSet={`${imageSrcSmall} 480w, ${imageSrc} 1200w`}
              sizes="(max-width: 640px) 100vw, 450px"
              alt={dish.name}
              style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
            />
          </div>
        )}

        {/* Dish Specifications */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <span
              style={{
                fontSize: '28px',
                fontFamily: 'var(--font-sans)',
                fontWeight: 700,
                color: 'var(--color-brass)',
              }}
            >
              ₹{dish.price}
            </span>
            {dish.portion && (
              <span
                style={{
                  fontSize: '13px',
                  color: 'rgba(246, 239, 228, 0.8)',
                  backgroundColor: 'rgba(38, 31, 26, 0.8)',
                  padding: '4px 10px',
                  borderRadius: '4px',
                  border: '1px solid rgba(184, 154, 100, 0.2)',
                }}
              >
                {dish.portion}
              </span>
            )}
            {dish.popular && (
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  fontSize: '11px',
                  fontWeight: 700,
                  color: '#1F1A16',
                  backgroundColor: 'var(--color-brass)',
                  padding: '4px 10px',
                  borderRadius: '12px',
                }}
              >
                <Sparkles size={12} />
                Popular Signature
              </span>
            )}
          </div>

          <p style={{ color: 'rgba(246, 239, 228, 0.8)', lineHeight: 1.7, margin: 0 }}>
            {dish.detail?.story || dish.description}
          </p>

          {dish.detail?.pairsWith && dish.detail.pairsWith.length > 0 && (
            <div
              style={{
                paddingTop: '16px',
                borderTop: '1px solid rgba(184, 154, 100, 0.15)',
                fontSize: '13px',
                color: 'rgba(196, 180, 154, 0.9)',
              }}
            >
              <strong style={{ color: 'var(--color-brass)' }}>Pairs With: </strong>
              <span>{dish.detail.pairsWith.join(', ')}</span>
            </div>
          )}

          <div style={{ paddingTop: '16px' }}>
            <Link
              to="/#menu"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 24px',
                backgroundColor: 'var(--color-brass)',
                color: '#1F1A16',
                borderRadius: '4px',
                fontSize: '12px',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                textDecoration: 'none',
              }}
            >
              <ArrowLeft size={14} />
              <span>Explore More Dishes</span>
            </Link>
          </div>
        </div>
      </div>
    </PageShell>
  )
}
