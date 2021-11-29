import Post from '../items/Post';
import postStyles from '../../styles/Post.module.css';

const PostList = ({ posts }) => {
  if (!posts.data || posts.data.length === 0) {
    return (
      <div className={postStyles.noPosts}>
        Let's discover new inspirations in topics tab
      </div>
    );
  }

  const renderedList = posts.data.map((post) => (
    <Post key={post._id} post={post} />
  ));

  return <div className={postStyles.postList}>{renderedList}</div>;
};

export default PostList;
