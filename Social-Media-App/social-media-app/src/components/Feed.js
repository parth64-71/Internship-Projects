import React, { useState, useEffect } from "react";
import Post from "./Post";

function Feed() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState("");
  const [image, setImage] = useState(null);
  const [tags, setTags] = useState("");

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(storedPosts);
  }, []);

  const handleAddPost = () => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (!loggedInUser) {
      alert("Please log in to post!");
      return;
    }

    const newPosts = [
      ...posts,
      {
        id: Date.now(),
        content: newPost,
        image: image,
        tags: tags.split(",").map((tag) => tag.trim()),
        likes: 0,
        comments: [],
        author: loggedInUser.username,
      },
    ];
    localStorage.setItem("posts", JSON.stringify(newPosts));
    setPosts(newPosts);
    setNewPost("");
    setImage(null);
    setTags("");
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleLike = (postId) => {
    const updatedPosts = posts.map((post) =>
      post.id === postId ? { ...post, likes: post.likes + 1 } : post
    );
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
    setPosts(updatedPosts);
  };

  const handleComment = (postId, comment) => {
    const updatedPosts = posts.map((post) =>
      post.id === postId
        ? { ...post, comments: [...post.comments, comment] }
        : post
    );
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
    setPosts(updatedPosts);
  };
    // eslint-disable-next-line no-unused-vars
    const handleDeletePost = (postId) => {
        const updatedPosts = posts.filter((post) => post.id !== postId);
        localStorage.setItem("posts", JSON.stringify(updatedPosts));
        setPosts(updatedPosts);
    };

  return (
    <div className="feed-container">
      <h2>Feed</h2>
      <input
        type="text"
        placeholder="What's on your mind?"
        value={newPost}
        onChange={(e) => setNewPost(e.target.value)}
      />
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      <input
        type="text"
        placeholder="Add tags (comma-separated)"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
      />
      <button  className="feed-button"onClick={handleAddPost}>Post</button>
      {posts.map((post) => (
        <Post
  key={post.id}
  post={post}
  onLike={handleLike}
  onComment={handleComment}
  onDeletePost={handleDeletePost}
  onUpdatePost={handleDeletePost}
/>
      ))}
    </div>
  );
}

export default Feed;
