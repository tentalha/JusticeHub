import { yupResolver } from '@hookform/resolvers/yup'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { signInUser } from 'features'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { loginSchema } from 'schema'
import { toast } from 'react-toastify'

export const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  })

  const userState = useSelector((state) => state.user)

  useEffect(() => {
    if (!userState.error && Object.keys(userState?.user)?.length) {
      navigate('/')
    }
  }, [userState])

  useEffect(() => {
    if (userState.error) {
      toast.error(userState.error)
    }
  }, [userState.error])

  const onFormSubmit = (data) => dispatch(signInUser(data))

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 via-purple-400  to-purple-200">
      <div className="max-w-lg w-full mx-4 p-6 bg-gray-100 rounded-lg shadow-lg">
        <h2 className="text-2xl mb-4 text-center font-bold">Welcome Back!</h2>
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
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Password
            </label>
            <input
              {...register('password', { required: true })}
              type="password"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
              placeholder="Enter your password"
            />
            {errors?.password && (
              <span className="text-red-500 text-sm">
                {errors.password?.message}
              </span>
            )}
          </div>
          <div className="flex">
            <button
              type="submit"
              className="px-4 w-full py-2 bg-black text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600 font-bold"
            >
              Login
            </button>
          </div>
          <div className="flex justify-center mt-4">
            <Link
              to="/register"
              className="mr-4 text-blue-500 hover:underline font-bold "
            >
              Don&apos;t have an account? Register Here
            </Link>
          </div>
          <div className="flex justify-center mt-4">
            <Link
              to="/emailVerification"
              className="mr-4 text-blue-500 hover:underline font-bold "
            >
              Forget Password?
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}
