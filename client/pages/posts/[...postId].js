import TopBar from '../../components/bars/TopBar';
import SideBar from '../../components/bars/SideBar';
import CommentList from '../../components/CommentList';
import LikeIcon from '../../components/Icons/LikeIcon';
import CommentIcon from '../../components/Icons/CommentIcon';
import DisLikeIcon from '../../components/Icons/DisLikeIcon';
import BottomBar from '../../components/bars/BottomBar';
import showStyles from '../../styles/Show.module.css';
import Layer from '../../components/bars/Layer';
import buildClient from '../../api/build-client';
import MoreIcon from '../../components/Icons/MoreIcon';

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
            <span className={showStyles.name}>{post.postedBy.username}</span>
          </div>
          <div className={showStyles.postCore}>
            <h1 className={showStyles.title}>{post.title}</h1>
            <p className={showStyles.content}>{post.content}</p>
          </div>
          <img className={showStyles.image} src={post.coverImage} />
          <div className={showStyles.actions}>
            <div className={showStyles.showLikes}>
              <LikeIcon postID={post._id} />
              <span>{post.likes.length}</span>
              <DisLikeIcon />
            </div>
            <div className={showStyles.comments}>
              <CommentIcon />
              <span className={showStyles.count}>{post.comments.length}</span>
              <span>{post.comments.length === 1 ? 'Comment' : 'Comments'}</span>
            </div>
            <div>
              <MoreIcon />
            </div>
          </div>
        </div>
        <CommentList comments={post.comments} />
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
