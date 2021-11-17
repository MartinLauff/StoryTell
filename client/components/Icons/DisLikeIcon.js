import { Fragment, useState } from 'react';
import Cookies from 'js-cookie';
import useRequest from '../../hooks/use-request';

const DisLikeIcon = ({ postID }) => {
  const [active, setActive] = useState(false);
  const { doRequest, errors } = useRequest({
    url: `http://localhost:8000/api/upvotes/${postID}/unlike`,
    headers: { Authorization: 'Bearer ' + Cookies.get('jwt') },
    method: 'put',
    body: {},
  });

  const onClick = async () => {
    await doRequest();
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
      {errors}
    </Fragment>
  );
};

export default DisLikeIcon;
