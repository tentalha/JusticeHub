import { useSelector } from "react-redux";
import { Icon } from "components";
import { useEffect } from "react";
import { getAllCriminals } from "features";

export const ManageCriminals = () => {
  const { user } = useSelector((state) => state.user);

  const criminalState = useSelector((state) => state.criminal);
  const criminals = criminalState.criminals;

  console.log(criminals);
  //  useEffect(() => {
  //    dispatch(getAllCriminals());
  // }, []);

  return (
    <div className=" xl:flex-1 xl:overflow-y-auto xl:ml-52 xs:ml-0 lg:flex-1 lg:overflow-y-auto lg:ml-52 md:flex-1 md:overflow-y-auto md:ml-52 sm:flex-1 sm:overflow-y-auto sm:ml-52">
      {" "}
      {/* Adjust the margin to match your sidebar width */}
      <div
        className={`mt-0 flex flex-col sm:flex-row justify-between items-center `}
      >
        <h1 className=" xl:ml-20 sm:ml-0 max-w-sm text-4xl top-0 font-bold font-custom text-center justify-center  bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-700 to-cyan-500 ">
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
      <h1
        id="tagline"
        className=" bg-gray-100 hover:text-white hover:bg-black p-3 py-6 rounded-2xl xl:ml-4 xl:mr-4 sm:ml-0 sm:mr-0 text-sm sm:text-md md:text-lg lg:text-xl font-bold font-custom text-center transform scale-100 hover:scale-95 transition-transform duration-300 ease-in-out"
      >
        Hey {user?.name}, you can Check the Criminal Record of the Complainant.
        Make sure you enter the criminal status of the complainant while
        submitting the FIR.
      </h1>
      <br />
      <div className="flex ">
        
        <div className=" w-full h-96 ml-5  p-5  mt-14">
    <div className="flex items-center text-center justify-center">
        <h1 className=" font-bold font-custom text-justify text-2xl mt-3">
            Click To add New Criminal
          
          </h1>
        <button
            className="ml-2  text-xl bg-custom-blue font-custom justify-start hover:bg-blue-600 text-white font-bold py-2 px-4 sm:py-3 sm:px-6 rounded-full transition duration-300 ease-in-out"
            type="button"
          >
            ADD +
          </button>
          </div>

          <h1 className=" mt-10 font-bold font-custom text-justify text-5xl">
            List of <span className=" text-6xl text-red-600">Criminals</span> is
            Below, Check it out.
          </h1>
          <br></br>

          
        </div>
        <div className=" mr-5 ml-36 w-full h-96 relative overflow-hidden rounded-lg shadow-lg border border-gray-300 hover:shadow-xl transition-transform duration-300 transform hover:scale-105 mb-20">
          <img
            src="https://dailytimes.com.pk/assets/uploads/2022/10/24/WhatsApp-Image-2022-10-21-at-9.22.04-PM-1280x720.jpeg"
            alt="Background Image"
            className="absolute inset-0 w-full h-full object-cover filter brightness-50 "
          />
          <div className="mt-28 absolute flex items-center ml-3">
            <Icon classes="w-10 h-10" src="/icons/warning.png" />
            <h1 className="font-custom text-white text-4xl font-bold ">
              Things to Remember
            </h1>
          </div>

          <p className="absolute inset-0 flex flex-col text-left font-custom mt-48 ml-5 text-white text-sm font-bold">
            Identify the Complainant rightly. 
            <br/>
            <br/>
             rightly notice the criminal status 
            <br/>
            <br></br>
            For More Information visit the Link Below:
          </p>
          <div className="flex">
            <button
              className="mt-72 text-2xl justify-center absolute text-cyan-900 font-bold py-2 px-4 sm:py-3 sm:px-6 rounded-full transition duration-300 ease-in-out"
              type="button"
            >
              Learn More
            </button>
          </div>
        </div>

      </div>
      
  <form className="mb-20">   
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required/>
        <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
</form>
<br></br>
<br></br>

<a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="/docs/images/blog/image-4.jpg" alt=""/>
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
    </div>
</a>
    </div>
  );
};
