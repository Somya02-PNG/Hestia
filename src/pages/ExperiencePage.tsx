import PageShell from '../components/layout/PageShell'
import DiningExperience from '../components/DiningExperience'

export default function ExperiencePage() {
  return (
    <PageShell
      title="The Dining Experience"
      eyebrow="Sanctuary Atmosphere · Kanpur"
      description="Crafted hospitality, acoustic tranquility, and culinary attention to detail for families and private gatherings."
    >
      <div style={{ marginTop: '-40px' }}>
        <DiningExperience />
      </div>
    </PageShell>
  )
}
