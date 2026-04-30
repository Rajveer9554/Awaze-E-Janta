import { Navigate } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const token = localStorage.getItem("adminToken");
  const userType = localStorage.getItem("userType")

  if (userType == "superAdmin" && token) return children 
  else <Navigate to="/login" /> ;
};

export default AdminRoute;