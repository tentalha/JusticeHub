import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import gsap from 'gsap'
import { Icon } from 'components'
import Chart from 'react-apexcharts'
import { getAllFIRS } from 'features'
import { Link } from 'react-router-dom'

export const Investigator = () => {
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.user)
  const { firs } = useSelector((state) => state.fir)

  const [donutState, setDonutState] = useState()
  const [lengths, setLengths] = useState({})
  useEffect(() => {
    dispatch(getAllFIRS())
  }, [])

  useEffect(() => {
    if (firs.length) {
      
      const invesActiveFIRs = (firs?.filter((elem) => elem.status === 'active')?.length) ?? 0;
      const invesCompletedFIRs = (firs?.filter((elem) => elem.status === 'completed')?.length) ?? 0;
      const invesClosedFIRs = (firs?.filter((elem) => elem.status === 'closed')?.length) ?? 0;
      setLengths({ invesActiveFIRs, invesClosedFIRs, invesCompletedFIRs })

      setDonutState({
        options: {
          series: [invesActiveFIRs, invesCompletedFIRs, invesClosedFIRs],
          labels: ['Active', 'Completed', 'Closed'],
        },
        series: [invesActiveFIRs, invesCompletedFIRs, invesClosedFIRs],
        chartOptions: {
          labels: ['Active', 'Completed', 'Closed'],
        },
      })
    }
  }, [firs])

  let characters = document.querySelectorAll('.char')

  for (let i = 0; i < characters.length; i++) {
    characters[i].classList.add('translate-y-full')
  }
  gsap.to('.char', { y: 0, stagger: 0.05, delay: 0.02, duration: 0.5 })

  return (
    <div className=" xl:flex-1 xl:overflow-y-auto xl:ml-52 xs:ml-0 lg:flex-1 lg:overflow-y-auto lg:ml-52 md:flex-1 md:overflow-y-auto md:ml-52 sm:flex-1 sm:overflow-y-auto sm:ml-52">
      <div
        className={`mt-0 flex flex-col sm:flex-row justify-between items-center `}
      >
        <h1 className=" xl:ml-20 sm:ml-0 max-w-md text-4xl top-0 font-bold font-custom text-center justify-center  bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-700 to-cyan-500 ">
          Investigator Dashobard
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
      <h1 className=" bg-gray-100 hover:text-white mt-2 mb-2 px-2 hover:bg-black p-3 py-6 rounded-2xl xl:ml-4 xl:mr-4 sm:ml-0 sm:mr-0 text-sm sm:text-sm md:text-sm lg:text-sm font-bold font-custom text-center transform scale-100 hover:scale-95 transition-transform duration-300 ease-in-out">
        Hey {user?.name}, Welcome to your dasboard, In this Dashboard you can do
        all the operations, which an SHO level officer can perform. You can
        visualize the FIRs through graphs on this dashboard and much more.
      </h1>

      <div className="flex flex-col md:flex-row ">
        <div
          className="mx-3 my-4 h-full sm:mx-4 sm:my-2 md:mx-6 md:my-2 lg:mx-8 lg:my-2 xl:mx-20 xl:my-2"
          style={{ flex: '1 1 calc(50% - 1rem)', zIndex: 998 }}
        >
          <div className="mb-5 block max-w-xs p-4 border text-black border-gray-200 rounded-lg shadow-md bg-purple-600  hover:text-white transform scale-100 hover:scale-110 transition-transform duration-300 ease-in-out">
            <div className="flex">
              <h1 className="font-custome font-bold text-3xl mt-2 ml-4 text-white">
                Assigned <br></br>Cases{' '}
              </h1>
              <div className="w-10 h-10 rounded-full bg-white mt-2 ml-24 flex items-center justify-center">
                <Icon src="./icons/active.jpg" />
              </div>
            </div>
            <div className="flex">
              <h3 className="mt-16 ml-4 font-bold text-white text-4xl">
                {lengths?.invesActiveFIRs}
              </h3>
              <Link
                to="/assignedFIRs"
                className="mt-20 ml-36 font-semibold text-white text-sm"
              >
                View All
              </Link>
            </div>
          </div>
        </div>

        <div
          className="mx-3 my-4 h-48 sm:mx-4 sm:my-2 md:mx-6 md:my-2 lg:mx-8 lg:my-2 xl:mx-2 xl:my-2"
          style={{ flex: '1 1 calc(50% - 1rem)', zIndex: 998 }}
        >
          <div className="mb-5 block max-w-xs p-4 border text-black border-gray-200 rounded-lg shadow-md bg-custom-blue  hover:text-white transform scale-100 hover:scale-110 transition-transform duration-300 ease-in-out">
            <div className="flex">
              <h1 className="font-custome font-bold text-3xl mt-2 ml-4 text-white">
                Completed <br></br>Cases{' '}
              </h1>
              <div className="w-10 h-10 rounded-full bg-white mt-2 ml-14 flex items-center justify-center">
                <Icon src="./icons/completed.png" />
              </div>
            </div>
            <div className="flex">
              <h3 className="mt-16 ml-4 font-bold text-white text-4xl">
                {lengths?.invesCompletedFIRs}
              </h3>
              <Link
                to="/completedFIRs"
                className="mt-20 ml-36 font-semibold text-white text-sm"
              >
                View All
              </Link>
            </div>
          </div>
        </div>

        <div
          className="mx-3 my-4 h-48 sm:mx-4 sm:my-2 md:mx-6 md:my-2 lg:mx-8 lg:my-2 xl:mx-20 xl:my-2"
          style={{ flex: '1 1 calc(50% - 1rem)', zIndex: 998 }}
        >
          <div className="mb-5 block max-w-xs p-4 border text-black border-gray-200 rounded-lg shadow-md bg-cyan-500  hover:text-white transform scale-100 hover:scale-110 transition-transform duration-300 ease-in-out">
            <div className="flex">
              <h1 className="font-custome font-bold text-3xl mt-2 ml-4 text-white">
                Closed <br></br>Cases{' '}
              </h1>
              <div className="w-10 h-10 rounded-full bg-white mt-2 ml-28 flex items-center justify-center">
                <Icon src="./icons/cross.png" />
              </div>
            </div>
            <div className="flex">
              <h3 className="mt-16 ml-4 font-bold text-white text-4xl">
                {lengths?.invesClosedFIRs}
              </h3>
              <Link
                to="/closedFIRs"
                className="mt-20 ml-36 font-semibold text-white text-sm"
              >
                View All
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex mb-20">
        <div>
          <div className="flex mt-5">
            <div className="ml-20">
              <span className="font-custom font-semibold text-2xl text-gray-700">
                Nov
              </span>
              <br></br>
              <span className="ml-3 font-custom font-bold text-3xl">18</span>
              <br></br>
              <span className="font-custom font-semibold text-2xl text-gray-800">
                2023
              </span>
            </div>
            <div className=" p-5 mt-2 font-custom text-gray-500 text-sm">
              Israeli police crack down on Arab citizens expressing solidarity
              with Gaza
              <hr className="mt-3"></hr>
            </div>
          </div>

          <div className="flex mt-5">
            <div className="ml-20">
              <span className="font-custom font-semibold text-2xl text-gray-800">
                Nov
              </span>
              <br></br>
              <span className="ml-3 font-custom font-bold text-3xl">18</span>
              <br></br>
              <span className="font-custom text-gray-800 font-semibold text-2xl">
                2023
              </span>
            </div>
            <div className=" p-5 mt-2 font-custom text-gray-500 text-sm">
              Israeli police crack down on Arab citizens expressing solidarity
              with Gaza
              <hr className="mt-3"></hr>
            </div>
          </div>

          <div className="flex mt-5">
            <div className="ml-20">
              <span className="font-custom font-semibold text-2xl text-gray-800">
                Nov
              </span>
              <br></br>
              <span className="ml-3 font-custom font-bold text-3xl">18</span>
              <br></br>
              <span className="font-custom font-semibold text-2xl text-gray-800">
                2023
              </span>
            </div>
            <div className=" p-5 mt-2 font-custom text-gray-500 text-sm">
              Israeli police crack down on Arab citizens expressing solidarity
              with Gaza
              <hr className="mt-3"></hr>
            </div>
          </div>
        </div>
        {donutState && (
          <div className="sm:mb-20 sm:mr-2 mb-10 xl:ml-10 mt-12 h-80">
            <div className="col-4 xl:py-5 xl:px-5">
              <Chart
                options={donutState.options}
                series={donutState.series}
                type="donut"
                width="420"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
