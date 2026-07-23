// PortfolioPreview.jsx
import { Link } from 'react-router-dom'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { FadeInUp, StaggerContainer, StaggerItem } from '../../../components/animations/index.jsx'
import { motion } from 'framer-motion'

const projects = [
  { title: 'AquaFlow E-Commerce', category: 'E-Commerce', tech: ['React', 'Node.js', 'MongoDB'], color: '#1a6fa8' },
  { title: 'Anubhuthi Foundation', category: 'Website', tech: ['MERN', 'Razorpay', 'JWT'], color: '#6b3fa0' },
  { title: 'DoorMart Delivery', category: 'Mobile App', tech: ['Flutter', 'Firebase', 'Maps'], color: '#a06b3f' },
  { title: 'GreenLeaf CRM', category: 'CRM', tech: ['React', 'Express', 'Charts'], color: '#3fa06b' },
  { title: 'Stellar Landing Page', category: 'Website', tech: ['Next.js', 'Framer', 'GSAP'], color: '#a03f6b' },
  { title: 'MediTrack Dashboard', category: 'Dashboard', tech: ['React', 'Recharts', 'Mongo'], color: '#6ba03f' },
]

export default function PortfolioPreview() {
  return (
    <section className="section-padding bg-black">
      <div className="container-custom">
        <FadeInUp className="text-center mb-14">
          <span className="eyebrow mb-4 block">Our Work</span>
          <h2 className="heading-section text-white mb-4">
            Projects We're <span className="gradient-text">Proud Of</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto text-base">
            A curated selection of work that pushed boundaries and delivered real business value.
          </p>
        </FadeInUp>
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" staggerDelay={0.08}>
          {projects.map((p) => (
            <StaggerItem key={p.title}>
              <motion.div
                className="gradient-border overflow-hidden group cursor-pointer card-hover"
                whileHover={{ scale: 1.02 }}
              >
                {/* Mock image area */}
                <div
                  className="h-48 relative overflow-hidden"
                  style={{ background: `radial-gradient(ellipse at 30% 40%, ${p.color}44, #0a0a0a)` }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                      <span className="text-2xl font-poppins font-bold text-white/20">RM</span>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="tag">{p.category}</span>
                  </div>
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <ExternalLink size={24} className="text-white" />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-white font-grotesk font-semibold text-base mb-2">{p.title}</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tech.map(t => <span key={t} className="text-xs text-white/40 bg-white/5 px-2 py-0.5 rounded-full">{t}</span>)}
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
        <FadeInUp className="text-center mt-12">
          <Link to="/portfolio" className="btn-primary inline-flex">View Full Portfolio <ArrowRight size={16} /></Link>
        </FadeInUp>
      </div>
    </section>
  )
}
