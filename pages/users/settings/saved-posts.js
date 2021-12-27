import Link from 'next/link';
import editStyles from '../../../styles/EditProfile.module.css';
import buildClient from '../../../api/build-client';
import PostList from '../../../components/lists/PostList';
import UnsaveIcon from '../../../components/Icons/UnsaveIcon';

const savedPosts = ({ data }) => {
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
        <h2>Saved posts</h2>
      </div>
      <PostList
        userId={data.userId}
        UnsaveOption={<UnsaveIcon />}
        posts={data.posts}
      />
      <style style={{ display: 'none' }}>
        {`html::-webkit-scrollbar{width:1.6rem}html::-webkit-scrollbar-track{background:#fff;border-radius:100vw}html::-webkit-scrollbar-thumb{background:#545454;border:.4em solid #fff;border-radius:100vw;transition:all .3s}html::-webkit-scrollbar-thumb:hover{background:#6d6d6d}`}
      </style>
    </div>
  );
};

export const getServerSideProps = async (ctx) => {
  const client = buildClient(ctx);
  const { data } = await client.get('/api/posts/saved');

  return {
    props: {
      data,
    },
  };
};

export default savedPosts;
