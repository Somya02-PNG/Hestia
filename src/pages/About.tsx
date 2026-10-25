import PageHero from '../components/PageHero'
import BrandIntro from '../components/BrandIntro'

export default function About() {
  return (
    <>
      <PageHero
        title="Our Vegetarian"
        accentWord="Heritage"
        intro="Founded on authentic North Indian culinary devotion and peaceful hospitality in Shyam Nagar, Kanpur."
        currentPage="Our Story"
      />
      <div style={{ paddingBottom: '48px' }}>
        <BrandIntro />
      </div>
    </>
  )
}
