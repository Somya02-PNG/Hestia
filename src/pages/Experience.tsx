import PageHero from '../components/PageHero'
import DiningExperience from '../components/DiningExperience'

export default function Experience() {
  return (
    <>
      <PageHero
        title="The Dining"
        accentWord="Experience"
        intro="Thoughtful hospitality, calm acoustics, and attentive service for everyday meals and milestone celebrations."
        currentPage="Experience"
      />
      <div style={{ paddingBottom: '48px' }}>
        <DiningExperience />
      </div>
    </>
  )
}
