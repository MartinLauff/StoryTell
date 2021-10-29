import Link from 'next/link';
import formatDistance from 'date-fns/formatDistance';

const Comment = ({ comment }) => {
  return (
    <div>
      <img />
      <div>
        <div>
          <span>{}</span>
          <span>
            {formatDistance(new Date(comment.createdAt), new Date(), {
              addSuffix: true,
            })
              .replace('about', '')
              .replace('less than', '')}
          </span>
        </div>
        <div>
          <span>{comment.content}</span>
        </div>
      </div>
    </div>
  );
};

export default Comment;
