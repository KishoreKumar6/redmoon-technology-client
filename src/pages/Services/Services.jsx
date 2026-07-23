import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { FadeInUp, StaggerContainer, StaggerItem, PageTransition } from '../../components/animations/index.jsx'

const services = [
  {
    id: 'web',
    icon: '🌐',
    title: 'Website Development',
    subtitle: 'From landing pages to enterprise platforms',
    desc: 'We build blazing-fast, visually stunning websites using React, Next.js, and cutting-edge tools. Every site is mobile-first, SEO-optimized, and conversion-focused.',
    features: ['Responsive & mobile-first', 'Next.js / React / Vue.js', 'CMS integration', 'Performance score 95+', 'Custom animations', 'SEO foundation'],
  },
  {
    id: 'mobile',
    icon: '📱',
    title: 'Mobile App Development',
    subtitle: 'iOS, Android & cross-platform',
    desc: 'Native and cross-platform mobile apps built with Flutter and React Native. Beautiful UX, smooth performance, App Store & Play Store ready.',
    features: ['Flutter & React Native', 'iOS & Android', 'Push notifications', 'Offline support', 'API integration', 'App Store deployment'],
  },
  {
    id: 'marketing',
    icon: '📣',
    title: 'Digital Marketing',
    subtitle: 'Data-driven campaigns that convert',
    desc: 'From Facebook Ads to Google campaigns, we create and manage performance marketing strategies that deliver measurable ROI for your business.',
    features: ['Facebook & Instagram Ads', 'Google Ads (Search, Display)', 'Lead generation funnels', 'A/B testing', 'Monthly reporting', 'Retargeting campaigns'],
  },
  {
    id: 'seo',
    icon: '🔍',
    title: 'SEO Optimization',
    subtitle: 'Dominate search rankings',
    desc: 'Comprehensive SEO strategies covering technical, on-page, and off-page optimization. We help you rank for keywords that actually drive business.',
    features: ['Technical SEO audit', 'Keyword research', 'On-page optimization', 'Link building', 'Local SEO', 'Core Web Vitals'],
  },
  {
    id: 'ecom',
    icon: '🛒',
    title: 'E-Commerce Development',
    subtitle: 'Stores that sell while you sleep',
    desc: 'Custom e-commerce solutions on Shopify, WooCommerce, or fully custom MERN stacks with payment gateways, inventory management, and order processing.',
    features: ['Shopify / WooCommerce', 'Custom MERN store', 'Razorpay / Stripe', 'Inventory management', 'Order tracking', 'Admin dashboard'],
  },
  {
    id: 'crm',
    icon: '📊',
    title: 'CRM Development',
    subtitle: 'Manage leads, close more deals',
    desc: 'Custom-built CRM systems tailored to your sales process. Lead pipelines, customer tracking, invoicing, automation, and deep analytics.',
    features: ['Lead management', 'Sales pipeline', 'Customer database', 'Invoice generation', 'Analytics & reports', 'WhatsApp integration'],
  },
  {
    id: 'design',
    icon: '🎨',
    title: 'UI/UX Design',
    subtitle: 'Design that converts and delights',
    desc: 'Research-driven design from wireframes to pixel-perfect Figma prototypes. We create interfaces that are beautiful, accessible, and tested on real users.',
    features: ['User research', 'Wireframing', 'Figma prototypes', 'Design systems', 'Mobile UI', 'Usability testing'],
  },
  {
    id: 'whatsapp',
    icon: '💬',
    title: 'WhatsApp Automation',
    subtitle: 'Business messaging at scale',
    desc: 'Official WhatsApp Business API integration for bulk messaging, AI-powered chatbots, lead capture, automated follow-ups, and CRM sync.',
    features: ['WhatsApp Business API', 'Bulk messaging', 'Chatbot builder', 'Lead automation', 'CRM integration', 'Broadcast campaigns'],
  },
]

export default function Services() {
  return (
    <PageTransition>
      <Helmet>
        <title>Services | Red Moon Technology</title>
        <meta name="description" content="Premium software services: Web development, Mobile apps, Digital marketing, SEO, E-Commerce, CRM, UI/UX Design, and WhatsApp Automation." />
      </Helmet>

      {/* Hero */}
      <section className="relative pt-36 pb-20 bg-black overflow-hidden">
        <div className="absolute inset-0 bg-hero-radial pointer-events-none" />
        <div className="absolute inset-0 line-pattern opacity-20" />
        <div className="container-custom text-center relative z-10">
          <FadeInUp>
            <span className="eyebrow mb-5 block">Our Services</span>
            <h1 className="heading-section text-white mb-5">
              Everything You Need to <span className="gradient-text">Grow Online</span>
            </h1>
            <p className="text-white/50 max-w-xl mx-auto text-base leading-relaxed">
              End-to-end digital services from strategy to execution. We handle the technology so you can focus on your business.
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-black">
        <div className="container-custom space-y-6">
          {services.map((s, i) => (
            <FadeInUp key={s.id} delay={i * 0.04}>
              <div id={s.id} className="gradient-border rounded-2xl p-8 md:p-10 group card-hover">
                <div className="grid md:grid-cols-5 gap-8 items-start">
                  <div className="md:col-span-3">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-4xl">{s.icon}</span>
                      <div>
                        <h2 className="text-white font-poppins font-bold text-xl group-hover:text-red-400 transition-colors">{s.title}</h2>
                        <p className="text-white/40 text-sm">{s.subtitle}</p>
                      </div>
                    </div>
                    <p className="text-white/60 text-sm leading-relaxed mb-6">{s.desc}</p>
                    <Link to="/contact" className="btn-primary text-sm inline-flex">
                      <span className="relative z-10 flex items-center gap-2">Get a Quote <ArrowRight size={14} /></span>
                    </Link>
                  </div>
                  <div className="md:col-span-2">
                    <h4 className="text-white/40 text-xs font-grotesk tracking-widest uppercase mb-4">What's Included</h4>
                    <ul className="space-y-2">
                      {s.features.map(f => (
                        <li key={f} className="flex items-center gap-3 text-white/70 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </FadeInUp>
          ))}
        </div>
      </section>
    </PageTransition>
  )
}
