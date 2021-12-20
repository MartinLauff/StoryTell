import { useState, useEffect } from 'react';
import Link from 'next/link';
import Cookies from 'js-cookie';
import useRequest from '../../hooks/use-request';
import buildClient from '../../api/build-client';
import PostList from '../../components/lists/PostList';
import ArrowBar from '../../components/bars/ArrowBar';
import oneUserStyles from '../../styles/OneUser.module.css';

const OneUser = ({ data }) => {
  const [active, setActive] = useState(false);
  const [followers, setFollowers] = useState(data.user.followers.length);

  const { doRequest, errors } = useRequest({
    url: `http://localhost:8000/api/users/${active ? 'unfollow' : 'follow'}/${
      data.user._id
    }`,
    method: 'put',
    headers: { Authorization: 'Bearer ' + Cookies.get('jwt') },
  });

  useEffect(() => {
    if (data.user.followers.includes(data.userId)) {
      setActive(true);
    }
  }, []);

  const follow = (e) => {
    e.preventDefault();

    if (active) {
      setFollowers((oldState) => oldState - 1);
    } else {
      setFollowers((oldState) => oldState + 1);
    }

    doRequest();

    setActive(!active);
  };
  return (
    <div>
      <ArrowBar title='User profile' />
      <div className={oneUserStyles.wrapper}>
        <div className={oneUserStyles.userTop}>
          <img
            src={data.user.photo}
            className={oneUserStyles.photo}
            alt='profile photo'
          />
          <div className={oneUserStyles.description}>
            <h1 className={oneUserStyles.name}>{data.user.username}</h1>
            <p className={oneUserStyles.hobby}>{data.user.hobby}</p>
            <div className={oneUserStyles.btns}>
              {data.user._id !== data.userId && (
                <button
                  style={
                    active
                      ? { backgroundColor: '#000' }
                      : { backgroundColor: '#FF2F2F' }
                  }
                  onClick={follow}
                  className={oneUserStyles.follow}
                >
                  {active ? 'Following' : 'Follow'}
                </button>
              )}
              {data.user._id !== data.userId && (
                <button className={oneUserStyles.chat}>Chat</button>
              )}
              {data.user._id === data.userId && (
                <Link href='/users/settings/update-my-profile'>
                  <a className={oneUserStyles.editMyProfile}>
                    <svg
                      width='13'
                      height='14'
                      viewBox='0 0 13 14'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M0.711148 13.5768C0.612874 13.5766 0.515711 13.556 0.425836 13.5162C0.335962 13.4765 0.255343 13.4185 0.189107 13.3459C0.121672 13.2739 0.0702153 13.1885 0.0381102 13.0952C0.00600514 13.0019 -0.00602276 12.9029 0.00281499 12.8047L0.176357 10.8964L8.19327 2.88236L10.6986 5.38703L2.68386 13.4004L0.775607 13.5739C0.754178 13.5759 0.732667 13.5769 0.711148 13.5768ZM11.1987 4.88623L8.69406 2.38157L10.1964 0.879193C10.2622 0.813334 10.3403 0.761088 10.4263 0.725442C10.5123 0.689795 10.6045 0.671448 10.6976 0.671448C10.7907 0.671448 10.8828 0.689795 10.9688 0.725442C11.0548 0.761088 11.1329 0.813334 11.1987 0.879193L12.7011 2.38157C12.767 2.44735 12.8192 2.52547 12.8549 2.61146C12.8905 2.69745 12.9089 2.78963 12.9089 2.88271C12.9089 2.9758 12.8905 3.06797 12.8549 3.15396C12.8192 3.23995 12.767 3.31807 12.7011 3.38386L11.1994 4.88553L11.1987 4.88623Z'
                        fill='white'
                      />
                    </svg>
                    Edit profile
                  </a>
                </Link>
              )}
            </div>
          </div>
        </div>
        <div className={oneUserStyles.stats}>
          <div>
            <p className={oneUserStyles.data}>{data.user.posts.length}</p>
            <p className={oneUserStyles.legend}>Posts</p>
          </div>
          <div>
            <p className={oneUserStyles.data}>{followers}</p>
            <p className={oneUserStyles.legend}>Followers</p>
          </div>
          <div>
            <p className={oneUserStyles.data}>{data.user.following.length}</p>
            <p className={oneUserStyles.legend}>Following</p>
          </div>
        </div>
      </div>
      <PostList
        text="Current user doesn't have any posts"
        posts={data.user.posts}
        userId={data.userId}
      />
      {errors}
      <style style={{ display: 'none' }}>
        {`html::-webkit-scrollbar{width:1.6rem}html::-webkit-scrollbar-track{background:#fff;border-radius:100vw}html::-webkit-scrollbar-thumb{background:#545454;border:.4em solid #fff;border-radius:100vw;transition:all .3s}html::-webkit-scrollbar-thumb:hover{background:#6d6d6d}`}
      </style>
    </div>
  );
};

export const getServerSideProps = async (ctx) => {
  const { oneUser } = ctx.query;
  const client = buildClient(ctx);
  const { data } = await client.get(`/api/users/${oneUser}`);

  return {
    props: {
      data,
      oneUser,
    },
  };
};

export default OneUser;
