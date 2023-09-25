import { useSelector } from "react-redux";
import { useState } from "react";
import SplitType from "split-type";
import gsap from "gsap";
import { data } from "constant"; // Assuming 'constants' is the correct path
import { Icon } from "components";
import Chart from "react-apexcharts";

export const Admin = () => {
  const { user } = useSelector((state) => state.user);
  const [donutState, setDonutState] = useState({
    options: {
      series: [44, 55, 93, 2],
      labels: ["Pending", "Active", "Completed", "Dropped"],
    },
    series: [44, 55, 93, 2],
    chartOptions: {
      labels: ["Pending", "Active", "Completed", "Dropped"],
    },
  });

  const [barState, setBarState] = useState({
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
      },
      title: {
        text: "Monthwise Completed FIRs",
      },
    },
    series: [
      {
        name: "Completed FIRs",
        data: [6, 4, 9, 10, 7, 6, 7, 9, 11, 4, 3, 8],
      },
    ],
  });

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
        <h1 className=" xl:ml-20 sm:ml-0 max-w-sm text-4xl top-0 font-bold font-custom text-center justify-center  bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-700 to-cyan-500 ">
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
      <hr className=" h-2 mt-4 bg-custom-blue w-full"></hr>
      <h1 className=" mt-2 bg-gray-100 hover:text-white hover:bg-black py-1 rounded-2xl  sm:ml-0 sm:mr-0 text-sm sm:text-sm md:text-sm lg:text-sm font-bold font-custom text-center transform scale-100 hover:scale-95 transition-transform duration-300 ease-in-out">
        Hey {user?.name}, Welcome to your dasboard, In this Dashboard you can do
        all the operations, which an SHO level officer can perform. You can
        visualize the FIRs through graphs on this dashboard and much more.
      </h1>
      <div className="flex mt-5">
        <div className="w-72 h-48 rounded-lg bg-red-600 ml-28 transform scale-100 hover:scale-110 transition-transform duration-300 ease-in-out">
          <div className="flex">
            <h1 className="font-custome font-bold text-3xl mt-2 ml-4 text-white">
              {" "}
              Pending <br></br>Cases{" "}
            </h1>
            <div className="w-10 h-10 rounded-full bg-white mt-2 ml-24 flex items-center justify-center">
              <Icon src="./icons/pending.png" />
            </div>
          </div>
          <div className="flex">
            <h3 className="mt-16 ml-4 font-bold text-white text-4xl">44</h3>
            <a className="mt-20 ml-36 font-semibold text-white text-sm">
              View All
            </a>
          </div>
        </div>

        <div className="w-72 h-48 rounded-lg bg-blue-600 ml-28 transform scale-100 hover:scale-110 transition-transform duration-300 ease-in-out">
          <div className="flex">
            <h1 className="font-custome font-bold text-3xl mt-2 ml-4 text-white">
              {" "}
              Active <br></br>Cases{" "}
            </h1>
            <div className="w-10 h-10 rounded-full bg-white mt-2 ml-32 flex items-center justify-center">
              <Icon src="./icons/active.jpg" />
            </div>
          </div>
          <div className="flex">
            <h3 className="mt-16 ml-4 font-bold text-white text-4xl">55</h3>
            <a className="mt-20 ml-36 font-semibold text-white text-sm">
              View All
            </a>
          </div>
        </div>

        <div className="w-72 h-48 rounded-lg bg-green-600 ml-28 transform scale-100 hover:scale-110 transition-transform duration-300 ease-in-out">
          <div className="flex">
            <h1 className="font-custome font-bold text-3xl mt-2 ml-4 text-white">
              {" "}
              Completed <br></br>Cases{" "}
            </h1>
            <div className="w-10 h-10 rounded-full bg-white mt-2 ml-14 flex items-center justify-center">
              <Icon src="./icons/completed.png" />
            </div>
          </div>
          <div className="flex">
            <h3 className="mt-16 ml-4 font-bold text-white text-4xl">93</h3>
            <a className="mt-20 ml-36 font-semibold text-white text-sm">
              View All
            </a>
          </div>
        </div>
      </div>
      <div className="flex mt-3">
        <div className="row mb-20 ml-10 mt-2 w-full h-80 shadow-2xl">
          <div className="col-4 p-10">
            <Chart
              options={donutState.options}
              series={donutState.series}
              type="donut"
              width="420"
            />
          </div>
        </div>

        <div className="row mb-20 mr-10 ml-10 mt-2 w-full h-80 shadow-2xl ">
          <div className="col-4 p-5">
            <Chart
              options={barState.options}
              series={barState.series}
              type="bar"
              width="500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
