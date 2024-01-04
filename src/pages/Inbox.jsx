import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import { AvailableChats, ChatPage, Icon } from 'components'
import { getContacts } from 'features'

export const Inbox = () => {
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.user)
  const { contacts } = useSelector((state) => state.chat)
  const [selectedContact, setSelectedContact] = useState('')

  useEffect(() => {
    if (!contacts.length) {
      dispatch(getContacts())
    }
  }, [dispatch, contacts])

  const handleContactClick = (contact) => {
    setSelectedContact(contact)
  }

  return (
    <div className="xl:ml-52 xl:mr-4 container mx-auto max-w-screen-xl mb-20 shadow-lg rounded-lg">
      <div className="flex flex-col sm:flex-row justify-between items-center mt-0">
        <h1 className="xl:ml-20 sm:ml-0 max-w-sm text-4xl top-0 font-bold font-custom text-center justify-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-700 to-cyan-500">
          Citizen Dashboard
        </h1>

        <div className="flex mt-2 xl:mr-8 sm:mr-0 sm:mt-0">
          <p className="font-custom-blue font-semibold font-custom">
            FAQ | Contact Us | Help Center
          </p>

          <h1 className="max-w-sm ml-20 mr-1 text-xl font-bold font-custom text-center justify-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-700 to-cyan-500 mx-auto">
            {user?.name}
          </h1>
          <div className="mt-1">
            <Icon src="/icons/account.png" />
          </div>
        </div>
      </div>
      <hr className="h-2 mt-4 bg-custom-blue"></hr>
      <br />
      <h1 className="bg-gray-100 hover:text-white hover:bg-black p-3 rounded-2xl xl:ml-4 xl:mr-4 sm:ml-0 sm:mr-0 text-sm sm:text-md md:text-lg lg:text-xl font-bold font-custom text-center transform scale-100 hover:scale-95 transition-transform duration-300 ease-in-out">
        Hey {user?.name}, you can monitor your FIRs and interact with your
        investigator to get updates related to your respective FIR
      </h1>
      <br />
      <div>
        <h1 className="text-lg ml-4 font-bold">Available Investigators</h1>
      </div>
      <div className="flex">
        <div className="flex-shrink-0 w-2/6">
          <AvailableChats
            contacts={contacts}
            handleContactClick={handleContactClick}
          />
        </div>
        <div className="flex-shrink-0 w-4/6">
          <ChatPage selectedContact={selectedContact} />
        </div>
      </div>
    </div>
  )
}
