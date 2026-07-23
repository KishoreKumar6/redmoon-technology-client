// AdminServices.jsx
import { useState, useEffect } from 'react'
import { Plus, Edit2, Trash2, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import api from '../../../api/axios.js'
import toast from 'react-hot-toast'

function ServiceModal({ service, onClose, onSave }) {
  const [form, setForm] = useState(service || { title: '', desc: '', icon: '', features: '' })
  const [loading, setLoading] = useState(false)
  const handleSubmit = async (e) => {
    e.preventDefault(); setLoading(true)
    try {
      if (service?._id) await api.put(`/admin/services/${service._id}`, form)
      else await api.post('/admin/services', form)
      toast.success('Saved!'); onSave(); onClose()
    } catch { toast.error('Failed') } finally { setLoading(false) }
  }
  return (
    <motion.div className="fixed inset-0 z-[9999] flex items-center justify-center p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <div className="absolute inset-0 bg-black/80 backdrop-blur-xl" onClick={onClose} />
      <motion.div className="relative w-full max-w-md rounded-2xl border border-white/10 bg-[#0f0f0f] p-8" initial={{ scale: 0.9 }} animate={{ scale: 1 }}>
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-white font-grotesk font-semibold">{service ? 'Edit Service' : 'Add Service'}</h3>
          <button onClick={onClose} className="text-white/40 hover:text-white"><X size={18} /></button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          {[['title','Title *','text'],['icon','Icon (emoji)','text'],['desc','Description *','textarea']].map(([k,l,t]) => (
            <div key={k}>
              <label className="text-white/40 text-xs block mb-1.5">{l}</label>
              {t === 'textarea'
                ? <textarea rows={3} value={form[k]} onChange={e => setForm(f => ({...f,[k]:e.target.value}))} className="input-glass text-sm resize-none" required />
                : <input type="text" value={form[k]} onChange={e => setForm(f => ({...f,[k]:e.target.value}))} className="input-glass text-sm" required={k==='title'} />}
            </div>
          ))}
          <div>
            <label className="text-white/40 text-xs block mb-1.5">Features (comma-separated)</label>
            <input type="text" value={form.features} onChange={e => setForm(f => ({...f,features:e.target.value}))} className="input-glass text-sm" placeholder="Feature 1, Feature 2, ..." />
          </div>
          <button type="submit" disabled={loading} className="btn-primary w-full text-sm">
            <span className="relative z-10">{loading ? 'Saving...' : 'Save Service'}</span>
          </button>
        </form>
      </motion.div>
    </motion.div>
  )
}

export default function AdminServices() {
  const [services, setServices] = useState([])
  const [modal, setModal] = useState(null)
  const load = () => api.get('/admin/services').then(r => setServices(r.data)).catch(() => setServices([
    { _id: '1', icon: '🌐', title: 'Website Development', desc: 'Premium websites built with modern tech.' },
    { _id: '2', icon: '📱', title: 'Mobile App Development', desc: 'iOS and Android apps using Flutter.' },
  ]))
  useEffect(() => { load() }, [])
  const del = async (id) => {
    if (!confirm('Delete?')) return
    await api.delete(`/admin/services/${id}`).catch(() => {})
    setServices(s => s.filter(x => x._id !== id))
    toast.success('Deleted')
  }
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-white font-poppins font-bold text-xl">Services</h1>
        <button onClick={() => setModal('new')} className="btn-primary text-xs px-4 py-2"><span className="relative z-10 flex items-center gap-1.5"><Plus size={14} /> Add Service</span></button>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map(s => (
          <div key={s._id} className="rounded-2xl border border-white/5 bg-[#0f0f0f] p-5">
            <div className="text-2xl mb-3">{s.icon}</div>
            <h3 className="text-white font-grotesk font-semibold text-sm mb-2">{s.title}</h3>
            <p className="text-white/40 text-xs mb-4 line-clamp-2">{s.desc}</p>
            <div className="flex gap-2">
              <button onClick={() => setModal(s)} className="flex items-center gap-1 text-xs text-white/40 hover:text-white transition-colors"><Edit2 size={12} /> Edit</button>
              <button onClick={() => del(s._id)} className="flex items-center gap-1 text-xs text-white/40 hover:text-red-400 transition-colors"><Trash2 size={12} /> Delete</button>
            </div>
          </div>
        ))}
      </div>
      <AnimatePresence>
        {modal && <ServiceModal service={modal === 'new' ? null : modal} onClose={() => setModal(null)} onSave={load} />}
      </AnimatePresence>
    </div>
  )
}
