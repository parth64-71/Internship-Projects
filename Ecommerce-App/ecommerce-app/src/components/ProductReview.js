import React, { useState } from 'react';

const ProductReview = ({ product }) => {
  const [reviews, setReviews] = useState(product.reviews || []);
  const [review, setReview] = useState('');

  const handleAddReview = () => {
    const updated = [...reviews, review];
    setReviews(updated);
    setReview('');
    const saved = JSON.parse(localStorage.getItem('reviews')) || {};
    saved[product.id] = updated;
    localStorage.setItem('reviews', JSON.stringify(saved));
  };

  return (
    <div className="product-review" style={{ border: "1px solid #ccc", padding: 10, margin: 10 }}>
      <h4>Reviews</h4>
      {reviews.map((r, i) => <p key={i}>⭐ {r}</p>)}
      <input value={review} onChange={e => setReview(e.target.value)} />
      <button onClick={handleAddReview}>Submit</button>
    </div>
  );
};

export default ProductReview;
