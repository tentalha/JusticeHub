import { Cases, Dashboard, Investigators, ManageInvestigators, ManageOperators, Operators, Inbox, ManageCriminals, CreateFIR  } from 'pages'
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
              <Route path="/cases" element={<Cases />} />
              ) : null}
              {user.role === 'admin' ? (
                <Route path="/manageInvestigators" element={<ManageInvestigators />} />
              ) : null}
              {user.role === 'admin' ? (
                <Route path="/manageOperators" element={<ManageOperators />} />
              ) : null}
              {user.role === 'admin' ? (
                <Route path="/createFIR" element={<CreateFIR />} />
              ) : null}
              {user.role === 'admin' ? (
                <Route path="/manageCriminals" element={<ManageCriminals />} />
              ) : null}
              {user.role === 'citizen' ? (
              <Route path="/inbox" element={<Inbox />} />
              ) : null}
              
              <Route path='/' element={<Dashboard />} />
              


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
