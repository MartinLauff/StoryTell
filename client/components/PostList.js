import React from 'react';
import Post from './Post';
import postStyles from '../styles/Post.module.css';

const PostList = ({ posts }) => {
  if (!posts) {
    return <div>Let's discover new inspirations on topics tab</div>;
  }

  const renderedList = posts.data.map((post) => (
    <Post key={post._id} post={post} />
  ));

  return <div className={postStyles.postList}>{renderedList}</div>;
};

export default PostList;
