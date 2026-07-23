import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { FadeInUp, StaggerContainer, StaggerItem } from '../../../components/animations/index.jsx'

const stats = [
  { value: 150, suffix: '+', label: 'Projects Delivered', desc: 'Across 10+ industries' },
  { value: 50, suffix: '+', label: 'Happy Clients', desc: 'Long-term partnerships' },
  { value: 3, suffix: '+', label: 'Years Experience', desc: 'Building digital products' },
  { value: 99, suffix: '%', label: 'Client Satisfaction', desc: 'Based on feedback scores' },
]

function StatCard({ value, suffix, label, desc, index }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 })
  return (
    <div ref={ref} className="gradient-border p-8 text-center card-hover">
      <div className="text-5xl font-poppins font-bold gradient-text mb-2">
        {inView ? <CountUp end={value} duration={2.5} delay={index * 0.15} /> : '0'}
        {suffix}
      </div>
      <div className="text-white font-grotesk font-semibold text-lg mb-1">{label}</div>
      <div className="text-white/40 text-sm">{desc}</div>
    </div>
  )
}

export default function StatsSection() {
  return (
    <section className="section-padding bg-dark-surface">
      <div className="container-custom">
        <FadeInUp className="text-center mb-14">
          <span className="eyebrow mb-4 block">Our Impact</span>
          <h2 className="heading-section text-white">Numbers That Speak</h2>
        </FadeInUp>
        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-5" staggerDelay={0.12}>
          {stats.map((s, i) => (
            <StaggerItem key={s.label}>
              <StatCard {...s} index={i} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
