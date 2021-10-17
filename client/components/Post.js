import postStyles from '../styles/Post.module.css';

const Post = ({ post }) => {
  return (
    <div style={{ margin: '1rem 0' }} className={postStyles.post}>
      <div className={postStyles.postTop}>
        <div style={{ display: 'flex', aligItems: 'center' }}>
          <img
            style={{ marginRight: '0.5rem' }}
            className={postStyles.icon}
            alt={post.title}
            src={`/${post.slug}.jpg`}
          />
          <span className={postStyles.topic}>{`s/${post.topic}`}</span>
        </div>
        <span className={postStyles.date}>5 min ago</span>
        <button className={postStyles.follow}>Follow</button>
      </div>
      <div className={postStyles.postContent}>
        <p>{post.title}</p>
      </div>
      <div className={postStyles.postBottom}>
        <span>{post.likes.length}</span>
        <span>Comments</span>
      </div>
      {post.coverImage && <img alt={post.title} />}
    </div>
  );
};

export default Post;
