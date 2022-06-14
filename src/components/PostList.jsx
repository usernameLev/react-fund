import React from 'react';
import PostItem from './PostItem';

function PostList({ posts, title, remove }) {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>{title}</h1>
      {posts.map((post, index) => (
        <PostItem post={post} key={post.id} number={index + 1} remove={remove} />
      ))}
    </div>
  );
}

export default PostList;
