import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Icon, UpdateStatus } from "components";
import { checkCriminalStatus, getAllFIRS } from "features";
import { toast } from 'react-toastify'
import { useNavigate } from "react-router-dom";
import InputMask from 'react-input-mask'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { checkCriminalStatusSchema } from "schema/criminalSchema";


export const CheckCriminalStatus = () => {

  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [response, setResponse] = useState("");
  const{user} = useSelector((state)=>state.user)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(checkCriminalStatusSchema),
  })

  const criminalState = useSelector((state) => state.criminal)

  

  // useEffect(() => {
  //   if (criminalState.error) {
  //     toast.error(criminalState.error)
  //   }
  // }, [criminalState.error])

  const handleFormSubmit = (data) => {
    const CNIC = data
     dispatch(checkCriminalStatus(CNIC));
    // setResponse(criminalState.message);
  }
  
  useEffect(() => {
    if(criminalState.message){
      toast(criminalState.message)
    }
  }, [criminalState.message])
  

  return (
    <div className="xl:flex-1 xl:overflow-y-auto xl:ml-52 xs:ml-0 lg:flex-1 lg:overflow-y-auto lg:ml-52 md:flex-1 md:overflow-y-auto md:ml-52 sm:flex-1 sm:overflow-y-auto sm:ml-52">
        

      <div className={`mt-0 flex flex-col sm:flex-row justify-between items-center`}>

        <h1 className="xl:ml-20 sm:ml-0 max-w-md text-4xl top-0 font-bold font-custom text-center justify-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-700 to-cyan-500 ">
          Operator Dashboard
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
      <h1 id="tagline" className="  mt-2 bg-gray-100 hover:text-white hover:bg-black py-1 rounded-2xl  sm:ml-0 sm:mr-0 text-sm px-2 sm:text-sm md:text-sm lg:text-sm font-bold font-custom text-center transform scale-100 hover:scale-95 transition-transform duration-300 ease-in-out">
  Hey Operator, In the module you can Check the criminal record of the complainant, just simply type the CNIC of the complainant in the below given form and click submit. You will be notified if there is any past criminal record of the complainant is present or not. Good Luck!
</h1>
<br></br>
<br></br>
<form>
<h1 className="font-custom text-5xl font-bold text-center">Enter Complainant CNIC</h1>
<div className=" text-center">
            <InputMask
                 {...register('CNIC', { required: true })}
                mask="99999-9999999-9"
                className={
                  'w-96  px-3 mt-10 h-full  py-2 border-2 rounded-3xl border-gray-600 focus:ring'
                }
                placeholder=" (00000-0000000-0)"
              />
               {errors.CNIC && (
                <p className="text-red-500 text-sm">{errors.CNIC.message}</p>
              )} 

            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                onClick={handleSubmit(handleFormSubmit)}
                disabled={criminalState.loading}
                className=" mt-5 font-bold px-4 py-2 bg-black text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transform transition-transform duration-300 ease-in-out"
              >
                {criminalState.loading ? 'Loading...':'Submit'}
              </button>
            </div>

            </form>
            <br></br>
            <br></br>

            {response?(
                <h1 className="font-custom text-xl font-bold text-center">{response}</h1>
            ): null}
</div>
  );
};
