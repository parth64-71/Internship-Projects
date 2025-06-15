import React from 'react';
import ProductReview from './ProductReview';

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="product-card" style={{ border: "1px solid #ccc", padding: 10, margin: 10 }}>
      <img src={product.image} alt={product.name} />
      <h3>{product.name} - ₹{product.price}</h3>
      <p>{product.description}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
      <ProductReview product={product} />
    </div>
  );
};

export default ProductCard;
