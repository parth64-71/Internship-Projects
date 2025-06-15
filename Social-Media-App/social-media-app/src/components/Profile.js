import React, { useState, useEffect } from "react";

function Profile() {
  const [userPosts, setUserPosts] = useState([]);
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  useEffect(() => {
    const posts = JSON.parse(localStorage.getItem("posts")) || [];
    if (loggedInUser) {
      const filteredPosts = posts.filter(
        (post) => post.author === loggedInUser.username
      );
      setUserPosts(filteredPosts);
    }
  }, [loggedInUser]);

  if (!loggedInUser) {
    return <p>Please log in to view your profile.</p>;
  }

  return (
    <div className="profile-container">
    <div className="profile-header">
      <h2>Profile</h2>
      <p>Username: {loggedInUser.username}</p>
    </div>
    <div className="profile-posts-section">
      <h3>Your Posts</h3>
      {userPosts.length > 0 ? (
        userPosts.map((post) => (
          <div key={post.id} className="profile-post">
            <p>{post.content}</p>
            {post.image && <img src={post.image} alt="Post" />}
            <p className="profile-post-tags">Tags: {post.tags.join(", ")}</p>
          </div>
        ))
      ) : (
        <p className="no-posts-message">You have not posted anything yet.</p>
      )}
    </div>
  </div>
  );
}

export default Profile;
