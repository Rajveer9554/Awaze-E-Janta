// const API_URL= "http://localhost:8081/api/users"

// // creating

// export const creatUser = async (formdata) =>{
//     try {
//         const response=await fetch(`${API_URL}/get-started`,{
//             method:"POST",
            

//         })
//     }
// }


import axios from "axios";

const API_URL = "http://localhost:8081/api"; // backend base URL

// Register user
export const registerUser = async (userData) => {
  try {
    const res = await axios.post(`${API_URL}/register`, userData);
    return res.data;
  } catch (error) {
    throw error.response.data || { msg: "Registration failed" };
  }
};

// Login user
export const loginUser =async(formData)=>{
  try{
   const response =await axios.post(`${API_URL}/login`,formData);
   return response.data;
  }
  catch(error){
   throw error.response?.data || {msg:"Login failed"};
  }
};

// logged in user Profile (JWT protected)
export const getUserProfile =async ()=>{
  try{
  const token=localStorage.getItem("token");

  const response = await axios.get(`${API_URL}/Profile`,{
   headers:{
    Authorization:`Bearer ${token} `
   },
  });
  return response.data;

  } catch(error){
      throw error.response?.data || {msg:"Fetching profile failed"  
  }
  }
};
