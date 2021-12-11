import Link from 'next/link';
import MoreIcon from '../../components/Icons/MoreIcon';
import PostList from '../../components/lists/PostList';
import buildClient from '../../api/build-client';
import ArrowBar from '../../components/bars/ArrowBar';
import BottomBar from '../../components/bars/BottomBar';
import myProfileStyles from '../../styles/myProfile.module.css';

const MyProfile = ({ data }) => {
  const style = {
    position: 'absolute',
    right: '6%',
    transform: 'scale(1.2) rotate(90deg)',
  };
  return (
    <div>
      <ArrowBar
        extra={<MoreIcon color={'#000'} styling={style} />}
        title='My profile'
      />
      <div className={myProfileStyles.userTop}>
        <img
          src={!data.photo.startsWith('http') ? '/default.png' : data.photo}
          className={myProfileStyles.photo}
          alt='profile photo'
        />
        <div className={myProfileStyles.description}>
          <h1 className={myProfileStyles.name}>{data.username}</h1>
          <p className={myProfileStyles.hobby}>{data.hobby}</p>
          <Link href='/users/settings/update-my-profile'>
            <a className={myProfileStyles.btns}>
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
        </div>
      </div>
      <div className={myProfileStyles.stats}>
        <div>
          <p className={myProfileStyles.data}>{data.posts.length}</p>
          <p className={myProfileStyles.legend}>Posts</p>
        </div>
        <div>
          <p className={myProfileStyles.data}>{data.followers.length}</p>
          <p className={myProfileStyles.legend}>Followers</p>
        </div>
        <div>
          <p className={myProfileStyles.data}>{data.following.length}</p>
          <p className={myProfileStyles.legend}>Following</p>
        </div>
      </div>
      <PostList text='Here will be displayed your posts!' posts={data.posts} />
      <BottomBar />
    </div>
  );
};

export const getServerSideProps = async (ctx) => {
  const client = buildClient(ctx);
  const { data } = await client.get('/api/users/my-profile/');

  return {
    props: {
      data,
    },
  };
};

export default MyProfile;
