import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMessages } from 'features'
import { Loader, MessageTile } from 'components'
import { MdSend } from 'react-icons/md'
import { pushNewMessage } from 'features/slices/chatSlice'

export const ChatBox = ({ selectedContact }) => {
  const dispatch = useDispatch()
  const { messages, loading } = useSelector((state) => state.chat)
  const { userSocket, user } = useSelector((state) => state.user)
  const [text, setText] = useState('')

  useEffect(() => {
    if (selectedContact) {
      dispatch(getMessages({ selectedContact }))
    }
  }, [selectedContact, dispatch])

  const handleOnSubmit = (e) => {
    //Sending message to the selectedContact
    const newMessage = {
      message: text,
      receiver: selectedContact,
      sender: user?._id,
    }

    dispatch(pushNewMessage(newMessage))

    userSocket.emit('send_message', {
      message: text,
      receiver: selectedContact,
    })

    e.preventDefault()
    setText('')
  }

  return (
    <div className="w-full flex flex-col justify-between h-[600px] overflow-auto relative">
      {!loading ? (
        <div>
          {messages?.length ? (
            messages.map((message, msgIndex) => (
              <MessageTile message={message} key={msgIndex} />
            ))
          ) : (
            <h1 className="text-center font-bold text-lg">
              Send any message to start conversation.
            </h1>
          )}
          <div className="py-5 relative">
            <form onSubmit={handleOnSubmit}>
              <input
                className="w-full bg-gray-300 py-5 px-3 rounded-xl"
                type="text"
                placeholder="Type your message here..."
                onChange={(e) => setText(e.target.value)}
                value={text}
              />
              <span className="absolute inset-y-0 right-0 flex items-center pl-3 text-gray-500 cursor-pointer">
                <button disabled={!text}>
                  <MdSend
                    className="mr-5"
                    size={30}
                    color={text ? '#12326D' : 'grey'}
                    type="submit"
                  />
                </button>
              </span>
            </form>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <Loader />
        </div>
      )}
    </div>
  )
}
