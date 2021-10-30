import Link from 'next/link';
import commentStyles from '../styles/Comment.module.css';
import formatDistance from 'date-fns/formatDistance';

const Comment = ({ comment }) => {
  return (
    <div className={commentStyles.commentWrap}>
      <img className={commentStyles.pic} src='/default.png' />
      <div>
        <div>
          <span className={commentStyles.name}>
            {comment.postedBy.username}
          </span>
          <span className={commentStyles.time}>
            {formatDistance(new Date(comment.createdAt), new Date(), {
              addSuffix: true,
            })
              .replace('about', '')
              .replace('less than', '')}
          </span>
        </div>
        <div>
          <span className={commentStyles.content}>{comment.content}</span>
        </div>
      </div>
    </div>
  );
};

export default Comment;
