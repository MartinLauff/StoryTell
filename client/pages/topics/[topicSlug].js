import TopBar from '../../components/bars/TopBar';
import SideBar from '../../components/bars/SideBar';
import BottomBar from '../../components/bars/BottomBar';
import Layer from '../../components/bars/Layer';
import PostList from '../../components/lists/PostList';
import buildClient from '../../api/build-client';
import topicStyles from '../../styles/Topic.module.css';

const TopicPosts = ({ data, topicSlug }) => {
  return (
    <div>
      <TopBar />
      <SideBar />
      <Layer />
      <div className={topicStyles.topicStripe}>
        <div>
          <img src={`/compress/${topicSlug}-big.jpg`} alt={topicSlug} />
          <h2>{topicSlug}</h2>
        </div>
      </div>
      <PostList
        text="This topic doesn't have a post yet. Let's change it!"
        posts={data.posts}
        userId={data.userId}
      />
      <BottomBar />
    </div>
  );
};

export const getServerSideProps = async (ctx) => {
  const { topicSlug } = ctx.query;
  const client = buildClient(ctx);
  const { data } = await client.get(`/api/topics/${topicSlug}`);

  return {
    props: {
      ...data,
      topicSlug,
    },
  };
};

export default TopicPosts;
