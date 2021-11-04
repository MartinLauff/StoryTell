import Link from 'next/link';
import postStyles from '../styles/Post.module.css';
import formatDistance from 'date-fns/formatDistance';
import LikeIcon from '../components/Icons/LikeIcon';
import DisLikeIcon from '../components/Icons/DisLikeIcon';
import CommentIcon from '../components/Icons/CommentIcon';
import MoreIcon from '../components/Icons/MoreIcon';

const Post = ({ post }) => {
  return (
    <div className={postStyles.post}>
      <Link href='/posts/[...postId]' as={`/posts/${post._id}`}>
        <a style={{ textDecoration: 'none' }}>
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
              })
                .replace('about', '')
                .replace('less than', '')}
            </span>
            <button className={postStyles.follow}>Follow</button>
          </div>
          <div className={postStyles.postContent}>
            <p>{post.title}</p>
          </div>
          {!post.coverImage && (
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
          )}
          {post.coverImage && (
            <img
              className={postStyles.coverImage}
              src={post.coverImage}
              alt={post.title}
            />
          )}
        </a>
      </Link>
    </div>
  );
};

export default Post;
