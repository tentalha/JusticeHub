import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import { resetPassword } from 'features'
import { useForm } from 'react-hook-form'
import { resetPasswordSchema } from 'schema'
import { toast } from 'react-toastify'
import { useSearchParams } from 'react-router-dom'

export const ResetPassword = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(resetPasswordSchema),
  })

  const userState = useSelector((state) => state.user)

  useEffect(() => {
    if (userState.error) {
      toast.error(userState.error)
    }
  }, [userState.error])

  useEffect(() => {
    if (userState.isSuccess) {
      toast('Password changed successfully.')
      navigate('/login')
    }
  }, [userState.isSuccess, navigate])

  const handleFormSubmit = (data) => {
    const password = data.password
    const token = searchParams.get('token')
    const id = searchParams.get('id')
    dispatch(resetPassword({ token, id, password }))
  }

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 via-purple-400  to-purple-300">
        <div className="max-w-lg w-full mx-4 p-6 bg-gray-100 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Create New Password
          </h2>
          <form onSubmit={handleSubmit(handleFormSubmit)}>
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

            <div className="flex justify-center">
              <button
                type="submit"
                className=" font-bold px-4 py-2 bg-black text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
