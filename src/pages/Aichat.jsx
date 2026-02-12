import React from "react";
import { FaRobot } from "react-icons/fa";
import { GiSparkles } from "react-icons/gi";
import { useState } from "react";
import ChatMessage from "../Components/ChatMessage.jsx";
import ChatInput from "../Components/ChatInput.jsx";
import { sendChatMessage } from "../services/chatApi.js";
import { useRef, useEffect } from "react";

function Aichat() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null); //Chat end ke liye ek ref banao
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }; //Chat end pe scroll karne ke liye function
  useEffect(() => {
    scrollToBottom();
  }, [messages]); ///Jab bhi messages update ho → scroll karo

  const handleSend = async (text) => {
    try {
      setLoading(true);

      setMessages((prev) => [...prev, { role: "user", text }]);

      const reply = await sendChatMessage(text);

      setMessages((prev) => [...prev, { role: "ai", text: reply }]);
    } catch (err) {
      console.error("Chat Error:", err);

      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          text: err.message || "AI service unavailable",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className=" min-h-screen  bg-linear-to-r from-indigo-500 to-purple-400  ">
      {/* navbar */}
      <nav className=" fixed top-0 w-full z-50 backdrop-blur-lg bg-blue-900/80 border-b border-white/10 ">
        <div className='className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-3 flex items-center justify-between'>
          {/* logo */}
          <div className="flex items-center gap-2 text-white font-bold text-lg sm:text-xl">
            <FaRobot className="text-purple-400" size={26} />
            <span>AI Guide</span>
          </div>
          {/* title */}
          <h1 className="hidden md:block text-white text-base lg:text-lg font-medium">
            Your smart assistant to guide you anytime 🤖
          </h1>
          {/* Icon */}
          <GiSparkles className="text-yellow-400 hidden lg:block" size={40} />
        </div>
      </nav>

      {/* Chat content */}

      <div className="pt-24 pb-10 flex justify-center">
        <div className="w-full max-w-5xl h-full mx-auto px-3 sm:px-6 ">
          <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/30 flex flex-col h-[75vh]">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 scrollbar-thin scrollbar-thumb-purple-300">
              {messages.length === 0 && (
                <div className="text-center text-gray-500 mt-10">
                  <FaRobot size={40} className="mx-auto mb-3 text-purple-400" />
                  <p className="text-lg font-medium">
                    Start a conversation with your AI Guide
                  </p>
                </div>
              )}

              {messages.map((m, i) => (
                <ChatMessage key={i} role={m.role} text={m.text} />
              ))}
              {/* 👇 AUTO SCROLL TARGET */}
              <div ref={messagesEndRef} />
            </div>
            {/* Input */}
            <div className="border-t border-gray-200 p-3 sm:p-4 bg-white/80 rounded-b-3xl ">
              <ChatInput onSend={handleSend} loading={loading} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aichat;
