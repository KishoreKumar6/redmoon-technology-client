import { FadeInUp, StaggerContainer, StaggerItem } from '../../../components/animations/index.jsx'

const steps = [
  { num: '01', title: 'Discovery', desc: 'We dive deep into your goals, audience, and competitive landscape to craft a strategic brief.' },
  { num: '02', title: 'Design', desc: 'Wireframes, Figma prototypes, and UI systems that balance beauty with conversion-focused UX.' },
  { num: '03', title: 'Development', desc: 'Clean, scalable code built with modern stacks. Weekly demos keep you in the loop throughout.' },
  { num: '04', title: 'Testing', desc: 'Rigorous QA across devices, browsers, and user flows — zero compromises on quality.' },
  { num: '05', title: 'Launch', desc: 'Seamless deployment with CI/CD, performance optimization, and go-live support.' },
  { num: '06', title: 'Growth', desc: 'Post-launch analytics, marketing, SEO, and iterative improvements keep you ahead of the curve.' },
]

export default function ProcessSection() {
  return (
    <section className="section-padding bg-dark-surface">
      <div className="container-custom">
        <FadeInUp className="text-center mb-14">
          <span className="eyebrow mb-4 block">Our Process</span>
          <h2 className="heading-section text-white mb-4">
            How We <span className="gradient-text">Work</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">A transparent, proven process that delivers on time and on budget.</p>
        </FadeInUp>
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" staggerDelay={0.1}>
          {steps.map((s) => (
            <StaggerItem key={s.num}>
              <div className="glass rounded-2xl p-7 card-hover group relative overflow-hidden">
                <div className="absolute top-4 right-4 font-poppins font-black text-6xl text-white/3 leading-none select-none">
                  {s.num}
                </div>
                <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-5">
                  <span className="text-red-400 font-grotesk font-bold text-sm">{s.num}</span>
                </div>
                <h3 className="text-white font-grotesk font-semibold text-lg mb-3 group-hover:text-red-400 transition-colors">{s.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
