import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { Users, Mail, FolderOpen, TrendingUp, Eye, MessageSquare } from 'lucide-react'
import api from '../../api/axios.js'

const chartData = [
  { month: 'Jun', visitors: 1200, enquiries: 8 },
  { month: 'Jul', visitors: 1800, enquiries: 12 },
  { month: 'Aug', visitors: 2200, enquiries: 15 },
  { month: 'Sep', visitors: 1900, enquiries: 11 },
  { month: 'Oct', visitors: 2800, enquiries: 19 },
  { month: 'Nov', visitors: 3200, enquiries: 24 },
]

function StatCard({ icon: Icon, label, value, change, color }) {
  return (
    <motion.div
      className="rounded-2xl p-6 border border-white/5 bg-[#0f0f0f]"
      whileHover={{ scale: 1.01 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center`} style={{ background: color + '22', border: `1px solid ${color}33` }}>
          <Icon size={17} style={{ color }} />
        </div>
        {change && (
          <span className="text-green-400 text-xs font-grotesk bg-green-500/10 px-2 py-0.5 rounded-full">
            +{change}%
          </span>
        )}
      </div>
      <div className="text-white font-poppins font-bold text-2xl mb-1">{value}</div>
      <div className="text-white/40 text-xs font-grotesk">{label}</div>
    </motion.div>
  )
}

export default function Dashboard() {
  const [stats, setStats] = useState({ contacts: 0, projects: 0, subscribers: 0 })

  useEffect(() => {
    api.get('/admin/stats').then(r => setStats(r.data)).catch(() => {})
  }, [])

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-white font-poppins font-bold text-2xl mb-1">Dashboard</h1>
        <p className="text-white/30 text-sm">Welcome back! Here's what's happening.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard icon={Eye} label="Monthly Visitors" value="3,247" change="18" color="#ff0000" />
        <StatCard icon={Mail} label="Enquiries" value={stats.contacts || '24'} change="12" color="#3b82f6" />
        <StatCard icon={FolderOpen} label="Projects" value="12" change="8" color="#8b5cf6" />
        <StatCard icon={Users} label="Subscribers" value={stats.subscribers || '89'} change="5" color="#10b981" />
      </div>

      {/* Chart */}
      <div className="rounded-2xl p-6 border border-white/5 bg-[#0f0f0f]">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-white font-grotesk font-semibold">Traffic & Enquiries</h3>
          <span className="text-white/30 text-xs">Last 6 months</span>
        </div>
        <ResponsiveContainer width="100%" height={220}>
          <AreaChart data={chartData} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="visGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ff0000" stopOpacity={0.15} />
                <stop offset="95%" stopColor="#ff0000" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="enqGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.15} />
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" />
            <XAxis dataKey="month" tick={{ fill: 'rgba(255,255,255,0.3)', fontSize: 11 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: 'rgba(255,255,255,0.3)', fontSize: 11 }} axisLine={false} tickLine={false} />
            <Tooltip
              contentStyle={{ background: '#111', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, fontSize: 12 }}
              labelStyle={{ color: 'rgba(255,255,255,0.6)' }}
            />
            <Area type="monotone" dataKey="visitors" stroke="#ff0000" strokeWidth={2} fill="url(#visGrad)" name="Visitors" />
            <Area type="monotone" dataKey="enquiries" stroke="#3b82f6" strokeWidth={2} fill="url(#enqGrad)" name="Enquiries" />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Recent contacts */}
      <div className="rounded-2xl border border-white/5 bg-[#0f0f0f] overflow-hidden">
        <div className="flex items-center justify-between p-5 border-b border-white/5">
          <h3 className="text-white font-grotesk font-semibold">Recent Enquiries</h3>
          <a href="/admin/contacts" className="text-red-400 text-xs hover:text-red-300 transition-colors">View all</a>
        </div>
        <div className="divide-y divide-white/5">
          {[
            { name: 'Rahul Verma', email: 'rahul@email.com', service: 'Website Development', time: '2h ago' },
            { name: 'Priya Nair', email: 'priya@company.com', service: 'Mobile App', time: '5h ago' },
            { name: 'Arun Kumar', email: 'arun@startup.io', service: 'Digital Marketing', time: '1d ago' },
            { name: 'Siva Prasad', email: 'siva@corp.in', service: 'CRM Development', time: '2d ago' },
          ].map((c, i) => (
            <div key={i} className="flex items-center gap-4 px-5 py-3.5">
              <div className="w-8 h-8 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 font-bold text-xs shrink-0">
                {c.name[0]}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-white text-sm font-medium">{c.name}</div>
                <div className="text-white/30 text-xs">{c.email}</div>
              </div>
              <span className="tag hidden sm:inline-flex">{c.service}</span>
              <span className="text-white/20 text-xs shrink-0">{c.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
