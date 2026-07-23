import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Clock, Briefcase, ChevronDown, Upload, X } from 'lucide-react'
import { FadeInUp, StaggerContainer, StaggerItem, PageTransition } from '../../components/animations/index.jsx'
import api from '../../api/axios.js'
import toast from 'react-hot-toast'

const jobs = [
  { id: 1, title: 'Full Stack Developer', type: 'Full-time', location: 'Ranipet / Remote', dept: 'Engineering', desc: 'Build and maintain scalable web applications using React, Node.js, and MongoDB. You\'ll work on client projects and internal tools.', requirements: ['2+ years React & Node.js', 'MongoDB / PostgreSQL', 'REST API design', 'Git proficiency', 'Problem-solving mindset'] },
  { id: 2, title: 'Flutter Developer', type: 'Full-time', location: 'Ranipet / Remote', dept: 'Mobile', desc: 'Develop cross-platform mobile applications with Flutter. Work closely with designers to ship pixel-perfect, high-performance apps.', requirements: ['1+ year Flutter / Dart', 'Firebase integration', 'State management (Riverpod/Bloc)', 'App Store deployment', 'UI implementation skills'] },
  { id: 3, title: 'UI/UX Designer', type: 'Full-time', location: 'Ranipet / Remote', dept: 'Design', desc: 'Create stunning user interfaces and experiences in Figma. From wireframes to polished prototypes, you\'ll own the design process.', requirements: ['Proficiency in Figma', 'Strong portfolio', 'Mobile & web design', 'User research skills', 'Motion design (bonus)'] },
  { id: 4, title: 'Digital Marketing Executive', type: 'Full-time', location: 'Ranipet', dept: 'Marketing', desc: 'Plan and execute performance marketing campaigns on Facebook, Google, and Instagram. Track ROI and optimize for conversions.', requirements: ['Facebook & Google Ads experience', 'Analytics proficiency', 'Content strategy', 'Lead generation', 'Reporting skills'] },
  { id: 5, title: 'SEO Specialist', type: 'Part-time / Freelance', location: 'Remote', dept: 'Marketing', desc: 'Drive organic growth for our clients through technical and content SEO strategies. You\'ll own keyword strategy and rankings.', requirements: ['Technical SEO knowledge', 'SEMrush / Ahrefs', 'Content optimization', 'Link building', 'Core Web Vitals'] },
]

const perks = [
  { icon: '💰', title: 'Competitive Pay', desc: 'Market-beating salaries and performance bonuses' },
  { icon: '🏠', title: 'Remote Friendly', desc: 'Flexible work-from-home options available' },
  { icon: '📚', title: 'Learning Budget', desc: 'Annual budget for courses, books, and conferences' },
  { icon: '⚡', title: 'Fast Growth', desc: 'Rapid promotion paths in a scaling company' },
  { icon: '🎯', title: 'Impactful Work', desc: 'Real projects that reach thousands of users' },
  { icon: '🤝', title: 'Great Team', desc: 'Collaborative culture with top-tier mentors' },
]

function ApplyModal({ job, onClose }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', linkedin: '', cover: '' })
  const [resume, setResume] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!resume) { toast.error('Please upload your resume'); return }
    setLoading(true)
    try {
      const fd = new FormData()
      Object.entries(form).forEach(([k, v]) => fd.append(k, v))
      fd.append('jobId', job.id)
      fd.append('jobTitle', job.title)
      fd.append('resume', resume)
      await api.post('/careers/apply', fd, { headers: { 'Content-Type': 'multipart/form-data' } })
      toast.success('Application submitted! We\'ll be in touch.')
      onClose()
    } catch {
      toast.error('Submission failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <motion.div
      className="fixed inset-0 z-[99000] flex items-start md:items-center justify-center p-4 overflow-y-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-xl" onClick={onClose} />
      <motion.div
        className="relative w-full max-w-lg gradient-border rounded-2xl p-6 sm:p-8 my-auto max-h-[calc(100vh-2rem)] overflow-y-auto overscroll-contain"
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
      >
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-white font-poppins font-bold text-lg">Apply for</h3>
            <p className="text-red-400 text-sm">{job.title}</p>
          </div>
          <button onClick={onClose} className="w-8 h-8 rounded-lg glass flex items-center justify-center text-white/60 hover:text-white">
            <X size={16} />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          {[
            { key: 'name', label: 'Full Name *', type: 'text', placeholder: 'John Doe' },
            { key: 'email', label: 'Email *', type: 'email', placeholder: 'john@email.com' },
            { key: 'phone', label: 'Phone', type: 'tel', placeholder: '+91 98765 43210' },
            { key: 'linkedin', label: 'LinkedIn / Portfolio URL', type: 'url', placeholder: 'https://linkedin.com/in/...' },
          ].map(({ key, label, type, placeholder }) => (
            <div key={key}>
              <label className="text-white/40 text-xs font-grotesk tracking-wide block mb-1.5">{label}</label>
              <input
                type={type}
                value={form[key]}
                onChange={e => setForm(f => ({ ...f, [key]: e.target.value }))}
                className="input-glass text-sm py-3"
                placeholder={placeholder}
                required={key === 'name' || key === 'email'}
              />
            </div>
          ))}
          <div>
            <label className="text-white/40 text-xs font-grotesk tracking-wide block mb-1.5">Cover Letter</label>
            <textarea
              rows={3}
              value={form.cover}
              onChange={e => setForm(f => ({ ...f, cover: e.target.value }))}
              className="input-glass text-sm py-3 resize-none"
              placeholder="Tell us why you'd be a great fit..."
            />
          </div>
          <div>
            <label className="text-white/40 text-xs font-grotesk tracking-wide block mb-1.5">Resume / CV * (PDF, max 5MB)</label>
            <label className="flex items-center gap-3 p-4 glass rounded-xl border border-dashed border-white/15 hover:border-red-500/30 transition-colors cursor-pointer">
              <Upload size={18} className="text-red-400" />
              <span className="text-white/50 text-sm">{resume ? resume.name : 'Click to upload resume'}</span>
              <input type="file" accept=".pdf,.doc,.docx" className="hidden" onChange={e => setResume(e.target.files[0])} />
            </label>
          </div>
          <button type="submit" disabled={loading} className="btn-primary w-full text-sm mt-2">
            <span className="relative z-10">
              {loading ? 'Submitting...' : 'Submit Application'}
            </span>
          </button>
        </form>
      </motion.div>
    </motion.div>
  )
}

