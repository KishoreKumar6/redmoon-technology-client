import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { FadeInUp } from '../../../components/animations/index.jsx'

const faqs = [
  { q: 'How long does it take to build a website?', a: 'A typical 5-10 page business website takes 2–3 weeks. Complex platforms with custom features, e-commerce, or mobile apps can take 4–12 weeks depending on scope and requirements.' },
  { q: 'Do you provide website hosting?', a: 'We deploy your project and can recommend and set up hosting on Vercel, AWS, or DigitalOcean. You own the hosting account and all assets — we never lock you in.' },
  { q: 'Will I own the source code?', a: 'Absolutely. Upon project completion and final payment, full source code ownership transfers to you. No licensing fees, no dependencies on us.' },
  { q: 'Do you work with international clients?', a: 'Yes. We work with clients across India, UAE, USA, UK, and beyond. Communication is via WhatsApp, Slack, or Zoom, and we adapt to your timezone.' },
  { q: 'What happens after the project launches?', a: 'Every project includes post-launch support as specified in the plan. We also offer affordable monthly maintenance retainers for ongoing updates, hosting management, and feature additions.' },
  { q: 'Can you redesign my existing website?', a: 'Yes. We handle redesigns, migrations (e.g., WordPress to Next.js), performance overhauls, and feature additions for existing platforms.' },
]

function FAQItem({ q, a, isOpen, onClick }) {
  return (
    <div className={`glass rounded-2xl overflow-hidden border transition-all duration-300 ${isOpen ? 'border-red-500/30' : 'border-white/5'}`}>
      <button
        className="w-full flex items-center justify-between p-6 text-left"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span className="text-white font-grotesk font-medium text-sm pr-4">{q}</span>
        <div className="shrink-0 w-7 h-7 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center">
          {isOpen ? <Minus size={13} className="text-red-400" /> : <Plus size={13} className="text-red-400" />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <div className="px-6 pb-6 text-white/50 text-sm leading-relaxed border-t border-white/5 pt-4">{a}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQSection() {
  const [open, setOpen] = useState(null)
  return (
    <section className="section-padding bg-dark-surface">
      <div className="container-custom">
        <FadeInUp className="text-center mb-14">
          <span className="eyebrow mb-4 block">FAQ</span>
          <h2 className="heading-section text-white mb-4">Common <span className="gradient-text">Questions</span></h2>
        </FadeInUp>
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((f, i) => (
            <FadeInUp key={i} delay={i * 0.05}>
              <FAQItem q={f.q} a={f.a} isOpen={open === i} onClick={() => setOpen(open === i ? null : i)} />
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  )
}
