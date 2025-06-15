import React, { useState, useEffect } from "react";

function Trending() {
  const [trendingTags, setTrendingTags] = useState([]);

  useEffect(() => {
    const posts = JSON.parse(localStorage.getItem("posts")) || [];
    const tagCounts = {};

    posts.forEach((post) => {
      post.tags.forEach((tag) => {
        tagCounts[tag] = (tagCounts[tag] || 0) + 1;
      });
    });

    const sortedTags = Object.entries(tagCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([tag]) => tag);

    setTrendingTags(sortedTags);
  }, []);

  return (
     <div className="trending-container">
    <div className="trending-header">
      <h2>Trending</h2>
    </div>
    {trendingTags.length > 0 ? (
      <ul className="trending-list">
        {trendingTags.map((tag, index) => (
          <li key={index} className="trending-item">#{tag}</li>
        ))}
      </ul>
    ) : (
      <p className="no-trending-message">No trending tags yet.</p>
    )}
  </div>
  );
}

export default Trending;
