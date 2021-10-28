import TopBar from '../../components/bars/TopBar';
import SideBar from '../../components/bars/SideBar';
import LikeIcon from '../../components/Icons/LikeIcon';
import CommentIcon from '../../components/Icons/CommentIcon';
import DisLikeIcon from '../../components/Icons/DisLikeIcon';
import BottomBar from '../../components/bars/BottomBar';
import showStyles from '../../styles/Show.module.css';
import Layer from '../../components/bars/Layer';
import buildClient from '../../api/build-client';

const PostShow = ({ data: { post } }) => {
  return (
    <div>
      <TopBar />
      <SideBar />
      <Layer />
      <div className={showStyles.showWrap}>
        <div className={showStyles.post}>
          <div className={showStyles.postTop}>
            <img alt={post.title} src={`/${post.slug}.jpg`} />
            <span className={showStyles.topic}>{`s/${post.topic}`}</span>
            <span>posted by</span>
            <span>{post.postedBy.username}</span>
          </div>
          <div className={showStyles.postCore}>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
          </div>
          <div className={showStyles.postBottom}>
            <div className={showStyles.showLikes}>
              <LikeIcon />
              <span>{post.likes.length}</span>
              <DisLikeIcon />
            </div>
            <div>
              <CommentIcon />
              <span>{`${post.comments.length} ${
                post.comments.length === 1 ? 'Comment' : 'Comments'
              }`}</span>
            </div>
          </div>
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
