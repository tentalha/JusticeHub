import {
  Cases,
  ManageInvestigators,
  ManageOperators,
  Citizen,
  Inbox,
  ManageCriminals,
  CreateFIR,
  Admin,
  AllFIRs,
  PendingFIRs,
  ActiveFIRs,
  CompletedFIRs,
  ClosedFIRs,
  PendingFirDetail,
  Investigator,
  AssignedFIRs,
  InvesCompletedFIRs,
  InvesClosedFIRs,
  CitizenFIRs,
  Operator,
  OperatorFIRs,
  CheckCriminalStatus,
  EvidenceFolders,
  Evidences,
} from 'pages'
import { useSelector } from 'react-redux'
import { useCheckUserAuthState } from 'hooks'
import { Loader, MainLayout, Protected } from 'components'
import { Route, Routes } from 'react-router-dom'
import { FirDetail } from 'pages/FirDetail'

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
                <Route path="/pendingFIRs" element={<PendingFIRs />} />
              ) : null}
              {user.role === 'admin' ? (
                <Route path="/activeFIRs" element={<ActiveFIRs />} />
              ) : null}
              {user.role === 'admin' ? (
                <Route path="/completedFIRs" element={<CompletedFIRs />} />
              ) : null}
              {user.role === 'admin' ? (
                <Route path="/closedFIRs" element={<ClosedFIRs />} />
              ) : null}
              {user.role === 'admin' ? (
                <Route
                  path="/manageInvestigators"
                  element={<ManageInvestigators />}
                />
              ) : null}
              {user.role === 'admin' ? (
                <Route path="/manageOperators" element={<ManageOperators />} />
              ) : null}
              {user.role === 'admin' ? (
                <Route path="/manageCriminals" element={<ManageCriminals />} />
              ) : null}
              {user.role === 'admin' ? (
                <Route path="/" element={<Admin />} />
              ) : null}
              {user.role === 'admin' ? (
                <Route path="/allFIRs" element={<AllFIRs />} />
              ) : null}
              {user.role === 'admin' ? (
                <Route path="/firDetail/:id" element={<FirDetail />} />
              ) : null}
              {user.role === 'admin' ? (
                <Route
                  path="/pendingFirDetail/:id"
                  element={<PendingFirDetail />}
                />
              ) : null}
              {user.role === 'citizen' ? (
                <Route path="/inbox" element={<Inbox />} />
              ) : null}
              {user.role === 'citizen' ? (
                <Route path="/" element={<Citizen />} />
              ) : null}
              {user.role === 'citizen' ? (
                <Route path="/citizenFIRs" element={<CitizenFIRs />} />
              ) : null}
              {user.role === 'citizen' ? (
                <Route path="/firDetail/:id" element={<FirDetail />} />
              ) : null}
              {user.role === 'investigator' ? (
                <Route path="/" element={<Investigator />} />
              ) : null}
              {user.role === 'investigator' ? (
                <Route path="/assignedFIRs" element={<AssignedFIRs />} />
              ) : null}
              {user.role === 'investigator' ? (
                <Route path="/firDetail/:id" element={<FirDetail />} />
              ) : null}
              {user.role === 'investigator' ? (
                <Route
                  path="/invesCompletedFIRs"
                  element={<InvesCompletedFIRs />}
                />
              ) : null}
              {user.role === 'investigator' ? (
                <Route path="/invesClosedFIRs" element={<InvesClosedFIRs />} />
              ) : null}
              {user.role === 'investigator' ? (
                <Route
                  path="/evidenceFolders/:firId"
                  element={<EvidenceFolders />}
                />
              ) : null}
              {user.role === 'investigator' ? (
                <Route path="/evidences" element={<Evidences />} />
              ) : null}
              {user.role === 'operator' ? (
                <Route path="/" element={<Operator />} />
              ) : null}
              {user.role === 'operator' ? (
                <Route path="/createFIR" element={<CreateFIR />} />
              ) : null}
              {user.role === 'operator' ? (
                <Route path="/operatorFIRs" element={<OperatorFIRs />} />
              ) : null}
              {user.role === 'operator' ? (
                <Route
                  path="/checkCriminalStatus"
                  element={<CheckCriminalStatus />}
                />
              ) : null}
              {user.role === 'operator' ? (
                <Route path="/firDetail/:id" element={<FirDetail />} />
              ) : null}
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
