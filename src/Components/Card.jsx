export function CardOne({ title, content, icon,count}) {
  return (
    <div
      className=" shadow-lg rounded-2xl p-6  w-72 m-9 flex flex-col items-center text-black bg-white  shadow-blue-500 "
      // style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay for better readability */}
      {/* <div className="absolute inset-0 bg-black/40 backdrop-blur-sm rounded-2xl"></div> */}

      <div className="relative z-10 flex flex-col items-center ">
        <div className="mb-4 text-yellow-300">{icon}</div>
        <h2 className="text-2xl  font-bold mb-5">{title}</h2>
        <p className="text-xl font-semibold text-center mb-4">{content}</p>
        <p className="text-4xl font-semibold text-center mb-4">{count}</p>


        {/* <button className="bg-blue-700 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition">
          {buttonText}
        </button> */}
      </div>
    </div>
  );
}
//// registercomplaint card
export function CardTwo({ title, content, icon,count,buttonText }) {
  return (
    <div
      className="  rounded-2xl p-6  w-72 m-9 flex flex-col items-center text-black bg-white shadow-lg shadow-blue-500 "
      // style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay for better readability */}
      {/* <div className="absolute inset-0 bg-black/40 backdrop-blur-sm rounded-2xl"></div> */}

      <div className="relative z-10 flex flex-col items-center  ">
        <div className="mb-4 text-yellow-300">{icon}</div>
        <h2 className="text-2xl  font-bold mb-5 text-center">{title}</h2>
        <p className="text-xl font-semibold text-center mb-4">{content}</p>
        <p className="text-4xl font-semibold text-center mb-4">{count}</p>


        <button className="bg-blue-700 text-white px-4 py-2 rounded-full hover:shadow cursor-pointer hover:bg-blue-600 transition">
          {buttonText}
        </button>
      </div>
    </div>
  );
}

// export default {CardOne,CardTwo};
