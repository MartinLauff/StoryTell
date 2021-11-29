import Activity from '../items/Activity';
import activityStyles from '../../styles/Activity.module.css';

const ActivityList = ({ activities }) => {
  if (!activities.data || activities.data.length === 0) {
    return (
      <div className={activityStyles.noActivities}>
        When a user likes your posts, comments on your posts or starts following
        you. We will get you notified here 🔥 👍 👌
      </div>
    );
  }

  const renderedList = activities.data.map((activity) => (
    <Activity key={activity._id} activity={activity} />
  ));

  return <div className={activityStyles.activityList}>{renderedList}</div>;
};

export default ActivityList;
