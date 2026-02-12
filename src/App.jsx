

import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from './pages/Layout.jsx';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs.jsx';
import ContactUs from './pages/ContactUs.jsx';
import RegisterComplaints from './pages/RegisterComplaints.jsx';
import GetStarted from './pages/GetStarted.jsx';
import ComplaintManually from './pages/ComplaintManually.jsx';
import ComplaintPreview from './pages/ComplaintmanuallPreview.jsx';
import Login from './pages/Login.jsx';
import PrivateRoute from './Components/PrivateRoute.jsx';
import Otp from './pages/Otp.jsx';
import UserDashboard from './pages/UserDashboard.jsx';
import AdminLogin from './pages/AdminLogin.jsx';
import AdminDashboard from './pages/AdminDashboard.jsx';
import Aichat from './pages/Aichat.jsx';





function App() {
 

  return (
    <div> 
      <BrowserRouter >
      <Routes>
       <Route path="/" element={<Layout />}>
       {/* <Route path="/" element={<Home />} /> */}
       <Route index element={<Home />} />
       <Route path="about-us" element={<AboutUs />} />
       <Route path="contact-us" element={<ContactUs/>} />
       <Route path="ai-chat" element={<Aichat />} />
       <Route path="register-complaints" element={<PrivateRoute><RegisterComplaints /> </PrivateRoute> } />
       <Route path="get-started" element={<GetStarted />} />
      
       
       
       <Route path="complaint-mannually" element={<ComplaintManually />} />
        <Route path="complaint-preview" element={<ComplaintPreview />} />
        <Route path='login' element={<Login />} />
        <Route path='otp' element={<Otp />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <UserDashboard />
            </PrivateRoute>
          }
        />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />

       </Route>
        

      </Routes>
      
      </BrowserRouter>
      
    </div>
  )
}

export default App
