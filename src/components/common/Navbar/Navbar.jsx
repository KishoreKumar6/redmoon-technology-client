import { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'
import logo from '../../../assets/logo.png'

const services = [
  { name: 'Website Development', href: '/services#web', icon: '🌐' },
  { name: 'Mobile App Development', href: '/services#mobile', icon: '📱' },
  { name: 'Digital Marketing', href: '/services#marketing', icon: '📣' },
  { name: 'SEO Optimization', href: '/services#seo', icon: '🔍' },
  { name: 'E-Commerce Solutions', href: '/services#ecom', icon: '🛒' },
  { name: 'CRM Development', href: '/services#crm', icon: '📊' },
  { name: 'UI/UX Design', href: '/services#design', icon: '🎨' },
  { name: 'WhatsApp Automation', href: '/services#whatsapp', icon: '💬' },
]

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services', hasMega: true },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Blog', href: '/blog' },
  { name: 'Careers', href: '/careers' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [megaOpen, setMegaOpen] = useState(false)
  const location = useLocation()
  const megaRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setMegaOpen(false)
  }, [location])

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-[9000] transition-all duration-500"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <nav
        className={`w-full transition-all duration-500 ${
          scrolled
            ? 'bg-black/80 backdrop-blur-2xl border-b border-white/5 shadow-2xl shadow-black/50'
            : 'bg-transparent'
        }`}
      >
        <div className="container-custom flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={logo}
              alt="Red Moon Technology"
              className="h-10 w-auto object-contain max-w-[140px] sm:max-w-[160px]"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.hasMega ? (
                <div
                  key={link.name}
                  className="relative"
                  ref={megaRef}
                  onMouseEnter={() => setMegaOpen(true)}
                  onMouseLeave={() => setMegaOpen(false)}
                >
                  <button className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium text-white/70 hover:text-white hover:bg-white/5 transition-all duration-200">
                    {link.name}
                    <motion.span animate={{ rotate: megaOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                      <ChevronDown size={14} />
                    </motion.span>
                  </button>
                  <AnimatePresence>
                    {megaOpen && (
                      <motion.div
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[480px] glass rounded-2xl p-5 shadow-2xl shadow-black/60"
                        initial={{ opacity: 0, y: 8, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.97 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="text-xs text-white/40 uppercase tracking-widest mb-3 font-grotesk px-1">
                          Our Services
                        </div>
                        <div className="grid grid-cols-2 gap-1">
                          {services.map((s) => (
                            <Link
                              key={s.name}
                              to={s.href}
                              className="flex items-center gap-3 p-3 rounded-xl hover:bg-red-500/10 hover:border-red-500/20 border border-transparent transition-all duration-200 group"
                            >
                              <span className="text-lg">{s.icon}</span>
                              <span className="text-sm text-white/70 group-hover:text-white transition-colors">
                                {s.name}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <NavLink
                  key={link.name}
                  to={link.href}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? 'text-red-400 bg-red-500/10'
                        : 'text-white/70 hover:text-white hover:bg-white/5'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              )
            )}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link to="/contact" className="btn-primary text-sm px-6 py-2.5">
              <span className="relative z-10">Get Started</span>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 rounded-lg text-white/70 hover:text-white hover:bg-white/5 transition-all"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {mobileOpen ? (
                <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <X size={22} />
                </motion.span>
              ) : (
                <motion.span key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <Menu size={22} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="lg:hidden bg-black/95 backdrop-blur-2xl border-b border-white/5"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <div className="container-custom py-6 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <NavLink
                    to={link.href}
                    className={({ isActive }) =>
                      `block px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                        isActive ? 'text-red-400 bg-red-500/10' : 'text-white/70 hover:text-white hover:bg-white/5'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </motion.div>
              ))}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }} className="pt-3">
                <Link to="/contact" className="btn-primary w-full text-sm text-center">
                  <span className="relative z-10">Get Started</span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
