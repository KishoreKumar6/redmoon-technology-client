import { useState, useEffect } from 'react'
import { Search, Download, Trash2, Mail, Eye, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import api from '../../../api/axios.js'
import toast from 'react-hot-toast'

function ContactModal({ contact, onClose }) {
  return (
    <motion.div className="fixed inset-0 z-[9999] flex items-center justify-center p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <div className="absolute inset-0 bg-black/80 backdrop-blur-xl" onClick={onClose} />
      <motion.div className="relative w-full max-w-lg rounded-2xl border border-white/10 bg-[#0f0f0f] p-8" initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }}>
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-white font-grotesk font-semibold">Enquiry Details</h3>
          <button onClick={onClose} className="text-white/40 hover:text-white"><X size={18} /></button>
        </div>
        <div className="space-y-3 mb-6">
          {[['Name', contact.name], ['Email', contact.email], ['Phone', contact.phone], ['Company', contact.company], ['Service', contact.service]].map(([k, v]) => v && (
            <div key={k} className="flex gap-3 text-sm">
              <span className="text-white/30 w-20 shrink-0">{k}</span>
              <span className="text-white">{v}</span>
            </div>
          ))}
        </div>
        <div className="bg-white/3 rounded-xl p-4 mb-6">
          <p className="text-white/30 text-xs mb-2">Message</p>
          <p className="text-white/70 text-sm leading-relaxed">{contact.message}</p>
        </div>
        <a href={`mailto:${contact.email}`} className="btn-primary text-sm w-full text-center">
          <span className="relative z-10 flex items-center justify-center gap-2"><Mail size={14} /> Reply via Email</span>
        </a>
      </motion.div>
    </motion.div>
  )
}

export default function AdminContacts() {
  const [contacts, setContacts] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [viewing, setViewing] = useState(null)

  useEffect(() => {
    api.get('/admin/contacts').then(r => setContacts(r.data)).catch(() => setContacts([])).finally(() => setLoading(false))
  }, [])

  const sampleContacts = [
    { _id: '1', name: 'Rahul Verma', email: 'rahul@email.com', phone: '9876543210', company: 'TechCo', service: 'Website Development', message: 'We need a modern website for our tech startup...', createdAt: '2024-11-20' },
    { _id: '2', name: 'Priya Nair', email: 'priya@company.com', phone: '9765432109', company: 'StyleBrand', service: 'Mobile App', message: 'Looking for a Flutter app for our fashion brand...', createdAt: '2024-11-19' },
    { _id: '3', name: 'Arun Kumar', email: 'arun@startup.io', phone: '9654321098', company: 'GrowthCo', service: 'Digital Marketing', message: 'Need help with Facebook and Google ads campaigns...', createdAt: '2024-11-18' },
  ]

  const data = contacts.length ? contacts : sampleContacts
  const filtered = data.filter(c =>
    c.name?.toLowerCase().includes(search.toLowerCase()) ||
    c.email?.toLowerCase().includes(search.toLowerCase()) ||
    c.service?.toLowerCase().includes(search.toLowerCase())
  )

  const handleDelete = async (id) => {
    if (!confirm('Delete this enquiry?')) return
    try {
      await api.delete(`/admin/contacts/${id}`)
      setContacts(c => c.filter(x => x._id !== id))
      toast.success('Deleted')
    } catch { toast.error('Failed') }
  }

  const exportCSV = () => {
    const headers = 'Name,Email,Phone,Company,Service,Message,Date\n'
    const rows = filtered.map(c => `"${c.name}","${c.email}","${c.phone || ''}","${c.company || ''}","${c.service || ''}","${c.message || ''}","${c.createdAt || ''}"`)
    const csv = headers + rows.join('\n')
    const blob = new Blob([csv], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url; a.download = 'contacts.csv'; a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-white font-poppins font-bold text-xl">Contact Enquiries</h1>
          <p className="text-white/30 text-sm mt-0.5">{filtered.length} enquiries</p>
        </div>
        <button onClick={exportCSV} className="btn-secondary text-xs px-4 py-2">
          <Download size={14} /> Export CSV
        </button>
      </div>

      <div className="relative">
        <Search size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
        <input type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder="Search contacts..." className="input-glass pl-10 text-sm w-full max-w-sm" />
      </div>

      <div className="rounded-2xl border border-white/5 bg-[#0f0f0f] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/5">
                {['Name', 'Email', 'Service', 'Date', 'Actions'].map(h => (
                  <th key={h} className="text-left py-3.5 px-5 text-white/30 text-xs font-grotesk tracking-wide">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {filtered.map(c => (
                <tr key={c._id} className="hover:bg-white/2 transition-colors">
                  <td className="py-3.5 px-5">
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 text-xs font-bold">{c.name?.[0]}</div>
                      <span className="text-white text-sm">{c.name}</span>
                    </div>
                  </td>
                  <td className="py-3.5 px-5 text-white/60 text-sm">{c.email}</td>
                  <td className="py-3.5 px-5"><span className="tag">{c.service || '—'}</span></td>
                  <td className="py-3.5 px-5 text-white/30 text-xs">{c.createdAt?.slice(0, 10)}</td>
                  <td className="py-3.5 px-5">
                    <div className="flex items-center gap-2">
                      <button onClick={() => setViewing(c)} className="w-7 h-7 rounded-lg glass flex items-center justify-center text-white/40 hover:text-white transition-colors"><Eye size={13} /></button>
                      <a href={`mailto:${c.email}`} className="w-7 h-7 rounded-lg glass flex items-center justify-center text-white/40 hover:text-blue-400 transition-colors"><Mail size={13} /></a>
                      <button onClick={() => handleDelete(c._id)} className="w-7 h-7 rounded-lg glass flex items-center justify-center text-white/40 hover:text-red-400 transition-colors"><Trash2 size={13} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <AnimatePresence>{viewing && <ContactModal contact={viewing} onClose={() => setViewing(null)} />}</AnimatePresence>
    </div>
  )
}
