import componentStyles from '../../styles/Components.module.css';
import useRequest from '../../hooks/use-request';
import Cookies from 'js-cookie';

const UnsaveIcon = ({ postId, deleteOpt, Xposition }) => {
  const { doRequest, errors } = useRequest({
    url: `http://localhost:8000/api/users/unsave/${postId}`,
    method: 'put',
    headers: { Authorization: 'Bearer ' + Cookies.get('jwt') },
  });

  const onClick = (e) => {
    e.preventDefault();
    doRequest();
    deleteOpt(false);
  };

  return (
    <div
      onClick={onClick}
      className={`${componentStyles.xIcon} ${
        Xposition ? componentStyles.imgON : componentStyles.imgOFF
      }`}
    >
      <svg
        width='20'
        height='20'
        viewBox='0 0 20 20'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M10 10L19 19M1 19L10 10L1 19ZM19 1L9.99828 10L19 1ZM9.99828 10L1 1L9.99828 10Z'
          stroke='black'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
      {errors}
    </div>
  );
};

export default UnsaveIcon;
