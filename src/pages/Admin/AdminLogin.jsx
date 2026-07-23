import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Eye, EyeOff, LogIn } from 'lucide-react'
import { useAuth } from '../../context/AuthContext.jsx'
import toast from 'react-hot-toast'

export default function AdminLogin() {
  const [form, setForm] = useState({ email: '', password: '' })
  const [showPw, setShowPw] = useState(false)
  const [loading, setLoading] = useState(false)
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await login(form.email, form.password)
      toast.success('Welcome back!')
      navigate('/admin')
    } catch {
      toast.error('Invalid credentials')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-radial opacity-50" />
      <div className="absolute inset-0 line-pattern opacity-20" />

      <motion.div
        className="w-full max-w-md relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Logo */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="relative w-12 h-12">
              <div className="w-full h-full rounded-full" style={{ background: 'radial-gradient(circle at 35% 40%, #ff0000, #8b0000, #1a0000)' }} />
              <div className="absolute inset-0 rounded-full" style={{ background: 'radial-gradient(circle at 65% 35%, transparent 36%, rgba(0,0,0,0.92) 38%)' }} />
            </div>
            <div className="text-left">
              <div className="font-poppins font-bold text-lg"><span className="text-white">RED</span><span className="gradient-text"> MOON</span></div>
              <div className="text-white/30 text-[9px] tracking-[0.3em]">ADMIN PANEL</div>
            </div>
          </div>
          <p className="text-white/30 text-sm">Sign in to your admin dashboard</p>
        </div>

        <div className="gradient-border rounded-2xl p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="text-white/40 text-xs font-grotesk tracking-wide block mb-2">Email</label>
              <input
                type="email"
                value={form.email}
                onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                className="input-glass"
                placeholder="admin@redmoontechnology.com"
                required
                autoComplete="email"
              />
            </div>
            <div>
              <label className="text-white/40 text-xs font-grotesk tracking-wide block mb-2">Password</label>
              <div className="relative">
                <input
                  type={showPw ? 'text' : 'password'}
                  value={form.password}
                  onChange={e => setForm(f => ({ ...f, password: e.target.value }))}
                  className="input-glass pr-12"
                  placeholder="••••••••"
                  required
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  onClick={() => setShowPw(!showPw)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-white transition-colors"
                >
                  {showPw ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>
            <button type="submit" disabled={loading} className="btn-primary w-full mt-2">
              <span className="relative z-10 flex items-center justify-center gap-2">
                {loading ? (
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <><LogIn size={16} /> Sign In</>
                )}
              </span>
            </button>
          </form>
        </div>

        <p className="text-center text-white/20 text-xs mt-6">
          Access restricted to authorized administrators only
        </p>
      </motion.div>
    </div>
  )
}
