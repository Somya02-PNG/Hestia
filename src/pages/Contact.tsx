import PageHero from '../components/PageHero'
import ReservationSection from '../components/ReservationSection'

export default function Contact() {
  return (
    <>
      <PageHero
        title="Visit & Connect with"
        accentWord="Hestiia"
        intro="Find our sanctuary in Shyam Nagar, Kanpur, reserve tables through official platforms, or call us directly."
        currentPage="Visit & Reserve"
      />
      <div style={{ paddingBottom: '48px' }}>
        <ReservationSection />
      </div>
    </>
  )
}
