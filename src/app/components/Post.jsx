import React, { useState } from 'react';

function Post({ text, likes, onEdit, onLike, comments, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(text);
  const [newComment, setNewComment] = useState('');

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    onEdit(editedText);
    setIsEditing(false);
  };

  const handleLikeClick = () => {
    onLike();
  };

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleCommentSubmit = () => {
    if (newComment.trim() !== '') {
      comments.push(newComment);
      setNewComment('');
    }
  };

  const handleDeleteClick = () => {
    onDelete();
  };

  return (
    <div className="Post">
      {isEditing ? (
        <textarea
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
        />
      ) : (
        <div>{text}</div>
      )}

      <div className="Likes">
        <button className="LikeButton" onClick={handleLikeClick}>
          Like
        </button>
        <span>{likes} Likes</span>
      </div>

      <button className="DeleteButton" onClick={handleDeleteClick}>
        Удалить
      </button>

      <div className="Comments">
        <textarea
          placeholder="Добавить комментарий"
          value={newComment}
          onChange={handleCommentChange}
        />
        <button onClick={handleCommentSubmit}>Отправить</button>
        <div>
          {comments.map((comment, index) => (
            <div key={index}>{comment}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Post;
