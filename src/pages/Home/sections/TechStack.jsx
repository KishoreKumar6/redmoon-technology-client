import { FadeInUp, StaggerContainer, StaggerItem } from '../../../components/animations/index.jsx'

const techs = [
  { name: 'React.js', icon: '⚛️', cat: 'Frontend' },
  { name: 'Next.js', icon: '▲', cat: 'Frontend' },
  { name: 'Flutter', icon: '🐦', cat: 'Mobile' },
  { name: 'React Native', icon: '📱', cat: 'Mobile' },
  { name: 'Node.js', icon: '🟢', cat: 'Backend' },
  { name: 'Express.js', icon: '⚡', cat: 'Backend' },
  { name: 'MongoDB', icon: '🍃', cat: 'Database' },
  { name: 'PostgreSQL', icon: '🐘', cat: 'Database' },
  { name: 'Tailwind CSS', icon: '🎨', cat: 'Styling' },
  { name: 'Framer Motion', icon: '🎭', cat: 'Animation' },
  { name: 'Three.js', icon: '🔺', cat: '3D' },
  { name: 'AWS', icon: '☁️', cat: 'Cloud' },
  { name: 'Docker', icon: '🐳', cat: 'DevOps' },
  { name: 'Firebase', icon: '🔥', cat: 'BaaS' },
  { name: 'Stripe', icon: '💳', cat: 'Payments' },
  { name: 'Figma', icon: '✏️', cat: 'Design' },
]

export default function TechStack() {
  const doubled = [...techs, ...techs]

  return (
    <section className="section-padding bg-dark-surface overflow-hidden">
      <div className="container-custom">
        <FadeInUp className="text-center mb-14">
          <span className="eyebrow mb-4 block">Tech Stack</span>
          <h2 className="heading-section text-white mb-4">
            Tools We <span className="gradient-text">Master</span>
          </h2>
        </FadeInUp>
      </div>

      {/* Infinite marquee */}
      <div className="marquee-container mb-4">
        <div className="marquee-track gap-4">
          {doubled.map((t, i) => (
            <div
              key={i}
              className="inline-flex items-center gap-3 px-5 py-3 glass rounded-xl mx-2 shrink-0"
            >
              <span className="text-xl">{t.icon}</span>
              <div>
                <div className="text-white text-sm font-grotesk font-medium">{t.name}</div>
                <div className="text-white/30 text-xs">{t.cat}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="marquee-container">
        <div className="marquee-track gap-4" style={{ animationDirection: 'reverse' }}>
          {[...doubled].reverse().map((t, i) => (
            <div
              key={i}
              className="inline-flex items-center gap-3 px-5 py-3 glass rounded-xl mx-2 shrink-0"
            >
              <span className="text-xl">{t.icon}</span>
              <div>
                <div className="text-white text-sm font-grotesk font-medium">{t.name}</div>
                <div className="text-white/30 text-xs">{t.cat}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
