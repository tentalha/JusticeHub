import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Icon } from "components";
import { Loader } from "components";
import { Link, useNavigate } from "react-router-dom";
import { getAllFIRS, getCompletedFIRS } from "features";

export const CompletedFIRs = () => {

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  
  const {user} = useSelector((state)=>state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const firState = useSelector((state) => state.fir);
  const firs = firState.completedFir;

  useEffect(()=>{
    dispatch(getCompletedFIRS());
  }, [])

  return (
    <div className="xl:flex-1 xl:overflow-y-auto xl:ml-52 xs:ml-0 lg:flex-1 lg:overflow-y-auto lg:ml-52 md:flex-1 md:overflow-y-auto md:ml-52 sm:flex-1 sm:overflow-y-auto sm:ml-52">
      <div className={`mt-0 flex flex-col sm:flex-row justify-between items-center `}>
        <h1 className="xl:ml-20 sm:ml-0 max-w-sm text-4xl top-0 font-bold font-custom text-center justify-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-700 to-cyan-500 ">
          Admin Dashboard
        </h1>

        <div className="flex justify-self-auto mt-2 xl:mr-8 sm:mr-0 sm:mt-0">
          <p className="font-custom-blue font-semibold font-custom ">
            FAQ | Contact Us | Help Center
          </p>

          <h1 className="max-w-sm ml-20 mr-1 text-xl font-bold font-custom text-center justify-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-700 to-cyan-500 mx-auto ">
            {user?.name}
          </h1>
          <div className="mt-1">
            <Icon src="/icons/account.png" />
          </div>
        </div>
      </div>
      <hr className=" -ml-5 h-2 mt-4 bg-custom-blue"></hr>
      <br />
      <h1 id="tagline" className=" mt-2 bg-gray-100 px-2 hover:text-white hover:bg-black py-1 rounded-2xl  sm:ml-0 sm:mr-0 text-sm sm:text-sm md:text-sm lg:text-sm font-bold font-custom text-center transform scale-100 hover:scale-95 transition-transform duration-300 ease-in-out">
  Hey Admin, Below are the Completed FIRs, click on a link to see a detailed view. Completed FIRs are those to whom the investigator were assigned and that investigator has succesfully managed to complete and solve the case.
</h1>

        <h1
          id="tagline"
          className="p-5 mt-2 text-center  sm:ml-0 text-xl sm:text-2xl lg:text-4xl font-bold font-custom bg-clip-text text-transparent  bg-green-500"
        >
          Completed FIRs ({firs.length})
        </h1>
      {firs&& firs.length > 0 ? (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mx-2 md:mx-5 lg:mx-10 xl:mx-20 mb-20">
  <div className="flex flex-col sm:flex-row items-center justify-between pb-4">
    <div className="mb-4 sm:mb-0">
      <button
        id="dropdownRadioButton"
        onClick={toggleDropdown}
        className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5"
      >
        <svg
          className="w-3 h-3 text-gray-500 mr-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z"/>
        </svg>
        Last 30 days
        <svg
          className="w-2.5 h-2.5 ml-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>
      {isDropdownOpen && (
        <div
          id="dropdownRadio"
          className="z-10 absolute w-48 bg-white divide-y divide-gray-100 rounded-lg shadow "
        >
                <ul class="p-3 space-y-1 text-sm text-gray-700" aria-labelledby="dropdownRadioButton">
                    <li>
                        <div class="flex items-center p-2 rounded hover:bg-gray-100 ">
                            <input id="filter-radio-example-1" type="radio" value="" name="filter-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "/>
                            <label for="filter-radio-example-1" class="w-full ml-2 text-sm font-medium text-gray-900 rounded ">Last day</label>
                        </div>
                    </li>
                    <li>
                        <div class="flex items-center p-2 rounded hover:bg-gray-100 ">
                            <input checked="" id="filter-radio-example-2" type="radio" value="" name="filter-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"/>
                            <label for="filter-radio-example-2" class="w-full ml-2 text-sm font-medium text-gray-900 rounded ">Last 7 days</label>
                        </div>
                    </li>
                    <li>
                        <div class="flex items-center p-2 rounded hover:bg-gray-100 ">
                            <input id="filter-radio-example-3" type="radio" value="" name="filter-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "/>
                            <label for="filter-radio-example-3" class="w-full ml-2 text-sm font-medium text-gray-900 rounded ">Last 30 days</label>
                        </div>
                    </li>
                    <li>
                        <div class="flex items-center p-2 rounded hover:bg-gray-100 ">
                            <input id="filter-radio-example-4" type="radio" value="" name="filter-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"/>
                            <label for="filter-radio-example-4" class="w-full ml-2 text-sm font-medium text-gray-900 rounded ">Last month</label>
                        </div>
                    </li>
                    <li>
                        <div class="flex items-center p-2 rounded hover:bg-gray-100 ">
                            <input id="filter-radio-example-5" type="radio" value="" name="filter-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "/>
                            <label for="filter-radio-example-5" class="w-full ml-2 text-sm font-medium text-gray-900 rounded ">Last year</label>
                        </div>
                    </li>
                </ul>
            </div>
      )}
        </div>
        <label htmlFor="table-search" className="sr-only">
      Search
    </label>

    <div className="relative">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
            </div>
            <input
        type="text"
        id="table-search"
        className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-full sm:w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
        placeholder="Search for items"
      />       
       </div>
    </div>
    
    {firState.loading ? (
      <div className="flex justify-center items-center">
        <Loader />
      </div>
    ) : (
    <div className="overflow-x-auto">
    <table className="w-full text-sm text-left text-gray-600 "> 
           <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Case #
                </th>
                <th scope="col" class="px-6 py-3">
                    Complainant's Name
                </th>
                <th scope="col" class="px-6 py-3">
                    CNIC
                </th>
                <th scope="col" class="px-6 py-3">
                    Incident Type
                </th>
                <th scope="col" class="px-6 py-3">
                    Place of incident
                </th>
                <th scope="col" class="px-6 py-3">
                    Phone Number
                </th>
                <th scope="col" class="px-6 py-3">
                    Detailed View
                </th>
            </tr>
        </thead>
        <tbody>
  {firs &&  firs.map((fir) => (
    <tr class="bg-white border-b" key={fir._id}>
      <th scope="row" class="px-6 py-8 font-medium text-gray-900 whitespace-nowrap">
        {fir.caseNo}
      </th>
      <td class="px-6 py-8">
        {fir.complainantName}
      </td>
      <td class="px-6 py-8">
        {fir.complainantCNIC}
      </td>
      <td class="px-6 py-8">
        {fir.applicationType}
      </td>
      <td class="px-6 py-8">
        {fir.location}                
      </td>
      <td class="px-6 py-8">
        {fir.complainantPhone}                
      </td>
      <td class="px-6 py-8">
        <Link  to={`/firDetail/${fir._id}`} class="font-medium text-blue-600 hover:underline">Click For Details</Link>
      </td>
    </tr>
  ))}
</tbody>


    </table>
    </div>
    )}
</div>
):(
  <div><h1 className="text-center text-2xl font-custom font-semibold ">Currently There Are No FIRs To Show.</h1></div>
) }
</div>
  );
};
