import { useSelector } from "react-redux";
import { Icon} from "components";

export const CreateFIR = () => {

    const { user } = useSelector((state) => state.user);


  return (
    <div className=" xl:flex-1 xl:overflow-y-auto xl:ml-52 xs:ml-0 lg:flex-1 lg:overflow-y-auto lg:ml-52 md:flex-1 md:overflow-y-auto md:ml-52 sm:flex-1 sm:overflow-y-auto sm:ml-52">
        {" "}
        {/* Adjust the margin to match your sidebar width */}
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
        <h1  className=" bg-gray-100 hover:text-white hover:bg-black p-3 py-6 rounded-2xl xl:ml-4 xl:mr-4 sm:ml-0 sm:mr-0 text-sm sm:text-md md:text-lg lg:text-xl font-bold font-custom text-center transform scale-100 hover:scale-95 transition-transform duration-300 ease-in-out">
          Hey Operator, You can Create New FIR in this Module. Dont Forget to check the criminal status of the complainant. Make sure you enter correct information about the incident.
        </h1>
        <br />
        <div class="container mx-auto px-4 lg:px-20 mb-20">
  <div class="w-full p-8 my-4 md:px-12 lg:w-full lg:pl-4 lg:pr-0 mr-auto rounded-2xl shadow-xl shadow-custom-blue">
    <div class="flex">
      <h1 class="ml-4 sm:ml-0 w-fit text-4xl border-b-8 border-b-custom-blue top-0 font-bold font-custom bg-clip-text  text-custom-blue">
        New FIR
      </h1>
    </div>
    <div class="grid grid-cols-1 gap-5 gap-x-28 md:grid-cols-2 mt-5 pr-5">
        
    <div>
    <label htmlFor="email" className="text-black font-semibold">
    Complainant's Name
    </label>
      <input
        class="w-full lg:w-full bg-white mr-5 border-gray-300 border-2 font-semibold placeholder:text-black text-gray-900 mt-2 p-2 rounded-lg focus:outline-none focus:shadow-outline"
        type="text"
        placeholder="First Name*"
      />
      </div>

      <div>
  <label htmlFor="DateTime" className="text-black font-semibold">
    Date and Time
  </label>
  <input
    class="w-full lg:w-full bg-white mr-5 border-gray-300 border-2 font-semibold placeholder:text-black text-gray-900 mt-2 p-2 rounded-lg focus:outline-none focus:shadow-outline"
    type="datetime-local"
    id="DateTime"
    name="DateTime"
    placeholder="Date and Time*"
  />
</div>

      <div>
    <label htmlFor="CNIC" className="text-black font-semibold">
    CNIC 
    </label>
      <input
        class="w-full lg:w-full bg-white mr-5 border-gray-300 border-2 font-semibold placeholder:text-black text-gray-900 mt-2 p-2 rounded-lg focus:outline-none focus:shadow-outline"
        type="text"
        placeholder="_____-_______-_"
      />
      </div>

      <div>
    <label htmlFor="email" className="text-black font-semibold">
    Place of Incident
    </label>
      <input
        class="w-full lg:w-full bg-white mr-5 border-gray-300 border-2 font-semibold placeholder:text-black text-gray-900 mt-2 p-2 rounded-lg focus:outline-none focus:shadow-outline"
        type="text"
        placeholder="Place Of Incident"
      />
      </div>
    </div>
    <div class="my-4 mr-5">
    <label htmlFor="Details/Description" className="text-black font-semibold">
    Details/Description
    </label>
      <textarea
        placeholder="Enter Details of the Incident"
        class="w-full h-56 bg-white border-gray-300 border-2 font-semibold placeholder:text-black text-gray-900 mt-2 p-1  rounded-lg focus:outline-none focus:shadow-outline"
      ></textarea>
    </div>

    <div className="flex">
    <div>
    <label htmlFor="Incident Type" className="text-black font-semibold">
    Incident Type
    </label>
      <input
        class="w-full lg:w-80 bg-white mr-5 border-gray-300 border-2 font-semibold placeholder:text-black text-gray-900 mt-2 p-2 rounded-lg focus:outline-none focus:shadow-outline"
        type="text"
        placeholder="Theft"
      />
      </div>
      <div>
    <label htmlFor="Phone Number" className="text-black font-semibold">
    Phone Number
    </label>
      <input
        class="w-full lg:w-80 bg-white mr-5 border-gray-300 border-2 font-semibold placeholder:text-black text-gray-900 mt-2 p-2 rounded-lg focus:outline-none focus:shadow-outline"
        type="text"
        placeholder="+92 0000000000"
      />
      </div>
      <div>
  <label htmlFor="RelevantDocuments" className="text-black font-semibold">
    Upload Relevant Documents
  </label>
  <label class="relative mt-2 inline-flex items-center px-28 py-2 text-white bg-custom-blue border border-gray-300 rounded-3xl cursor-pointer ">
    <span class="mr-2 font-custom font-semibold">Browse</span>
    <input
      type="file"
      id="RelevantDocuments"
      name="RelevantDocuments"
      class="absolute top-0 left-0 bg-custom-blue w-full h-full opacity-0 cursor-pointer"
    />
  </label>
</div>
      </div>
    <div class="my-2 w-full lg:w-1/4">
      <button
        class=" text-sm font-semibold font-custom tracking-wide bg-green-500 text-gray-100 p-4 rounded-3xl w-full focus:outline-none focus:shadow-outline"
      >
        Upload
      </button>
    </div>
  </div>
</div>


    </div>
  );
};
