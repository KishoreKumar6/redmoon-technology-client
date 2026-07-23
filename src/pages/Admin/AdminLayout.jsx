import { useState } from 'react'
import { Routes, Route, Link, NavLink, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  LayoutDashboard, Briefcase, FolderOpen, FileText, Users,
  Mail, Newspaper, MessageSquare, Settings, LogOut, Menu, X,
  ChevronRight, Bell
} from 'lucide-react'
import { useAuth } from '../../context/AuthContext.jsx'
import Dashboard from './Dashboard.jsx'
import AdminServices from './sections/AdminServices.jsx'
import AdminPortfolio from './sections/AdminPortfolio.jsx'
import AdminBlogs from './sections/AdminBlogs.jsx'
import AdminCareers from './sections/AdminCareers.jsx'
import AdminContacts from './sections/AdminContacts.jsx'
import AdminNewsletter from './sections/AdminNewsletter.jsx'
import AdminTestimonials from './sections/AdminTestimonials.jsx'
import AdminSettings from './sections/AdminSettings.jsx'

const navItems = [
  { label: 'Dashboard', icon: LayoutDashboard, href: '/admin' },
  { label: 'Services', icon: Briefcase, href: '/admin/services' },
  { label: 'Portfolio', icon: FolderOpen, href: '/admin/portfolio' },
  { label: 'Blog', icon: FileText, href: '/admin/blogs' },
  { label: 'Careers', icon: Users, href: '/admin/careers' },
  { label: 'Contacts', icon: Mail, href: '/admin/contacts' },
  { label: 'Newsletter', icon: Newspaper, href: '/admin/newsletter' },
  { label: 'Testimonials', icon: MessageSquare, href: '/admin/testimonials' },
  { label: 'Settings', icon: Settings, href: '/admin/settings' },
]

function Sidebar({ open, setOpen }) {
  const { admin, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/admin/login')
  }

  return (
    <>
      {/* Mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 lg:hidden"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>

      <motion.aside
        className={`fixed left-0 top-0 bottom-0 z-50 flex flex-col w-64 bg-[#0a0a0a] border-r border-white/5
          lg:translate-x-0 transition-transform duration-300 ${open ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}
      >
        {/* Logo */}
        <div className="flex items-center gap-3 p-6 border-b border-white/5">
          <div className="relative w-9 h-9 shrink-0">
            <div className="w-full h-full rounded-full" style={{ background: 'radial-gradient(circle at 35% 40%, #ff0000, #8b0000, #1a0000)' }} />
            <div className="absolute inset-0 rounded-full" style={{ background: 'radial-gradient(circle at 65% 35%, transparent 36%, rgba(0,0,0,0.92) 38%)' }} />
          </div>
          <div>
            <div className="font-poppins font-bold text-sm text-white">Red Moon</div>
            <div className="text-white/30 text-[9px] tracking-widest">ADMIN PANEL</div>
          </div>
          <button onClick={() => setOpen(false)} className="ml-auto lg:hidden text-white/40 hover:text-white">
            <X size={18} />
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
          {navItems.map(({ label, icon: Icon, href }) => (
            <NavLink
              key={label}
              to={href}
              end={href === '/admin'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 group ${
                  isActive
                    ? 'bg-red-500/15 text-red-400 border border-red-500/20'
                    : 'text-white/50 hover:text-white hover:bg-white/5'
                }`
              }
            >
              <Icon size={16} />
              {label}
              <ChevronRight size={12} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
            </NavLink>
          ))}
        </nav>

        {/* User */}
        <div className="p-4 border-t border-white/5">
          <div className="flex items-center gap-3 px-3 py-3 rounded-xl bg-white/3 mb-2">
            <div className="w-8 h-8 rounded-full bg-red-500/20 border border-red-500/30 flex items-center justify-center text-red-400 font-bold text-xs">
              {admin?.name?.[0] || 'A'}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-white text-xs font-medium truncate">{admin?.name || 'Admin'}</div>
              <div className="text-white/30 text-[10px] truncate">{admin?.email}</div>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2.5 w-full px-3 py-2.5 rounded-xl text-white/40 hover:text-red-400 hover:bg-red-500/10 transition-all text-sm"
          >
            <LogOut size={15} /> Sign Out
          </button>
        </div>
      </motion.aside>
    </>
  )
}

export default function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#050505] flex">
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />

      {/* Main content */}
      <div className="flex-1 lg:ml-64 flex flex-col min-h-screen">
        {/* Top bar */}
        <header className="sticky top-0 z-30 h-16 flex items-center gap-4 px-6 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/5">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden text-white/60 hover:text-white transition-colors"
          >
            <Menu size={20} />
          </button>
          <div className="flex-1" />
          <button className="relative w-9 h-9 rounded-xl glass flex items-center justify-center text-white/60 hover:text-white transition-colors">
            <Bell size={16} />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-red-500" />
          </button>
          <Link to="/" target="_blank" className="text-white/40 hover:text-white text-xs font-grotesk transition-colors">
            View Site ↗
          </Link>
        </header>

        {/* Page content */}
        <main className="flex-1 p-6">
          <Routes>
            <Route index element={<Dashboard />} />
            <Route path="services" element={<AdminServices />} />
            <Route path="portfolio" element={<AdminPortfolio />} />
            <Route path="blogs" element={<AdminBlogs />} />
            <Route path="careers" element={<AdminCareers />} />
            <Route path="contacts" element={<AdminContacts />} />
            <Route path="newsletter" element={<AdminNewsletter />} />
            <Route path="testimonials" element={<AdminTestimonials />} />
            <Route path="settings" element={<AdminSettings />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}
