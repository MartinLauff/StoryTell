import TopBar from '../../components/bars/TopBar';
import SideBar from '../../components/bars/SideBar';
import LikeIcon from '../../components/Icons/LikeIcon';
import DisLikeIcon from '../../components/Icons/DisLikeIcon';
import BottomBar from '../../components/bars/BottomBar';
import showStyles from '../../styles/Show.module.css';
import Layer from '../../components/bars/Layer';
import buildClient from '../../api/build-client';

const PostShow = ({ data }) => {
  const { post } = data;
  return (
    <div>
      <TopBar />
      <SideBar />
      <Layer />
      <div className={showStyles.showWrap}>
        <div className={showStyles.showLikes}>
          <LikeIcon />
          <span>{post.likes.length}</span>
          <DisLikeIcon />
        </div>
      </div>
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
      ...data,
      postId,
    },
  };
};

export default PostShow;
