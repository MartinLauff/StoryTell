import { useState } from 'react';
import Comment from '../../components/Comment';
import Cookies from 'js-cookie';
import useRequest from '../../hooks/use-request';
import TopBar from '../../components/bars/TopBar';
import LikeSet from '../../components/Icons/LikeSet';
import SideBar from '../../components/bars/SideBar';
import CommentList from '../../components/CommentList';
import CommentIcon from '../../components/Icons/CommentIcon';
import BottomBar from '../../components/bars/BottomBar';
import showStyles from '../../styles/Show.module.css';
import Layer from '../../components/bars/Layer';
import buildClient from '../../api/build-client';
import MoreIcon from '../../components/Icons/MoreIcon';

const PostShow = ({ data: { post } }) => {
  const [active, setActive] = useState(false);
  const [content, setContent] = useState('');
  const [comment, setComment] = useState(null);

  const { doRequest, errors } = useRequest({
    url: `http://localhost:8000/api/comments/${post._id}`,
    method: 'post',
    headers: { Authorization: 'Bearer ' + Cookies.get('jwt') },
    body: {
      content,
    },
  });
  const onSubmit = async (e) => {
    e.preventDefault();
    if (content.length < 6) {
      return;
    }
    if (content.length > 15 && !content.includes(' ')) {
      return;
    }
    const res = await doRequest();

    setContent('');
    if (res) {
      ///POSted by missing
      console.log(res);
      // setComment(<Comment comment={res} />);
    }
  };
  const openComment = () => {
    setActive(true);
  };
  const btnCancel = () => {
    setContent('');
    setActive(false);
  };
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
            <img
              className={showStyles.userPic}
              src={
                !post.postedBy.photo.startsWith('http')
                  ? '/default.png'
                  : post.postedBy.photo
              }
              alt={post.postedBy.username}
            />
          </div>
          <div className={showStyles.postCore}>
            <h1 className={showStyles.title}>{post.title}</h1>
            <p className={showStyles.content}>{post.content}</p>
          </div>
          <img className={showStyles.image} src={post.coverImage} />
          <div className={showStyles.actions}>
            <div className={showStyles.showLikes}>
              <LikeSet likes={post.likes.length} postID={post._id} />
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
        <form onSubmit={onSubmit} className={showStyles.createWrap}>
          <input
            onClick={openComment}
            onChange={(e) => setContent(e.target.value)}
            value={content}
            className={showStyles.createComm}
            minLength='6'
            maxLength='30'
            type='text'
            placeholder='Add new comment'
          />
          <div
            style={active ? null : { display: 'none' }}
            className={showStyles.btns}
          >
            <button className={showStyles.cancel} onClick={btnCancel}>
              Cancel
            </button>
            <button
              type='submit'
              className={`${showStyles.send} ${
                content.length > 5 ? showStyles.sendON : showStyles.sendOFF
              }`}
            >
              Post
            </button>
          </div>
        </form>
        <CommentList comments={post.comments} />
      </div>
      {errors}
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
