import Link from 'next/link';
import { useState } from 'react';
import SavedOption from '../bannerOptions/SavedOptions';
import ChangePasswordOption from '../bannerOptions/ChangePasswordOption';
import myProfileStyles from '../../styles/myProfile.module.css';
import BarStyles from '../../styles/Bar.module.css';
import ArrowIcon from '../Icons/ArrowIcon';

const ArrowBar = ({ extra, title }) => {
  const [banner, setBanner] = useState(false);
  return (
    <div className={`${BarStyles.bar} ${BarStyles.arrowBar}`}>
      <Link href='/posts'>
        <a style={{ height: '2rem' }}>
          <ArrowIcon />
        </a>
      </Link>
      <h2>{title}</h2>
      <div onClick={() => setBanner(true)} style={{ padding: '1rem 0.6rem' }}>
        {extra}
      </div>
      <div
        onClick={() => setBanner(false)}
        style={banner ? null : { display: 'none' }}
        className={myProfileStyles.profileBanner}
      >
        <SavedOption />
        <ChangePasswordOption />
      </div>
      <div
        onClick={() => setBanner(false)}
        className={banner ? myProfileStyles.transparentLayer : null}
      ></div>
    </div>
  );
};
export default ArrowBar;
