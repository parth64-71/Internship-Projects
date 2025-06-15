import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome to the Authentication System</h1>
      <button ><Link  to="/register">Register</Link></button>
      <button ><Link to="/login">Login</Link></button>
    </div>
  );
};

export default Home;
