import { Fragment, useState, useEffect } from 'react';
import rateLimit from 'axios-rate-limit';
import generalError from '../../styles/Error.module.css';
import axios from 'axios';
import Cookies from 'js-cookie';

const LikeSet = ({ postID, likes, greyColor }) => {
  const [likeCount, setLikeCount] = useState(likes);
  const [active, setActive] = useState(false);
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setErrors(null);
    }, 4000);
  }, [errors]);

  const doRequest = async (path) => {
    const http = rateLimit(axios.create(), {
      maxRequests: 1,
      perMilliseconds: 4000,
      maxRPS: 4,
    });
    try {
      await http({
        url: `http://localhost:8000/api/upvotes/${postID}/${path}`,
        headers: { Authorization: 'Bearer ' + Cookies.get('jwt') },
        method: 'put',
      });
    } catch (err) {
      setErrors(
        <div className={generalError.errorBanner}>
          <h4>Ooops....</h4>
          <ul style={{ listStyle: 'none' }}>
            {err.response.data.errors.map((err) => (
              <li key={err.message}>{err.message}</li>
            ))}
          </ul>
        </div>
      );
    }
  };

  const doLike = async (e) => {
    e.preventDefault();
    setActive(!active);
    let currPosts = JSON.parse(localStorage.getItem('likedPosts'));

    if (currPosts.includes(postID)) {
      doRequest('unlike');
      setLikeCount((oldState) => oldState - 1);
      let d = currPosts.filter((el) => el !== postID);
      localStorage.setItem('likedPosts', JSON.stringify(d));
    } else {
      doRequest('like');
      setLikeCount((oldState) => oldState + 1);
      let d = [...currPosts, postID];
      localStorage.setItem('likedPosts', JSON.stringify(d));
    }
  };

  return (
    <Fragment>
      <svg
        onClick={doLike}
        width='18'
        height='17'
        viewBox='0 0 18 17'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M1 8.17983L9 1.19062L17 8.17983'
          stroke={active ? '#59BAB7' : '#878A8C'}
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M1 15.169L9 8.17982L17 15.169'
          stroke={active ? '#59BAB7' : '#878A8C'}
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
      <span style={{ margin: '0 0.8rem', ...greyColor }}>{likeCount}</span>
      {errors}
    </Fragment>
  );
};

export default LikeSet;
