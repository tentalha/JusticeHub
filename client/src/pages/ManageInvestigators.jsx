import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAllOperators } from "features";
import { getAllInvestigators } from "features";
import { Loader } from "components";
import { Modal } from "components";
import { Icon } from "components";

export const ManageInvestigators = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [userType, setUserType] = useState("");

  const investigatorState = useSelector((state) => state.investigator);
  const investigators = investigatorState.investigators;

  useEffect(() => {
    dispatch(getAllInvestigators());
  }, []);

  return (
    <div className=" xl:flex-1 xl:overflow-y-auto xl:ml-52 xs:ml-0 lg:flex-1 lg:overflow-y-auto lg:ml-52 md:flex-1 md:overflow-y-auto md:ml-52 sm:flex-1 sm:overflow-y-auto sm:ml-52">
        {" "}
        {/* Adjust the margin to match your sidebar width */}
        <div className={`${isModalOpen ? "blur-sm" : ""}`}>

        <div
          className={`mt-0 flex flex-col sm:flex-row justify-between items-center `}
        >
          <h1  className=" xl:ml-20 sm:ml-0 max-w-sm text-4xl top-0 font-bold font-custom text-center justify-center  bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-700 to-cyan-500 ">
            Citizen Dashobard
          </h1>
  
          <div className="flex justify-self-auto mt-2 xl:mr-8 sm:mr-0 sm:mt-0">
            <p className=" font-custom-blue font-semibold font-custom  ">
              FAQ | Contact Us | Help Center
            </p>
  
            <h1 className=" max-w-sm ml-20 mr-1 text-xl font-bold font-custom text-center justify-center  bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-700 to-cyan-500  mx-auto ">
              {user?.name}
            </h1>
            <div className="mt-1">
              <Icon src="/icons/account.png" />
            </div>
          </div>
        </div>
        <hr className="h-2 mt-4 bg-custom-blue"></hr>
        <br />
        <h1 className="bg-gray-100 p-5 rounded-2xl xl:ml-4 xl:mr-4 sm:ml-0 sm:mr-0 text-sm sm:text-md md:text-lg lg:text-xl font-bold font-custom text-center">
          Hey Admin, you can Create, Delete, Update, and View Investigators in
          this module. You will also assign a username and password for
          Investigator accounts.
        </h1>
        <br />
        <div className="flex sm:flex-row justify-between items-center">
          <h1
            id="tagline"
            className="p-5 mt-1 xl:ml-16 sm:ml-0 text-xl sm:text-2xl lg:text-4xl font-bold font-custom bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-700 to-cyan-500"
          >
            Investigators
          </h1>

          <div className="flex justify-self-end mt-2 xl:mr-20 sm:mr-0 sm:mt-0">
            <form>
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="rounded-3xl block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-100 bg-gray-100 focus:ring-blue-500 focus:border-blue-500  dark:border-gray-100 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="search"
                  required
                />
                <button
                  type="submit"
                  className="rounded-3xl text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-4 py-2 dark:bg-custom-blue dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Go
                </button>
              </div>
            </form>
          </div>
        </div>

        {investigatorState.loading ? (
          <div className="flex justify-center items-center ">
            <Loader />
          </div>
        ) : (
          <div className="h-full xs:ml-0 mb-28 mt-8 xs:mr-0 xl:mr-3">
            <div className="w-full max-w-6xl mx-auto bg-white shadow-lg rounded-md border border-gray-200">
              {/* Table Header */}
              <div className="p-3">
                <div className="overflow-x-auto">
                  <table className="table-auto w-full">
                    <thead className="text-lg font-semibold text-black bg-blue-300">
                      <tr>
                        <th className="p-2 pl-3 whitespace-nowrap">
                          <div className="font-semibold text-md text-left">
                            Name
                          </div>
                        </th>
                        <th className="p-2 whitespace-nowrap">
                          <div className="font-semibold text-md text-left">
                            Email
                          </div>
                        </th>
                        <th className="p-2 whitespace-nowrap">
                          <div className="font-semibold text-md text-left">
                            CNIC
                          </div>
                        </th>
                        <th className="p-2 whitespace-nowrap">
                          <div className="font-semibold text-md text-left">
                            Actions
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody
                      className="text-sm divide-y divide-indigo-200"
                      key="investigator"
                    >
                      {investigators.map((investigator) => (
                        <tr
                          className="transition hover:opacity-70"
                          key={investigator._id}
                        >
                          <td className="p-2 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="font-medium text-gray-800">
                                {investigator.name}
                              </div>
                            </div>
                          </td>
                          <td className="p-2 whitespace-nowrap">
                            <div className="text-left">
                              {investigator.email}
                            </div>
                          </td>
                          <td className="p-2 whitespace-nowrap">
                            <div className="text-left font-medium text-green-500">
                              {investigator.CNIC}
                            </div>
                          </td>
                          <td className="p-2 whitespace-nowrap">
                            <a
                              href="#"
                              className="font-medium text-indigo-600 hover:text-indigo-800 hover:underline"
                            >
                              Edit
                            </a>
                            <button
                              className="ml-4 font-medium text-red-600 dark:text-red-400 hover:text-red-800 hover:underline"
                              o //nClick={() => dispatch(deleteOperator(operator._id))}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="flex justify-end mb-4 mr-2">
                <button
                  onClick={() => {
                    setIsModalOpen(true);
                    setUserType("investigator");
                  }}
                  className="bg-custom-blue hover:bg-blue-600 text-white font-bold py-2 px-4 sm:py-3 sm:px-6 rounded-full transition duration-300 ease-in-out"
                  type="button"
                >
                  Create New
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <Modal
        userType={userType}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};
