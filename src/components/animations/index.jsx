import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

/* ===== Fade In Up ===== */
export function FadeInUp({ children, delay = 0, className = '', once = true }) {
  const [ref, inView] = useInView({ triggerOnce: once, threshold: 0.1 })
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
    
  )
}

/* ===== Fade In Scale ===== */
export function FadeInScale({ children, delay = 0, className = '' }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, scale: 0.92 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}

/* ===== Stagger Container ===== */
export function StaggerContainer({ children, className = '', staggerDelay = 0.1 }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 })
  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: staggerDelay } },
      }}
    >
      {children}
    </motion.div>
  )
}

/* ===== Stagger Item ===== */
export function StaggerItem({ children, className = '' }) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
      }}
    >
      {children}
    </motion.div>
  )
}

/* ===== Slide In Left ===== */
export function SlideInLeft({ children, delay = 0, className = '' }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, x: -40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}

/* ===== Slide In Right ===== */
export function SlideInRight({ children, delay = 0, className = '' }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, x: 40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}

/* ===== Page Transition Wrapper ===== */
export function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  )
}

/* ===== Text Reveal (char by char) ===== */
export function TextReveal({ text, className = '', delay = 0 }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 })
  const words = text.split(' ')
  return (
    <span ref={ref} className={className} aria-label={text}>
      {words.map((word, wi) => (
        <span key={wi} className="inline-block overflow-hidden mr-[0.25em]">
          <motion.span
            className="inline-block"
            initial={{ y: '100%' }}
            animate={inView ? { y: 0 } : {}}
            transition={{
              duration: 0.55,
              delay: delay + wi * 0.06,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  )
}
