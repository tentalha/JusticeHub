import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { deleteInvestigator, getAllOperators } from "features";
import { getAllInvestigators } from "features";
import { Loader, UpdateInvestigator } from "components";
import { Modal } from "components";
import { Icon } from "components";
import { Link } from "react-router-dom";

export const ManageInvestigators = () => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [investigatorId, setInvestigatorId] = useState("");

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
        <div className={`${isCreateModalOpen || isUpdateModalOpen ? "blur-sm" : ""}`}>

        <div
          className={`mt-0 flex flex-col sm:flex-row justify-between items-center `}
        >
          <h1  className=" xl:ml-20 sm:ml-0 max-w-sm text-4xl top-0 font-bold font-custom text-center justify-center  bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-700 to-cyan-500 ">
            Admin Dashobard
          </h1>
  
          <div className="flex justify-self-auto mt-2 xl:mr-8 sm:mr-0 sm:mt-0">
            <p className=" font-custom-blue font-semibold font-custom  ">
            <Link to="/faqs">FAQ</Link> | <Link to="/contactus">Contact Us</Link>
            </p>
  
            <h1 className=" max-w-sm ml-20 mr-1 text-xl font-bold font-custom text-center justify-center  bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-700 to-cyan-500  mx-auto ">
              {user?.name}
            </h1>
            <div className="mt-1">
              <Icon src="/icons/account.png" />
            </div>
          </div>
        </div>
        <hr className="h-2 -ml-5 mt-4 bg-custom-blue"></hr>
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

          <div className="flex justify-end mb-4 mr-20">
                <button
                  onClick={() => {
                    setIsCreateModalOpen(true);
                    setUserType("investigator");
                  }}
                  className="bg-custom-blue hover:bg-blue-600 text-white font-bold py-2 px-4 sm:py-3 sm:px-6 rounded-full transition duration-300 ease-in-out"
                  type="button"
                >
                  Create New
                </button>
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
                              className="font-medium text-indigo-600 hover:text-indigo-800 hover:underline"
                              onClick={()=>{setIsUpdateModalOpen(true); setInvestigatorId(investigator._id)}}
                            >
                              Edit
                            </a>
                            <button
                              className="ml-4 font-medium text-red-600 dark:text-red-400 hover:text-red-800 hover:underline"
                              onClick={() => dispatch(deleteInvestigator(investigator._id))}
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
            </div>
          </div>
        )}
      </div>
      {isCreateModalOpen?(
      <Modal
        userType={userType}
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
      />
      ): null}

      {isUpdateModalOpen?(
      <UpdateInvestigator
        isOpen={isUpdateModalOpen}
        onClose={() => setIsUpdateModalOpen(false)}
        investigatorId= {investigatorId}
      />
      ): null}
    </div>
  );
};
