import { useState } from 'react';
import Cookies from 'js-cookie';
import useRequest from '../../hooks/use-request';
import buildClient from '../../api/build-client';
import PostList from '../../components/lists/PostList';
import ArrowBar from '../../components/bars/ArrowBar';
import oneUserStyles from '../../styles/OneUser.module.css';

const OneUser = ({ data }) => {
  const [active, setActive] = useState(false);

  const { doRequest, errors } = useRequest({
    url: `http://localhost:8000/api/users/${active ? 'unfollow' : 'follow'}/${
      data._id
    }`,
    method: 'put',
    headers: { Authorization: 'Bearer ' + Cookies.get('jwt') },
  });

  const follow = (e) => {
    e.preventDefault();

    doRequest();

    setActive(!active);
  };
  return (
    <div>
      <ArrowBar title='User profile' />
      <div className={oneUserStyles.wrapper}>
        <div className={oneUserStyles.userTop}>
          <img
            src={!data.photo.startsWith('http') ? '/default.png' : data.photo}
            className={oneUserStyles.photo}
            alt='profile photo'
          />
          <div className={oneUserStyles.description}>
            <h1 className={oneUserStyles.name}>{data.username}</h1>
            <p className={oneUserStyles.hobby}>{data.hobby}</p>
            <div className={oneUserStyles.btns}>
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
              <button className={oneUserStyles.chat}>Chat</button>
            </div>
          </div>
        </div>
        <div className={oneUserStyles.stats}>
          <div>
            <p className={oneUserStyles.data}>{data.posts.length}</p>
            <p className={oneUserStyles.legend}>Posts</p>
          </div>
          <div>
            <p className={oneUserStyles.data}>{data.followers.length}</p>
            <p className={oneUserStyles.legend}>Followers</p>
          </div>
          <div>
            <p className={oneUserStyles.data}>{data.following.length}</p>
            <p className={oneUserStyles.legend}>Following</p>
          </div>
        </div>
      </div>
      <PostList text="Current user doesn't have any posts" posts={data.posts} />
      {errors}
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
