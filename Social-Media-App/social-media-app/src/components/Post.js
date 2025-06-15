import React, { useState } from "react";

function Post({ post, onLike, onComment, onDeletePost, onUpdatePost }) {
  const [newComment, setNewComment] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [updatedContent, setUpdatedContent] = useState(post.content);

  const handleComment = () => {
    if (newComment.trim() === "") return;
    onComment(post.id, newComment);
    setNewComment("");
  };

  const handleDeletePost = () => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      onDeletePost(post.id);
    }
  };

  const handleUpdatePost = () => {
    if (updatedContent.trim() === "") return;
    onUpdatePost(post.id, updatedContent);
    setEditMode(false);
  };

  return (
    <div className="post-container">
      {editMode ? (
        <div className="edit-post">
          <textarea
            value={updatedContent}
            onChange={(e) => setUpdatedContent(e.target.value)}
            className="edit-post-input"
          />
          <button onClick={handleUpdatePost} className="edit-post-button">
            Save
          </button>
          <button onClick={() => setEditMode(false)} className="edit-post-cancel">
            Cancel
          </button>
        </div>
      ) : (
        <>
          <p className="post-content">{post.content}</p>
          {post.image && (
            <img
              src={post.image}
              alt="Post"
              className="post-image"
            />
          )}
          <p className="post-tags">Tags: {post.tags.join(", ")}</p>
          <button className="post-like-button" onClick={() => onLike(post.id)}>
            Like ({post.likes})
          </button>
          <button onClick={() => setEditMode(true)} className="post-edit-button">
            Edit
          </button>
          <button onClick={handleDeletePost} className="post-delete-button">
            Delete
          </button>
        </>
      )}
      <div className="post-comment-section">
        <input
          type="text"
          className="post-comment-input"
          placeholder="Write a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button className="post-comment-button" onClick={handleComment}>
          Comment
        </button>
      </div>
      <div className="post-comments">
        <h4>Comments:</h4>
        {post.comments.length > 0 ? (
          post.comments.map((comment, index) => (
            <p key={index} className="post-comment">
              - {comment}
            </p>
          ))
        ) : (
          <p className="no-comments">No comments yet.</p>
        )}
      </div>
    </div>
  );
}

export default Post;
