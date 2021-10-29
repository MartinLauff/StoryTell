import Comment from './Comment';
import commentStyles from '../styles/Comment.module.css';

const CommentList = ({ comments }) => {
  if (!comments || comments.length === 0) {
    return (
      <div className={commentStyles.noComments}>
        Be the first one to comment this post!
      </div>
    );
  }

  const renderedList = comments.map((comment) => (
    <Comment key={comment._id} comment={comment} />
  ));

  return <div className={commentStyles.commentList}>{renderedList}</div>;
};

export default CommentList;
