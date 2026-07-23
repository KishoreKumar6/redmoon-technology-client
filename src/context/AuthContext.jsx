import { createContext, useContext, useState, useEffect } from 'react'
import api from '../api/axios.js'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [admin, setAdmin] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem('rm_admin_token')
    if (token) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`
      api.get('/auth/me')
        .then(res => setAdmin(res.data.admin))
        .catch(() => {
          localStorage.removeItem('rm_admin_token')
          delete api.defaults.headers.common['Authorization']
        })
        .finally(() => setLoading(false))
    } else {
      setLoading(false)
    }
  }, [])

  const login = async (email, password) => {
    const res = await api.post('/auth/login', { email, password })
    const { token, admin } = res.data
    localStorage.setItem('rm_admin_token', token)
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`
    setAdmin(admin)
    return admin
  }

  const logout = () => {
    localStorage.removeItem('rm_admin_token')
    delete api.defaults.headers.common['Authorization']
    setAdmin(null)
  }

  return (
    <AuthContext.Provider value={{ admin, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
