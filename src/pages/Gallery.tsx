import PageHero from '../components/PageHero'
import FoodGallery from '../components/FoodGallery'

export default function Gallery() {
  return (
    <>
      <PageHero
        title="Sanctuary Visual"
        accentWord="Gallery"
        intro="Atmospheric glimpses into our warm dining halls, artisanal plates, and family tablescapes."
        currentPage="Gallery"
      />
      <div style={{ paddingBottom: '48px' }}>
        <FoodGallery />
      </div>
    </>
  )
}
