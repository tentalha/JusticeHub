import { Sidebar } from 'components'
import { Outlet } from 'react-router-dom'

export const MainLayout = () => {
  return (
    <main className="flex gap-2">
      <div>
        <Sidebar />
      </div>
      <div>
        <div className="ml-64 mt-6">
          <Outlet />
        </div>
      </div>
    </main>
  )
}
