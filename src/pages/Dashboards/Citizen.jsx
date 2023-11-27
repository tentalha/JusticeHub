import { useSelector } from "react-redux";
import SplitType from "split-type";
import gsap from "gsap";
import { Icon } from "components";
import { get_news } from "services";
import { useEffect, useState } from "react";

export const Citizen = () => {
  const { user } = useSelector((state) => state.user);
  const [data, setData] = useState("");

  // let text = new SplitType("#tagline");
  // let characters = document.querySelectorAll(".char");

  // for (let i = 0; i < characters.length; i++) {
  //   characters[i].classList.add("translate-y-full");
  // }
  // gsap.to(".char", { y: 0, stagger: 0.05, delay: 0.02, duration: 0.5 });

   const news = get_news();

   useEffect(()=>{
    news.then(function(array) {
      setData(array);
     })  
   },[])

   function truncateText(text, maxWords) {
    const words = text.split(' ');
    const truncatedWords = words.slice(0, maxWords);
    return truncatedWords.join(' ');
  }
   

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
      <hr className="h-2 mt-4 -ml-5 bg-custom-blue"></hr>
      <br />
      <h1 className=" bg-gray-100 hover:text-white mt-2 mb-2 px-2 hover:bg-black p-3 py-6 rounded-2xl xl:ml-4 xl:mr-4 sm:ml-0 sm:mr-0 text-sm sm:text-sm md:text-sm lg:text-sm font-bold font-custom text-center transform scale-100 hover:scale-95 transition-transform duration-300 ease-in-out">
        Hey {user?.name}, you can monitor your FIRs and interact with your investigator to get updates related to your respective FIR. Feel free to contact with your investigator, explore the below cards for latest news and announcements.
      </h1>
      <br />
      <h1 className=" mx-3 md:mx-4 xl:mx-12 mt-1 border-l-8 border-l-custom-blue text-xl md:text-2xl lg:text-3xl font-bold font-custom bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-700 to-cyan-500">
        Announcements
      </h1>
      <div className="flex flex-col md:flex-row">
  {data.length && data.slice(0, 3).map((item) => (
    <div
      key={item.id}
      className="mx-3 my-4 sm:mx-4 sm:my-2 md:mx-6 md:my-2 lg:mx-8 lg:my-2 xl:mx-16 xl:my-2 transform scale-100 hover:scale-90 transition-transform duration-300 ease-in-out"
      style={{
        flex: '1 1 calc(50% - 1rem)',
        height: '200px', // Set a fixed height for each div
        overflow: 'hidden', // Hide any content that might overflow
        zIndex: 998,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <a
        href="#"
        className="block max-w-sm p-4 border text-black border-gray-200 rounded-lg shadow-md bg-violet-300 hover:bg-violet-400 hover:text-white"
        style={{
          height: '100%', // Make sure the anchor takes full height
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <h5 className="text-center font-custom text-lg font-bold tracking-tight">
          {item.title}
        </h5>
        <p className="font-custom text-xs text-center">
          {truncateText(item.description, 10)}
          ...
        </p>
      </a>
    </div>
  ))}
</div>

       
      <br />
      <h1 className=" md:mx-4 xl:mx-12 mt-1 border-l-8 border-l-custom-blue text-xl md:text-2xl lg:text-3xl font-bold font-custom bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-700 to-cyan-500">
        Latest News
      </h1>
      <div className="mb-20 flex flex-col md:flex-row">
  {data.length && data.slice(0, 3).map((item) => (
    <div
      key={item.id}
      className="mx-3 my-4 sm:mx-4 sm:my-2 md:mx-6 md:my-2 lg:mx-8 lg:my-2 xl:mx-16 xl:my-2 transform scale-100 hover:scale-90 transition-transform duration-300 ease-in-out"
      style={{
        flex: '1 1 calc(50% - 1rem)',
        height: '350px', // Set a fixed height for each div
        overflow: 'hidden', // Hide any content that might overflow
        zIndex: 998,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <div
        className="mb-20 block max-w-xs p-4 border text-black border-gray-200 rounded-lg shadow-md bg-violet-300 hover:bg-violet-400 hover:text-white transform scale-100 hover:scale-90 transition-transform duration-300 ease-in-out"
      >
        <a href="#">
          <img
            className="rounded-t-lg h-32 w-full object-cover mb-4" // Set a fixed height for the images
            src={item.urlToImage}
            alt=""
          />
        </a>
        <div className="p-4">
          <a href="#">
            <h5 className="text-center font-custom text-lg font-bold tracking-tight">
            {truncateText(item.title, 10)}
            </h5>
            <br></br>
          </a>
          <p className="font-custom text-xs text-center">
            {truncateText(item.description, 10)}
          </p>
        </div>
      </div>
    </div>
  ))}
</div>



    </div>
  );
};
