
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
  if (data.user) {
    localStorage.setItem("user", JSON.stringify(data.user)); // ✅ Save user object
  }


  return data;
};

// ✅ Get user profile (Protected)
export const getUserProfile = async () => {
  return API.get("/profile").then((res) => res.data);
};

// ✅ Update user profile (Protected)
export const updateUserProfile = async (profileData) => {
  return API.put("/update-profile", profileData).then((res) => res.data);
};



// ✅ Get user profile (Protected)
// export const getUserProfile = async () => {
//   return API.get("/auth/check").then((res) => res.data);
// };


//// register complaint
export const registerComplaint = async (complaintData) => {
  return API.post("/complaints/register", complaintData).then((res) => res.data);
}