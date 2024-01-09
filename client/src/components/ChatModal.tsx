"use client";
import React, { useEffect, useState } from 'react'

interface Message {
  id: string,
  text: string,
  name: string,
}

interface ChatModalProps {
  user: string,
  socket: any,
  onClose: () => void
}
const ChatModal = ({ user, socket, onClose }: ChatModalProps) => {
  const profilePic =
    "https://img.mbiz.web.id/180x180/erp/R2p1IXoyVEpBMk01WOEAdaI3hHVlkuIg0wW5_pn-CJCKHSrA_n1-U1tfE7Bl5H4_4Z7AxgL0DPOmUCdPuCHHC5lWvMU5Ig3t1uDrkVN53MlWlnA";
  const [message, setMessage] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([]);

  const handleSendMessage = (e : React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && user) {
      socket.emit("message", {
        text: message,
        name: user,
        id: `${socket.id}${Math.random()}`,
        socketID: socket.id,
      });
      setMessage("");
    }
  }

  useEffect(() => {
    socket.on("messageResponse", (data : Message) => setMessages([...messages, data]))
  }, [socket, messages]);

  console.log(messages);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div className="max-w-md p-4 font-pretendardRegular">
    <div className="bg-white rounded-lg shadow-md p-4 dark:bg-slate-800">
    <div className="flex justify-between items-center mb-4">
      <div className="ml-3">
        <p className="text-xl font-medium dark:text-white">Chat with Participant</p>
      </div>
      
      <button className="text-gray-600 dark:text-white" onClick={onClose}>
          x
      </button>
    </div>

      <div className="space-y-4">
            
      {messages?.map((message) => (
        message.name === user ? (
          <div className="flex flex-col items-start">
          <p className="text-sm text-black mb-1 dark:text-white">ME</p>
          <div className="bg-slate-200 p-3 rounded-lg dark:bg-white">
            <p className="text-sm text-gray-800 dark:text-gray-100">{message.text}</p>
          </div>
        </div>
        ) : (
            <div className="flex flex-col items-end justify-end">
             <p className="text-sm text-white uppercase mb-1">{message.name}</p>
          <div className="bg-blue-500 p-3 rounded-lg">
                <p className="text-sm text-white dark:text-black">{message.text}</p> 
          </div>
        </div> 
        )
      ))}  
    </div>

          <form className="mt-4 flex items-center" onSubmit={handleSendMessage}>
      <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 py-2 px-3 rounded-full bg-gray-100 focus:outline-none"
              value={message}
              onChange={(e)=> setMessage(e.target.value)}
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded-full ml-3 hover:bg-blue-600">Send</button>
    </form>
          
  </div>
      </div>
      </div>
  )
}

export default ChatModal