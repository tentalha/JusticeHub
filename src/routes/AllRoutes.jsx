import { Route, Routes } from 'react-router-dom'
import { EmailVerification, Login, NotFound, ResetPassword, SignUp } from 'pages'
import { PrivateRoutes } from './PrivateRoutes'


export const AllRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/register" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/emailVerification" element={<EmailVerification />} />
      <Route path="/reset-Password" element={<ResetPassword />} />


      {/* Private Routes */}
      <Route path="/*" element={<PrivateRoutes />} />
      {/* Not Found Route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
