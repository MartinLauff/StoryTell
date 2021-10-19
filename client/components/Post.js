import postStyles from '../styles/Post.module.css';
import formatDistance from 'date-fns/formatDistance';
import LikeIcon from '../components/Icons/LikeIcon';
import DisLikeIcon from '../components/Icons/DisLikeIcon';
import CommentIcon from '../components/Icons/CommentIcon';
import MoreIcon from '../components/Icons/MoreIcon';

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
        <span className={postStyles.date}>
          {formatDistance(new Date(post.createdAt), new Date(), {
            addSuffix: true,
          }).replace('about', '')}
        </span>
        <button className={postStyles.follow}>Follow</button>
      </div>
      <div className={postStyles.postContent}>
        <p>{post.title}</p>
      </div>
      <div className={postStyles.postBottom}>
        <div>
          <LikeIcon />
          <span style={{ margin: '0 0.8rem' }}>{post.likes.length}</span>
          <DisLikeIcon />
        </div>
        <div>
          <CommentIcon />
          <span style={{ marginLeft: '0.8rem' }}>Comments</span>
        </div>
        <div>
          <MoreIcon />
        </div>
      </div>
      {post.coverImage && <img alt={post.title} />}
    </div>
  );
};

export default Post;
