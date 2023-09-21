import { Cases, Dashboard, Investigators, ManageInvestigators, ManageOperators, Operators, Inbox } from 'pages'
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
              {user.role === 'citizen' ? (
                <Route path="/" element={<Citizen />} />
              ) : null}
              {user.role === 'admin' ? (
                <Route path="/manageInvestigators" element={<ManageInvestigators />} />
              ) : null}
              {user.role === 'admin' ? (
                <Route path="/manageOperators" element={<ManageOperators />} />
              ) : null}
              <Route path="/cases" element={<Cases />} />
              <Route path='/inbox' element={<Inbox />} />
              


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
