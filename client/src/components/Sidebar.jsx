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
      <aside className="w-64 h-full transition-transform">
        <div className="h-full px-3 py-4 overflow-y-auto bg-custom-blue">
          <ul className="space-y-2 font-medium">
            <li>
              <Link to="/" className="flex items-center">
                <Icon src="/icons/police-badge.png" classes="h-8" />
                <span className=" text-white self-center text-2xl font-semibold whitespace-nowrap">
                  JusticeHub
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/cases"
                className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100  group"
              >
                <Icon src="/icons/cases.png" />
                <span className="flex-1 ml-3 whitespace-nowrap text-white">
                  Cases
                </span>
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
                <span className="flex-1 ml-3 whitespace-nowrap text-white">
                  Inbox
                </span>
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
                <span className="flex-1 ml-3 whitespace-nowrap text-white">
                  Sign Out
                </span>
              </div>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  )
}
