import Post from '../items/Post';
import postStyles from '../../styles/Post.module.css';

const PostList = ({ posts, text }) => {
  if (!posts || posts.length === 0) {
    return <div className={postStyles.noPosts}>{text}</div>;
  }

  const renderedList = posts.map((post) => <Post key={post._id} post={post} />);

  return <div className={postStyles.postList}>{renderedList}</div>;
};

export default PostList;
