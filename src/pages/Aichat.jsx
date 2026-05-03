import React, { useEffect, useRef } from 'react'
import AichatSidebar from '../Components/AichatSidebar'
import { FaRobot } from 'react-icons/fa'
import ChatMessage from '../Components/ChatMessage'
import ChatInput from '../Components/ChatInput'
import { sendChatMessage } from '../services/chatApi'

const Aichat = () => {
  const [messages, setMessages] = React.useState([])
  const [loading, setLoading] = React.useState(false)
  const messagesEndRef =useRef(null)
const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(()=>{
scrollToBottom();
  }, [messages])
  const handelSend = async(text)=>{
    if(!text.trim()) return
    const userMessage= {role:"user",text}
      setMessages((prev)=>[...prev, userMessage])
    setLoading(true);
    try{
      const reply= await sendChatMessage(text)
      setMessages((prev)=>[...prev, {role:"ai",text:reply}])
    }
    catch{
      setMessages((prev)=>[...prev, {role:"ai", text:"Service NOT Available"}])
    }
    finally{
      setLoading(false);
    }
  }
  return (
    <div className='flex h-screen bg-gray-100 mt-16'>
      {/* sidebar */}
      <div className=' w-64 bg-gray-700 hidden md:flex'>
        <AichatSidebar />
      </div>
      {/* main content chat */}
      <div className=' flex flex-col flex-1 '>
        <h1 className='text-xl text-blue-500 font-semibold p-4 border-b border-gray-700 rounded-2xl'>
          AI Guide
        </h1>
       {/* message */}
       <div className=' flex-1 overflow-y-auto px-4 py-6'>
        <div className='max-w-3xl mx-auto space-y-4 '>
          {messages.length ===0 &&(
            <div className="text-center mt-20 text-gray-400">
                <FaRobot size={40} className="mx-auto mb-3" />
                <p className="text-lg">Start your conversation 🚀</p>
              </div>
          ) }
          {messages.map((msg,index)=>(
            <ChatMessage key={index} role={msg.role} text={msg.text} />
          ))}
          {loading && <ChatMessage role="ai" loading={true} />}
        </div>
       </div>

       {/* input */}
       <div className='border-t border-gray-600 bg-white p-4 sticky bottom-0'>
        <div className='max-w-3xl mx-auto '>
           <ChatInput  loading={loading} onSend={handelSend} />
        </div>
       </div>
      </div>
    </div>
  )
}

export default Aichat
