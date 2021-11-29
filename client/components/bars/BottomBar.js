import Link from 'next/link';
import BarStyles from '../../styles/Bar.module.css';
import NotificationIcon from '../Icons/NotifitcationIcon';
import NewPostIcon from '../Icons/NewPostIcon';
import ProfileIcon from '../Icons/ProfileIcon';

const BottomBar = () => {
  return (
    <div className={`${BarStyles.bar} ${BarStyles.bottomBar}`}>
      <Link href='/users/notifications'>
        <a style={{ height: '2.7rem' }}>
          <NotificationIcon />
        </a>
      </Link>
      <Link href='/posts/create-post'>
        <a style={{ height: '3.0rem' }}>
          <NewPostIcon />
        </a>
      </Link>
      <Link href='/users/my-profile'>
        <a style={{ height: '2.4rem' }}>
          <ProfileIcon />
        </a>
      </Link>
    </div>
  );
};
export default BottomBar;
