"use client"


import React, { useState } from 'react';
import './page.css';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import Post from './components/Post'

function App() {
  const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const addPost = (text) => {
    setPosts([...posts, { text, likes: 0, comments: [] }]);
  };

  const editPost = (index, newText) => {
    const updatedPosts = [...posts];
    updatedPosts[index].text = newText;
    setPosts(updatedPosts);
  };

  const likePost = (index) => {
    const updatedPosts = [...posts];
    updatedPosts[index].likes++;
    setPosts(updatedPosts);
  };

  const addComment = (index, comment) => {
    const updatedPosts = [...posts];
    updatedPosts[index].comments.push(comment);
    setPosts(updatedPosts);
  };

  const deletePost = (index) => {
    const updatedPosts = [...posts];
    updatedPosts.splice(index, 1);
    setPosts(updatedPosts);
  };

  const handleSearch = () => {
    const query = searchQuery.trim().toLowerCase();
  
    if (query === '') {
      setSearchResults(posts); // Если запрос пуст, отобразить все посты
    } else {
      const filtered = posts.filter((post) =>
        post.text.toLowerCase().includes(query)
      );
      setSearchResults(filtered);
    }
  };
  
  

  return (
  <div className="App">
    <h1>Посты</h1>
    <input
      type="text"
      placeholder="Поиск постов"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
    <button onClick={handleSearch}>Искать</button>
    <PostForm addPost={addPost} />
    {searchQuery.trim() === ''
      ? posts.map((post, index) => (
          <Post
            key={index}
            author={post.author}
            text={post.text}
            likes={post.likes}
            onEdit={(newText) => editPost(index, newText)}
            onLike={() => likePost(index)}
            comments={post.comments}
            onDelete={() => deletePost(index)}
          />
        ))
      : searchResults.map((post, index) => (
          <Post
            key={index}
            author={post.author}
            text={post.text}
            likes={post.likes}
            onEdit={(newText) => editPost(index, newText)}
            onLike={() => likePost(index)}
            comments={post.comments}
            onDelete={() => deletePost(index)}
          />
        ))}
  </div>
);

}

export default App;