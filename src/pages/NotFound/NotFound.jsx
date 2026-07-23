import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Home, ArrowLeft } from 'lucide-react'
import { PageTransition } from '../../components/animations/index.jsx'

export default function NotFound() {
  return (
    <PageTransition>
      <section className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-radial pointer-events-none opacity-50" />
        <div className="absolute inset-0 line-pattern opacity-20" />
        <div className="container-custom text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Animated 404 */}
            <div className="relative mb-8 inline-block">
              <div className="font-poppins font-black text-[8rem] md:text-[12rem] leading-none text-transparent"
                style={{ WebkitTextStroke: '1px rgba(255,0,0,0.2)' }}>
                404
              </div>
              <motion.div
                className="absolute inset-0 font-poppins font-black text-[8rem] md:text-[12rem] leading-none gradient-text"
                animate={{ opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                404
              </motion.div>
            </div>

            <h1 className="text-white font-poppins font-bold text-3xl mb-4">Page Not Found</h1>
            <p className="text-white/50 text-base max-w-md mx-auto mb-10 leading-relaxed">
              The page you're looking for has drifted into deep space. Let's get you back on track.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/" className="btn-primary">
                <span className="relative z-10 flex items-center gap-2">
                  <Home size={16} /> Back to Home
                </span>
              </Link>
              <button onClick={() => history.back()} className="btn-secondary">
                <ArrowLeft size={16} /> Go Back
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  )
}
