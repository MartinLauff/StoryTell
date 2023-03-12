import Link from 'next/link';
import { useState } from 'react';
import chatStyles from '../../styles/Chat.module.css';

const FollowingList = ({ following }) => {
  const [user, setUser] = useState('');
  if (following.length === 0) {
    return (
      <div className={chatStyles.noFollowing}>
        You are not following anyone yet! <br /> You can do so by visiting other
        users profile.
      </div>
    );
  }

  const renderedList = following
    .filter((i) => i.username.includes(user))
    .map((el, i) => (
      <Link key={i} href={`/users/chat/${el._id}`}>
        <a className={chatStyles.link}>
          <img className={chatStyles.photo} src={el.photo} />
          <p className={chatStyles.user} style={{ color: '#000' }}>
            {el.username}
          </p>
        </a>
      </Link>
    ));
  return (
    <div className={chatStyles.userList}>
      <div className={chatStyles.inputWrap}>
        <input
          className={chatStyles.textInput}
          value={user}
          onChange={(e) => setUser(e.target.value)}
          maxLength='10'
          type='text'
          placeholder='Search the people you follow'
        />
      </div>
      {renderedList}
    </div>
  );
};

export default FollowingList;
