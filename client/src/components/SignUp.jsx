import { useState } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
//import { createUser } from '../features/userDetailsSlice';
import { useNavigate } from 'react-router-dom';
import signUpUser from 'features/thunk/signUpUser';
import InputMask from 'react-input-mask';

export const SignUp = () => {
  const [citizenInfo, setCitizenInfo] = useState({})
  const [errors, setErrors] = useState({})

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getUserData = (e) => {
    setCitizenInfo({ ...citizenInfo, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Perform validation
    const validationErrors = {}
    if (!citizenInfo.name) {
      validationErrors.name = 'Name is required'
    }
    if (!citizenInfo.email) {
      validationErrors.email = 'Email is required'
    } else if (!citizenInfo.email.includes('@')) {
      validationErrors.email = 'Invalid email address'
    }
    if (!citizenInfo.password) {
      validationErrors.password = 'password is required'
    } else if (citizenInfo.password.length < 8) {
      validationErrors.password = 'password is too short'
    }
    if (!citizenInfo.CNIC) {
      validationErrors.CNIC = 'CNIC is required'
    } else if (citizenInfo.CNIC.length != 15) {
      validationErrors.CNIC = 'Enter a Valid CNIC'
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
    } else {
      setErrors({}) // Clear any existing errors
      dispatch(signUpUser(citizenInfo));
      
    }

    console.log(citizenInfo)
  }

  return (
    <>
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 via-purple-400  to-purple-300">
    
    <div className="max-w-lg w-full mx-4 p-6 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Hey, Register Here!</h2>
      <form>
        <div className="mt-4 mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 font-semibold mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            placeholder="Enter your full name"
            onChange={getUserData}
          />
          {errors.name && <p className="text-red-500">{errors.name}</p>}
        </div>
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
        <div className="mb-4">
          <label
            htmlFor="CNIC"
            className="block text-gray-700 font-semibold mb-2"
          >
            CNIC
          </label>
          <InputMask
             mask="99999-9999999-9"
             id="CNIC"
             name="CNIC"
             className={'w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring'}
             placeholder="Enter CNIC (00000-0000000-0)"
             onChange={getUserData}
        
      />
          {errors.CNIC && <p className="text-red-500">{errors.CNIC}</p>}
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className=" font-bold px-4 py-2 bg-black text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </form>
      <div className="flex justify-center mt-4 ">
          <Link to ="/login"className=" text-cyan-700 mr-4 text-blue-500 hover:underline">
            Already have an account? Login
          </Link>
        </div>
    </div>
    </div>
    </>
  )
}
