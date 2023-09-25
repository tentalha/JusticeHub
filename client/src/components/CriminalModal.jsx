import React from "react";
import InputMask from "react-input-mask";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { createNewOperator } from "features";
import { yupResolver } from "@hookform/resolvers/yup";
import { operatorSchema } from "schema";
import { createNewInvestigator } from "features";
import { useEffect } from "react";

export const CriminalModal = ({isOpen, onClose,}) =>{
    return(
        <div
      id="authentication-modal"
      tabIndex="-1"
      aria-hidden="true"
      className={`fixed top-0 left-0 flex items-center justify-center w-full h-full bg-opacity-50 ${
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      } transition-opacity duration-300 ease-in-out`}
    >    <div class="relative w-full max-w-md max-h-full">

        <div class="relative bg-white rounded-lg shadow ">
            <button onClick={() => onClose()} type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center ">
                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                </svg>
                <span class="sr-only">Close modal</span>
            </button>
            <div class="px-6 py-6 lg:px-8">
                <h3 class="mb-4 text-xl font-medium text-gray-900">Add New Criminal</h3>
                <form class="space-y-6">
                    
                    <div>
                        <label for="name" class="block mb-2 text-sm font-medium text-gray-900">Enter Name</label>
                        <input type="name" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Arshan Yousaf" required/>
                        
                        {/* {errors.name && (
                          <p className="text-red-500 text-sm">
                          {errors.name.message}
                          </p>
                        )} */}
                    </div>
                    
                    <div>
                        <label for="CNIC" class="block mb-2 text-sm font-medium text-gray-900">Enter CNIC</label>
                        <InputMask
                        
                        mask="99999-9999999-9"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Enter CNIC (00000-0000000-0)"
                        />
                        {/* {errors.CNIC && (
                          <p className="text-red-500 text-sm">
                          {errors.CNIC.message}
                          </p>
                        )} */}
                    </div>

                    <div>
                        <label for="age" class="block mb-2 text-sm font-medium text-gray-900">Enter Age</label>
                        <input type="age" name="age" id="age" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Arshan Yousaf" required/>
                        
                        {/* {errors.age && (
                          <p className="text-red-500 text-sm">
                          {errors.age.message}
                          </p>
                        )} */}
                    </div>
                    <div>
                        <label for="image" class="block mb-2 text-sm font-medium text-gray-900 ">Upload Image</label>
                        <input  type="file" name="file" id="file" placeholder="upload image" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required/>
                        
                        {/* {errors.image && (
                          <p className="text-red-500 text-sm">
                          {errors.image.message}
                          </p>
                        )} */}
                    </div>
                    <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Register</button>
                    
                </form>
            </div>
        </div>
    </div>
</div> 
    )
}