import React from "react";

function ChatMessage({ role, text }) {
  const isUser = role === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[75%] px-4 py-3 rounded-xl shadow-md
        ${isUser ? "bg-blue-500 text-white" : "bg-gray-200 text-black"}`}
        style={{ whiteSpace: "pre-line" }}   // ⭐ IMPORTANT LINE
      >
        {text}
      </div>
    </div>
  );
}

export default ChatMessage;