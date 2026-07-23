import { Suspense, lazy, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Play } from 'lucide-react'
import { useTypingEffect } from '../../../hooks/useTypingEffect.js'

const MoonCanvas = lazy(() => import('../../../components/animations/MoonCanvas.jsx'))

const typingWords = [
  'Software Solutions',
  'Mobile Applications',
  'Digital Marketing',
  'UI/UX Experiences',
  'CRM Systems',
  'E-Commerce Stores',
]

function ParticleBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animId
    let particles = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    class Particle {
      constructor() { this.reset() }
      reset() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 1.5 + 0.3
        this.vx = (Math.random() - 0.5) * 0.3
        this.vy = (Math.random() - 0.5) * 0.3
        this.opacity = Math.random() * 0.4 + 0.1
      }
      update() {
        this.x += this.vx
        this.y += this.vy
        if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) this.reset()
      }
      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 0, 0, ${this.opacity})`
        ctx.fill()
      }
    }

    for (let i = 0; i < 120; i++) particles.push(new Particle())

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(p => { p.update(); p.draw() })
      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 100) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(255, 0, 0, ${0.06 * (1 - dist / 100)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }
      animId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />
}

export default function HeroSection() {
  const typedText = useTypingEffect(typingWords, 75, 45, 1800)

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
      {/* Particle canvas */}
      <ParticleBackground />

      {/* Grid line pattern */}
      <div className="absolute inset-0 line-pattern opacity-30 pointer-events-none" />

      {/* Radial red glow center */}
      <div className="absolute inset-0 bg-hero-radial pointer-events-none" />

      {/* Three.js Moon — right side */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[45vw] h-[90vh] pointer-events-none hidden lg:block">
        <Suspense fallback={null}>
          <MoonCanvas />
        </Suspense>
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 pt-32 pb-20">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <span className="eyebrow">Premium Software Company</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            className="heading-hero text-white mb-4"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            We Build
            <br />
            <span className="gradient-text text-glow-red">World-Class</span>
          </motion.h1>

          {/* Typing line */}
          <motion.div
            className="heading-hero text-white/80 mb-8 min-h-[1.1em]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {typedText}
            <span className="inline-block w-0.5 h-[0.85em] bg-red-500 ml-1 align-middle animate-pulse" />
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-white/50 text-lg leading-relaxed mb-10 max-w-xl font-inter"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            Red Moon Technology crafts premium digital experiences — from blazing-fast websites and mobile apps to AI-powered CRMs and data-driven marketing strategies.
          </motion.p>

          {/* CTA Row */}
          <motion.div
            className="flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.85 }}
          >
            <Link to="/contact" className="btn-primary text-base group">
              <span className="relative z-10 flex items-center gap-2">
                Start Your Project
                <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link to="/portfolio" className="btn-secondary text-base group">
              <Play size={15} className="text-red-400" />
              View Our Work
            </Link>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            className="flex flex-wrap items-center gap-6 mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          >
            {[
              { value: '150+', label: 'Projects' },
              { value: '50+', label: 'Clients' },
              { value: '5★', label: 'Rated' },
              { value: '3+', label: 'Years' },
            ].map(({ value, label }) => (
              <div key={label} className="flex items-center gap-2">
                <span className="text-white font-poppins font-bold text-lg">{value}</span>
                <span className="text-white/40 text-sm">{label}</span>
                <div className="w-px h-4 bg-white/10 last:hidden" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-white/30 text-xs tracking-widest font-grotesk">SCROLL</span>
        <motion.div
          className="w-px h-12 bg-gradient-to-b from-red-500 to-transparent"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: 'top' }}
        />
      </motion.div>
    </section>
  )
}
