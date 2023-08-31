import { Icon } from 'components'
import { signOut } from 'helpers'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export const Sidebar = () => {
  const {
    user: { role },
  } = useSelector((state) => state.user)

  return (
    <div>
      <aside className="fixed top-0 left-0 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0">
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 ">
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                to="/"
                className="flex items-center p-2 text-gray-900 rounded-lg  group"
              >
                <Icon src="/icons/dashboard.png" />
                <span className="ml-3">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                to="/cases"
                className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100  group"
              >
                <Icon src="/icons/cases.png" />
                <span className="flex-1 ml-3 whitespace-nowrap">Cases</span>
                {role === 'admin' ? (
                  <span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
                    Admin
                  </span>
                ) : null}
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100  group"
              >
                <Icon src="/icons/inbox.png" />
                <span className="flex-1 ml-3 whitespace-nowrap">Inbox</span>
                <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                  3
                </span>
              </Link>
            </li>
            {role === 'admin' ? (
              <li>
                <Link
                  to="/operators"
                  className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100  group"
                >
                  <Icon src="/icons/operator.png/" />
                  <span className="flex-1 ml-3 whitespace-nowrap">
                    Operators
                  </span>
                </Link>
              </li>
            ) : null}
            {role === 'admin' ? (
              <li>
                <Link
                  to="/investigators"
                  className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100  group"
                >
                  <Icon src="/icons/searcher.png/" />
                  <span className="flex-1 ml-3 whitespace-nowrap">
                    Investigators
                  </span>
                </Link>
              </li>
            ) : null}
            <li>
              <div
                className="flex items-center p-2 cursor-pointer text-gray-900 rounded-lg  hover:bg-gray-100  group"
                onClick={signOut}
              >
                <Icon src="/icons/exit.svg" />
                <span className="flex-1 ml-3 whitespace-nowrap">Sign Out</span>
              </div>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  )
}
