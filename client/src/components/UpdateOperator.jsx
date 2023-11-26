import React from "react";
import InputMask from "react-input-mask";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import {  getAllCriminals, getAllOperators, updateCriminal, updateOperator } from "features";
import { yupResolver } from "@hookform/resolvers/yup";
import { operatorSchema } from "schema";
import { useEffect, useState } from "react";
import { criminalSchema } from "schema/criminalSchema";
import { useNavigate } from "react-router-dom";

export const UpdateOperator = ({isOpen, onClose, operatorId}) =>{
    const [updatedData, setUpdatedData] = useState({});
    const {error} = useSelector((state)=>state.criminal);
    const operatorState = useSelector((state)=> state.operator);
    const operators = operatorState.operators;
    const navigate = useNavigate();
    const dispatch = useDispatch();

    
    useEffect(() => {
      const singleOperator = operators.find((elem) => elem._id === operatorId);
      
      if (singleOperator) {
        setUpdatedData(singleOperator);
      }

    }, []); // Include dependencies
  
    // const preLoadedValues = {
    //   name: updatedData?.name || '',
    //   CNIC: updatedData?.CNIC || '',
    //   age: updatedData?.age || '',
    //   image: updatedData?.image|| null,
    // }

    const {
        register,
        handleSubmit,
        reset, 
        formState: { errors },
      } = useForm({
        defaultValues: {
          name: updatedData?.name,
          email: updatedData?.email,
          CNIC: updatedData?.CNIC,
        },
        mode: 'onBlur',
        resolver: yupResolver(operatorSchema),
      })
      
      useEffect(()=>{
        reset({...updatedData});
      },[updatedData])

    const id = operatorId;
    const handleFormSubmit = (data) =>{
      console.log(data);
        dispatch(updateOperator({id, data})).then (()=>{
        reset();
        toast.success("Updated Successfully!");
        onClose();
        navigate("/manageOperators");
        dispatch(getAllOperators());
        })
    }

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
                <h3 class="mb-4 text-xl font-medium text-gray-900">Update Operator</h3>
                <form class="space-y-6" onSubmit={handleSubmit(handleFormSubmit)}>
                    
                    <div>
                        <label for="name" class="block mb-2 text-sm font-medium text-gray-900">Enter Name</label>
                        <input {...register("name", { required: true })} type="name" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Arshan Yousaf" required/>
                        
                        {errors.name && (
                          <p className="text-red-500 text-sm">
                          {errors.name.message}
                          </p>
                        )}
                    </div>
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Enter Email</label>
                        <input {...register("email", { required: true })} type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@company.com" required/>
                        
                        {errors.email && (
                          <p className="text-red-500 text-sm">
                          {errors.email.message}
                          </p>
                        )}
                    </div>
                    <div>
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Enter Password</label>
                        <input {...register("password", { required: true })} type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required/>
                        
                        {errors.password && (
                          <p className="text-red-500 text-sm">
                          {errors.password.message}
                          </p>
                        )}
                    </div>
                    <div>
                        <label for="CNIC" class="block mb-2 text-sm font-medium text-gray-900">Enter CNIC</label>
                        <input
                        {...register("CNIC", { required: true })}
                        mask="99999-9999999-9"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Enter CNIC (00000-0000000-0)"
                        />
                        {errors.CNIC && (
                          <p className="text-red-500 text-sm">
                          {errors.CNIC.message}
                          </p>
                        )}
                    </div>
                   
                    <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Update</button>
                    
                </form>
            </div>
        </div>
    </div>
</div> 
    )
}