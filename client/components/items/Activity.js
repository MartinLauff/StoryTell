import React from 'react';

const Activity = ({ activity }) => {
  console.log(activity);
  return (
    <div>
      <img src={activity.user.photo} alt={activity.user.username} />
      <svg></svg>
      <div>
        <p>
          The user <bold>{activity.postedBy}</bold>
        </p>
        <p>Time</p>
      </div>
      <img src={activity.post.photo} alt='post photo' />
    </div>
  );
};

export default Activity;
