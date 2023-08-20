import { Route, Routes } from 'react-router-dom'
import { Login, SignUp, Dashboard } from 'components'

export const AllRoutes = () => {
  return (
    <Routes>
      <Route>
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Route>
      {/* Private Routes */}
      <Route element>
        <Route path="/" element={<Dashboard />} />
      </Route>
    </Routes>
  )
}
