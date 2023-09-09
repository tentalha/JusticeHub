import { useSelector } from 'react-redux'
import { data } from 'constant' // Assuming 'constants' is the correct path

export const Citizen = () => {
  const { user } = useSelector((state) => state.user)

  return (
    <div>
      <h1 className="ml-4 md:ml-20 lg:ml-96 max-w-sm border-b-8 border-b-custom-blue text-2xl md:text-3xl lg:text-4xl font-bold font-custom text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-700 to-cyan-500">
        CITIZEN DASHBOARD
      </h1>
      <br />
      <h1 className="ml-4 md:ml-16 text-sm md:text-md lg:text-lg font-bold font-custom text-center">
        Welcome Back {user?.name}, you can view all your FIRs on this Dashboard
        and can chat with the investigator of your respective case.
      </h1>
      <br />

      <h1 className="ml-4 md:ml-16 mt-1 border-l-8 border-l-custom-blue text-xl md:text-2xl lg:text-3xl font-bold font-custom bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-700 to-cyan-500">
        Announcements
      </h1>

      <div className="flex flex-col md:flex-row">
        {data.map((item) => (
          <div key={item.id} className=" mx-4 my-2 md:mx-0 md:my-4">
            <a
              href="#"
              className=" ml-16 block max-w-xs p-4 bg-white border border-gray-200 rounded-lg shadow bg-gradient-to-t from-gray-400 via-gray-500 to-gray-700 transform scale-100 hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              <h5 className="mb-1 md:mb-2 text-lg md:text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                {item.title}
              </h5>
              <p className="font-normal text-white">{item.description}</p>
            </a>
          </div>
        ))}
      </div>
      <br />

      <h1 className="ml-4 md:ml-16 mt-4 border-l-8 border-l-custom-blue text-xl md:text-2xl lg:text-3xl font-bold font-custom bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-700 to-cyan-500">
        Latest News
      </h1>

      <div className="flex flex-col md:flex-row">
        {data.map((item) => (
          <div key={item.id} className="mx-4 my-2 md:mx-0 md:my-4">
            <div className="max-w-xs ml-16 bg-white border border-gray-200 rounded-lg shadow bg-gradient-to-t from-gray-600 via-gray-700 to-gray-800 transform scale-100 hover:scale-105 transition-transform duration-300 ease-in-out">
              <a href="#">
                <img className="rounded-t-lg" src={item.image} alt="" />
              </a>
              <div className="p-4">
                <a href="#">
                  <h5 className="mb-1 md:mb-2 text-lg md:text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {item.title}
                  </h5>
                </a>
                <p className="font-normal text-white">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
