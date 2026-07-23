import { Navigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext.jsx'

export default function ProtectedRoute({ children }) {
  const { admin, loading } = useAuth()

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-red-500 border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  return admin ? children : <Navigate to="/admin/login" replace />
}
