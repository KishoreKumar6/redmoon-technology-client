import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import logo from '../../../assets/logo.png'

export default function PageLoader() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 2200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="page-loader flex-col gap-6"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          {/* Brand logo */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.92, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="absolute inset-0 -m-6 rounded-full bg-red-500/10 blur-3xl" />
            <img
              src={logo}
              alt="Red Moon Technology"
              className="relative z-10 w-64 max-w-[70vw] h-auto object-contain drop-shadow-[0_0_24px_rgba(255,0,0,0.25)]"
            />
          </motion.div>

          {/* Brand name */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="font-poppins font-bold text-xl tracking-widest">
              <span className="gradient-text">RED MOON</span>
            </div>
            <div className="text-white/40 text-xs tracking-[0.3em] mt-1 font-grotesk">
              TECHNOLOGY
            </div>
          </motion.div>

          {/* Loading bar */}
          <div className="w-48 h-px bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{ background: 'linear-gradient(90deg, #ff0000, #8b0000)' }}
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
