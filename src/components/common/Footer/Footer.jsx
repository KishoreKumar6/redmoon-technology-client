import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaInstagram, FaLinkedin, FaTwitter, FaYoutube, FaFacebook } from 'react-icons/fa'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { useState } from 'react'
import api from '../../../api/axios.js'
import toast from 'react-hot-toast'
import logo from '../../../assets/logo.png'

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Careers', href: '/careers' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
]

const serviceLinks = [
  { name: 'Website Development', href: '/services#web' },
  { name: 'Mobile App Development', href: '/services#mobile' },
  { name: 'Digital Marketing', href: '/services#marketing' },
  { name: 'SEO Optimization', href: '/services#seo' },
  { name: 'E-Commerce', href: '/services#ecom' },
  { name: 'CRM Development', href: '/services#crm' },
  { name: 'UI/UX Design', href: '/services#design' },
  { name: 'WhatsApp Automation', href: '/services#whatsapp' },
]

const socials = [
  { icon: FaInstagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: FaLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: FaTwitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: FaYoutube, href: 'https://youtube.com', label: 'YouTube' },
  { icon: FaFacebook, href: 'https://facebook.com', label: 'Facebook' },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)

  const handleNewsletter = async (e) => {
    e.preventDefault()
    if (!email) return
    setLoading(true)
    try {
      await api.post('/newsletter/subscribe', { email })
      toast.success('Subscribed successfully!')
      setEmail('')
    } catch {
      toast.error('Failed to subscribe. Try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <footer className="relative bg-black border-t border-white/5 overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-red-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom pt-20 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-flex items-center mb-6 group">
              <img
                src={logo}
                alt="Red Moon Technology"
                className="h-16 w-auto object-contain max-w-[220px]"
              />
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Crafting world-class digital experiences that transform businesses and drive growth in the digital age.
            </p>
            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg glass flex items-center justify-center text-white/50 hover:text-red-400 hover:border-red-500/30 border border-white/5 transition-all duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon size={15} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-grotesk font-semibold text-white text-sm tracking-wide mb-5">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.name}>
                  <Link
                    to={l.href}
                    className="text-white/50 hover:text-red-400 text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-3 h-px bg-red-500/0 group-hover:bg-red-500 transition-all duration-200 group-hover:w-4" />
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-grotesk font-semibold text-white text-sm tracking-wide mb-5">Services</h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((l) => (
                <li key={l.name}>
                  <Link
                    to={l.href}
                    className="text-white/50 hover:text-red-400 text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-3 h-px bg-red-500/0 group-hover:bg-red-500 transition-all duration-200 group-hover:w-4" />
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="font-grotesk font-semibold text-white text-sm tracking-wide mb-5">Get In Touch</h4>
            <ul className="space-y-3 mb-6">
              <li>
                <a href="mailto:redmoontechnologyofficial@gmail.com" className="flex items-start gap-3 text-white/50 hover:text-white text-sm transition-colors group">
                  <Mail size={14} className="mt-0.5 text-red-500 shrink-0" />
                  <span className="break-all">redmoontechnologyofficial@gmail.com</span>
                </a>
              </li>
              <li>
                <a href="tel:+919629621359" className="flex items-center gap-3 text-white/50 hover:text-white text-sm transition-colors">
                  <Phone size={14} className="text-red-500 shrink-0" />
                  +91 96296 21359
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-white/50 text-sm">
                  <MapPin size={14} className="mt-0.5 text-red-500 shrink-0" />
                  <span>MBT Road, Navalpure, Ranipet, Tamil Nadu 632401</span>
                </div>
              </li>
            </ul>

            {/* Newsletter */}
            <h4 className="font-grotesk font-semibold text-white text-sm tracking-wide mb-3">Newsletter</h4>
            <form onSubmit={handleNewsletter} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="input-glass text-sm py-2.5 px-4 flex-1"
                required
              />
              <button
                type="submit"
                disabled={loading}
                className="w-10 h-10 rounded-xl bg-red-600 hover:bg-red-500 flex items-center justify-center transition-colors shrink-0"
              >
                {loading ? (
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <Send size={15} className="text-white" />
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="section-divider mb-8" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs font-inter">
            © {new Date().getFullYear()} Red Moon Technology. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-3 md:gap-6">
            <Link to="/admin/login" className="text-white/30 hover:text-white/60 text-xs transition-colors">
              Admin Login
            </Link>
            <Link to="/privacy" className="text-white/30 hover:text-white/60 text-xs transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-white/30 hover:text-white/60 text-xs transition-colors">Terms of Service</Link>
            <Link to="/sitemap.xml" className="text-white/30 hover:text-white/60 text-xs transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
