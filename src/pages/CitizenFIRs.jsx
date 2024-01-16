import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Icon } from 'components'
import { Loader } from 'components'
import { Link } from 'react-router-dom'
import { getAllFIRS } from 'features'

export const CitizenFIRs = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false)

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen)
  }

  const { user } = useSelector((state) => state.user)
  const dispatch = useDispatch()

  const firState = useSelector((state) => state.fir)
  const firs = firState.firs
  console.log(firs)

  useEffect(() => {
    dispatch(getAllFIRS())
  }, [dispatch])

  return (
    <div className="xl:flex-1 xl:overflow-y-auto xl:ml-52 xs:ml-0 lg:flex-1 lg:overflow-y-auto lg:ml-52 md:flex-1 md:overflow-y-auto md:ml-52 sm:flex-1 sm:overflow-y-auto sm:ml-52">
      <div
        className={`mt-0 flex flex-col sm:flex-row justify-between items-center `}
      >
        <h1 className="xl:ml-20 sm:ml-0 max-w-sm text-4xl top-0 font-bold font-custom text-center justify-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-700 to-cyan-500 ">
          Citizen Dashboard
        </h1>

        <div className="flex justify-self-auto mt-2 xl:mr-8 sm:mr-0 sm:mt-0">
          <p className="font-custom-blue font-semibold font-custom ">
          <Link to="/faqs">FAQ</Link> | <Link to="/contactus">Contact Us</Link>
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
        Hey Citizen, Below are the ALL FIRs, click on a link to see a detailed
        view. Pending FIRs are those to whom the investigator has not been
        assigned yet. All FIRs contains all type of FIRs, like Pending, Active,
        Completed, Closed. You can filter them from the below given filter,
        explore them.
      </h1>

      <h1
        id="tagline"
        className="p-5 mt-2 text-center  sm:ml-0 text-xl sm:text-2xl lg:text-4xl font-bold font-custom bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-700 to-cyan-500"
      >
        All FIRs ({firs.length})
      </h1>
      {firs && firs.length > 0 ? (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mx-2 md:mx-5 lg:mx-10 xl:mx-20 mb-20">

          {firState.loading ? (
            <div className="flex justify-center items-center">
              <Loader />
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-600 ">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Case #
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Complainant`&apos;`s Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      CNIC
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Incident Type
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Place of incident
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Phone Number
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Detailed View
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {firs &&
                    firs.map((fir) => (
                      <tr className="bg-white border-b" key={fir._id}>
                        <th
                          scope="row"
                          className="px-6 py-8 font-medium text-gray-900 whitespace-nowrap"
                        >
                          {fir.caseNo}
                        </th>
                        <td className="px-6 py-8">{fir.complainantName}</td>
                        <td className="px-6 py-8">{fir.complainantCNIC}</td>
                        <td className="px-6 py-8">{fir.applicationType}</td>
                        <td className="px-6 py-8">{fir.location}</td>
                        <td className="px-6 py-8">{fir.complainantPhone}</td>
                        <td className="px-6 py-8">{fir.status}</td>
                        <td className="px-6 py-8">
                          <Link
                            to={`/firDetail/${fir._id}`}
                            className="font-medium text-blue-600 hover:underline"
                          >
                            Click For Details
                          </Link>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      ) : (
        <div>
          <h1 className="text-center text-2xl font-custom font-semibold ">
            Currently There Are No FIRs To Show.
          </h1>
        </div>
      )}
    </div>
  )
}
