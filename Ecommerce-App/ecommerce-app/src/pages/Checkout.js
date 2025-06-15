import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { user } = useContext(AuthContext);
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate('/login');
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart);
  }, [user, navigate]);

  const handleCheckout = () => {
    localStorage.removeItem('cart');
    alert('Order placed! Your Order ID: ORD123');
    setCart([]);
  };

  return (
    <div className="checkout-container" style={{ padding: 20 }}>
      <h2>Checkout</h2>
      {cart.map((item, i) => (
        <p key={i}>{item.name} - ₹{item.price}</p>
      ))}
      <h3>Total: ₹{cart.reduce((a, b) => a + b.price, 0)}</h3>
      <button onClick={handleCheckout}>Place Order</button>
    </div>
  );
};

export default Checkout;
