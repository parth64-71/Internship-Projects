import React, { useState } from 'react';
import { products as initialProducts } from '../data';
import ProductCard from '../components/ProductCard';

const Home = () => {
  // eslint-disable-next-line no-unused-vars
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    const updatedCart = [...savedCart, product];
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setCart(updatedCart);
  };

  return (
    <div className="home-container" style={{ padding: 20 }}>
      <h2>Products</h2>
      <div className="product-list"style={{ display: 'flex', flexWrap: 'wrap' }}>
        {initialProducts.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default Home;
