import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (isAuthenticated !== 'true') {
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/login');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Employee Management System</h1>
      <nav>
        <Link to="/employees" style={{ margin: '0 10px' }}>Employee List</Link>
        <Link to="/add-employee" style={{ margin: '0 10px' }}>Add Employee</Link>
        <button onClick={handleLogout} style={{ margin: '10px' }}>Logout</button>
      </nav>
    </div>
  );
};

export default Home;
