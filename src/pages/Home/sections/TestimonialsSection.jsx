// TestimonialsSection.jsx
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { FadeInUp } from '../../../components/animations/index.jsx'

const testimonials = [
  { name: 'Arjun Mehta', role: 'CEO, TechVentures', text: 'Red Moon delivered an outstanding MERN platform that exceeded our expectations. The code quality and attention to detail is exceptional. Highly recommended for any serious project.', stars: 5 },
  { name: 'Priya Sharma', role: 'Founder, StyleBrand', text: 'Our e-commerce site saw a 3x increase in conversions within the first month. The UI is stunning and the performance is blazing fast. Red Moon is our go-to agency.', stars: 5 },
  { name: 'Karan Patel', role: 'CTO, DataFlow', text: 'The custom CRM they built has transformed how we manage leads and sales. What would have taken months to build in-house was delivered in weeks — and it works perfectly.', stars: 5 },
  { name: 'Kavya Nair', role: 'Marketing Head, GrowthCo', text: 'From the digital marketing campaigns to the website redesign, Red Moon handled everything seamlessly. Our organic traffic doubled in two months. Incredible team.', stars: 5 },
]

export default function TestimonialsSection() {
  const [idx, setIdx] = useState(0)
  const prev = () => setIdx((i) => (i - 1 + testimonials.length) % testimonials.length)
  const next = () => setIdx((i) => (i + 1) % testimonials.length)
  const t = testimonials[idx]

  return (
    <section className="section-padding bg-black relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-red-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="container-custom">
        <FadeInUp className="text-center mb-14">
          <span className="eyebrow mb-4 block">Testimonials</span>
          <h2 className="heading-section text-white">What Clients <span className="gradient-text">Say</span></h2>
        </FadeInUp>
        <div className="max-w-3xl mx-auto">
          <div className="gradient-border p-10 text-center relative">
            <div className="flex justify-center gap-1 mb-6">
              {Array(t.stars).fill(0).map((_, i) => (
                <Star key={i} size={18} className="text-red-400 fill-red-400" />
              ))}
            </div>
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="text-white/80 text-lg leading-relaxed italic mb-8"
              >
                "{t.text}"
              </motion.blockquote>
            </AnimatePresence>
            <div>
              <div className="text-white font-grotesk font-semibold">{t.name}</div>
              <div className="text-white/40 text-sm">{t.role}</div>
            </div>
          </div>
          <div className="flex justify-center gap-4 mt-8">
            <button onClick={prev} className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/60 hover:text-white hover:border-red-500/30 border border-white/10 transition-all">
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2 items-center">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setIdx(i)} className={`w-2 h-2 rounded-full transition-all ${i === idx ? 'bg-red-500 w-6' : 'bg-white/20'}`} />
              ))}
            </div>
            <button onClick={next} className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/60 hover:text-white hover:border-red-500/30 border border-white/10 transition-all">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
