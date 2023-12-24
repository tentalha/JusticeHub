import { useSelector } from 'react-redux'
import { EvidenceGrid, Icon } from 'components'
import { useLocation } from 'react-router-dom'

export const Evidences = () => {
  const { user } = useSelector((state) => state.user)
  const location = useLocation()
  const { evidences, type } = location.state

  return (
    <div className="xl:flex-1 xl:overflow-y-auto xl:ml-52 xs:ml-0 lg:flex-1 lg:overflow-y-auto lg:ml-52 md:flex-1 md:overflow-y-auto md:ml-52 sm:flex-1 sm:overflow-y-auto sm:ml-52">
      {/* <div className={`${isModalOpen  ? "blur-sm" : ""}`}> */}

      <div
        className={`mt-0 flex flex-col sm:flex-row justify-between items-center`}
      >
        <h1 className="xl:ml-20 sm:ml-0 max-w-md text-4xl top-0 font-bold font-custom text-center justify-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-700 to-cyan-500 ">
          Investigator Dashboard
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
      <hr className="h-2 mt-4 -ml-5 bg-custom-blue"></hr>
      <br />
      <h1
        id="tagline"
        className="  mt-2 bg-gray-100 hover:text-white hover:bg-black py-1 rounded-2xl  sm:ml-0 sm:mr-0 text-sm px-2 sm:text-sm md:text-sm lg:text-sm font-bold font-custom text-center transform scale-100 hover:scale-95 transition-transform duration-300 ease-in-out"
      >
        Hey Investigator, On this page you will find multiple folders, each
        folders has its own type of evidence. Different folders are present for
        files, pictures, audio and video. You can also upload new evidence on
        this page.
      </h1>
      <br></br>
      <div className="flex sm:flex-row justify-between items-center">
        <div className="flex justify-end mb-4 mr-2 xl:px-20">
          <h1
            id="tagline"
            className="p-5 mt-2 text-center  sm:ml-0 text-xl sm:text-2xl lg:text-4xl font-bold font-custom bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-700 to-cyan-500"
          >
            {type.toUpperCase()} Evidences
          </h1>
        </div>
      </div>
      <div>
        {!evidences.length ? (
          <h1>No evidence available</h1>
        ) : (
          <div>
            <EvidenceGrid type={type} evidences={evidences} />
          </div>
        )}
      </div>
    </div>
    //   </div>
  )
}
