import Link from 'next/link';
import BarStyles from '../../styles/Bar.module.css';
import ArrowIcon from '../Icons/ArrowIcon';

const ArrowBar = ({ title }) => {
  return (
    <div className={`${BarStyles.bar} ${BarStyles.arrowBar}`}>
      <Link href='/posts'>
        <a style={{ height: '2rem' }}>
          <ArrowIcon />
        </a>
      </Link>
      <h2>{title}</h2>
    </div>
  );
};
export default ArrowBar;
