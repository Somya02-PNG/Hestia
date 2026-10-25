import PageHero from '../components/PageHero'
import CuisineSection from '../components/CuisineSection'

export default function Cuisines() {
  return (
    <>
      <PageHero
        title="Artisanal Vegetarian"
        accentWord="Cuisines"
        intro="Four distinct culinary traditions crafted purely with fresh produce, heritage spices, and slow simmered recipes."
        currentPage="Cuisines"
      />
      <div style={{ paddingBottom: '48px' }}>
        <CuisineSection />
      </div>
    </>
  )
}
