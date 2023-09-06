import React from 'react'

export const Sidebar = () => {
  return (
    <div className="flex h-screen bg-gray-100">
    {/* Sidebar */}
    <aside className=" w-full bg-custom-blue text-white py-4 px-3">
    <h1 className="text-2xl font-semibold mb-4">Citizen Dashboard</h1>
      <nav>
        <ul>
          <li className="mb-2">
            <a href="#" className="block hover:bg-blue-800 py-1 px-2 rounded text-lg ">
              Dashboard
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="block hover:bg-blue-800 py-1 px-2 rounded text-lg ">
              My FIRs
            </a>
          </li>
          <li className='mb-2'>
            <a href="#" className="block hover:bg-blue-800 py-1 px-2 rounded text-lg ">
              Settings
            </a>
          </li>
          <li className='mb-2'>
            <a href="#" className="block hover:bg-blue-800 py-1 px-2 rounded ">
              Logout
            </a>
          </li>
        </ul>
      </nav>
    </aside>
</div>
  )
}

