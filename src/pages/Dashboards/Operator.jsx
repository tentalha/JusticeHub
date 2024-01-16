import { Icon, Loader } from "components";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { get_news } from "services";
import { getAllFIRS } from "features";
import { Link } from "react-router-dom";

export const Operator = () => {
  
  const { user } = useSelector((state) => state.user);
  const [data, setData] = useState("");
  const dispatch = useDispatch();

  const firState = useSelector((state) => state.fir);
  
  const myFIRs = firState.firs.length;

  const news = get_news();

  useEffect(()=>{
    dispatch(getAllFIRS());
  },[])

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
    <div
      className={`mt-0 flex flex-col sm:flex-row justify-between items-center `}
    >
      <h1 className=" xl:ml-20 sm:ml-0 max-w-md text-4xl top-0 font-bold font-custom text-center justify-center  bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-700 to-cyan-500 ">
          Operator Dashobard
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
      <hr className="h-2 mt-4 -ml-5 bg-custom-blue"></hr>
      <h1 className=" bg-gray-100 hover:text-white mt-2 mb-2 px-2 hover:bg-black p-3 py-6 rounded-2xl xl:ml-4 xl:mr-4 sm:ml-0 sm:mr-0 text-sm sm:text-sm md:text-sm lg:text-sm font-bold font-custom text-center transform scale-100 hover:scale-95 transition-transform duration-300 ease-in-out">
              Hey {user?.name}, Welcome to your dasboard, In this Dashboard you can perform all the operations that an operator can perform, You can Create New FIR and View the FIRs that you have created. Moreover you can also check the Criminal Record of the the complainant.
      </h1>

      <h1 className=" mx-3 md:mx-4 xl:mx-12 mt-1 border-l-8 border-l-custom-blue text-xl md:text-2xl lg:text-3xl font-bold font-custom bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-700 to-cyan-500">
        Announcements
      </h1>
      <div className="flex flex-col md:flex-row">
    
  {data.length? ( data.slice(0, 3).map((item) => (
    <div
      key={item.id}
      className="mx-3 my-4 sm:mx-4 sm:my-2 md:mx-6 md:my-2 lg:mx-8 lg:my-2 xl:mx-16 xl:my-2 rounded-md transform scale-100 hover:scale-90 transition-transform duration-300 ease-in-out"
      style={{
        flex: '1 1 calc(50% - 1rem)',
        height: '250px', // Set a fixed height for each div
        overflow: 'hidden', // Hide any content that might overflow
        zIndex: 998,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <div
        className="mb-10 block max-w-xs p-4 border text-black border-gray-200 rounded-lg shadow-md bg-violet-300 hover:bg-violet-400 hover:text-white transform scale-100 hover:scale-90 transition-transform duration-300 ease-in-out"
      >
        <a href="#">
          <img
            className="rounded-t-lg h-32 w-full object-cover mb-2" // Set a fixed height for the images
            src={item.urlToImage}
            alt=""
          />
        </a>
        <div className="p-1">
          <a href="#">
            <h5 className="text-center font-custom text-lg font-bold tracking-tight">
            {truncateText(item.title, 10)}
            </h5>
            <br></br>
          </a>
        </div>
      </div>
    </div>
  ))) : (
    <div>
      <Loader/>
    </div>
  )}

</div>

<div className="flex mb-10 flex-col md:flex-row ">
        
    <div className="flex-1 mx-3 my-4" style={{ flex: '1 1 calc(50% - 1rem)' }}>
    <div className="mb-5 p-4 border text-black border-gray-200 rounded-lg shadow-md bg-green-500 hover:text-white transform scale-100 hover:scale-110 transition-transform duration-300 ease-in-out">
    <div className="flex">
        <h1 className="font-custom font-bold text-4xl sm:text-3xl md:text-4xl lg:text-5xl mt-2 ml-2 sm:ml-4 text-white">
          My <br /> Cases{" "}
        </h1>
        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white mt-2 ml-72 sm:ml-28 md-ml-28 lg:ml-52 xl:ml-80 justify-between">
          <Icon classes="" src="./icons/pending.png" />
        </div>
      </div>
      <div className="flex">
        <h3 className="mt-6 ml-2 sm:ml-4 font-bold text-white text-2xl sm:text-3xl md:text-4xl">
          {myFIRs}
        </h3>
        <Link to="/operatorFIRs" className="mt-8 font-semibold text-2xl ml-72 sm:ml-28 md-ml-28 lg:ml-52 xl:ml-96 text-white">
          View All
        </Link>
      </div>
</div>
</div>

<div className="flex-1 mx-3 my-4 mb-20" style={{ flex: '1 1 calc(50% - 1rem)' }}>
      <div className="bg-gray-50 border text-yellow-700 h-48 p-1  shadow-2xl rounded-lg"> 
    <div className="p-4 rounded-lg mb-4">
    <div className="w-8 h-8  rounded-lg ">
          <Icon classes="" src="./icons/warning.png" />
        </div> 
        <p className="text-sm sm:text-xs md:text-lg xl:text-xl">
    As an operator, Before Submitting FIR:
  </p>
  <ul className="list-disc list-inside text-xl sm:text-xs md:text-md xl:text-lg">
    <li>Verify the complainant's identity and contact details.</li>
    <li>Thoroughly check the provided details of the incident.</li>
  </ul>
  
</div>

</div>

</div>
</div>
</div>
  );
}
