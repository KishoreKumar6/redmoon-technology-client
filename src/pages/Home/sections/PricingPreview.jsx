import { Link } from 'react-router-dom'
import { Check, ArrowRight } from 'lucide-react'
import { FadeInUp, StaggerContainer, StaggerItem } from '../../../components/animations/index.jsx'
import { motion } from 'framer-motion'

const plans = [
  {
    name: 'Starter',
    price: '₹5,000',
    period: 'one-time',
    desc: 'Perfect for small businesses and startups',
    features: ['5-page website', 'Responsive design', 'Basic SEO', 'Contact form', '1 month support', 'Source code'],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Professional',
    price: '₹15,000',
    period: 'one-time',
    desc: 'For growing businesses ready to scale',
    features: ['15-page website', 'Custom design', 'Full SEO setup', 'Admin panel', 'E-Commerce', 'Blog & CMS', '3 months support', 'Performance optimized', 'Analytics integration'],
    cta: 'Most Popular',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'quote',
    desc: 'Full-scale solutions for large organizations',
    features: ['Unlimited pages', 'Custom features', 'Mobile app', 'CRM & ERP', 'Dedicated team', '12 months support', 'Priority delivery', 'SLA guarantee'],
    cta: 'Contact Us',
    popular: false,
  },
]

export default function PricingPreview() {
  return (
    <section className="section-padding bg-black relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="container-custom">
        <FadeInUp className="text-center mb-14">
          <span className="eyebrow mb-4 block">Pricing</span>
          <h2 className="heading-section text-white mb-4">Transparent <span className="gradient-text">Pricing</span></h2>
          <p className="text-white/50 max-w-xl mx-auto">No hidden fees. No surprises. Just clear value.</p>
        </FadeInUp>
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.12}>
          {plans.map((p) => (
            <StaggerItem key={p.name}>
              <motion.div
                className={`rounded-2xl p-8 h-full flex flex-col relative overflow-hidden card-hover ${
                  p.popular
                    ? 'bg-gradient-to-b from-red-500/15 to-red-900/5 border border-red-500/30 glow-red-sm'
                    : 'gradient-border'
                }`}
                whileHover={{ scale: 1.02 }}
              >
                {p.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-500 text-white text-xs font-grotesk font-semibold px-4 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <div className="mb-6">
                  <div className="text-white/60 text-sm font-grotesk mb-2">{p.name}</div>
                  <div className="flex items-end gap-1 mb-2">
                    <span className="font-poppins font-bold text-4xl text-white">{p.price}</span>
                    <span className="text-white/40 text-sm mb-1">/{p.period}</span>
                  </div>
                  <p className="text-white/40 text-sm">{p.desc}</p>
                </div>
                <ul className="space-y-3 flex-1 mb-8">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-white/70 text-sm">
                      <Check size={14} className="text-red-400 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to={p.name === 'Enterprise' ? '/contact' : '/pricing'}
                  className={p.popular ? 'btn-primary text-center text-sm' : 'btn-secondary text-center text-sm'}
                >
                  <span className="relative z-10">{p.cta}</span>
                </Link>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
        <FadeInUp className="text-center mt-10">
          <Link to="/pricing" className="text-red-400 hover:text-red-300 text-sm flex items-center gap-2 justify-center transition-colors">
            View full pricing comparison <ArrowRight size={14} />
          </Link>
        </FadeInUp>
      </div>
    </section>
  )
}
