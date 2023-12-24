import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import { signUpUser } from 'features'
import InputMask from 'react-input-mask'
import { useForm } from 'react-hook-form'
import { registerSchema } from 'schema'
import { toast } from 'react-toastify'

export const SignUp = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  })

  const userState = useSelector((state) => state.user)

  useEffect(() => {
    if (!userState.error && Object.keys(userState?.user)?.length) {
      reset()
      toast.success('Registered Successfully!')
      setTimeout(() => {
        navigate('/')
      }, 1000)
    }
  }, [userState, navigate, reset])

  useEffect(() => {
    if (userState.error) {
      toast.error(userState.error)
    }
  }, [userState.error])

  const handleFormSubmit = (data) => {
    // eslint-disable-next-line no-unused-vars
    const { confirmPassword, ...rest } = data
    dispatch(signUpUser(rest))
  }

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 via-purple-400  to-purple-300">
        <div className="max-w-lg w-full mx-4 p-6 bg-gray-100 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Register Here!
          </h2>
          <form onSubmit={handleSubmit(handleFormSubmit)}>
            <div className="mt-4 mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 font-semibold mb-2"
              >
                Name
              </label>
              <input
                {...register('name', { required: true })}
                type="text"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
                placeholder="Enter your full name"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}
            </div>
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
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 font-semibold mb-2"
              >
                Password
              </label>
              <input
                {...register('password', { required: true })}
                type="password"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
                placeholder="Enter atleat 8 characters long password"
              />
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 font-semibold mb-2"
              >
                Confirm Password
              </label>
              <input
                {...register('confirmPassword', { required: true })}
                type="password"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
                placeholder="Enter password again"
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="CNIC"
                className="block text-gray-700 font-semibold mb-2"
              >
                CNIC
              </label>
              <InputMask
                {...register('CNIC', { required: true })}
                mask="99999-9999999-9"
                className={
                  'w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring'
                }
                placeholder="Enter CNIC (00000-0000000-0)"
              />
              {errors.CNIC && (
                <p className="text-red-500 text-sm">{errors.CNIC.message}</p>
              )}
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className=" font-bold px-4 py-2 bg-black text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </form>
          <div className="flex justify-center mt-4 ">
            <Link to="/login" className=" text-cyan-700 mr-4 hover:underline">
              Already have an account? Login
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
