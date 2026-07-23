import { useState } from 'react'
import { Plus } from 'lucide-react'

export default function AdminSection() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-white font-poppins font-bold text-xl">Management</h1>
        <button className="btn-primary text-xs px-4 py-2"><span className="relative z-10 flex items-center gap-1.5"><Plus size={14}/> Add New</span></button>
      </div>
      <div className="rounded-2xl border border-white/5 bg-[#0f0f0f] p-8 text-center">
        <div className="text-white/20 text-4xl mb-4">📋</div>
        <p className="text-white/40 text-sm">Connect to the backend API to load data here.</p>
      </div>
    </div>
  )
}
