import { Navigate, Outlet } from 'react-router-dom'
import { retrieveJWT } from 'helpers'

export const Protected = () => {
  const jwt = retrieveJWT()
  if (!jwt) {
    return <Navigate to="/login" />
  }
  return <Outlet />
}
