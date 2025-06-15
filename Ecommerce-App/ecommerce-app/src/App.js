import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import OrderTracking from './pages/OrderTracking';
import ContactSupport from './pages/ContactSupport';
import Header from './components/Header';
import './App.css'; 
const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/track-order" element={<OrderTracking />} />
        <Route path="/support" element={<ContactSupport />} />
      </Routes>
    </Router>
  );
};

export default App;
