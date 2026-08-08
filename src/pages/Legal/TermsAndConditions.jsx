import { Helmet } from 'react-helmet-async'
import { ClipboardCheck, FileText, Scale, Ban, ShieldAlert, Mail, Sparkles } from 'lucide-react'
import { FadeInUp, StaggerContainer, StaggerItem, PageTransition } from '../../components/animations/index.jsx'
import { Link } from 'react-router-dom'

const sections = [
  {
    icon: FileText,
    title: 'Use of Website',
    items: [
      'You may use this website for lawful business and informational purposes only.',
      'You agree not to misuse the site, attempt unauthorized access, or interfere with its operation.',
    ],
  },
  {
    icon: ClipboardCheck,
    title: 'Project Engagements',
    items: [
      'Any project timeline, scope, and pricing will be defined in a separate proposal, invoice, or agreement.',
      'Work begins after mutual confirmation and any required advance payment, if applicable.',
      'Changes outside the agreed scope may affect delivery time and cost.',
    ],
  },
  {
    icon: Scale,
    title: 'Intellectual Property',
    items: [
      'Unless otherwise agreed in writing, Red Moon Technology retains ownership of its pre-existing tools, code, and methods.',
      'Once full payment is received, deliverables transfer according to the project agreement.',
      'You must not reuse our materials or branding without permission.',
    ],
  },
  {
    icon: Ban,
    title: 'Prohibited Activities',
    items: [
      'Do not use the site to upload harmful content, spam, or illegal material.',
      'Do not reverse engineer, copy, or exploit the site or services in an unauthorized manner.',
    ],
  },
  {
    icon: ShieldAlert,
    title: 'Disclaimer & Liability',
    items: [
      'We provide the website and services on an as-is and as-available basis.',
      'We are not liable for indirect, incidental, or consequential damages to the fullest extent permitted by law.',
      'We do not guarantee uninterrupted or error-free access to the website.',
    ],
  },
  {
    icon: Mail,
    title: 'Contact',
    items: [
      'For questions about these terms, email redmoontechnologyofficial@gmail.com.',
    ],
  },
]

export default function TermsAndConditions() {
  return (
    <PageTransition>
      <Helmet>
        <title>Terms & Conditions | Red Moon Technology</title>
        <meta
          name="description"
          content="Review the terms and conditions for using Red Moon Technology's website and services."
        />
      </Helmet>

      <section className="relative pt-36 pb-20 bg-black overflow-hidden">
        <div className="absolute inset-0 bg-hero-radial pointer-events-none" />
        <div className="absolute inset-0 line-pattern opacity-20" />
        <div className="container-custom relative z-10">
          <FadeInUp className="max-w-3xl">
            <span className="eyebrow mb-5 block">Terms & Conditions</span>
            <h1 className="heading-section text-white mb-5">
              Simple Rules for a <span className="gradient-text">Clear Partnership</span>
            </h1>
            <p className="text-white/50 text-base leading-relaxed max-w-2xl">
              These terms govern how you use our website and how we work together on projects and services.
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
              <span className="relative z-10">Discuss a Project</span>
            </Link>
            <Link to="/privacy" className="btn-secondary">
              Privacy Policy
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
