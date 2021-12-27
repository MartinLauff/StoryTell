import Link from 'next/link';
import { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalCtx';
import BarStyles from '../../styles/Bar.module.css';
import LogoIcon from '../Icons/LogoIcon';

const TopBar = () => {
  const { setSidebar, rotateDots, setRotateDots } = useContext(GlobalContext);
  const onClick = () => {
    setRotateDots(true);
    setSidebar(true);
  };

  return (
    <div className={`${BarStyles.bar} ${BarStyles.topBar}`}>
      <Link href='/posts'>
        <a style={{ height: '3.2rem' }}>
          <LogoIcon />
        </a>
      </Link>
      <h2>Storytell</h2>
      <div
        onClick={onClick}
        className={`${BarStyles.circle} ${
          rotateDots ? BarStyles.circleRotate : ''
        }`}
      >
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
