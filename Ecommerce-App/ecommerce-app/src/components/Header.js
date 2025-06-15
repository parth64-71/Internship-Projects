import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Header = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <header style={{ padding: 10, borderBottom: '1px solid #ccc' }}>
      <Link to="/">Home</Link> | 
      <Link to="/checkout">Cart</Link> | 
      <Link to="/track-order">Track Order</Link> | 
      <Link to="/support">Support</Link> | 
      {user ? (
        <>
          <span>{user.email}</span> | <button onClick={logout}>Logout</button>
        </>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </header>
  );
};

export default Header;
