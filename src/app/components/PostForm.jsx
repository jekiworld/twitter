import React, { useState } from 'react';

function PostForm({ addPost }) {
  const [text, setText] = useState('');

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={text}
        onChange={handleTextChange}
        placeholder="Введите свой пост..."
      />
      <button type="submit">Опубликовать</button>
    </form>
  );
}

export default PostForm;
