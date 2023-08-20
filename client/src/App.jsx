import { useEffect } from 'react'
import { AllRoutes } from 'routes'
import { ToastContainer } from 'react-toastify'
import { Routes, Route } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  useEffect(() => {
    //Persist user auth logic
  }, [])

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
