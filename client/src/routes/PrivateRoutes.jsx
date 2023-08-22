import { Dashboard } from 'pages'
import { useSelector } from 'react-redux'
import { useCheckUserAuthState } from 'hooks'
import { Loader, Protected } from 'components'
import { Route, Routes } from 'react-router-dom'

export const PrivateRoutes = () => {
  const { user } = useSelector((state) => state.user)
  useCheckUserAuthState()

  return (
    <div>
      {Object.keys(user)?.length ? (
        <Routes>
          <Route element={<Protected />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/abc" element={<h1>abc</h1>} />
            <Route path="/hello" element={<h1>hello route</h1>} />
            <Route path="/hi" element={<h1>hi route</h1>} />
          </Route>
        </Routes>
      ) : (
        <div className="h-screen flex justify-center items-center">
          <Loader />
        </div>
      )}
    </div>
  )
}
