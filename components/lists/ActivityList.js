import { useState, useEffect } from 'react';
import useRequest from '../../hooks/use-request';
import Activity from '../items/Activity';
import activityStyles from '../../styles/Activity.module.css';

const ActivityList = ({ activities }) => {
  const [active, setActive] = useState(true);
  const [acsData, setAcsData] = useState([]);
  const [page, nextPage] = useState(1);
  const { doRequest, errors } = useRequest({
    url: `http://localhost:8000/api/users/activities?page=${page}&limit=10`,
    method: 'get',
  });
  useEffect(() => {
    if (activities.length < 10) {
      return setActive(false);
    }
  }, []);

  useEffect(() => {
    setAcsData((oldState) => [...oldState, ...activities]);
    nextPage((oldState) => oldState + 1);
  }, []);

  if (activities.length === 0) {
    return (
      <div className={activityStyles.noActivities}>
        When a user likes your post, comments on your post or starts following
        you. We will get you notified here 🔥 👍 👌
      </div>
    );
  }
  if (!activities) {
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

  const onClick = async (e) => {
    e.preventDefault();

    const { data } = await doRequest();
    if (data) {
      nextPage((oldState) => oldState + 1);
      setAcsData((oldState) => [...oldState, ...data]);
    }
    if (data.length < 10) {
      setActive(false);
    }
  };

  const renderedList = acsData.map((activity) => (
    <Activity key={activity._id} activity={activity} />
  ));

  return (
    <div className={activityStyles.activityList}>
      {renderedList}
      <button
        style={active ? null : { display: 'none' }}
        onClick={onClick}
        className={activityStyles.moreAcs}
      >
        Older Notifications
      </button>
      {errors}
    </div>
  );
};

export default ActivityList;
