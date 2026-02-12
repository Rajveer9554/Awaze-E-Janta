export default function ChatMessage({ role, text }) {
  return (
    <div className={`my-2 flex ${role === "user" ? "justify-end" : "justify-start"}`}>
      <div className={`px-4 py-2 rounded-lg max-w-md ${
        role === "user" ? "bg-blue-600 text-white" : "bg-white text-black"
      }`}>
        {text}
      </div>
    </div>
  );
}
