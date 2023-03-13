import { useState } from 'react';
import Link from 'next/link';
import useRequest from '../../../hooks/use-request';
import editStyles from '../../../styles/EditProfile.module.css';
import componentStyles from '../../../styles/Components.module.css';

const UpdatePassword = () => {
  const [active, setActive] = useState(false);
  const [success, setSuccess] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const { doRequest, errors } = useRequest({
    url: '/api/users/update-password',
    method: 'put',
    body: {
      currentPassword,
      newPassword,
    },
  });

  const onsubmit = async (e) => {
    e.preventDefault();
    setActive(false);

    if (!currentPassword || !newPassword || !confirmNewPassword) {
      return;
    }

    if (newPassword !== confirmNewPassword) {
      return setActive(true);
    }

    const res = await doRequest();
    if (res) {
      setSuccess(true);
      setCurrentPassword('');
      setNewPassword('');
      setConfirmNewPassword('');
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
        <h2>Password</h2>
      </div>
      <form onSubmit={onsubmit} className={editStyles.wrap}>
        <div>
          <div>
            <h2>Current Password</h2>
            <input
              onChange={(e) => setCurrentPassword(e.target.value)}
              className={componentStyles.textInput}
              type='password'
              minLength='8'
              maxLength='20'
              required
            />
          </div>
          <div>
            <h2>New Password</h2>
            <input
              onChange={(e) => setNewPassword(e.target.value)}
              className={componentStyles.textInput}
              type='password'
              minLength='8'
              maxLength='20'
              required
            />
          </div>
          <div>
            <h2>Confirm New Password</h2>
            <input
              onChange={(e) => setConfirmNewPassword(e.target.value)}
              className={componentStyles.textInput}
              type='password'
              minLength='8'
              maxLength='20'
              required
            />
          </div>
        </div>
        {active && (
          <span
            style={{ fontSize: 'var(--fs-mid)' }}
            className={componentStyles.err}
          >
            Provided passwords are not the same
          </span>
        )}
        <button
          type='submit'
          className={`${componentStyles.applyBtn} ${componentStyles.marginBottom}`}
          style={
            currentPassword.length >= 8 &&
            newPassword.length >= 8 &&
            confirmNewPassword.length >= 8
              ? { backgroundColor: '#ff2f2f' }
              : {
                  cursor: 'not-allowed',
                  backgroundColor: '#e7e7e7',
                  color: '#000',
                  outline: 'none',
                }
          }
        >
          Save
        </button>
      </form>
      {success && (
        <div
          onClick={() => setSuccess(false)}
          className={editStyles.successBar}
        >
          Password changed successfully
        </div>
      )}
      {errors}
    </div>
  );
};

export default UpdatePassword;
