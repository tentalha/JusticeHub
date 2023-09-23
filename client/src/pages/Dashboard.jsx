import { useSelector } from "react-redux";
import SplitType from "split-type";
import gsap from "gsap";
import { data } from "constant"; // Assuming 'constants' is the correct path
import { Icon } from "components";

export const Dashboard = () => {
  const { user } = useSelector((state) => state.user);

  let text = new SplitType("#tagline");
  let characters = document.querySelectorAll(".char");

  for (let i = 0; i < characters.length; i++) {
    characters[i].classList.add("translate-y-full");
  }
  gsap.to(".char", { y: 0, stagger: 0.05, delay: 0.02, duration: 0.5 });

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
      <hr className=" h-2 mt-4 bg-custom-blue w-full"></hr>
      <br />
      <h1 id="tagline" className=" bg-gray-100 hover:text-white hover:bg-black p-3 py-6 rounded-2xl xl:ml-4 xl:mr-4 sm:ml-0 sm:mr-0 text-sm sm:text-md md:text-lg lg:text-xl font-bold font-custom text-justify transform scale-100 hover:scale-95 transition-transform duration-300 ease-in-out">
        Hey {user?.name}, you can monitor your FIRs and interact with your
        investigator to get updates related to you respective FIR
      </h1>
      <br />
      <h1 className=" mx-3 md:mx-4 xl:mx-12 mt-1 border-l-8 border-l-custom-blue text-xl md:text-2xl lg:text-3xl font-bold font-custom bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-700 to-cyan-500">
        Announcements
      </h1>
      <div className="flex flex-col md:flex-row">
        {data.map((item) => (
          <div
            key={item.id}
            className="mx-3 my-4 sm:mx-4 sm:my-2 md:mx-6 md:my-2 lg:mx-8 lg:my-2 xl:mx-16 xl:my-2"
            style={{ flex: '1 1 calc(50% - 1rem)', zIndex: 998 }} // Adjust the z-index value

          >
            <a
              href="#"
              className="block max-w-xs p-4 border text-black border-gray-200 rounded-lg shadow-md bg-violet-300 hover:bg-violet-400 hover:text-white transform scale-100 hover:scale-125 transition-transform duration-300 ease-in-out"
            >
              <h5 className=" text-center font-custom mb-1 sm:text-lg md:text-xl lg:text-2xl font-bold tracking-tight">
                {item.title}
              </h5>
              <p className="font-normal font-custom text-sm text-center">
                {item.description}
              </p>
            </a>
          </div>
        ))}
      </div>
      <br />
      <h1 className=" md:mx-4 xl:mx-12 mt-1 border-l-8 border-l-custom-blue text-xl md:text-2xl lg:text-3xl font-bold font-custom bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-700 to-cyan-500">
        Latest News
      </h1>
      <div className="flex flex-col md:flex-row">
  {data.map((item) => (
    <div
      key={item.id}
      className="mx-3 my-4 sm:mx-4 sm:my-2 md:mx-6 md:my-2 lg:mx-8 lg:my-2 xl:mx-16 xl:my-2"
      style={{ flex: '1 1 calc(50% - 1rem)', zIndex: 998 }} // Adjust the z-index value
    >
      <div
        className="mb-20 block max-w-xs p-4 border text-black border-gray-200 rounded-lg shadow-md bg-violet-300 hover:bg-violet-400 hover:text-white transform scale-100 hover:scale-110 transition-transform duration-300 ease-in-out"
      >
        <a href="#">
          <img className="rounded-t-lg" src={item.image} alt="" />
        </a>
        <div className="p-4">
          <a href="#">
            <h5 className="text-center font-custom mb-1 text-lg sm:text-lg md:text-xl lg:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {item.title}
            </h5>
          </a>
          <p className="font-normal font-custom text-justify text-white text-sm">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  ))}
</div>

    </div>
  );
};
