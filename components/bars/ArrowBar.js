import Link from 'next/link';
import { useState } from 'react';
import SavedOption from '../bannerOptions/SavedOptions';
import ChangePasswordOption from '../bannerOptions/ChangePasswordOption';
import myProfileStyles from '../../styles/MyProfile.module.css';
import BarStyles from '../../styles/Bar.module.css';
import ArrowIcon from '../Icons/ArrowIcon';

const ArrowBar = ({ extra, title, image }) => {
  const [banner, setBanner] = useState(false);
  return (
    <div className={`${BarStyles.bar} ${BarStyles.arrowBar}`}>
      <Link href='/posts'>
        <a style={{ height: '2rem', marginLeft: '2rem' }}>
          <ArrowIcon />
        </a>
      </Link>
      {image && (
        <img
          alt='profile image'
          src={image}
          className={myProfileStyles.barPhoto}
        />
      )}
      <h2 style={image ? { marginLeft: '1rem' } : null}>{title}</h2>
      {extra && (
        <div
          onClick={() => setBanner(true)}
          style={{
            padding: '1rem 0.6rem',
            position: 'absolute',
            right: '6%',
          }}
        >
          {extra}
        </div>
      )}
      <div
        onClick={() => setBanner(false)}
        style={banner ? null : { display: 'none' }}
        className={myProfileStyles.profileBanner}
      >
        <Link href='/users/settings/saved-posts'>
          <a>
            <SavedOption />
          </a>
        </Link>
        <Link href='/users/settings/update-password'>
          <a>
            <ChangePasswordOption />
          </a>
        </Link>
      </div>
      <div
        onClick={() => setBanner(false)}
        className={banner ? myProfileStyles.transparentLayer : null}
      ></div>
    </div>
  );
};
export default ArrowBar;
