import Link from 'next/link';
import { useState, useEffect } from 'react';
import commentStyles from '../../styles/Comment.module.css';
import formatDistance from 'date-fns/formatDistance';

const Comment = ({ comment }) => {
  const [state, setState] = useState(null);
  useEffect(() => {
    //Converts comment to charArray and returns array with whitespaces only
    let newArr = comment.content.split('').filter((el) => el === ' ');
    if (comment.content.length > 15 && newArr.length < 2) {
      const arr = comment.content.split(' ');
      setState(
        arr.map((content, i) => (
          <p key={i} className={commentStyles.content}>
            {content}
          </p>
        ))
      );
    } else {
      setState(
        <span className={commentStyles.content}>{comment.content}</span>
      );
    }
  }, []);
  return (
    <div className={commentStyles.commentWrap}>
      <img
        className={commentStyles.pic}
        src={
          !comment.postedBy.photo.startsWith('http')
            ? '/default.png'
            : post.postedBy.photo
        }
        alt={comment.postedBy.username}
      />
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
        <div>{state}</div>
      </div>
    </div>
  );
};

export default Comment;
