


// import axios from "axios";

// const API_URL = "http://localhost:8081/api"; // backend base URL

// // Register user
// export const registerUser = async (userData) => {
//   try {
//     const res = await axios.post(`${API_URL}/register`, userData);
//     return res.data;
//   } catch (error) {
//     throw error.response.data || { msg: "Registration failed" };
//   }
// };

// // Login user
// export const loginUser =async(formData)=>{
//   try{
//    const response =await axios.post(`${API_URL}/login`,formData);
//    return response.data;
//   }
//   catch(error){
//    throw error.response?.data || {msg:"Login failed"};
//   }
// };

// // logged in user Profile (JWT protected)
// export const getUserProfile =async ()=>{
//   try{
//   const token=localStorage.getItem("token");

//   const response = await axios.get(`${API_URL}/Profile`,{
//    headers:{
//     Authorization:`Bearer ${token} `
//    },
//   });
//   return response.data;

//   } catch(error){
//       throw error.response?.data || {msg:"Fetching profile failed"  
//   }
//   }
// };



import API from "../api/axios.js";

// ✅ Register user (NO TOKEN HERE)
export const registerUser = async (userData) => {
  return API.post("/register", userData).then((res) => res.data);
};

// ✅ Verify OTP
export const verifyOtp = async (email, otp) => {
  return API.post("/otp/verify-otp", { email, otp }).then((res) => res.data);
};

// ✅ Login user (TOKEN SAVE YAHI HOGA)
export const loginUser = async (formData) => {
  const data = await API.post("/login", formData).then((res) => res.data);

  if (data.token) {
    localStorage.setItem("token", data.token); // ✅ Save JWT
  }

  return data;
};

// ✅ Get user profile (Protected)
export const getUserProfile = async () => {
  return API.get("/auth/check").then((res) => res.data);
};


//// register complaint
export const registerComplaint = async (complaintData) => {
  return API.post("/complaints/register", complaintData).then((res) => res.data);
}