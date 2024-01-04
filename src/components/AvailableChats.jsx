import { RxPerson } from 'react-icons/rx'

export const AvailableChats = ({ contacts, handleContactClick }) => {
  return (
    <div className="w-full flex-row justify-between bg-white">
      <div className="flex flex-col w-full border-r-2 overflow-y-auto">
        {contacts.map((contact, index) => (
          <div
            key={index}
            onClick={() => handleContactClick(contact?._id)}
            className="flex flex-row py-4 px-2 justify-center items-center border-b-2 cursor-pointer gap-4"
          >
            <div className="w-10 h-10 border border-gray-800 rounded-full flex justify-center items-center">
              <RxPerson className="" size={24} />
            </div>
            <div className="w-full ">
              <div className="text-lg font-semibold">{contact.name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
