import React, { useState } from 'react';

const dummyOrders = {
  'ORD123': 'Processing',
  'ORD456': 'Shipped',
  'ORD789': 'Delivered'
};

const OrderTracking = () => {
  const [orderId, setOrderId] = useState('');
  const [status, setStatus] = useState('');

  const checkOrder = () => {
    setStatus(dummyOrders[orderId] || 'Order not found');
  };

  return (
    <div className="order-tracking-container" style={{ padding: 20 }}>
      <h2>Track Your Order</h2>
      <input value={orderId} onChange={(e) => setOrderId(e.target.value)} placeholder="Enter Order ID" /><br />
      <button onClick={checkOrder}>Check</button>
      <p>Status: {status}</p>
    </div>
  );
};

export default OrderTracking;
