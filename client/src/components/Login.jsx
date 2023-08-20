import { Link } from "react-router-dom"
import { useState } from "react"
import signInUser from "features/thunk/signInUser"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

export const Login = () => {

  const [loginInfo, setLoginInfo] = useState({})
  const [errors, setErrors] = useState({})

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getUserData = (e) => {
    setLoginInfo({ ...loginInfo, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const validationErrors = {}

    if (!loginInfo.email) {
      validationErrors.email = 'Email is required'
    } else if (!loginInfo.email.includes('@')) {
      validationErrors.email = 'Invalid email address'
    }
    if (!loginInfo.password) {
      validationErrors.password = 'password is required'
    } else if (loginInfo.password.length < 8) {
      validationErrors.password = 'password is too short'
    }
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
    } else {
      setErrors({}) // Clear any existing errors
      dispatch(signInUser(loginInfo));
    }

    console.log(loginInfo)
  }

  return(
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 via-purple-400  to-purple-200">
   
      <div className="max-w-lg w-full mx-4 p-6 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-2xl mb-4 text-center font-bold">Welcome Back!</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="email" className="text-gray-700 font-semibold">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full mt-2 px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            placeholder="Enter your email"
            onChange={getUserData}
          />
          {errors.email && <p className="text-red-500">{errors.email}</p>}
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 font-semibold mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            placeholder="Enter atleat 8 characters long password"
            onChange={getUserData}
          />
          {errors.password && <p className="text-red-500">{errors.password}</p>}
        </div>
        <div className="flex">
          <button
            type="submit"
            className="  px-4 py-2 bg-black text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600 font-bold"
            Login
            onClick={handleSubmit}
          >
            Login
          </button>
          <div className=" justify-end mt-2 ml-56 font-bold">
          <Link to ="/"className="mr-4 text-blue-500 hover:underline">
            Forgot Password?
          </Link>
        </div>
        </div>
        <div className="flex justify-center mt-4">
          <Link to ="/"className="mr-4 text-blue-500 hover:underline font-bold ">
            Dont' have an account? Register Here
          </Link>
        </div>
      </form>
      
      
    </div>
    </div>    
  
)
}
