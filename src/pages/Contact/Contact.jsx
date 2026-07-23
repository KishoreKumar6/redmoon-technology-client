import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react'
import { FadeInUp, SlideInLeft, SlideInRight, PageTransition } from '../../components/animations/index.jsx'
import api from '../../api/axios.js'
import toast from 'react-hot-toast'

const services = [
  'Website Development', 'Mobile App Development', 'Digital Marketing',
  'SEO Optimization', 'E-Commerce Development', 'CRM Development',
  'UI/UX Design', 'WhatsApp Automation', 'Other',
]

const contactInfo = [
  { icon: Mail, label: 'Email Us', value: 'redmoontechnologyofficial@gmail.com', href: 'mailto:redmoontechnologyofficial@gmail.com' },
  { icon: Phone, label: 'Call Us', value: '+91 96296 21359', href: 'tel:+919629621359' },
  { icon: MapPin, label: 'Visit Us', value: 'MBT Road, Navalpure, Ranipet, Tamil Nadu 632401', href: '#map' },
  { icon: Clock, label: 'Working Hours', value: 'Mon–Sat: 9:00 AM – 7:00 PM IST', href: null },
]

const initialForm = { name: '', email: '', phone: '', company: '', service: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (form.email && !form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = 'Valid email required'
    if (!form.message.trim()) e.message = 'Message is required'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleChange = (k, v) => {
    setForm(f => ({ ...f, [k]: v }))
    if (errors[k]) setErrors(e => ({ ...e, [k]: '' }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return
    setLoading(true)
    try {
      await api.post('/contact', form)
      setSubmitted(true)
      toast.success('Message sent! We\'ll get back to you within 24 hours.')
    } catch {
      toast.error('Failed to send. Please try again or WhatsApp us.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <PageTransition>
      <Helmet>
        <title>Contact Us | Red Moon Technology</title>
        <meta name="description" content="Get in touch with Red Moon Technology. We're available Mon–Sat, 9AM–7PM IST." />
      </Helmet>

      {/* Hero */}
      <section className="relative pt-36 pb-20 bg-black overflow-hidden">
        <div className="absolute inset-0 bg-hero-radial pointer-events-none" />
        <div className="absolute inset-0 line-pattern opacity-20" />
        <div className="container-custom text-center relative z-10">
          <FadeInUp>
            <span className="eyebrow mb-5 block">Contact Us</span>
            <h1 className="heading-section text-white mb-5">
              Let's Build Something <span className="gradient-text">Together</span>
            </h1>
            <p className="text-white/50 max-w-xl mx-auto text-base leading-relaxed">
              Have a project in mind? We'd love to hear about it. Drop us a message and we'll respond within 24 hours.
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* Main */}
      <section className="section-padding bg-black">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Left info */}
            <SlideInLeft className="lg:col-span-2 space-y-6">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="glass rounded-2xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center shrink-0">
                      <Icon size={17} className="text-red-400" />
                    </div>
                    <div>
                      <div className="text-white/40 text-xs font-grotesk tracking-wide mb-1">{label}</div>
                      {href ? (
                        <a href={href} className="text-white text-sm hover:text-red-400 transition-colors break-all">{value}</a>
                      ) : (
                        <div className="text-white text-sm">{value}</div>
                      )}
                    </div>
                  </div>
                </div>
              ))}

              {/* Map */}
              <div id="map" className="rounded-2xl overflow-hidden border border-white/5 h-56">
                <iframe
                  title="Red Moon Technology Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.1!2d79.3!3d12.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU0JzAwLjAiTiA3OcKwMTgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </SlideInLeft>

            {/* Right form */}
            <SlideInRight className="lg:col-span-3">
              {submitted ? (
                <motion.div
                  className="gradient-border rounded-2xl p-12 text-center h-full flex flex-col items-center justify-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <motion.div
                    animate={{ scale: [0.8, 1.1, 1] }}
                    transition={{ duration: 0.5 }}
                    className="w-20 h-20 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center mb-6"
                  >
                    <CheckCircle size={36} className="text-green-400" />
                  </motion.div>
                  <h3 className="text-white font-poppins font-bold text-2xl mb-3">Message Sent!</h3>
                  <p className="text-white/50 text-sm mb-8 max-w-sm">We've received your enquiry and will get back to you within 24 hours. If you shared an email, you'll receive a confirmation there.</p>
                  <button onClick={() => { setSubmitted(false); setForm(initialForm) }} className="btn-secondary text-sm">
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <div className="gradient-border rounded-2xl p-8">
                  <h2 className="text-white font-grotesk font-bold text-xl mb-7">Send us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-white/50 text-xs font-grotesk tracking-wide block mb-2">Full Name *</label>
                        <input
                          type="text"
                          value={form.name}
                          onChange={(e) => handleChange('name', e.target.value)}
                          className={`input-glass ${errors.name ? 'border-red-500/50' : ''}`}
                          placeholder="John Doe"
                        />
                        {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                      </div>
                      <div>
                        <label className="text-white/50 text-xs font-grotesk tracking-wide block mb-2">Email (optional)</label>
                        <input
                          type="email"
                          value={form.email}
                          onChange={(e) => handleChange('email', e.target.value)}
                          className={`input-glass ${errors.email ? 'border-red-500/50' : ''}`}
                          placeholder="john@company.com"
                        />
                        {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                      </div>
                      <div>
                        <label className="text-white/50 text-xs font-grotesk tracking-wide block mb-2">Phone</label>
                        <input
                          type="tel"
                          value={form.phone}
                          onChange={(e) => handleChange('phone', e.target.value)}
                          className="input-glass"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                      <div>
                        <label className="text-white/50 text-xs font-grotesk tracking-wide block mb-2">Company</label>
                        <input
                          type="text"
                          value={form.company}
                          onChange={(e) => handleChange('company', e.target.value)}
                          className="input-glass"
                          placeholder="Your Company"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-white/50 text-xs font-grotesk tracking-wide block mb-2">Service Interested</label>
                      <select
                        value={form.service}
                        onChange={(e) => handleChange('service', e.target.value)}
                        className="input-glass"
                      >
                        <option value="" disabled>Select a service</option>
                        {services.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="text-white/50 text-xs font-grotesk tracking-wide block mb-2">Message *</label>
                      <textarea
                        rows={5}
                        value={form.message}
                        onChange={(e) => handleChange('message', e.target.value)}
                        className={`input-glass resize-none ${errors.message ? 'border-red-500/50' : ''}`}
                        placeholder="Tell us about your project, goals, and timeline..."
                      />
                      {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                    </div>
                    <button type="submit" disabled={loading} className="btn-primary w-full text-sm">
                      {loading ? (
                        <span className="flex items-center justify-center gap-2">
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </span>
                      ) : (
                        <span className="relative z-10 flex items-center justify-center gap-2">
                          <Send size={16} /> Send Message
                        </span>
                      )}
                    </button>
                  </form>
                </div>
              )}
            </SlideInRight>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
