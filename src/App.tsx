import { useState, useCallback, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { smoothScroller } from './lib/lenis'
import Preloader from './components/Preloader'
import MainLayout from './layouts/MainLayout'

import Home from './pages/Home'
import About from './pages/About'
import Cuisines from './pages/Cuisines'
import Gallery from './pages/Gallery'
import Experience from './pages/Experience'
import Menu from './pages/Menu'
import DishDetail from './pages/DishDetail'
import Offers from './pages/Offers'
import Reviews from './pages/Reviews'
import Party from './pages/Party'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import OrderSuccess from './pages/OrderSuccess'
import Terms from './pages/Terms'
import Privacy from './pages/Privacy'
import RefundPolicy from './pages/RefundPolicy'
import DeliveryPolicy from './pages/DeliveryPolicy'
import NotFound from './pages/NotFound'

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
      {/* Session-cached Curtain Split Preloader (< 1.5s) */}
      <AnimatePresence mode="wait">
        {!ready && (
          <Preloader key="preloader" onComplete={onPreloaderComplete} />
        )}
      </AnimatePresence>

      {/* Main Experience Shell */}
      <div className={ready ? 'site-ready' : 'site-loading'}>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home isReady={ready} />} />
            <Route path="/about" element={<About />} />
            <Route path="/cuisines" element={<Cuisines />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/menu/:slug" element={<DishDetail />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/party" element={<Party />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/order-success" element={<OrderSuccess />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/refund-policy" element={<RefundPolicy />} />
            <Route path="/delivery-policy" element={<DeliveryPolicy />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}
