import { useState } from 'react'

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



function App() {
  const [count, setCount] = useState(0);

  return (
    <div> 
      <BrowserRouter >
      <Routes>
       <Route path="/" element={<Layout />}>
       <Route path="/" element={<Home />} />
       <Route path="about-us" element={<AboutUs />} />
       <Route path="contact-us" element={<ContactUs/>} />
       <Route path="register-complaints" element={<RegisterComplaints />} />
       <Route path="get-started" element={<GetStarted />} />
       <Route path="complaint-mannually" element={<ComplaintManually />} />
        <Route path="complaint-preview" element={<ComplaintPreview />} />
       
        
       </Route>

      </Routes>
      
      </BrowserRouter>
      
    </div>
  )
}

export default App
