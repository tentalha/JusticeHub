import { signOut } from 'helpers'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export const Dashboard = () => {
  const navigate = useNavigate()
  const { user } = useSelector((state) => state.user)

  return (
    <div>
      <h1>Dashboard</h1>
      <h1>User: {user?.name}</h1>
      <h1 onClick={() => navigate('/hello')}>Hello</h1>
      <h1 onClick={() => navigate('/hi')}>Hi</h1>
      <button
        className="bg-blue-500 rounded-lg p-2 text-white m-2"
        onClick={signOut}
      >
        LOGOUT
      </button>
    </div>
  )
}
