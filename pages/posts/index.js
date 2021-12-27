import TopBar from '../../components/bars/TopBar';
import SideBar from '../../components/bars/SideBar';
import BottomBar from '../../components/bars/BottomBar';
import Layer from '../../components/bars/Layer';
import PostList from '../../components/lists/PostList';
import buildClient from '../../api/build-client';

const LatestPosts = ({ data }) => {
  return (
    <div>
      <TopBar />
      <SideBar />
      <Layer />
      <h2 style={{ margin: '6rem 0 0 4rem' }}>Latest posts</h2>
      <PostList
        text="Let's discover new inspirations in topics tab"
        posts={data.posts}
        userId={data.userId}
      />
      <BottomBar />
    </div>
  );
};

export const getServerSideProps = async (ctx) => {
  const client = buildClient(ctx);
  const { res } = ctx;
  const { data } = await client.get('/api/posts/');

  return {
    props: {
      ...data,
    },
  };
};

export default LatestPosts;