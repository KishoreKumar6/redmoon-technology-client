import { Helmet } from 'react-helmet-async'
import { ShieldCheck, Eye, Lock, Mail, Database, Cookie, Globe2 } from 'lucide-react'
import { FadeInUp, StaggerContainer, StaggerItem, PageTransition } from '../../components/animations/index.jsx'
import { Link } from 'react-router-dom'

const sections = [
  {
    icon: Eye,
    title: 'Information We Collect',
    items: [
      'Contact details you submit through forms, email, or phone.',
      'Project and business information you share when requesting a quote or support.',
      'Basic usage data such as pages visited, device type, and browser information.',
    ],
  },
  {
    icon: Database,
    title: 'How We Use Information',
    items: [
      'To respond to enquiries, deliver services, and manage client relationships.',
      'To improve our website, services, and communications.',
      'To send service updates, proposals, and newsletters when you opt in.',
    ],
  },
  {
    icon: Lock,
    title: 'Sharing & Storage',
    items: [
      'We do not sell personal information.',
      'We may share data with trusted service providers who help us operate our business.',
      'We take reasonable technical and organizational measures to protect your information.',
    ],
  },
  {
    icon: Cookie,
    title: 'Cookies',
    items: [
      'We may use cookies and similar technologies to understand site usage and improve performance.',
      'You can control cookies through your browser settings.',
    ],
  },
  {
    icon: Globe2,
    title: 'Your Rights',
    items: [
      'You may request access, correction, or deletion of your information, subject to legal obligations.',
      'You may opt out of marketing emails at any time using the unsubscribe link or by contacting us.',
    ],
  },
  {
    icon: Mail,
    title: 'Contact',
    items: [
      'If you have privacy questions, please email redmoontechnologyofficial@gmail.com.',
    ],
  },
]

export default function PrivacyPolicy() {
  return (
    <PageTransition>
      <Helmet>
        <title>Privacy Policy | Red Moon Technology</title>
        <meta
          name="description"
          content="Read how Red Moon Technology collects, uses, stores, and protects personal information."
        />
      </Helmet>

      <section className="relative pt-36 pb-20 bg-black overflow-hidden">
        <div className="absolute inset-0 bg-hero-radial pointer-events-none" />
        <div className="absolute inset-0 line-pattern opacity-20" />
        <div className="container-custom relative z-10">
          <FadeInUp className="max-w-3xl">
            <span className="eyebrow mb-5 block">Privacy Policy</span>
            <h1 className="heading-section text-white mb-5">
              Your Privacy, <span className="gradient-text">Clearly Explained</span>
            </h1>
            <p className="text-white/50 text-base leading-relaxed max-w-2xl">
              This policy explains how Red Moon Technology handles information collected through our website,
              contact forms, and business communications.
            </p>
            <p className="text-white/30 text-xs mt-4">Last updated: August 8, 2026</p>
          </FadeInUp>
        </div>
      </section>

      <section className="section-padding bg-dark-surface">
        <div className="container-custom">
          <StaggerContainer className="grid gap-6 md:grid-cols-2">
            {sections.map(({ icon: Icon, title, items }) => (
              <StaggerItem key={title}>
                <div className="gradient-border h-full p-7 card-hover">
                  <div className="w-12 h-12 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-5">
                    <Icon size={20} className="text-red-400" />
                  </div>
                  <h2 className="text-white font-grotesk font-semibold text-xl mb-4">{title}</h2>
                  <ul className="space-y-3 text-white/55 text-sm leading-relaxed">
                    {items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-red-500 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/contact" className="btn-primary">
              <span className="relative z-10">Contact Us</span>
            </Link>
            <Link to="/terms" className="btn-secondary">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