export default function Careers() {
  const [applying, setApplying] = useState(null)
  const [expanded, setExpanded] = useState(null)

  return (
    <PageTransition>
      <Helmet>
        <title>Careers | Red Moon Technology</title>
        <meta name="description" content="Join Red Moon Technology. We're hiring talented developers, designers, and marketers." />
      </Helmet>

      {/* Hero */}
      <section className="relative pt-36 pb-20 bg-black overflow-hidden">
        <div className="absolute inset-0 bg-hero-radial pointer-events-none" />
        <div className="absolute inset-0 line-pattern opacity-20" />
        <div className="container-custom text-center relative z-10">
          <FadeInUp>
            <span className="eyebrow mb-5 block">Careers</span>
            <h1 className="heading-section text-white mb-5">
              Build the Future <span className="gradient-text">With Us</span>
            </h1>
            <p className="text-white/50 max-w-xl mx-auto text-base leading-relaxed">
              Join a team of passionate builders creating world-class digital products. We move fast, learn constantly, and celebrate wins together.
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* Perks */}
      <section className="section-padding bg-dark-surface">
        <div className="container-custom">
          <FadeInUp className="text-center mb-12">
            <h2 className="heading-section text-white mb-4">Why Join <span className="gradient-text">Red Moon?</span></h2>
          </FadeInUp>
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 gap-5" staggerDelay={0.1}>
            {perks.map(p => (
              <StaggerItem key={p.title}>
                <div className="glass rounded-2xl p-6 card-hover text-center">
                  <div className="text-3xl mb-3">{p.icon}</div>
                  <h3 className="text-white font-grotesk font-semibold text-sm mb-2">{p.title}</h3>
                  <p className="text-white/40 text-xs">{p.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Jobs */}
      <section className="section-padding bg-black">
        <div className="container-custom">
          <FadeInUp className="text-center mb-12">
            <span className="eyebrow mb-4 block">Open Roles</span>
            <h2 className="heading-section text-white">Current <span className="gradient-text">Openings</span></h2>
          </FadeInUp>
          <div className="space-y-4 max-w-4xl mx-auto">
            {jobs.map((job, i) => (
              <FadeInUp key={job.id} delay={i * 0.06}>
                <div className={`gradient-border rounded-2xl overflow-hidden transition-all duration-300 ${expanded === job.id ? 'border-red-500/30' : ''}`}>
                  <button
                    className="w-full text-left p-6 flex items-start justify-between gap-4"
                    onClick={() => setExpanded(expanded === job.id ? null : job.id)}
                  >
                    <div className="flex-1">
                      <h3 className="text-white font-grotesk font-semibold text-base mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-3">
                        <span className="flex items-center gap-1.5 text-white/40 text-xs"><Briefcase size={12} /> {job.dept}</span>
                        <span className="flex items-center gap-1.5 text-white/40 text-xs"><Clock size={12} /> {job.type}</span>
                        <span className="flex items-center gap-1.5 text-white/40 text-xs"><MapPin size={12} /> {job.location}</span>
                      </div>
                    </div>
                    <motion.div animate={{ rotate: expanded === job.id ? 180 : 0 }} transition={{ duration: 0.2 }}>
                      <ChevronDown size={18} className="text-white/40 shrink-0" />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {expanded === job.id && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: 'auto' }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        style={{ overflow: 'hidden' }}
                      >
                        <div className="px-6 pb-6 border-t border-white/5 pt-5">
                          <p className="text-white/60 text-sm leading-relaxed mb-5">{job.desc}</p>
                          <div className="mb-6">
                            <h4 className="text-white/40 text-xs font-grotesk tracking-wide mb-3">REQUIREMENTS</h4>
                            <ul className="space-y-2">
                              {job.requirements.map(r => (
                                <li key={r} className="flex items-center gap-2.5 text-white/60 text-sm">
                                  <div className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />{r}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <button onClick={() => setApplying(job)} className="btn-primary text-sm">
                            <span className="relative z-10">Apply Now</span>
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* Apply Modal */}
      <AnimatePresence>
        {applying && <ApplyModal job={applying} onClose={() => setApplying(null)} />}
      </AnimatePresence>
    </PageTransition>
  )
}
