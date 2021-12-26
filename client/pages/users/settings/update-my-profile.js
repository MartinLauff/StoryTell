import { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import Router from 'next/router';
import Cookies from 'js-cookie';
import generalError from '../../../styles/Error.module.css';
import buildClient from '../../../api/build-client';
import editStyles from '../../../styles/EditProfile.module.css';
import componentStyles from '../../../styles/Components.module.css';

const updateMyProfile = ({ data }) => {
  const [errors, setErrors] = useState(null);
  const [photo, setProfilePhoto] = useState(data.photo);
  const [username, setUsername] = useState(data.username);
  const [hobby, setHobby] = useState(data.hobby);
  const [email, setEmail] = useState(data.email);

  const doRequest = (url = data.photo) => {
    axios({
      url: '/api/users/update-my-profile',
      method: 'put',
      data: {
        photo: url,
        username,
        hobby,
        email,
      },
      headers: { Authorization: 'Bearer ' + Cookies.get('jwt') },
    })
      .then(() => Router.push('/users/my-profile'))
      .catch(({ response: { data } }) =>
        setErrors(
          <div className={generalError.errorBanner}>
            <h4>Ooops....</h4>
            <ul style={{ listStyle: 'none' }}>
              {data.message.split(',').map((message) => (
                <li key={message}>
                  {message.replace('Validation failed:', '').split(':')[1]}
                </li>
              ))}
            </ul>
          </div>
        )
      );
  };

  const handleFileInputChange = (e) => {
    previewFile(e.target.files[0]);
    setProfilePhoto(e.target.files[0]);
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setProfilePhoto(reader.result);
    };
  };

  const resetImg = () => {
    setProfilePhoto(data.photo);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!username || !hobby || !email) {
      return;
    }

    const body = new FormData();
    body.append('file', photo);
    body.append('upload_preset', 'storytell');

    if (photo !== data.photo) {
      const res = await axios({
        method: 'post',
        url: 'https://api.cloudinary.com/v1_1/ekoeko/image/upload',
        data: body,
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      doRequest(res.data.url);
    } else {
      doRequest();
    }
  };

  return (
    <div>
      <div className={editStyles.bar}>
        <Link href='/users/my-profile'>
          <a style={{ height: '2rem' }}>
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
          </a>
        </Link>
        <h2>Edit profile</h2>
      </div>
      <form onSubmit={onSubmit} className={editStyles.wrap}>
        <div className={editStyles.imgWrap}>
          <div style={{ position: 'relative' }}>
            <img className={editStyles.img} src={photo} alt='profile picture' />
            {photo !== data.photo && (
              <div onClick={resetImg} className={editStyles.close}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='#ff2f2f'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <line x1='18' y1='6' x2='6' y2='18'></line>
                  <line x1='6' y1='6' x2='18' y2='18'></line>
                </svg>
              </div>
            )}
          </div>
          <input
            onChange={handleFileInputChange}
            id='image'
            accept='image/*'
            type='file'
            name='image'
            value=''
          />
          <label htmlFor='image'>Choose an image</label>
        </div>
        <div>
          <div>
            <h2>Username</h2>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className={componentStyles.textInput}
              type='text'
              minLength='4'
              maxLength='14'
            />
          </div>
          <div>
            <h2>Your hobby</h2>
            <input
              value={hobby}
              onChange={(e) => setHobby(e.target.value)}
              className={componentStyles.textInput}
              type='text'
              minLength='2'
              maxLength='18'
            />
          </div>
          <div>
            <h2>Email</h2>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={componentStyles.textInput}
              type='email'
            />
          </div>
        </div>
        <button type='submit' className={componentStyles.applyBtn}>
          Save
        </button>
      </form>
      {errors}
    </div>
  );
};

export const getServerSideProps = async (ctx) => {
  const client = buildClient(ctx);
  const { data } = await client.get('/api/users/brief-user');

  return {
    props: {
      data,
    },
  };
};

export default updateMyProfile;
