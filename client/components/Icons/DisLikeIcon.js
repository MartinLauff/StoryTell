import { Fragment, useState } from 'react';

const DisLikeIcon = () => {
  const [active, setActive] = useState(false);
  const onClick = () => {
    setActive(!active);
  };
  return (
    <Fragment>
      <svg
        onClick={onClick}
        width='18'
        height='17'
        viewBox='0 0 18 17'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M17 8.17983L9 15.169L1 8.17983'
          stroke={active ? '#FF2F2F' : '#878A8C'}
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M17 1.19062L9 8.17982L1 1.19062'
          stroke={active ? '#FF2F2F' : '#878A8C'}
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </Fragment>
  );
};

export default DisLikeIcon;
