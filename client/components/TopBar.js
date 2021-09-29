import Link from 'next/link';
import BarStyles from '../styles/Bar.module.css';
import LogoIcon from './Icons/LogoIcon';

const TopBar = () => {
  return (
    <div className={`${BarStyles.bar} ${BarStyles.between}`}>
      <Link href='/posts'>
        <a style={{ height: '3.2rem' }}>
          <LogoIcon />
        </a>
      </Link>
      <h2>Storytell</h2>
      <div className={BarStyles.circle}>
        <div className={BarStyles.groupDots}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
export default TopBar;
