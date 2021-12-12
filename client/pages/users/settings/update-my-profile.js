import Link from 'next/link';
import { useState } from 'react';
import buildClient from '../../../api/build-client';
import editStyles from '../../../styles/EditProfile.module.css';
import componentStyles from '../../../styles/Components.module.css';

const updateMyProfile = ({ data }) => {
  const [inputFile, setInputFile] = useState('');
  const [profilePhoto, setProfilePhoto] = useState(data.photo);
  const [username, setUsername] = useState(data.username);
  const [hobby, setHobby] = useState(data.hobby);
  const [email, setEmail] = useState(data.email);

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    previewFile(file);
    // setProfilePhoto(file);
    // setInputFile(e.target.value);
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setInputFile(reader.result);
    };
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
      <form className={editStyles.wrap}>
        <div className={editStyles.imgWrap}>
          <img
            className={editStyles.img}
            src={inputFile ? inputFile : profilePhoto}
            alt='profile picture'
          />
          <input
            onChange={handleFileInputChange}
            id='image'
            accept='image/*'
            type='file'
            name='image'
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
            />
          </div>
          <div>
            <h2>Your hobby</h2>
            <input
              value={hobby}
              onChange={(e) => setHobby(e.target.value)}
              className={componentStyles.textInput}
              type='text'
            />
          </div>
          <div>
            <h2>Email</h2>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={componentStyles.textInput}
              type='text'
            />
          </div>
        </div>
        <button type='submit' className={componentStyles.applyBtn}>
          Save
        </button>
      </form>
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
