import { useState } from "react";

export default function ChatInput({ onSend, loading }) {
  const [text, setText] = useState("");

  return (
    <div className="p-4 flex gap-2 ">
      <textarea
        className="flex-1 border rounded px-3"
        placeholder="Ask something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        disabled={loading}
        onClick={() => {
          onSend(text);
          setText("");
        }}
        className="bg-blue-600 text-white px-4 rounded"
      >
        Send
      </button>
    </div>
  );
}
