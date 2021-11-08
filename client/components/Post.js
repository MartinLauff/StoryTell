import Link from 'next/link';
import postStyles from '../styles/Post.module.css';
import formatDistance from 'date-fns/formatDistance';
import LikeIcon from '../components/Icons/LikeIcon';
import DisLikeIcon from '../components/Icons/DisLikeIcon';
import CommentIcon from '../components/Icons/CommentIcon';
import MoreIcon from '../components/Icons/MoreIcon';

const Post = ({ post }) => {
  const blackColor = { color: '#000' };
  const whiteColor = { color: '#fff' };
  const greyColor = { color: '#878a8c' };
  return (
    <div
      style={!post.coverImage ? { border: '2px solid #000' } : null}
      className={postStyles.post}
    >
      <Link href='/posts/[...postId]' as={`/posts/${post._id}`}>
        <a style={{ textDecoration: 'none' }}>
          <div className={post.coverImage ? postStyles.imagePosition : ''}>
            <div
              style={post.coverImage ? { paddingTop: '1.5rem' } : null}
              className={postStyles.postTop}
            >
              <div style={{ display: 'flex', aligItems: 'center' }}>
                <img
                  style={{ marginRight: '0.5rem' }}
                  className={postStyles.icon}
                  alt={post.title}
                  src={`/${post.slug}.jpg`}
                />
                <span
                  style={post.coverImage ? whiteColor : blackColor}
                  className={postStyles.topic}
                >{`s/${post.topic}`}</span>
              </div>
              <span
                style={post.coverImage ? whiteColor : greyColor}
                className={postStyles.date}
              >
                {formatDistance(new Date(post.createdAt), new Date(), {
                  addSuffix: true,
                })
                  .replace('about', '')
                  .replace('less than', '')}
              </span>
              <button style={whiteColor} className={postStyles.follow}>
                Follow
              </button>
            </div>
            <div className={postStyles.postContent}>
              <h2 style={post.coverImage ? whiteColor : blackColor}>
                {post.title}
              </h2>
            </div>
            {post.coverImage && (
              <div>
                <p className={postStyles.text}>{post.content}</p>
              </div>
            )}
          </div>
          {!post.coverImage && (
            <div style={greyColor} className={postStyles.postBottom}>
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
