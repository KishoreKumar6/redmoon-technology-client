import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { FadeInUp, PageTransition } from '../../components/animations/index.jsx'

const categories = ['All', 'Website', 'Mobile App', 'E-Commerce', 'CRM', 'Dashboard']

const projects = [
  { title: 'Anubhuthi Foundation', cat: 'Website', tech: ['React', 'Node.js', 'MongoDB', 'Razorpay'], color: '#4a1a8a', desc: 'Spiritual organization platform with donation system, events, and volunteer management.' },
  { title: 'AquaFlow E-Commerce', cat: 'E-Commerce', tech: ['Next.js', 'Stripe', 'MongoDB'], color: '#1a4a8a', desc: 'Full-featured water products store with inventory, orders, and multi-payment support.' },
  { title: 'DoorMart Delivery App', cat: 'Mobile App', tech: ['Flutter', 'Firebase', 'Maps'], color: '#8a4a1a', desc: 'Multi-role grocery delivery platform with real-time tracking and order management.' },
  { title: 'GreenLeaf CRM', cat: 'CRM', tech: ['React', 'Express', 'MongoDB'], color: '#1a8a4a', desc: 'Lead pipeline, customer tracking, invoice generation, and performance analytics.' },
  { title: 'MediTrack Dashboard', cat: 'Dashboard', tech: ['React', 'Recharts', 'Node.js'], color: '#1a8a8a', desc: 'Healthcare analytics dashboard with real-time patient metrics and reporting.' },
  { title: 'Stellar Agency Site', cat: 'Website', tech: ['Next.js', 'Framer', 'GSAP'], color: '#8a1a4a', desc: 'Premium creative agency website with advanced animations and case studies.' },
  { title: 'Laksh Automations', cat: 'Website', tech: ['React', 'Tailwind', 'Express'], color: '#4a8a1a', desc: 'B2B industrial automation company site with product catalog and enquiry system.' },
  { title: 'FoodieX App', cat: 'Mobile App', tech: ['React Native', 'Redux', 'Firebase'], color: '#8a8a1a', desc: 'Restaurant discovery and food ordering app with real-time order tracking.' },
  { title: 'ShopEasy Store', cat: 'E-Commerce', tech: ['WooCommerce', 'PHP', 'MySQL'], color: '#8a1a1a', desc: 'Fashion e-commerce with advanced filtering, wishlists, and loyalty rewards.' },
]

export default function Portfolio() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? projects : projects.filter(p => p.cat === active)

  return (
    <PageTransition>
      <Helmet>
        <title>Portfolio | Red Moon Technology</title>
        <meta name="description" content="Explore our portfolio of premium websites, mobile apps, e-commerce stores, and CRM systems." />
      </Helmet>

      {/* Hero */}
      <section className="relative pt-36 pb-20 bg-black overflow-hidden">
        <div className="absolute inset-0 bg-hero-radial pointer-events-none" />
        <div className="absolute inset-0 line-pattern opacity-20" />
        <div className="container-custom text-center relative z-10">
          <FadeInUp>
            <span className="eyebrow mb-5 block">Portfolio</span>
            <h1 className="heading-section text-white mb-5">
              Work We're <span className="gradient-text">Proud Of</span>
            </h1>
            <p className="text-white/50 max-w-xl mx-auto text-base leading-relaxed">
              A curated selection of projects that pushed boundaries and delivered exceptional results.
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-black border-b border-white/5 sticky top-20 z-50 backdrop-blur-xl bg-black/80">
        <div className="container-custom flex flex-wrap justify-center gap-2">
          {categories.map(c => (
            <motion.button
              key={c}
              onClick={() => setActive(c)}
              className={`px-5 py-2 rounded-full text-sm font-grotesk font-medium transition-all duration-200 ${
                active === c
                  ? 'bg-red-500 text-white shadow-lg shadow-red-500/30'
                  : 'glass text-white/60 hover:text-white border border-white/10 hover:border-white/20'
              }`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              {c}
            </motion.button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="section-padding bg-black">
        <div className="container-custom">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <AnimatePresence>
              {filtered.map((p) => (
                <motion.div
                  key={p.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.35 }}
                  className="gradient-border overflow-hidden group cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Image area */}
                  <div className="h-52 relative overflow-hidden" style={{ background: `radial-gradient(ellipse at 30% 40%, ${p.color}55, #0a0a0a)` }}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="font-poppins font-black text-5xl" style={{ color: p.color + '33' }}>RM</span>
                    </div>
                    <div className="absolute top-3 left-3">
                      <span className="tag">{p.cat}</span>
                    </div>
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                      <motion.button
                        className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-red-500/30 transition-colors"
                        whileHover={{ scale: 1.1 }}
                      >
                        <ExternalLink size={16} />
                      </motion.button>
                      <motion.button
                        className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-red-500/30 transition-colors"
                        whileHover={{ scale: 1.1 }}
                      >
                        <Github size={16} />
                      </motion.button>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-white font-grotesk font-semibold text-base mb-2 group-hover:text-red-400 transition-colors">{p.title}</h3>
                    <p className="text-white/40 text-xs leading-relaxed mb-4">{p.desc}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {p.tech.map(t => <span key={t} className="text-xs text-white/40 bg-white/5 px-2 py-0.5 rounded-full border border-white/5">{t}</span>)}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  )
}
