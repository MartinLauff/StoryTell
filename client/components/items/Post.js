import Link from 'next/link';
import LikeSet from '../Icons/LikeSet';
import postStyles from '../../styles/Post.module.css';
import formatDistance from 'date-fns/formatDistance';
import CommentIcon from '../Icons/CommentIcon';
import MoreIcon from '../Icons/MoreIcon';

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
          <div
            className={
              post.coverImage
                ? postStyles.imagePosition
                : postStyles.textPosition
            }
          >
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
              <div style={{ display: 'flex', aligItems: 'center' }}>
                <img
                  style={{ marginRight: '0.5rem' }}
                  src={post.postedBy.photo}
                  className={postStyles.icon}
                  alt='profile photo'
                />
                <p
                  style={post.coverImage ? whiteColor : blackColor}
                  className={postStyles.topic}
                >
                  {post.postedBy.username}
                </p>
              </div>
            </div>
            <div
              style={post.coverImage ? { padding: '1rem 0' } : null}
              className={postStyles.postContent}
            >
              <h2 style={post.coverImage ? whiteColor : blackColor}>
                {post.title}
              </h2>
            </div>
            {post.coverImage && (
              <div>
                <p className={postStyles.text}>
                  {post.content.slice(0, 100).trim()}...
                </p>
              </div>
            )}
            {!post.coverImage && (
              <div className={postStyles.postBottom}>
                <div>
                  <LikeSet likes={post.likes.length} greyColor={greyColor} />
                </div>
                <div>
                  <CommentIcon />
                  <span style={{ marginLeft: '0.8rem', ...greyColor }}>
                    Comments
                  </span>
                </div>
                <div>
                  <MoreIcon />
                </div>
              </div>
            )}
          </div>
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
