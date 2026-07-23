import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle } from 'lucide-react'
import { FadeInUp } from '../../../components/animations/index.jsx'

export default function ContactCTA() {
  return (
    <section className="section-padding bg-black relative overflow-hidden">
      {/* Large glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[700px] h-[400px] bg-red-500/8 rounded-full blur-3xl" />
      </div>
      <div className="container-custom relative z-10">
        <FadeInUp>
          <div className="gradient-border rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute inset-0 hex-pattern opacity-30" />
            <div className="relative z-10">
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-red-400 text-xs font-grotesk font-semibold mb-8"
              >
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                Available for New Projects
              </motion.div>
              <h2 className="heading-section text-white mb-5">
                Ready to Build Something <span className="gradient-text">Extraordinary?</span>
              </h2>
              <p className="text-white/50 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
                Let's talk about your vision. We'll turn it into a digital product that sets you apart from the competition.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact" className="btn-primary text-base group">
                  <span className="relative z-10 flex items-center gap-2">
                    Start a Project <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                <a href="https://wa.me/919629621359" target="_blank" rel="noopener noreferrer" className="btn-secondary text-base">
                  <MessageCircle size={16} className="text-green-400" /> Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </FadeInUp>
      </div>
    </section>
  )
}
