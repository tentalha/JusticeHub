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
    >
      <div className="absolute w-full max-w-md p-4 mx-auto rounded-lg">
        <div className="relative bg-gradient-to-t to-purple-400 via-purple-500 from-black rounded-lg shadow-lg">
          <button
            type="button"
            onClick={() => onClose()}
            className="absolute top-3 right-3 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-full text-lg w-8 h-8 transition-colors duration-300 ease-in-out focus:outline-none focus:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-hide="authentication-modal"
          >
            <span className="font-custom font-bold text-lg self-stretch text-black">
              X
            </span>
          </button>
          <div className="px-6 py-6 lg:px-8">
            <h3 className="mb-4 text-2xl font-medium text-gray-900 dark:text-white">
              Add New {userType}
            </h3>
            <form onSubmit={handleSubmit(handleFormSubmit)}>
              <div className="flex flex-wrap -mx-2 mb-4">
                <div className="w-1/2 px-2">
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Name
                  </label>
                  <input
                    {...register("name", { required: true })}
                    type="text"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500 transition-colors duration-300 ease-in-out"
                    placeholder="Enter your full name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div className="w-1/2 px-2">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Email
                  </label>
                  <input
                    {...register("email", { required: true })}
                    type="email"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500 transition-colors duration-300 ease-in-out"
                    placeholder="Enter your email"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex flex-wrap -mx-2 mb-4">
                <div className="w-1/2 px-2">
                  <label
                    htmlFor="password"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Password
                  </label>
                  <input
                    {...register("password", { required: true })}
                    type="password"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500 transition-colors duration-300 ease-in-out"
                    placeholder="Enter at least 8 characters long password"
                  />
                  {errors.password && (
                    <p className="text-red-500 text-sm">
                      {errors.password.message}
                    </p>
                  )}
                </div>
                <div className="w-1/2 px-2">
                  <label
                    htmlFor="CNIC"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    CNIC
                  </label>
                  <InputMask
                    {...register("CNIC", { required: true })}
                    mask="99999-9999999-9"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring transition-colors duration-300 ease-in-out"
                    placeholder="Enter CNIC (00000-0000000-0)"
                  />
                  {errors.CNIC && (
                    <p className="text-red-500 text-sm">
                      {errors.CNIC.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex flex-wrap -mx-2 mb-4">
                <div className="w-1/2 px-2">
                  <label
                    htmlFor="role"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Role
                  </label>
                  <input
                    {...register("role", { required: true })}
                    type="text"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring transition-colors duration-300 ease-in-out"
                    placeholder="Enter the role"
                  />
                  {errors.role && (
                    <p className="text-red-500 text-sm">
                      {errors.role.message}
                    </p>
                  )}
                </div>
              </div>
              <button
                type="submit"
                className="block w-full mt-6 px-4 py-2 bg-black text-white rounded-lg hover:bg-emerald-400 hover:text-black focus:outline-none focus:bg-blue-600 transition-colors duration-300 ease-in-out"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
