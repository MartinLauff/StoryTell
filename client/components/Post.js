import postStyles from '../styles/Post.module.css';

const Post = ({ post }) => {
  return (
    <div style={{ margin: '1rem 0' }} className={postStyles.post}>
      <div className={postStyles.postTop}>
        <img alt={post.title} src={`/${post.slug}.jpg`} />
        <span>{post.topic}</span>
      </div>
      <div className={postStyles.postContent}>
        <p>{post.title}</p>
      </div>
      <div className={postStyles.postBottom}>{post.slug}</div>
      {post.coverImage && <img alt={post.title} />}
    </div>
  );
};

export default Post;
