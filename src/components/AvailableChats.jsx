import { useState } from "react"

export const AvailableChats = ( { contacts, handleContactClick } ) =>{

    return(
        
        <div className="w-full flex-row justify-between bg-white">
        <div className="flex flex-col w-full border-r-2 overflow-y-auto">
          <div className=" w-full border-b-2 py-4 px-2">
            <input
              type="text"
              placeholder="search chatting"
              className="py-2 px-2 border-2 border-gray-200 rounded-2xl"
            />
          </div>
          {contacts.map((contact) => (

          <div key={contact.id} onClick={()=>handleContactClick(contact)}className="flex flex-row py-4 px-2 justify-center items-center border-b-2">
            <div className="w-1/4">
              <img
                src="https://source.unsplash.com/_7LbC5J-jw4/600x600"
                className="object-cover h-12 w-12 rounded-full"
                alt=""
              />
            </div>
            <div className="w-full ">
              <div className="text-lg font-semibold">{contact.name}</div>
              <span className="text-gray-500">{contact.lastMessage}</span>
            </div>
          </div>
                  ))}
          
          </div>
        </div>
    
       
    )
}