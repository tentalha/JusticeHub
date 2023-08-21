import { Navigate, Outlet } from 'react-router-dom'

export const Protected = () => {
  const jwt = localStorage.getItem('jwt')
  if (!jwt) {
    return <Navigate to="/login" />
  }
  return <Outlet />
}
