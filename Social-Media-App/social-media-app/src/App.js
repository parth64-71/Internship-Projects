import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Feed from "./components/Feed";
import Notifications from "./components/Notifications";
import Trending from "./components/Trending";
import Login from "./ pages/Login";
import Register from "./ pages/Register";
import "./App.css"; 

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          {/* Define routes for different components */}
          <Route path="/" element={<Feed />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;

