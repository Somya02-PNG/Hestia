import Hero from '../components/Hero'
import MarqueeStrip from '../components/MarqueeStrip'
import BrandIntro from '../components/BrandIntro'
import CuisineSection from '../components/CuisineSection'
import FoodGallery from '../components/FoodGallery'
import DiningExperience from '../components/DiningExperience'
import MenuPreview from '../components/MenuPreview'
import Reviews from '../components/Reviews'
import ReservationSection from '../components/ReservationSection'

interface HomePageProps {
  isReady: boolean
}

export default function HomePage({ isReady }: HomePageProps) {
  return (
    <>
      {/* SEC-003: Hero with BlurText & Scale Parallax */}
      <Hero isReady={isReady} />

      {/* Marquee Strip with ScrollVelocity */}
      <MarqueeStrip />

      {/* SEC-004: Our Story with ScrollReveal & Image Reveal */}
      <BrandIntro />

      {/* SEC-005: Cuisines with GSAP Desktop Pin & TiltedCard */}
      <CuisineSection />

      {/* SEC-006: Gallery with Framer Motion Lightbox */}
      <FoodGallery />

      {/* SEC-007: Dining Experience with SpotlightCard */}
      <DiningExperience />

      {/* SEC-008: Menu Preview with FlowingMenu & Category Tabs */}
      <MenuPreview />

      {/* SEC-009: Reviews with Verified Platform Links */}
      <Reviews />

      {/* SEC-010: Reservations & Contact with ClickSpark */}
      <ReservationSection />
    </>
  )
}
