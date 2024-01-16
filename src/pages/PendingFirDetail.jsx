import { useSelector, useDispatch } from 'react-redux'
import { Icon, RejectFirModal } from 'components'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { AcceptFirModal } from 'components'
import { Loader } from 'components'
import { getPendingFIRS } from 'features'

export const PendingFirDetail = () => {
  const { user } = useSelector((state) => state.user)
  const { pendingFir } = useSelector((state) => state.fir)
  const dispatch = useDispatch()
  const { id } = useParams()
  const firState = useSelector((state) => state.fir)
  
  // const [numPages, setNumPages] = useState(null);
  // const [pageNumber, setPageNumber] = useState(1);
  // const [file, setFile] = useState();

  const [isRejectModalOpen, setIsRejectModalOpen] = useState(false)
  const [isAcceptModalOpen, setIsAcceptModalOpen] = useState(false)

  // function onDocumentSuccess({numPages}){

  //   setNumPages(numPages)
  // }

  const selectedFir = pendingFir.filter((elem) => elem._id === id)

  useEffect(() => {
    dispatch(getPendingFIRS())
  }, [])

  return (
    <div className=" xl:flex-1 xl:overflow-y-auto xl:ml-52 xs:ml-0 lg:flex-1 lg:overflow-y-auto lg:ml-52 md:flex-1 md:overflow-y-auto md:ml-52 sm:flex-1 sm:overflow-y-auto sm:ml-52">
      {' '}
      {/* Adjust the margin to match your sidebar width */}
      <div
        className={`${isRejectModalOpen || isAcceptModalOpen ? 'blur-sm' : ''}`}
      >
        <div
          className={`mt-0 flex flex-col sm:flex-row justify-between items-center `}
        >
          <h1 className=" xl:ml-20 sm:ml-0 max-w-sm text-4xl top-0 font-bold font-custom text-center justify-center  bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-700 to-cyan-500 ">
            Admin Dashobard
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
        <h1 className=" bg-gray-100 hover:text-white mt-2 mb-2 hover:bg-black p-3 py-6 rounded-2xl xl:ml-4 xl:mr-4 sm:ml-0 sm:mr-0 text-sm sm:text-sm md:text-sm lg:text-sm font-bold font-custom text-center transform scale-100 hover:scale-95 transition-transform duration-300 ease-in-out">
          Hey Admin, Here`&lsquo;`s the Detailed Infomation of the FIR. You can
          also see the Related documents of the FIR and also the Evidences which
          has been uploaded by investigator. You can assign investigators to the
          pending FIRs.
        </h1>

        {firState.loading ? (
          <div className="flex justify-center items-center">
            <Loader />
          </div>
        ) : (
          <div>
            {selectedFir.map((elem) => (
              <div
                className="container mx-auto px-4 lg:px-20 mb-20"
                key={elem?.caseNo}
              >
                <div className="w-full p-8 my-4 md:px-12 lg:w-full lg:pl-4 lg:pr-0 mr-auto rounded-2xl shadow-xl shadow-custom-blue">
                  <div className="flex">
                    <h1 className="ml-4 sm:ml-0 w-fit text-4xl border-b-8 border-b-custom-blue top-0 font-bold font-custom bg-clip-text  text-custom-blue">
                      FIR # {elem.caseNo}
                    </h1>
                  </div>
                  <div className="grid grid-cols-1 gap-5 gap-x-28 md:grid-cols-2 mt-5 pr-5">
                    <div>
                      <h1 className="w-full lg:w-full text-md bg-white mr-5 font-semibold placeholder:text-black text-gray-900 mt-2 p-2 rounded-lg focus:outline-none focus:shadow-outline">
                        Complainant Name:{' '}
                        <span className=" text-gray-500">
                          {elem.complainantName}
                        </span>{' '}
                      </h1>
                    </div>

                    <div>
                      <h1 className="w-full lg:w-full text-md bg-white mr-5 font-semibold placeholder:text-black text-gray-900 mt-2 p-2 rounded-lg focus:outline-none focus:shadow-outline">
                        Date and Time:{' '}
                        <span className=" text-gray-500">{elem.datetime}</span>
                      </h1>
                    </div>

                    <div>
                      <h1 className="w-full lg:w-full text-md bg-white mr-5 font-semibold placeholder:text-black text-gray-900 mt-2 p-2 rounded-lg focus:outline-none focus:shadow-outline">
                        Location of Incident:{' '}
                        <span className=" text-gray-500">{elem.location}</span>
                      </h1>
                    </div>

                    <div>
                      <h1 className="w-full lg:w-full text-md bg-white mr-5 font-semibold placeholder:text-black text-gray-900 mt-2 p-2 rounded-lg focus:outline-none focus:shadow-outline">
                        Complainant CNIC:{' '}
                        <span className=" text-gray-500">
                          {elem.complainantCNIC}
                        </span>
                      </h1>
                    </div>

                    <div>
                      <h1 className="w-full lg:w-full text-md bg-white mr-5 font-semibold placeholder:text-black text-gray-900 mt-2 p-2 rounded-lg focus:outline-none focus:shadow-outline">
                        Application Type:{' '}
                        <span className=" text-gray-500">
                          {elem.applicationType}
                        </span>
                      </h1>
                    </div>

                    <div>
                      <h1 className="w-full lg:w-full text-md bg-white mr-5 font-semibold placeholder:text-black text-gray-900 mt-2 p-2 rounded-lg focus:outline-none focus:shadow-outline">
                        Complainant Phone Number:{' '}
                        <span className=" text-gray-500">
                          {elem.complainantPhone}
                        </span>
                      </h1>
                    </div>
                  </div>

                  <div className="my-4 mr-5">
                    <h1 className="w-full h-full bg-white text-md border-gray-300  font-semibold placeholder:text-black text-gray-900 mt-2 p-1  rounded-lg focus:outline-none focus:shadow-outline">
                      Details/Description: <br></br>{' '}
                      <span className=" text-gray-500">{elem.details}</span>
                    </h1>
                  </div>

                  <div className="h-full">
                    <label
                      htmlFor="RelevantDocuments"
                      className="text-black font-semibold"
                    >
                      Relevant Documents
                    </label>
                    {selectedFir && selectedFir[0]?.relevantDocs?.url ? (
                      <div className="h-96 w-auto">
                        <iframe
                          src={elem?.relevantDocs?.url}
                          className="w-full h-full"
                          allowFullScreen
                        ></iframe>
                      </div>
                    ) : (
                      <div>
                        <h1 className="text-center text-xl font-custom font-semibold text-gray-900 ">
                          No relevant Documents were given by the Complainant!{' '}
                        </h1>
                      </div>
                    )}
                  </div>
                  <div className="my-2 mt-10 w-full lg:w-1/4 flex flex-col lg:flex-row justify-center items-center mx-auto">
                    <button
                      onClick={() => setIsAcceptModalOpen(true)}
                      className="text-sm font-semibold font-custom tracking-wide lg:mx-2 lg:w-full px-20 bg-green-500 text-gray-100 py-3 rounded-3xl focus:outline-none focus:shadow-outline"
                    >
                      APPROVE
                    </button>
                    <button
                      onClick={() => setIsRejectModalOpen(true)}
                      className="text-sm font-semibold font-custom tracking-wide mt-4 lg:mt-0 px-20 lg:mx-2 lg:w-full bg-red-500 text-gray-100 py-3 rounded-3xl focus:outline-none focus:shadow-outline"
                    >
                      REJECT
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <AcceptFirModal
        isOpen={isAcceptModalOpen}
        onClose={() => setIsAcceptModalOpen(false)}
        id={id}
      />
      <RejectFirModal
        isOpen={isRejectModalOpen}
        onClose={() => setIsRejectModalOpen(false)}
        id={id}
      />
    </div>
  )
}
