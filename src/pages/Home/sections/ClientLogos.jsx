import { FadeInUp } from '../../../components/animations/index.jsx'

const clients = ['TechVentures', 'StyleBrand', 'DataFlow', 'GrowthCo', 'AquaFlow', 'MediTrack', 'StarterHQ', 'BuildIt', 'NexaCorp', 'SkyMedia']

export default function ClientLogos() {
  const doubled = [...clients, ...clients]
  return (
    <section className="py-12 bg-dark-surface border-y border-white/5 overflow-hidden">
      <FadeInUp className="text-center mb-8">
        <p className="text-white/25 text-xs tracking-widest font-grotesk uppercase">Trusted by Growing Companies</p>
      </FadeInUp>
      <div className="marquee-container">
        <div className="marquee-track gap-12" style={{ animationDuration: '25s' }}>
          {doubled.map((c, i) => (
            <div key={i} className="inline-flex items-center shrink-0 mx-8">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                  <span className="text-white/40 font-poppins font-bold text-xs">{c[0]}</span>
                </div>
                <span className="text-white/25 font-grotesk font-semibold text-sm tracking-wide">{c}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
