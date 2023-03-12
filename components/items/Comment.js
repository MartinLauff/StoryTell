import { useState } from 'react';
import Link from 'next/link';
import useRequest from '../../hooks/use-request';
import commentStyles from '../../styles/Comment.module.css';
import componentStyles from '../../styles/Components.module.css';
import formatDistance from 'date-fns/formatDistance';

const Comment = ({ comment, userId }) => {
  const [state, setState] = useState(true);

  const { doRequest, errors } = useRequest({
    url: `http://localhost:8000/api/comments/${comment._id}`,
    method: 'delete',
  });

  const deleteComment = (e) => {
    e.preventDefault();
    setState(false);
    doRequest();
  };

  return (
    <div className={state ? commentStyles.commentWrap : commentStyles.hide}>
      {comment.postedBy._id === userId && (
        <div onClick={deleteComment} className={componentStyles.Xmarker}>
          <svg
            width='12'
            height='12'
            viewBox='0 0 20 20'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M10 10L19 19M1 19L10 10L1 19ZM19 1L9.99828 10L19 1ZM9.99828 10L1 1L9.99828 10Z'
              stroke='black'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </div>
      )}
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
      {errors}
    </div>
  );
};

export default Comment;
