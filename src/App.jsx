import { AllRoutes } from 'routes'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/*" element={<AllRoutes />} />
      </Routes>
      <ToastContainer />
    </>
  )
}

export default App
