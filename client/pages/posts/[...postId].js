import TopBar from '../../components/bars/TopBar';
import SideBar from '../../components/bars/SideBar';
import BottomBar from '../../components/bars/BottomBar';
import Layer from '../../components/bars/Layer';
import Post from '../../components/Post';
import buildClient from '../../api/build-client';
import topicStyles from '../../styles/Topic.module.css';

const PostShow = ({ data, postId }) => {
  console.log(data);
  return (
    <div>
      <TopBar />
      <SideBar />
      <Layer />
      <div className={topicStyles.topicStripe}>
        <div>
          <h2>{postId}</h2>
        </div>
      </div>
      <Post post={data} />
      <BottomBar />
    </div>
  );
};

export const getServerSideProps = async (ctx) => {
  const { postId } = ctx.query;
  const client = buildClient(ctx);
  const { data } = await client.get(`/api/posts/${postId}`);

  return {
    props: {
      data,
      postId,
    },
  };
};

export default PostShow;
