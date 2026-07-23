import { useEffect, lazy, Suspense } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Lenis from 'lenis'
import { Toaster } from 'react-hot-toast'
import { AnimatePresence } from 'framer-motion'
import logo from './assets/logo.png'

import Navbar from './components/common/Navbar/Navbar.jsx'
import Footer from './components/common/Footer/Footer.jsx'
import CustomCursor from './components/common/Cursor/CustomCursor.jsx'
import ScrollProgress from './components/common/ScrollProgress/ScrollProgress.jsx'
import ScrollToTop from './components/common/ScrollToTop/ScrollToTop.jsx'
import PageLoader from './components/common/Loader/PageLoader.jsx'
import BackToTop from './components/common/Buttons/BackToTop.jsx'
import WhatsAppButton from './components/common/Buttons/WhatsAppButton.jsx'
import AdminLayout from './pages/Admin/AdminLayout.jsx'
import ProtectedRoute from './components/common/ProtectedRoute.jsx'
import { AuthProvider } from './context/AuthContext.jsx'

const Home = lazy(() => import('./pages/Home/Home.jsx'))
const About = lazy(() => import('./pages/About/About.jsx'))
const Services = lazy(() => import('./pages/Services/Services.jsx'))
const Portfolio = lazy(() => import('./pages/Portfolio/Portfolio.jsx'))
const Pricing = lazy(() => import('./pages/Pricing/Pricing.jsx'))
const Careers = lazy(() => import('./pages/Careers/Careers.jsx'))
const Blog = lazy(() => import('./pages/Blog/Blog.jsx'))
const BlogSingle = lazy(() => import('./pages/Blog/BlogSingle.jsx'))
const Contact = lazy(() => import('./pages/Contact/Contact.jsx'))
const NotFound = lazy(() => import('./pages/NotFound/NotFound.jsx'))
const AdminDashboard = lazy(() => import('./pages/Admin/Dashboard.jsx'))
const AdminLogin = lazy(() => import('./pages/Admin/AdminLogin.jsx'))

function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <BackToTop />
      <WhatsAppButton />
    </>
  )
}

function App() {
  const location = useLocation()
  const isAdmin = location.pathname.startsWith('/admin')

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => lenis.destroy()
  }, [])

  useEffect(() => {
    let link = document.querySelector("link[rel~='icon']")

    if (!link) {
      link = document.createElement('link')
      link.rel = 'icon'
      document.head.appendChild(link)
    }

    link.type = 'image/png'
    link.href = logo
  }, [])

  return (
    <AuthProvider>
      <CustomCursor />
      <ScrollProgress />
      <ScrollToTop />
      <PageLoader />
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: '#111111',
            color: '#ffffff',
            border: '1px solid rgba(255,0,0,0.2)',
            borderRadius: '12px',
          },
        }}
      />
      <AnimatePresence mode="wait">
        <Suspense fallback={<div className="min-h-screen bg-black" />}>
          {isAdmin ? (
            <Routes location={location} key={location.pathname}>
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route
                path="/admin/*"
                element={
                  <ProtectedRoute>
                    <AdminLayout />
                  </ProtectedRoute>
                }
              />
            </Routes>
          ) : (
            <MainLayout>
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogSingle />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </MainLayout>
          )}
        </Suspense>
      </AnimatePresence>
    </AuthProvider>
  )
}

export default App
