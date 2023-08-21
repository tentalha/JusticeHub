import { AllRoutes } from 'routes'
import { ToastContainer } from 'react-toastify'
import { Routes, Route } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'

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
