import { Check, Zap, Shield, Users, Clock, Award } from 'lucide-react'
import { FadeInUp, SlideInLeft, SlideInRight, StaggerContainer, StaggerItem } from '../../../components/animations/index.jsx'

const reasons = [
  { icon: Zap, title: 'Lightning Fast Delivery', desc: 'We deliver on time, every time. Agile sprints and clear milestones keep projects moving without compromise.' },
  { icon: Shield, title: 'Enterprise-Grade Security', desc: 'Every product is built with security-first principles — JWT, encryption, rate limiting, and best practices.' },
  { icon: Users, title: 'Dedicated Team', desc: 'You get a committed team: developer, designer, and project manager focused entirely on your success.' },
  { icon: Clock, title: '24/7 Support', desc: 'Post-launch, we don\'t disappear. Ongoing support, bug fixes, and feature additions whenever you need.' },
  { icon: Award, title: 'Premium Quality', desc: 'Clean code, pixel-perfect design, and thorough testing. We won\'t ship anything we\'re not proud of.' },
  { icon: Check, title: 'Transparent Process', desc: 'Weekly updates, shared dashboards, and direct Slack/WhatsApp access. No black boxes, ever.' },
]

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-dark-surface relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <SlideInLeft>
            <span className="eyebrow mb-5 block">Why Red Moon</span>
            <h2 className="heading-section text-white mb-6">
              The Agency That <span className="gradient-text">Actually Delivers</span>
            </h2>
            <p className="text-white/50 text-base leading-relaxed mb-8">
              We're not just another web agency. We're a technology partner obsessed with your growth. Our team combines cutting-edge tech with strategic thinking to build products that last.
            </p>
            <ul className="space-y-3">
              {['No hidden costs or scope creep', 'Full-source code ownership', 'GDPR & data compliant builds', 'Post-launch maintenance included'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-white/70 text-sm">
                  <div className="w-5 h-5 rounded-full bg-red-500/15 border border-red-500/30 flex items-center justify-center shrink-0">
                    <Check size={11} className="text-red-400" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </SlideInLeft>

          {/* Right grid */}
          <SlideInRight>
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4" staggerDelay={0.1}>
              {reasons.map(({ icon: Icon, title, desc }) => (
                <StaggerItem key={title}>
                  <div className="glass rounded-2xl p-5 card-hover group">
                    <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-4 group-hover:bg-red-500/20 transition-colors">
                      <Icon size={18} className="text-red-400" />
                    </div>
                    <h4 className="text-white font-grotesk font-semibold text-sm mb-2">{title}</h4>
                    <p className="text-white/40 text-xs leading-relaxed">{desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </SlideInRight>
        </div>
      </div>
    </section>
  )
}
