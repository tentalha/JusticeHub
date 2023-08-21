import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export const Dashboard = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user } = useSelector((state) => state.user)

  return (
    <div>
      <h1>Dashboard</h1>
      <h1>User: {user?.name}</h1>
      <h1 onClick={() => navigate('/hello')}>Hello</h1>
      <button onClick>LOGOUT</button>
    </div>
  )
}
