import { useState, useCallback, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { smoothScroller } from './lib/lenis'
import ScrollProgressBar from './components/ui/ScrollProgressBar'
import FloatingActionBar from './components/ui/FloatingActionBar'
import BlobCursor from './components/reactbits/BlobCursor'
import ScrollToTop from './components/layout/ScrollToTop'

import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import MenuPage from './pages/MenuPage'
import DishDetailPage from './pages/DishDetailPage'
import GalleryPage from './pages/GalleryPage'
import ExperiencePage from './pages/ExperiencePage'
import OffersPage from './pages/OffersPage'
import ReviewsPage from './pages/ReviewsPage'
import PartyPage from './pages/PartyPage'
import ContactPage from './pages/ContactPage'
import CartPage from './pages/CartPage'
import CheckoutPage from './pages/CheckoutPage'
import OrderSuccessPage from './pages/OrderSuccessPage'
import TermsPage from './pages/TermsPage'
import PrivacyPage from './pages/PrivacyPage'
import RefundPolicyPage from './pages/RefundPolicyPage'
import DeliveryPolicyPage from './pages/DeliveryPolicyPage'
import NotFoundPage from './pages/NotFoundPage'

export default function App() {
  const [ready, setReady] = useState(false)

  const onPreloaderComplete = useCallback(() => {
    setReady(true)
  }, [])

  useEffect(() => {
    // Initialize Lenis smooth scroll provider synced with GSAP
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
    <BrowserRouter>
      {/* Scroll-to-top and hash navigation sync on route change */}
      <ScrollToTop />

      {/* Reading Progress Indicator */}
      <ScrollProgressBar />

      {/* Fluid Cursor Accent (Desktop) */}
      <BlobCursor />

      {/* Session-cached Curtain Split Preloader */}
      <AnimatePresence mode="wait">
        {!ready && (
          <Preloader key="preloader" onComplete={onPreloaderComplete} />
        )}
      </AnimatePresence>

      {/* Main Experience Shell */}
      <div className={ready ? 'site-ready' : 'site-loading'}>
        <a href="#main-content" className="sr-only" style={{ position: 'absolute', zIndex: 9999 }}>
          Skip to main content
        </a>

        {/* Shared Layout: Sticky Header Navigation */}
        <Navbar />

        {/* Main Content Router */}
        <main id="main-content">
          <Routes>
            <Route path="/" element={<HomePage isReady={ready} />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/menu/:slug" element={<DishDetailPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/offers" element={<OffersPage />} />
            <Route path="/reviews" element={<ReviewsPage />} />
            <Route path="/party" element={<PartyPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/order-success" element={<OrderSuccessPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/refund-policy" element={<RefundPolicyPage />} />
            <Route path="/delivery-policy" element={<DeliveryPolicyPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        {/* Shared Layout: Footer */}
        <Footer />

        {/* Shared Layout: Mobile Floating Action Bar */}
        <FloatingActionBar />
      </div>
    </BrowserRouter>
  )
}
