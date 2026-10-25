import PageHero from '../components/PageHero'
import { RESTAURANT } from '../content/restaurant'

export default function Terms() {
  return (
    <>
      <PageHero
        title="Terms &"
        accentWord="Conditions"
        intro="General parameters governing dining reservations, takeaway, and digital services at Hestiia Restaurant."
        currentPage="Terms"
      />

      <div className="container" style={{ padding: '48px 0 80px' }}>
        <div style={{ maxWidth: '800px', display: 'flex', flexDirection: 'column', gap: '24px', fontSize: '14px', lineHeight: 1.8, color: 'rgba(246, 239, 228, 0.78)' }}>
          {/* TODO: Legal policy refinement */}
          <section>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '22px', color: 'var(--color-brass)', marginBottom: '8px' }}>
              1. Pure Vegetarian Sanctuary
            </h2>
            <p>
              Hestiia operates strictly as a 100% pure vegetarian dining establishment. All dishes, ingredients, gravies, and kitchen equipment are completely free of meat, fish, seafood, and eggs.
            </p>
          </section>

          <section>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '22px', color: 'var(--color-brass)', marginBottom: '8px' }}>
              2. Reservations & Group Dining
            </h2>
            <p>
              Table reservations made via our certified partners (District, Zomato, EazyDiner) or by phone ({RESTAURANT.phone.display}) are held for up to 15 minutes past the reserved schedule.
            </p>
          </section>

          <section>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '22px', color: 'var(--color-brass)', marginBottom: '8px' }}>
              3. Pricing & Taxes
            </h2>
            <p>
              All listed menu prices are in Indian Rupees (INR) and subject to statutory Goods and Services Tax (GST).
            </p>
          </section>
        </div>
      </div>
    </>
  )
}
