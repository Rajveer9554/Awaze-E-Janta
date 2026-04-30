import React from 'react'

const AichatSidebar = () => {
  return (
    //  <div className="flex flex-col h-full">
      
    //   {/* Top */}
    //   <div className="p-4 border-b border-gray-700">
    //     <h2 className="text-lg font-bold">AI Guide</h2>
    //     <button className="mt-4 w-full bg-gray-800 hover:bg-gray-700 p-2 rounded-lg text-sm">
    //       + New Chat
    //     </button>
    //   </div>

    //   {/* Scrollable Chat List */}
    //   <div className="flex-1 overflow-y-auto p-3 space-y-2 text-sm">
    //     <p className="text-gray-400">History</p>

    //     <div className="bg-gray-800 p-2 rounded-lg cursor-pointer hover:bg-gray-700">
    //       Previous Chat 1
    //     </div>

    //     <div className="bg-gray-800 p-2 rounded-lg cursor-pointer hover:bg-gray-700">
    //       Previous Chat 2
    //     </div>
    //   </div>

    //   {/* Bottom */}
    //   <div className="p-4 border-t border-gray-700 text-xs text-gray-400">
    //     © AI Guide
    //   </div>
    // </div>
    /* 🔹 Sidebar Component */

    <div className="flex flex-col h-full">
      
      {/* Top */}
      <div className="p-4 border-b border-gray-700">
        <h2 className="text-lg font-bold">AI Guide</h2>
        <button className="mt-4 w-full bg-gray-800 hover:bg-gray-700 p-2 rounded-lg text-sm">
          + New Chat
        </button>
      </div>

      {/* Scrollable Chat List */}
      <div className="flex-1 overflow-y-auto p-3 space-y-2 text-sm">
        <p className="text-gray-400">History</p>

        <div className="bg-gray-800 p-2 rounded-lg cursor-pointer hover:bg-gray-700">
          Previous Chat 1
        </div>

        <div className="bg-gray-800 p-2 rounded-lg cursor-pointer hover:bg-gray-700">
          Previous Chat 2
        </div>
      </div>

      {/* Bottom */}
      <div className="p-4 border-t border-gray-700 text-xs text-gray-400">
        © AI Guide
      </div>
    </div>
  );
}
  

export default AichatSidebar
