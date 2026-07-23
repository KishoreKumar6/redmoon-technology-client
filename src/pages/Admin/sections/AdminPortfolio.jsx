import { useState, useEffect } from 'react'
import { Plus, Edit2, Trash2, X, Upload } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import api from '../../../api/axios.js'
import toast from 'react-hot-toast'

export default function AdminPortfolio() {
  const [projects, setProjects] = useState([{ _id: '1', title: 'AquaFlow', category: 'E-Commerce', tech: 'React, Node', client: 'AquaFlow Ltd', year: '2024' }])
  const [modal, setModal] = useState(null)
  const [form, setForm] = useState({ title: '', category: '', tech: '', client: '', desc: '', year: '' })

  const del = (id) => { setProjects(p => p.filter(x => x._id !== id)); toast.success('Deleted') }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-white font-poppins font-bold text-xl">Portfolio</h1>
        <button onClick={() => { setForm({ title:'',category:'',tech:'',client:'',desc:'',year:'' }); setModal('new') }} className="btn-primary text-xs px-4 py-2">
          <span className="relative z-10 flex items-center gap-1.5"><Plus size={14}/> Add Project</span>
        </button>
      </div>
      <div className="rounded-2xl border border-white/5 bg-[#0f0f0f] overflow-hidden">
        <table className="w-full">
          <thead><tr className="border-b border-white/5">{['Title','Category','Client','Year','Actions'].map(h => <th key={h} className="text-left py-3.5 px-5 text-white/30 text-xs">{h}</th>)}</tr></thead>
          <tbody className="divide-y divide-white/5">
            {projects.map(p => (
              <tr key={p._id} className="hover:bg-white/2 transition-colors">
                <td className="py-3.5 px-5 text-white text-sm">{p.title}</td>
                <td className="py-3.5 px-5"><span className="tag">{p.category}</span></td>
                <td className="py-3.5 px-5 text-white/50 text-sm">{p.client}</td>
                <td className="py-3.5 px-5 text-white/40 text-sm">{p.year}</td>
                <td className="py-3.5 px-5">
                  <div className="flex gap-2">
                    <button onClick={() => { setForm(p); setModal(p) }} className="w-7 h-7 rounded-lg glass flex items-center justify-center text-white/40 hover:text-white transition-colors"><Edit2 size={13}/></button>
                    <button onClick={() => del(p._id)} className="w-7 h-7 rounded-lg glass flex items-center justify-center text-white/40 hover:text-red-400 transition-colors"><Trash2 size={13}/></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <AnimatePresence>
        {modal && (
          <motion.div className="fixed inset-0 z-[9999] flex items-center justify-center p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="absolute inset-0 bg-black/80 backdrop-blur-xl" onClick={() => setModal(null)} />
            <motion.div className="relative w-full max-w-lg rounded-2xl border border-white/10 bg-[#0f0f0f] p-8" initial={{ scale: 0.9 }} animate={{ scale: 1 }}>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-white font-grotesk font-semibold">{modal === 'new' ? 'Add Project' : 'Edit Project'}</h3>
                <button onClick={() => setModal(null)} className="text-white/40 hover:text-white"><X size={18}/></button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[['title','Title *'],['category','Category'],['client','Client'],['year','Year'],['tech','Technologies']].map(([k,l]) => (
                  <div key={k} className={k === 'tech' ? 'col-span-2' : ''}>
                    <label className="text-white/40 text-xs block mb-1.5">{l}</label>
                    <input type="text" value={form[k]} onChange={e => setForm(f => ({...f,[k]:e.target.value}))} className="input-glass text-sm"/>
                  </div>
                ))}
                <div className="col-span-2">
                  <label className="text-white/40 text-xs block mb-1.5">Description</label>
                  <textarea rows={3} value={form.desc} onChange={e => setForm(f => ({...f,desc:e.target.value}))} className="input-glass text-sm resize-none"/>
                </div>
              </div>
              <button onClick={() => { toast.success('Saved!'); setModal(null) }} className="btn-primary w-full text-sm mt-5">
                <span className="relative z-10">Save Project</span>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
