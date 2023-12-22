import React from "react";
import InputMask from "react-input-mask";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import {  getAllCriminals, updateCriminal } from "features";
import { yupResolver } from "@hookform/resolvers/yup";
import { operatorSchema } from "schema";
import { useEffect, useState } from "react";
import { criminalSchema } from "schema/criminalSchema";
import { useNavigate } from "react-router-dom";

export const UpdateCriminal = ({isOpen, onClose, criminalId}) =>{
    const [updatedData, setUpdatedData] = useState({});
    const {error} = useSelector((state)=>state.criminal);
    const criminalState = useSelector((state)=> state.criminal);
    const criminals = criminalState.criminals;
    const navigate = useNavigate();
    const dispatch = useDispatch();

    
    useEffect(() => {
      const singleCriminal = criminals.find((elem) => elem._id === criminalId);
      
      if (singleCriminal) {
        setUpdatedData(singleCriminal);
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
          age: updatedData?.age,
          CNIC: updatedData?.CNIC,
        },
        mode: 'onBlur',
        resolver: yupResolver(criminalSchema),
      })
      
      useEffect(()=>{
        reset({...updatedData});
      },[updatedData])

    const id = criminalId;
    const handleFormSubmit = (data) =>{
      console.log(data);
        dispatch(updateCriminal({id, data})).then (()=>{
        reset();
        toast.success("Updated Successfully!");
        onClose();
        navigate("/manageCriminals");
        dispatch(getAllCriminals());
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
                <h3 class="mb-4 text-xl font-medium text-gray-900">Update Criminal</h3>
                <form class="space-y-6" onSubmit={handleSubmit(handleFormSubmit)}>
                    
                    <div>
                        <label for="name" class="block mb-2 text-sm font-medium text-gray-900">Enter Name</label>
                        <input
                        className="w-full lg:w-full bg-white mr-5 border-gray-300 border-2  text-gray-900 mt-2 p-2 rounded-lg focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Full Name*" 
                        {...register('name')}
                        />                        
                         {errors.name && (
                          <p className="text-red-500 text-sm">
                          {errors.name.message}
                          </p>
                        )} 
                    </div>
                    
                    <div>
                        <label for="CNIC" class="block mb-2 text-sm font-medium text-gray-900">Enter CNIC</label>
                        <input
                        className="w-full lg:w-full bg-white mr-5 border-gray-300 border-2  text-gray-900 mt-2 p-2 rounded-lg focus:outline-none focus:shadow-outline"
                        type="text"
                        mask="99999-9999999-9"
                        placeholder="CNIC (00000-0000000-0)"
                        {...register('CNIC')}
                        />
                         {errors.CNIC && (
                          <p className="text-red-500 text-sm">
                          {errors.CNIC.message}
                          </p>
                        )} 
                    </div>

                    <div>
                        <label for="age" class="block mb-2 text-sm font-medium text-gray-900">Enter Age</label>
                        <input
                        className="w-full lg:w-full bg-white mr-5 border-gray-300 border-2  text-gray-900 mt-2 p-2 rounded-lg focus:outline-none focus:shadow-outline"
                        type="text"
                        {...register('age')}
                        placeholder="20"
                        />                        
                        {errors.age && (
                          <p className="text-red-500 text-sm">
                          {errors.age.message}
                          </p>
                        )} 
                    </div>
                    <div>
                <label className="text-black font-semibold">
                  Criminal Image
                </label>
                <label className="relative mt-5 font-bold font-custom inline-flex ml-5 items-center px-20 py-3 bg-custom-blue text-white rounded-3xl border border-gray-300 cursor-pointer hover:bg-gray-500 hover:cursor-pointer">
                  <span className="mr-2">Choose File</span>
                  <input
                    type="file"
                    id="image"
                    className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer bg-custom-blue rounded-3xl"
                    {...register('image')}
                  />
                </label>
              </div>
                    <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Update</button>
                    
                </form>
            </div>
        </div>
    </div>
</div> 
    )
}