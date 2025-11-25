// import React from "react";
// import { useLocation } from "react-router-dom";

// const ComplaintPreview = () => {
//   const { state } = useLocation();
//   const { name, mobile, email, title, description, department, location } = state || {};

//   return (
//     <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
//       <div className="bg-white shadow-lg rounded-lg w-full max-w-3xl p-8 space-y-4">
//         <h2 className="text-2xl font-bold text-center text-blue-700">📄 Complaint Application Preview</h2>

//         <div className="text-lg leading-relaxed text-gray-800">
//           <p>To,<br />{department || "Concerned Authority"},<br />Lucknow</p>

//           <p className="mt-4">Subject: {title}</p>

//           <p className="mt-4">
//             Respected Sir/Madam,<br />
//             I, <strong>{name}</strong>, would like to bring to your attention the following issue:
//           </p>

//           <p className="mt-2">{description}</p>

//           <p className="mt-4">
//             Kindly look into this matter at the earliest. You may contact me at <strong>{mobile}</strong>{email && ` or via email at ${email}`}.
//           </p>

//           {location && (
//             <p className="mt-2 text-sm text-gray-600">
//               📍 Location: Latitude {location.lat}, Longitude {location.lng}
//             </p>
//           )}

//           <p className="mt-6">Sincerely,<br />{name}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ComplaintPreview;

import React from "react";
import { useLocation } from "react-router-dom";

const ComplaintPreview = () => {
  const { state } = useLocation();
  const { name, mobile, email, title, description, department, location } = state || {};

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4 sm:p-6 md:p-10">
      <div className="bg-white shadow-xl rounded-lg w-full max-w-4xl p-6 sm:p-8 md:p-10 space-y-6">
        {/* Heading */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-blue-700">
          📄 Complaint Application Preview
        </h2>

        {/* Letter Body */}
        <div className="text-base sm:text-lg leading-relaxed text-gray-800 space-y-4">
          <p>
            To,<br />
            {department || "Concerned Authority"},<br />
            Lucknow
          </p>

          <p className="font-semibold">Subject: {title || "Complaint Regarding Civic Issue"}</p>

          <p>
            Respected Sir/Madam,<br />
            I, <strong>{name || "Citizen"}</strong>, would like to bring to your attention the following issue:
          </p>

          <p className="italic">{description || "No description provided."}</p>

          <p>
            Kindly look into this matter at the earliest. You may contact me at{" "}
            <strong>{mobile || "N/A"}</strong>
            {email && ` or via email at ${email}`}.
          </p>

          {location && (
            <p className="text-sm text-gray-600">
              📍 Location: Latitude {location.lat}, Longitude {location.lng}
            </p>
          )}

          <p>
            Sincerely,<br />
            {name || "Citizen"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ComplaintPreview;