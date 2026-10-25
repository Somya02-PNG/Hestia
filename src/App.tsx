import { useState, useCallback, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { smoothScroller } from './lib/lenis'
import ScrollProgressBar from './components/ui/ScrollProgressBar'
import FloatingActionBar from './components/ui/FloatingActionBar'
import BlobCursor from './components/reactbits/BlobCursor'

import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MarqueeStrip from './components/MarqueeStrip'
import BrandIntro from './components/BrandIntro'
import CuisineSection from './components/CuisineSection'
import FoodGallery from './components/FoodGallery'
import DiningExperience from './components/DiningExperience'
import MenuPreview from './components/MenuPreview'
import Reviews from './components/Reviews'
import ReservationSection from './components/ReservationSection'
import Footer from './components/Footer'

export default function App() {
  const [ready, setReady] = useState(false)

  const onPreloaderComplete = useCallback(() => {
    setReady(true)
  }, [])

  useEffect(() => {
    // Initialize Lenis smooth scroll synced with GSAP
    smoothScroller.init()

    return () => {
      smoothScroller.destroy()
    }
  }, [])

  useEffect(() => {
    if (ready) {
      ScrollTrigger.refresh()
    }
  }, [ready])

  return (
    <>
      {/* Scroll Reading Progress Bar */}
      <ScrollProgressBar />

      {/* Desktop Custom Fluid Cursor */}
      <BlobCursor />

      {/* Preloader with Curtain Split Reveal (< 1.5s, session-cached) */}
      <AnimatePresence mode="wait">
        {!ready && (
          <Preloader key="preloader" onComplete={onPreloaderComplete} />
        )}
      </AnimatePresence>

      {/* Main Experience */}
      <div className={ready ? 'site-ready' : 'site-loading'}>
        <a href="#main-content" className="sr-only" style={{ position: 'absolute', zIndex: 9999 }}>
          Skip to main content
        </a>

        {/* Sticky Header Navigation with Magnet Button */}
        <Navbar />

        <main id="main-content">
          {/* SEC-003: Hero with BlurText & Scale Parallax */}
          <Hero isReady={ready} />

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
        </main>

        {/* SEC-011: Footer with ScrollFloat & NAP */}
        <Footer />

        {/* Mobile Floating Action Bar (Call / Directions / Reserve) */}
        <FloatingActionBar />
      </div>
    </>
  )
}
