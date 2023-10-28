import React from 'react';

function PostList({ posts }) {
  return (
    <div>
      {posts.map((post, index) => (
        <div key={index}>{post}</div>
      ))}
    </div>
  );
}

export default PostList;
