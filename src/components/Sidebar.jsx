import { useState } from 'react';
import { Icon } from 'components';
import { signOut } from 'helpers';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Inbox } from 'pages';

export const Sidebar = () => {
  const {
    user: { role },
  } = useSelector((state) => state.user);

  const { user } = useSelector((state) => state.user);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="fixed" style={{ zIndex: 999 }}>
      {/* Mobile Menu Button */}
      <div
        className={`absolute top-0 left-0 w-12 h-12 p-2 cursor-pointer sm:hidden ${
          isMobileMenuOpen ? 'invisible' : 'visible'
        }`}
        onClick={toggleMobileMenu}
      >
        <Icon src="/icons/menu.png" classes="w-8 h-8 text-white mt-7" />
      </div>

      <aside
        className={`${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform sm:translate-x-0 w-52 sm:w-56 h-auto sm:overflow-y-auto bg-custom-blue fixed sm:relative z-50`}
      >
        <div className="h-screen px-3 py-4 overflow-y-auto">
          {/* Close Mobile Menu Button */}
          <div
            className="absolute top-0 right-0 w-12 h-12 p-2 cursor-pointer sm:hidden"
            onClick={closeMobileMenu}
          >
            <Icon src="/icons/close.png"/>
          </div>

          <ul className="space-y-2 font-medium">
            <li>
              <Link to="/" className="flex items-center p-2 cursor-pointer  text-white hover:text-black rounded-lg hover:bg-gray-100 group transform scale-100 hover:scale-105 transition-transform duration-300 ease-in-out">

                <Icon src="/icons/police-badge.png" classes="h-8" />
                <span className=" font-custom mt-2 flex-1 whitespace-nowrap text-2xl font-semibold">
                  JusticeHub
                </span>
              </Link>
            </li>

            {role === 'citizen' ? (
            <li>
              <Link
                to="/cases"
                className="flex items-center p-2 cursor-pointer  text-white hover:text-black rounded-lg hover:bg-gray-100 group transform scale-100 hover:scale-105 transition-transform duration-300 ease-in-out"
              >
                <Icon src="/icons/cases.png" />
                <span className=" font-custom mt-2 flex-1 ml-3 whitespace-nowrap text-sm font-semibold">Cases</span>
                
              </Link>

            </li>
            ): null

          }

            {role === 'citizen' ? (
            <li>
              <Link
                to="/inbox"
                className="flex items-center p-2 cursor-pointer  text-white hover:text-black rounded-lg hover:bg-gray-100 group transform scale-100 hover:scale-105 transition-transform duration-300 ease-in-out"
              >
                <Icon src="/icons/inbox.png" />
                <span className=" font-custom mt-2 flex-1 ml-3 whitespace-nowrap text-sm font-semibold">Inbox</span>
                <span className=" font-custom inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                  3
                </span>
              </Link>
            </li>
            ): null
        }

        {role === 'citizen' ? (
            <li>
              <Link
                to="/citizenFIRs"
                className="flex items-center p-2 cursor-pointer  text-white hover:text-black rounded-lg hover:bg-gray-100 group transform scale-100 hover:scale-105 transition-transform duration-300 ease-in-out"
              >
                <Icon src="/icons/inbox.png" />
                <span className=" font-custom mt-2 flex-1 ml-3 whitespace-nowrap text-sm font-semibold">My FIRs</span>
               
              </Link>
            </li>
            ): null
        }
            {role === 'admin' ? (
                  <li>
                  <Link
                    to="/allFIRs"
                    className="flex items-center p-2 cursor-pointer  text-white hover:text-black rounded-lg hover:bg-gray-100 group transform scale-100 hover:scale-105 transition-transform duration-300 ease-in-out"
                    >
                    <Icon src="/icons/cases.png/" />
                    <span className=" font-custom mt-2 flex-1 ml-3 whitespace-nowrap text-sm font-semibold">All FIRs</span>
                  </Link>
                </li>
                  
                ) : null
                }

              {role === 'admin' ? (
                  <li>
                  <Link
                    to="/pendingFIRs"
                    className="flex items-center p-2 cursor-pointer  text-white hover:text-black rounded-lg hover:bg-gray-100 group transform scale-100 hover:scale-105 transition-transform duration-300 ease-in-out"
                    >
                    <Icon src="/icons/pending.png/" />
                    <span className=" font-custom mt-2 flex-1 ml-3 whitespace-nowrap text-sm font-semibold">Pending FIRs</span>
                  </Link>
                </li>
                  
                ) : null
                }

              {role === 'admin' ? (
                  <li>
                  <Link
                    to="/activeFIRs"
                    className="flex items-center p-2 cursor-pointer  text-white hover:text-black rounded-lg hover:bg-gray-100 group transform scale-100 hover:scale-105 transition-transform duration-300 ease-in-out"
                    >
                    <Icon src="/icons/active.jpg/" />
                    <span className=" font-custom mt-2 flex-1 ml-3 whitespace-nowrap text-sm font-semibold">Active FIRs</span>
                  </Link>
                </li>
                  
                ) : null
                }

            {role === 'admin' ? (
                  <li>
                  <Link
                    to="/completedFIRs"
                    className="flex items-center p-2 cursor-pointer  text-white hover:text-black rounded-lg hover:bg-gray-100 group transform scale-100 hover:scale-105 transition-transform duration-300 ease-in-out"
                    >
                    <Icon src="/icons/completed.png/" />
                    <span className=" font-custom mt-2 flex-1 ml-3 whitespace-nowrap text-sm font-semibold">Completed FIRs</span>
                  </Link>
                </li>
                  
                ) : null
                }

            {role === 'admin' ? (
                  <li>
                  <Link
                    to="/closedFIRs"
                    className="flex items-center p-2 cursor-pointer  text-white hover:text-black rounded-lg hover:bg-gray-100 group transform scale-100 hover:scale-105 transition-transform duration-300 ease-in-out"
                    >
                    <Icon src="/icons/blocked.png/" />
                    <span className=" font-custom mt-2 flex-1 ml-3 whitespace-nowrap text-sm font-semibold">Closed FIRs</span>
                  </Link>
                </li>
                  
                ) : null
                }

            {role === 'admin' ? (
                  <li>
                  <Link
                    to="/manageOperators"
                    className="flex items-center p-2 cursor-pointer  text-white hover:text-black rounded-lg hover:bg-gray-100 group transform scale-100 hover:scale-105 transition-transform duration-300 ease-in-out"
                    >
                    <Icon src="/icons/operator.png/" />
                    <span className=" font-custom mt-2 flex-1 ml-3 whitespace-nowrap text-sm font-semibold">Manage Operators</span>
                  </Link>
                </li>
                  
                ) : null
                }

            {role === 'admin' ? (
                  <li>
                  <Link
                    to="/manageCriminals"
                    className="flex items-center p-2 cursor-pointer  text-white hover:text-black rounded-lg hover:bg-gray-100 group transform scale-100 hover:scale-105 transition-transform duration-300 ease-in-out"
                    >
                    <Icon src="/icons/criminal.png/" />
                    <span className=" font-custom mt-2 flex-1 ml-3 whitespace-nowrap text-sm font-semibold">Manage Criminals</span>
                  </Link>
                </li>
                  
                ) : null
                }

            {role === 'admin' ? (
                  <li>
                  <Link
                    to="/manageInvestigators"
                    className="flex items-center p-2 cursor-pointer  text-white hover:text-black rounded-lg hover:bg-gray-100 group transform scale-100 hover:scale-105 transition-transform duration-300 ease-in-out"
                    >
                    <Icon src="/icons/searcher.png/" />
                    <span className="font-custom mt-2 flex-1 ml-3 whitespace-nowr text-sm font-semibold">Manage Investigators</span>
                  </Link>
                </li>
                  
                ) : null
}
            
            {role === 'operator' ? (
              <li>
                <Link
                  to="/checkCriminalStatus"
                  className="flex items-center p-2 cursor-pointer  text-white hover:text-black rounded-lg hover:bg-gray-100 group transform scale-100 hover:scale-105 transition-transform duration-300 ease-in-out"
                  >
                  <Icon src="/icons/criminal.png/" />
                  <span className="font-custom mt-2 flex-1 ml-3 whitespace-nowrap  text-sm font-semibold">Check Criminal</span>
                </Link>
              </li>
            ) : null}

             
        {role === 'operator' ? (
                  <li>
                  <Link
                    to="/createFIR"
                    className="flex items-center p-2 cursor-pointer  text-white hover:text-black rounded-lg hover:bg-gray-100 group transform scale-100 hover:scale-105 transition-transform duration-300 ease-in-out"
                    >
                    <Icon src="/icons/create.png/" />
                    <span className="font-custom mt-2 flex-1 ml-3 whitespace-nowr text-sm font-semibold">Create FIR</span>
                  </Link>
                </li>
                  
                ) : null
            }

          {role === 'operator' ? (
                  <li>
                  <Link
                    to="/operatorFIRs"
                    className="flex items-center p-2 cursor-pointer  text-white hover:text-black rounded-lg hover:bg-gray-100 group transform scale-100 hover:scale-105 transition-transform duration-300 ease-in-out"
                    >
                    <Icon src="/icons/cases.png/" />
                    <span className="font-custom mt-2 flex-1 ml-3 whitespace-nowr text-sm font-semibold">My FIRs</span>
                  </Link>
                </li>
                  
                ) : null
            }

            {role === 'investigator' ? (
              <li>
                <Link
                  to="/assignedFIRs"
                  className="flex items-center p-2 cursor-pointer  text-white hover:text-black rounded-lg hover:bg-gray-100 group transform scale-100 hover:scale-105 transition-transform duration-300 ease-in-out"
                  >
                  <Icon src="/icons/create.png/" />
                  <span className="font-custom mt-2 flex-1 ml-3 whitespace-nowrap text-sm font-semibold">Assigned Cases</span>
                </Link>
              </li>
            ) : null}
            {role === 'investigator' ? (
              <li>
                <Link
                  to="/invesCompletedFIRs"
                  className="flex items-center p-2 cursor-pointer  text-white hover:text-black rounded-lg hover:bg-gray-100 group transform scale-100 hover:scale-105 transition-transform duration-300 ease-in-out"
                  >
                  <Icon src="/icons/completed.png/" />
                  <span className="font-custom mt-2 flex-1 ml-3 whitespace-nowrap text-sm font-semibold">Completed Cases</span>
                </Link>
              </li>
            ) : null}
            {role === 'investigator' ? (
              <li>
                <Link
                  to="/invesClosedFIRs"
                  className="flex items-center p-2 cursor-pointer  text-white hover:text-black rounded-lg hover:bg-gray-100 group transform scale-100 hover:scale-105 transition-transform duration-300 ease-in-out"
                  >
                  <Icon src="/icons/cross.png/" />
                  <span className="font-custom mt-2 flex-1 ml-3 whitespace-nowrap text-sm font-semibold">Closed Cases</span>
                </Link>
              </li>
            ) : null}
            <li>
              <div
                className="flex items-center p-2 cursor-pointer text-red-500 hover:text-black rounded-lg hover:bg-gray-100 group transform scale-100 hover:scale-105 transition-transform duration-300 ease-in-out"
                onClick={signOut}
              >
                <Icon src="/icons/exit.svg" />
                <span className="font-custom mt-2 flex-1 ml-3 whitespace-nowrap  text-sm font-semibold">Sign Out</span>
              </div>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};
