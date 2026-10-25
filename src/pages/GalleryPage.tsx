import PageShell from '../components/layout/PageShell'
import FoodGallery from '../components/FoodGallery'

export default function GalleryPage() {
  return (
    <PageShell
      title="Sanctuary Ambience & Food Gallery"
      eyebrow="Pure Vegetarian Aesthetics · Kanpur"
      description="Glimpses into our warm dining spaces, artisanal culinary craftsmanship, and serene atmosphere in Shyam Nagar."
    >
      <div style={{ marginTop: '-40px' }}>
        <FoodGallery />
      </div>
    </PageShell>
  )
}
