import React from "react"
import SignUp from "./Components/signUp"
import Login from "./Components/login"

import { BrowserRouter, Route, Routes } from "react-router-dom"

const App = () => {
  return (
    <>
      <BrowserRouter>
      
      <Routes>
        <Route path="/" element = {<SignUp />}></Route>
        <Route path="/login" element = {<Login />}></Route>
      </Routes>

      
      </BrowserRouter>
    </>
  )
}

export default App
