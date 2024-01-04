import { RxPerson } from 'react-icons/rx'
import { useSelector } from 'react-redux'

export const MessageTile = ({ message }) => {
  const { user } = useSelector((state) => state.user)
  return (
    <div className="flex flex-col mt-5">
      {message?.sender === user?._id ? (
        <div className="flex justify-end items-center mb-4 ">
          <div className="mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white ">
            {message?.message}
          </div>
          <RxPerson size={24} />
        </div>
      ) : (
        <div className="flex justify-center items-center mb-4">
          <RxPerson size={40} />
          <div className="ml-2 py-3 px-4 bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white max-w-md mx-auto">
            {message?.message}
          </div>
        </div>
      )}
    </div>
  )
}
