function ChatMessage({ role, text,loading }) {
  return (
    <div className={`flex ${role === "user" ? "justify-end" : "justify-start"}`}>
      
      <div
        className={`px-3 sm:px-4 py-2 sm:py-3 rounded-2xl text-xs sm:text-sm shadow max-w-[85%] sm:max-w-[70%]
        ${role === "user"
          ? "bg-purple-500 text-white"
          : "bg-white text-gray-800 border"}`}
      >
        {loading ? (
          <div className="flex gap-1">
            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150"></span>
            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-300"></span>
          </div>
        ) : (
          text
        )}
      </div>
    </div>
      
  );
}

export default ChatMessage;