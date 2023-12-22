import { yupResolver } from '@hookform/resolvers/yup'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { forgetPassword, signInUser } from 'features'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { emailVerificationSchema, loginSchema } from 'schema'
import { toast } from 'react-toastify'

export const EmailVerification = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(emailVerificationSchema),
  })

  const userState = useSelector((state) => state.user)

  useEffect(() => {
    if (!userState.error && Object.keys(userState?.link)?.length) {
      toast.success("A reset Password link has been sent to your email, check it out.");
    }
  }, [userState])


  useEffect(() => {
    if (userState.error) {
      toast.error("Email Does Not Exist")
    }
   
  }, [userState.error])

  const onFormSubmit = (data) => dispatch(forgetPassword(data));

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 via-purple-400  to-purple-200">
      <div className="max-w-lg w-full mx-4 p-6 bg-gray-100 rounded-lg shadow-lg">
        <h2 className="text-2xl mb-4 text-center font-bold">Email Verification</h2>
        <form onSubmit={handleSubmit(onFormSubmit)}>
          <div className="mb-4">
            <label htmlFor="email" className="text-gray-700 font-semibold">
              Email
            </label>
            <input
              {...register('email', { required: true })}
              type="email"
              className="w-full mt-2 px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
              placeholder="Enter your email"
            />
            {errors?.email && (
              <span className="text-red-500 text-sm">
                {errors.email?.message}
              </span>
            )}
          </div>
          
          <div className="flex">
            <button
              type="submit"
              className="px-4 w-full py-2 bg-black text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600 font-bold"
            >
              Verify
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
