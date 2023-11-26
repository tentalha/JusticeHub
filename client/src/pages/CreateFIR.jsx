import { useDispatch, useSelector } from 'react-redux'
import { Icon } from 'components'
import { useForm } from 'react-hook-form'
import InputMask from 'react-input-mask'
import { createNewFir } from 'features'
import { yupResolver } from '@hookform/resolvers/yup'
import { firSchema } from 'schema'
import { toast } from 'react-toastify'
import { useEffect } from 'react'
import { resetState } from 'features/slices/firSlice'

export const CreateFIR = () => {
  const { error, loading, isSuccess } = useSelector((state) => state.fir)
  const { user } = useSelector((state) => state.user)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(firSchema),
  })

  useEffect(() => {
    if (error) {
      toast.error(error)
    }
    return () => {
      dispatch(resetState())
    }
  }, [error])

  useEffect(() => {
    if (isSuccess) {
      reset()
      toast.success('SUCCESS')
    }
    return () => {
      dispatch(resetState())
    }
  }, [isSuccess])

  const dispatch = useDispatch()

  const onSubmit = (data) => {
    dispatch(createNewFir(data))
  }

  return (
    <div className=" xl:flex-1 xl:overflow-y-auto xl:ml-52 xs:ml-0 lg:flex-1 lg:overflow-y-auto lg:ml-52 md:flex-1 md:overflow-y-auto md:ml-52 sm:flex-1 sm:overflow-y-auto sm:ml-52">
      <div
        className={`mt-0 flex flex-col sm:flex-row justify-between items-center `}
      >
        <h1 className=" xl:ml-20 sm:ml-0 max-w-sm text-4xl top-0 font-bold font-custom text-center justify-center  bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-700 to-cyan-500 ">
          Operator Dashobard
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
      <hr className="-ml-5 h-2 mt-4 bg-custom-blue"></hr>
      <h1 className=" bg-gray-100 hover:text-white mt-2 mb-2 px-2 hover:bg-black p-3 py-6 rounded-2xl xl:ml-4 xl:mr-4 sm:ml-0 sm:mr-0 text-sm sm:text-sm md:text-sm lg:text-sm font-bold font-custom text-center transform scale-100 hover:scale-95 transition-transform duration-300 ease-in-out">
        Hey Operator, You can Create New FIR in this Module. Dont Forget to
        check the criminal status of the complainant. Make sure you enter
        correct information about the incident. Good Luck!
      </h1>
      <br />
      <div className="container mx-auto px-4 lg:px-20 mb-20">
        <div className="w-full p-8 my-4 md:px-12 lg:w-full lg:pl-4 lg:pr-0 mr-auto rounded-2xl shadow-xl shadow-custom-blue">
          <div className="flex">
            <h1 className="ml-4 sm:ml-0 w-fit text-4xl border-b-8 border-b-custom-blue top-0 font-bold font-custom bg-clip-text  text-custom-blue">
              New FIR
            </h1>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 gap-5 gap-x-28 md:grid-cols-2 mt-5 pr-5">
              <div>
                <label className="text-black font-semibold">
                  Complainant Name
                </label>
                <input
                  className="w-full lg:w-full bg-white mr-5 border-gray-300 border-2  text-gray-900 mt-2 p-2 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Full Name*"
                  {...register('complainantName')}
                />
                {errors.complainantName && (
                  <p className="text-red-500 text-sm">
                    {errors.complainantName.message}
                  </p>
                )}
              </div>

              <div>
                <label className="text-black font-semibold">
                  Date and Time
                </label>
                <input
                  className="w-full lg:w-full bg-white mr-5 border-gray-300 border-2  text-gray-900 mt-2 p-2 rounded-lg focus:outline-none focus:shadow-outline"
                  type="datetime-local"
                  id="DateTime"
                  name="DateTime"
                  placeholder="Date and Time*"
                  {...register('datetime')}
                />
                {errors.datetime && (
                  <p className="text-red-500 text-sm">
                    {errors.datetime.message}
                  </p>
                )}
              </div>
              <div>
                <label className="text-black font-semibold">CNIC</label>
                <InputMask
                  className="w-full lg:w-full bg-white mr-5 border-gray-300 border-2  text-gray-900 mt-2 p-2 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                  mask="99999-9999999-9"
                  placeholder="CNIC (00000-0000000-0)"
                  {...register('complainantCNIC')}
                />
                {errors.complainantCNIC && (
                  <p className="text-red-500 text-sm">
                    {errors.complainantCNIC.message}
                  </p>
                )}
              </div>

              <div>
                <label className="text-black font-semibold">
                  Place of Incident
                </label>
                <input
                  className="w-full lg:w-full bg-white mr-5 border-gray-300 border-2  text-gray-900 mt-2 p-2 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Place Of Incident"
                  {...register('location')}
                />
                {errors.location && (
                  <p className="text-red-500 text-sm">
                    {errors.location.message}
                  </p>
                )}
              </div>

              <div>
                <label className="text-black font-semibold">
                  Incident Type
                </label>
                <select
                  className="w-full lg:w-full bg-white mr-5 border-gray-300 border-2  text-gray-900 mt-2 p-2 rounded-lg focus:outline-none focus:shadow-outline"
                  {...register('applicationType')}
                >
                  <option value="theft">Theft</option>
                  <option value="murder">Murder</option>
                  <option value="accident">Accident</option>
                </select>
                {errors.applicationType && (
                  <p className="text-red-500 text-sm">
                    {errors.applicationType.message}
                  </p>
                )}
              </div>
              <div>
                <label className="text-black font-semibold">Phone Number</label>
                <input
                  className="w-full lg:w-full bg-white mr-5 border-gray-300 border-2  text-gray-900 mt-2 p-2 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                  {...register('complainantPhone')}
                  placeholder="+92 0000000000"
                />
                {errors.complainantPhone && (
                  <p className="text-red-500 text-sm">
                    {errors.complainantPhone.message}
                  </p>
                )}
              </div>
              <div>
                <label className="text-black font-semibold">Case No#</label>
                <input
                  className="w-full lg:w-full bg-white mr-5 border-gray-300 border-2  text-gray-900 mt-2 p-2 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="ABC123"
                  {...register('caseNo')}
                />
                {errors.caseNo && (
                  <p className="text-red-500 text-sm">
                    {errors.caseNo.message}
                  </p>
                )}
              </div>
            </div>

            <div className="my-4 mr-5">
              <label className="text-black font-semibold">
                Details/Description
              </label>
              <textarea
                placeholder="Enter Details of the Incident"
                className="w-full h-56 bg-white border-gray-300 border-2  text-gray-900 mt-2 p-1  rounded-lg focus:outline-none focus:shadow-outline"
                {...register('details')}
              />
              {errors.details && (
                <p className="text-red-500 text-sm">{errors.details.message}</p>
              )}
            </div>
            <div className="grid grid-cols-1 gap-5 gap-x-28 md:grid-cols-2 mt-5 pr-5">
              <div>
                <label className="text-black font-semibold">
                  Suspects Name
                </label>
                <input
                  className="w-full lg:w-full bg-white mr-5 border-gray-300 border-2  text-gray-900 mt-2 p-2 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Pablo Escobar"
                  {...register('suspects')}
                />
                {errors.suspects && (
                  <p className="text-red-500 text-sm">
                    {errors.suspects.message}
                  </p>
                )}
              </div>

              <div>
                <label className="text-black font-semibold">
                  Relevant Documents
                </label>
                <label className="relative mt-5 font-bold font-custom inline-flex ml-5 items-center px-20 py-3 bg-custom-blue text-white rounded-3xl border border-gray-300 cursor-pointer hover:bg-gray-500 hover:cursor-pointer">
                  <span className="mr-2">Choose File</span>
                  <input
                    type="file"
                    id="RelevantDocuments"
                    accept=".pdf"
                    name="RelevantDocuments"
                    className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer bg-custom-blue rounded-3xl"
                    {...register('relevantDocs')}
                  />
                </label>
              </div>
            </div>
            <div className="my-2 mt-10 w-full lg:w-1/4 flex justify-center items-center">
              <input
                className="text-sm font-semibold font-custom tracking-wide bg-green-500 text-gray-100 p-4 rounded-3xl w-full focus:outline-none focus:shadow-outline hover:cursor-pointer hover:bg-green-700"
                type="submit"
                disabled={loading}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
