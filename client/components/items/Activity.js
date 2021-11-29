import Link from 'next/link';
import formatDistance from 'date-fns/formatDistance';
import LikeType from '../Icons/activity/LikeType';
import CommentType from '../Icons/activity/CommentType';
import FollowType from '../Icons/activity/FollowType';
import activityStyles from '../../styles/Activity.module.css';

const Activity = ({ activity }) => {
  return (
    <div className={activityStyles.activityWrapper}>
      <img
        className={activityStyles.profilePic}
        src={
          !activity.user.photo.startsWith('http')
            ? '/default.png'
            : activity.user.photo
        }
        alt={activity.user.username}
      />
      {activity.type.startsWith('liked') ? (
        <LikeType />
      ) : activity.type.startsWith('commented') ? (
        <CommentType />
      ) : (
        <FollowType />
      )}
      <div className={activityStyles.text}>
        <p className={activityStyles.message}>
          The user <strong>{activity.user.username}</strong>
          {' ' + activity.type}
        </p>
        <span className={activityStyles.time}>
          {formatDistance(new Date(activity.createdAt), new Date(), {
            addSuffix: true,
          })
            .replace('about', '')
            .replace('less than', '')}
        </span>
      </div>
      <Link href='/posts/[...postId]' as={`/posts/${activity.post._id}`}>
        <a>
          <img
            className={activityStyles.imageLeft}
            src={activity.post.coverImage}
            alt='post photo'
          />
        </a>
      </Link>
    </div>
  );
};

export default Activity;
