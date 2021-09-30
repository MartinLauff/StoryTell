import Link from 'next/link';
import { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalCtx';
import BarStyles from '../styles/Bar.module.css';
import LogoIcon from './Icons/LogoIcon';

const TopBar = () => {
  const [active, setActive] = useState(false);
  const { sidebar, setSidebar } = useContext(GlobalContext);
  const onClick = () => {
    setActive(true);
    setSidebar(true);
  };
  const layerOff = () => {
    setActive(false);
    setSidebar(false);
  };

  return (
    <div className={`${BarStyles.bar} ${BarStyles.between}`}>
      <Link href='/posts'>
        <a style={{ height: '3.2rem' }}>
          <LogoIcon />
        </a>
      </Link>
      <h2>Storytell</h2>
      <div
        onClick={onClick}
        className={`${BarStyles.circle} ${
          active ? BarStyles.circleRotate : ''
        }`}
      >
        <div className={BarStyles.groupDots}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div
        onClick={layerOff}
        className={`${sidebar ? BarStyles.layer : BarStyles.hide}`}
      ></div>
    </div>
  );
};
export default TopBar;
