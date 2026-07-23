import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Check, X } from 'lucide-react'
import { FadeInUp, StaggerContainer, StaggerItem, PageTransition } from '../../components/animations/index.jsx'
import { motion } from 'framer-motion'

const plans = [
  {
    name: 'Starter',
    price: '₹5,000',
    period: 'one-time',
    desc: 'For small businesses and startups just getting started online',
    features: ['5-page responsive website', 'Mobile-first design', 'Basic SEO setup', 'Contact form with email', 'Google Analytics', '1 month free support', 'Source code ownership'],
    notIncluded: ['Admin panel', 'Blog / CMS', 'E-Commerce features', 'API integrations', 'Performance audit'],
    cta: '/contact',
    ctaText: 'Get Started',
  },
  {
    name: 'Professional',
    price: '₹25,000',
    period: 'one-time',
    desc: 'For businesses ready to scale with a complete digital presence',
    features: ['15-page custom website', 'Premium UI/UX design', 'Full SEO setup', 'Blog & CMS', 'Admin dashboard', 'Email integration', '3 months support', 'Performance optimized', 'Analytics & heatmaps', 'Social media integration'],
    notIncluded: ['Mobile app', 'Custom CRM', 'Dedicated team'],
    cta: '/contact',
    ctaText: 'Most Popular',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'quote',
    desc: 'Full-scale digital transformation for growing organizations',
    features: ['Unlimited pages', 'Custom feature development', 'Mobile app (Flutter)', 'CRM / ERP integration', 'API development', 'WhatsApp automation', '12 months support', 'Dedicated project manager', 'SLA guarantee', 'Priority delivery', 'Security audit', 'Staff training'],
    notIncluded: [],
    cta: '/contact',
    ctaText: 'Contact Us',
  },
]

const comparison = [
  { feature: 'Responsive Design', starter: true, pro: true, enterprise: true },
  { feature: 'Custom UI Design', starter: false, pro: true, enterprise: true },
  { feature: 'Admin Panel', starter: false, pro: true, enterprise: true },
  { feature: 'Blog / CMS', starter: false, pro: true, enterprise: true },
  { feature: 'E-Commerce', starter: false, pro: false, enterprise: true },
  { feature: 'Mobile App', starter: false, pro: false, enterprise: true },
  { feature: 'API Development', starter: false, pro: false, enterprise: true },
  { feature: 'WhatsApp Automation', starter: false, pro: false, enterprise: true },
  { feature: 'SEO Optimization', starter: 'Basic', pro: 'Full', enterprise: 'Advanced' },
  { feature: 'Support Duration', starter: '1 month', pro: '3 months', enterprise: '12 months' },
]

export default function Pricing() {
  return (
    <PageTransition>
      <Helmet>
        <title>Pricing | Red Moon Technology</title>
        <meta name="description" content="Transparent pricing plans for website development, mobile apps, and digital marketing services." />
      </Helmet>

      {/* Hero */}
      <section className="relative pt-36 pb-20 bg-black overflow-hidden">
        <div className="absolute inset-0 bg-hero-radial pointer-events-none" />
        <div className="container-custom text-center relative z-10">
          <FadeInUp>
            <span className="eyebrow mb-5 block">Pricing</span>
            <h1 className="heading-section text-white mb-5">
              Transparent <span className="gradient-text">Pricing</span>
            </h1>
            <p className="text-white/50 max-w-xl mx-auto text-base">No hidden fees. No scope creep surprises. Just clear, fair value.</p>
          </FadeInUp>
        </div>
      </section>

      {/* Plans */}
      <section className="section-padding bg-black">
        <div className="container-custom">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20" staggerDelay={0.12}>
            {plans.map((p) => (
              <StaggerItem key={p.name}>
                <motion.div
                  className={`rounded-2xl p-8 h-full flex flex-col relative overflow-hidden ${
                    p.popular
                      ? 'bg-gradient-to-b from-red-500/12 to-transparent border border-red-500/30 glow-red-sm'
                      : 'gradient-border'
                  }`}
                  whileHover={{ scale: 1.01 }}
                >
                  {p.popular && (
                    <div className="absolute top-0 right-0 bg-red-500 text-white text-[10px] font-grotesk font-bold px-4 py-1.5 rounded-bl-xl">
                      POPULAR
                    </div>
                  )}
                  <div className="mb-7">
                    <div className="text-white/50 text-xs font-grotesk tracking-widest uppercase mb-3">{p.name}</div>
                    <div className="flex items-end gap-1.5 mb-3">
                      <span className="font-poppins font-black text-4xl text-white">{p.price}</span>
                      <span className="text-white/30 text-sm mb-1">/{p.period}</span>
                    </div>
                    <p className="text-white/40 text-xs leading-relaxed">{p.desc}</p>
                  </div>

                  <div className="flex-1 space-y-5 mb-8">
                    <div>
                      <p className="text-white/30 text-xs font-grotesk tracking-wide mb-3">INCLUDED</p>
                      <ul className="space-y-2.5">
                        {p.features.map(f => (
                          <li key={f} className="flex items-start gap-2.5 text-white/70 text-sm">
                            <Check size={13} className="text-green-400 shrink-0 mt-0.5" />{f}
                          </li>
                        ))}
                      </ul>
                    </div>
                    {p.notIncluded.length > 0 && (
                      <div>
                        <p className="text-white/30 text-xs font-grotesk tracking-wide mb-3">NOT INCLUDED</p>
                        <ul className="space-y-2.5">
                          {p.notIncluded.map(f => (
                            <li key={f} className="flex items-start gap-2.5 text-white/25 text-sm">
                              <X size={13} className="shrink-0 mt-0.5" />{f}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  <Link to={p.cta} className={p.popular ? 'btn-primary text-sm text-center' : 'btn-secondary text-sm text-center'}>
                    <span className="relative z-10">{p.ctaText}</span>
                  </Link>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Comparison Table */}
          <FadeInUp>
            <h2 className="heading-section text-white text-center mb-10">Full <span className="gradient-text">Comparison</span></h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-4 px-4 text-white/40 text-xs font-grotesk tracking-wide w-1/2">Feature</th>
                    {plans.map(p => <th key={p.name} className="py-4 px-4 text-white font-grotesk font-semibold text-sm">{p.name}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, i) => (
                    <tr key={row.feature} className={`border-b border-white/5 ${i % 2 === 0 ? 'bg-white/[0.01]' : ''}`}>
                      <td className="py-4 px-4 text-white/60 text-sm">{row.feature}</td>
                      {[row.starter, row.pro, row.enterprise].map((v, j) => (
                        <td key={j} className="py-4 px-4 text-center">
                          {typeof v === 'boolean' ? (
                            v ? <Check size={16} className="text-green-400 mx-auto" /> : <X size={16} className="text-white/15 mx-auto" />
                          ) : (
                            <span className="text-white/60 text-sm">{v}</span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeInUp>
        </div>
      </section>
    </PageTransition>
  )
}
