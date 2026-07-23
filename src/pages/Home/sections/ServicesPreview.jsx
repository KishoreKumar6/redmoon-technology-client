import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { FadeInUp, StaggerContainer, StaggerItem } from '../../../components/animations/index.jsx'

const services = [
  { icon: '🌐', title: 'Website Development', desc: 'Stunning, high-performance websites built with modern frameworks. From landing pages to full enterprise platforms.', href: '/services#web', color: 'from-blue-500/10 to-transparent' },
  { icon: '📱', title: 'Mobile App Development', desc: 'Native and cross-platform apps for iOS and Android using Flutter and React Native with seamless UX.', href: '/services#mobile', color: 'from-purple-500/10 to-transparent' },
  { icon: '📣', title: 'Digital Marketing', desc: 'Data-driven campaigns on Facebook, Google, and Instagram to drive leads, awareness, and conversions.', href: '/services#marketing', color: 'from-yellow-500/10 to-transparent' },
  { icon: '🔍', title: 'SEO Optimization', desc: 'Technical and content SEO strategies that drive organic traffic and dominate search rankings.', href: '/services#seo', color: 'from-green-500/10 to-transparent' },
  { icon: '🛒', title: 'E-Commerce Solutions', desc: 'Full-featured online stores on Shopify, WooCommerce, or custom MERN with payment and inventory management.', href: '/services#ecom', color: 'from-orange-500/10 to-transparent' },
  { icon: '📊', title: 'CRM Development', desc: 'Custom CRM systems with lead management, sales pipeline, automation, invoicing, and analytics.', href: '/services#crm', color: 'from-teal-500/10 to-transparent' },
  { icon: '🎨', title: 'UI/UX Design', desc: 'Research-driven Figma designs and prototypes that convert — beautiful, accessible, and user-tested.', href: '/services#design', color: 'from-pink-500/10 to-transparent' },
  { icon: '💬', title: 'WhatsApp Automation', desc: 'Bulk messaging, chatbots, lead automation and CRM integration via official WhatsApp Business API.', href: '/services#whatsapp', color: 'from-red-500/10 to-transparent' },
]

export default function ServicesPreview() {
  return (
    <section className="section-padding bg-black relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-red-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="container-custom relative z-10">
        <FadeInUp className="text-center mb-14">
          <span className="eyebrow mb-4 block">What We Do</span>
          <h2 className="heading-section text-white mb-4">
            Services Built for <span className="gradient-text">Impact</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto text-base leading-relaxed">
            Every service we offer is engineered for one goal: measurable results for your business.
          </p>
        </FadeInUp>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5" staggerDelay={0.08}>
          {services.map((s) => (
            <StaggerItem key={s.title}>
              <motion.div
                className="group gradient-border p-6 h-full card-hover cursor-pointer"
                whileHover={{ borderColor: 'rgba(255,0,0,0.3)' }}
              >
                <Link to={s.href} className="flex flex-col h-full">
                  <div className="text-3xl mb-4">{s.icon}</div>
                  <h3 className="heading-card text-white mb-3 group-hover:text-red-400 transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed flex-1">{s.desc}</p>
                  <div className="flex items-center gap-2 mt-5 text-red-500 text-sm font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    Learn more <ArrowRight size={14} />
                  </div>
                </Link>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeInUp className="text-center mt-12" delay={0.2}>
          <Link to="/services" className="btn-secondary inline-flex">
            Explore All Services <ArrowRight size={16} />
          </Link>
        </FadeInUp>
      </div>
    </section>
  )
}
