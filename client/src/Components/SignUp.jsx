import React, { useState } from 'react';
//import { useDispatch } from 'react-redux';
//import { createUser } from '../features/userDetailsSlice';
//import { useNavigate } from 'react-router-dom';

function SignUp() {
  const [citizenInfo, setCitizenInfo] = useState({});
  const [errors, setErrors] = useState({});

  //const dispatch = useDispatch();
  //const navigate = useNavigate();

  const getUserData = (e) => {
    setCitizenInfo({ ...citizenInfo, [e.target.name]: e.target.value });
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform validation
    const validationErrors = {};
    if (!citizenInfo.name) {
      validationErrors.name = 'Name is required';
    }
    if (!citizenInfo.email) {
      validationErrors.email = 'Email is required';
    } else if (!citizenInfo.email.includes('@')) {
      validationErrors.email = 'Invalid email address';
    }
    if (!citizenInfo.password) {
      validationErrors.password = 'password is required';
    }
    else if(citizenInfo.password.length < 8){
      validationErrors.password = 'password is too short';
    }
    if (!citizenInfo.CNIC) {
      validationErrors.CNIC = 'CNIC is required';
    }
    else if(citizenInfo.CNIC.length != 13){
      validationErrors.CNIC = 'Enter a Valid CNIC';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({}); // Clear any existing errors
      //dispatch(createUser(citizenInfo));
      //navigate("/read");
    }

    console.log(citizenInfo);
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Registration Form</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            placeholder="Enter your name"
            onChange={getUserData}
          />
          {errors.name && <p className="text-red-500">{errors.name}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="text-gray-700 font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            placeholder="Enter your email"
            onChange={getUserData}
          />
          {errors.email && <p className="text-red-500">{errors.email}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="age" className="block text-gray-700 font-semibold mb-2">
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
          <label htmlFor="age" className="block text-gray-700 font-semibold mb-2">
            CNIC
          </label>
          <input 
            type='text'
            id="CNIC"
            name="CNIC"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            placeholder="Enter atleat 8 characters long password"
            onChange={getUserData}
          />
          {errors.CNIC && <p className="text-red-500">{errors.CNIC}</p>}
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
