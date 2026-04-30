import React from 'react'
import  { useState, useRef, useEffect } from "react";
import { FaRobot, FaBars } from "react-icons/fa";
import AichatSidebar from '../Components/AichatSidebar';
import ChatInput from '../Components/ChatInput';
import ChatMessage from '../Components/ChatMessage';
import {sendChatMessage} from '../services/chatApi.js';

const Aichat = () => {
const [messages, setMessages]=useState([])
const[loading,setLoading]=useState(false);
const messagesEndRef =useRef(null);

const scrollToBottom =()=>{
  messagesEndRef.current?.scrollIntoView({behavior:"smooth"})
}
useEffect(()=>{
  window.scrollTo(0,0);
},[])
useEffect(()=>{
  scrollToBottom();
},[messages]);

// handle operation
const handleSend =  async(text)=> {
  if(!text.trim()) return;

  try{
    setLoading(true);
    setMessages((prev)=>[...prev, {role:"user", text}]);
    const reply = await sendChatMessage(text);
    setMessages((prev)=>[...prev,{role:'ai', text:reply}])
  }
  catch(error){
      setMessages((prev)=>[
        ...prev, {role:'ai', text:"Ai Service Unavailable"}
      ]);

  }finally {
    setLoading(false);
  }
};
  return (
    
      
      
    <div className='flex h-screen overflow-hidden mt-16 bg-red-300'>

      {/* desktop sidebar */}
      <div className='w-64 bg-gray-900 text-white md:flex hidden'>
      <AichatSidebar />
      </div>
      {/* main chat */}
      <div className='flex flex-col flex-1 h-full'>
      
      {/* message */}
      <div className='flex-1 overflow-y-auto px-3 sm:px-6 py-4 space-y-4'>
        {messages.length ===0 && (
          <div className='text-center text-gray-400 mt-20'> 
            <FaRobot size={36} className='mx-auto mb-2'/>
            <p className='text-black text-xl'> Start Conversation regarding you Complaints </p>
          </div>
        )}
        {messages.map((m,i)=>(
          <ChatMessage key={i} role={m.role} text={m.text} />
        ))}
         {/* 👇 Loading Animation */}
  {loading && <ChatMessage role="ai" loading={true} />}
        <div ref={messagesEndRef} />
      </div>
      
      {/* Input */}
        <div className="fixed bottom-13 left-64 right-5 border-t bg-white p-2 sm:p-4">
          <ChatInput onSend={handleSend} loading={loading} />
        </div>
      </div>
    </div>
    
  )
}

export default Aichat
