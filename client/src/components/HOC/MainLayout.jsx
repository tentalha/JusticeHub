import { Sidebar } from 'components'
import { Outlet } from 'react-router-dom'

export const MainLayout = () => {
  return (
    <main className="flex">
      <Sidebar />
        <div className="mt-6 ml-4">
          <Outlet />
        </div>
    
    </main>
  )
}
