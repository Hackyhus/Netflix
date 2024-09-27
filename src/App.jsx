import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Player from "./pages/Player/Player";
import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase"; // Import the functions you need from the SDKs you need
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function App() {

  const navigate = useNavigate();  // Import the functions you need from the SDKs you need

useEffect(() => {
  onAuthStateChanged(auth, (user) => {
    if (user){
     navigate("/");
     console.log("User is signed in");
    } else {
      navigate("/login");
      console.log("User is not signed in"); // Import the functions you need from the SDKs you need
    }
    // Import the functions you need from the SDKs you need
  });
  
      
  
    
}, []);

  return (
    <div className="app">
      <ToastContainer theme="dark" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/player/:id" element={<Player />} />
      </Routes>
    </div>
  );
}

export default App;
