import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAllOperators } from "features";
import { deleteOperator } from "features";
import { Loader } from "components";
import { Modal } from "components";
import { Icon } from "components";


export const ManageOperators = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [userType, setUserType] = useState("");

  const operatorState = useSelector((state) => state.operator);
  const operators = operatorState.operators;

  useEffect(() => {
    dispatch(getAllOperators());
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
            Admin Dashobard
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
          Hey Admin, you can Create, Delete, Update, and View operators in this
          module. You will also assign a username and password for operators
          accounts.
        </h1>
        <br />
        <div className="flex sm:flex-row justify-between items-center">
          <h1
            id="tagline"
            className="p-5 mt-1 xl:ml-16 sm:ml-0 text-xl sm:text-2xl lg:text-4xl font-bold font-custom bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-700 to-cyan-500"
          >
            Operators
          </h1>

          <div className="flex justify-self-end mt-2 xl:mr-20 sm:mr-20 sm:mt-0">
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

        {operatorState.loading ? (
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
                    <tbody className="text-sm divide-y divide-indigo-200">
                      {operators.map((operator) => (
                        <tr
                          className="transition hover:opacity-70"
                          key={operator._id}
                        >
                          <td className="p-2 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="font-medium text-gray-800">
                                {operator.name}
                              </div>
                            </div>
                          </td>
                          <td className="p-2 whitespace-nowrap">
                            <div className="text-left">{operator.email}</div>
                          </td>
                          <td className="p-2 whitespace-nowrap">
                            <div className="text-left font-medium text-green-500">
                              {operator.CNIC}
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
                              onClick={() =>
                                dispatch(deleteOperator(operator._id))
                              }
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
                    setUserType("operator");
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

/*  <button data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
  Toggle modal
</button>

<div id="authentication-modal" tabIndex="-1" aria-hidden="true" class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div class="relative w-full max-w-md max-h-full">
        
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal">
                <span class="sr-only">Close modal</span>
            </button>
            <div class="px-6 py-6 lg:px-8">
                <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h3>
                <form class="space-y-6" action="#">
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required/>
                    </div>
                    <div>
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required/>
                    </div>
                    <div class="flex justify-between">
                        <div class="flex items-start">
                            <div class="flex items-center h-5">
                                <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required/>
                            </div>
                            <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                        </div>
                        <a href="#" class="text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
                    </div>
                    <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
                    <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                        Not registered? <a href="#" class="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div> 




///////////////////////////


<form>   
    <label for="default-search" class=" ml-12mb-2 text-sm font-medium text-white sr-only dark:text-white">Search</label>
    <div class="relative">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" class=" font-custom block w-96 p-4 pl-10 text-sm text-gray-900 border border-blue-500 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 bg-gradient-to-r from-blue-500 via-blue-700 to-cyan-500 dark:border-blue-600 dark:placeholder-white dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required/>
        <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-400 hover:bg-blue-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2  dark:focus:ring-blue-800">Search</button>
    </div>
</form>

 let text  = new SplitType('#tagline');
    let characters = document.querySelectorAll('.char');

    for(let i =0 ; i<characters ; i++){
        characters[i].classList.add('traslate-y-100');
    }
    gsap.to(".char", {y: 0, stagger: 0.05, delay: 0.3, duration: 0.5});

*/
/////////

/*
  <div class="md:px-32 py-8 w-full">
        <div class="shadow overflow-hidden rounded border-b border-gray-200">
        <table class="min-w-full bg-white">
        <thead class="bg-gray-800 text-white">
        <tr>
          <th class="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Name</th>
          <th class="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">CNIC</th>
          <th class="text-left py-3 px-4 uppercase font-semibold text-sm">Email</th>
          <th class="text-left py-3 px-4 uppercase font-semibold text-sm">Actions</th>
        </tr>
      </thead>
    <tbody class="text-gray-700">
    <tr class="bg-gray-100">
        <td class="w-1/3 text-left py-3 px-4">Arshan</td>
        <td class="w-1/3 text-left py-3 px-4">35202-4831122-3</td>
        <td class="text-left py-3 px-4"><a class="hover:text-blue-500" href="tel:622322662">arshan@gmail.com</a></td>
        <td class="text-left py-3 px-4">

            <a href="#" class="font-medium text-indigo-600 hover:text-indigo-800 hover:underline">Edit</a>
            <a href="#" class="ml-4 font-medium text-red-600 dark:text-red-400 hover:text-red-800 hover:underline">Delete</a>
        </td>
      </tr>
      <tr class="bg-gray-100">
        <td class="w-1/3 text-left py-3 px-4">Arshan</td>
        <td class="w-1/3 text-left py-3 px-4">35202-4831122-3</td>
        <td class="text-left py-3 px-4"><a class="hover:text-blue-500" href="tel:622322662">arshan@gmail.com</a></td>
        <td class="text-left py-3 px-4">

            <a href="#" class="font-medium text-indigo-600 hover:text-indigo-800 hover:underline">Edit</a>
            <a href="#" class="ml-4 font-medium text-red-600 dark:text-red-400 hover:text-red-800 hover:underline">Delete</a>
        </td>
      </tr>
      <tr class="bg-gray-100">
        <td class="w-1/3 text-left py-3 px-4">Arshan</td>
        <td class="w-1/3 text-left py-3 px-4">35202-4831122-3</td>
        <td class="text-left py-3 px-4"><a class="hover:text-blue-500" href="tel:622322662">arshan@gmail.com</a></td>
        <td class="text-left py-3 px-4">

            <a href="#" class="font-medium text-indigo-600 hover:text-indigo-800 hover:underline">Edit</a>
            <a href="#" class="ml-4 font-medium text-red-600 dark:text-red-400 hover:text-red-800 hover:underline">Delete</a>
        </td>
      </tr>
      <tr class="bg-gray-100">
        <td class="w-1/3 text-left py-3 px-4">Arshan</td>
        <td class="w-1/3 text-left py-3 px-4">35202-4831122-3</td>
        <td class="text-left py-3 px-4"><a class="hover:text-blue-500" href="tel:622322662">arshan@gmail.com</a></td>
        <td class="text-left py-3 px-4">

            <a href="#" class="font-medium text-indigo-600 hover:text-indigo-800 hover:underline">Edit</a>
            <a href="#" class="ml-4 font-medium text-red-600 dark:text-red-400 hover:text-red-800 hover:underline">Delete</a>
        </td>
      </tr>
    </tbody>
    </table>
  </div>
</div>
*/
