import { Route, Routes } from 'react-router-dom'
import { Login, SignUp } from 'pages'
import { PrivateRoutes } from 'routes/PrivateRoutes'

export const AllRoutes = () => {
  //For checking user auth state

  return (
    <>
      <Routes>
        <Route>
          {/*Public Routes*/}
          <Route path="/register" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Route>
        {/* Private Routes */}
        <Route path="/*" element={<PrivateRoutes />} />
      </Routes>
    </>
  )
}
