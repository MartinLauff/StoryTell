import Link from 'next/link';
import commentStyles from '../../styles/Comment.module.css';
import formatDistance from 'date-fns/formatDistance';

const Comment = ({ comment }) => {
  return (
    <div className={commentStyles.commentWrap}>
      <Link href='/users/[...oneUser]' as={`/users/${comment.postedBy._id}`}>
        <a>
          <img
            className={commentStyles.pic}
            src={comment.postedBy.photo}
            alt={comment.postedBy.username}
          />
        </a>
      </Link>
      <div>
        <div>
          <Link
            href='/users/[...oneUser]'
            as={`/users/${comment.postedBy._id}`}
          >
            <a style={{ textDecoration: 'none' }}>
              <span className={commentStyles.name}>
                {comment.postedBy.username}
              </span>
            </a>
          </Link>
          <span className={commentStyles.time}>
            {formatDistance(new Date(comment.createdAt), new Date(), {
              addSuffix: true,
            })
              .replace('about', '')
              .replace('less than', '')}
          </span>
        </div>
        <div>
          <p className={commentStyles.content} style={{ color: '#000' }}>
            {comment.content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comment;
