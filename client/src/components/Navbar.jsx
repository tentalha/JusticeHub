import { Icon } from 'components'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className="bg-gray-100 border-gray-200">
      <div className="max-w-screen-xl flex items-center justify-center p-4">
        <Link href="/" className="flex items-center">
          <Icon src="/icons/police-badge.png" classes="h-8" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap">
            JusticeHub
          </span>
        </Link>
      </div>
    </nav>
  )
}
