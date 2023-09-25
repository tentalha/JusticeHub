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

export const Modal = ({ isOpen, onClose, userType }) => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.user);

  const operatorState = useSelector((state) => state.operator);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(operatorSchema),
  });

  const handleFormSubmit = (data) => {
    // Call the appropriate onSubmit function based on userType
    switch (userType) {
      case "investigator":
        handleFormSubmitInvestigator(data);
        break;
      case "operator":
        handleFormSubmitOperator(data);
        break;
      default:
        // Handle an unknown userType or show an error
        console.error("Unknown userType:", userType);
        break;
    }
  };
  const handleFormSubmitOperator = (data) => {
    const { ...rest } = data;

    dispatch(createNewOperator(rest)).then(() => {
      reset();
      toast.success("Registered Successfully!");
      onClose(); // Close the modal after successful submission
    });
  };

  useEffect(() => {
    if (operatorState.error) {
      toast.error(operatorState.error);
    }
  }, [operatorState.error]);

  const handleFormSubmitInvestigator = (data) => {
    const { ...rest } = data;

    dispatch(createNewInvestigator(rest)).then(() => {
      reset();
      toast.success("Registered Successfully!");
      onClose(); // Close the modal after successful submission
    });
  };

  return (
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
                <h3 class="mb-4 text-xl font-medium text-gray-900">Add New {userType}</h3>
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
                        <InputMask
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
                    <div>
                        <label for="role" class="block mb-2 text-sm font-medium text-gray-900 ">Enter Role</label>
                        <input {...register("role", { required: true })} type="role" name="role" id="role" placeholder="operator/investigator" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required/>
                        
                        {errors.role && (
                          <p className="text-red-500 text-sm">
                          {errors.role.message}
                          </p>
                        )}
                    </div>
                    <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Register</button>
                    
                </form>
            </div>
        </div>
    </div>
</div> 
  );
};


