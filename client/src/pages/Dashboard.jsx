import { useSelector } from 'react-redux'

export const Dashboard = () => {
  const { user } = useSelector((state) => state.user)
  return (
    <div>
      <h1>Dashboard</h1>
      <h1>User: {user?.name}</h1>
    </div>
  )
}
