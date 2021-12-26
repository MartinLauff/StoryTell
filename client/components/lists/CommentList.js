import Comment from '../items/Comment';
import commentStyles from '../../styles/Comment.module.css';

const CommentList = ({ comments, userId }) => {
  if (comments.length === 0) {
    return (
      <div className={commentStyles.noComments}>
        Be the first one to comment this post!
      </div>
    );
  }
  if (!comments) {
    return (
      <div data-center='center'>
        <div className='wave'></div>
        <div className='wave'></div>
        <div className='wave'></div>
        <div className='wave'></div>
        <div className='wave'></div>
        <div className='wave'></div>
        <div className='wave'></div>
        <div className='wave'></div>
        <div className='wave'></div>
        <div className='wave'></div>
      </div>
    );
  }

  const renderedList = comments.map((comment) => (
    <Comment userId={userId} key={comment._id} comment={comment} />
  ));

  return <div className={commentStyles.commentList}>{renderedList}</div>;
};

export default CommentList;
