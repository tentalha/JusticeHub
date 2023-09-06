import { Cases, Dashboard, Investigators, Operators } from 'pages'
import { useSelector } from 'react-redux'
import { useCheckUserAuthState } from 'hooks'
import { Loader, MainLayout, Protected } from 'components'
import { Route, Routes } from 'react-router-dom'

export const PrivateRoutes = () => {
  const { user } = useSelector((state) => state.user)
  useCheckUserAuthState()

  return (
    <div>
      {Object.keys(user)?.length ? (
        <Routes>
          <Route element={<MainLayout />}>
            <Route element={<Protected />}>
              <Route path="/" element={<Dashboard />} />
              {user.role === 'admin' ? (
                <Route path="/investigators" element={<Investigators />} />
              ) : null}
              {user.role === 'admin' ? (
                <Route path="/operators" element={<Operators />} />
              ) : null}
              <Route path="/cases" element={<Cases />} />
            </Route>
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
