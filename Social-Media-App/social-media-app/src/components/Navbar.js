import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    alert("You have been logged out.");
    navigate("/login");
  };

  return (
    <nav className="navbar" style={{ padding: "10px" }}>
      <Link to="/" style={{ margin: "10px" }}>Home</Link>
      {!loggedInUser ? (
        <>
          <Link to="/login" style={{ margin: "10px" }}>Login</Link>
          <Link to="/register" style={{ margin: "10px" }}>Register</Link>
        </>
      ) : (
        <>
          <Link to="/profile" style={{ margin: "10px" }}>Profile</Link>
            <Link to="/notifications" style={{ margin: "10px" }}>Notifications</Link>
            <Link to="/trending" style={{ margin: "10px" }}>Trending</Link>
            
          <button onClick={handleLogout} style={{ margin: "10px" }}>Logout</button>
        </>
      )}
    </nav>
  );
}

export default Navbar;
