import { Route, Routes } from 'react-router-dom'
import { Login, NotFound, SignUp } from 'pages'
import { PrivateRoutes } from 'routes/PrivateRoutes'

export const AllRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/register" element={<SignUp />} />
      <Route path="/login" element={<Login />} />

      {/* Private Routes */}
      <Route path="/*" element={<PrivateRoutes />} />
      {/* Not Found Route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
