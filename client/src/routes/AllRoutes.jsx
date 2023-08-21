import { Route, Routes } from 'react-router-dom'
import { Login, SignUp, Dashboard } from 'pages'
import { Protected } from 'components'
import { useCheckUserAuthState } from 'hooks'

export const AllRoutes = () => {
  //For checking user auth state
  useCheckUserAuthState()

  return (
    <Routes>
      <Route>
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Route>
      {/* Private Routes */}
      <Route element={<Protected />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/hello" element={<h1>hi</h1>} />
      </Route>
    </Routes>
  )
}
