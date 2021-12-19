import Link from 'next/link';
import Router from 'next/router';
import { useState } from 'react';
import Comment from '../../components/items/Comment';
import Cookies from 'js-cookie';
import useRequest from '../../hooks/use-request';
import TopBar from '../../components/bars/TopBar';
import LikeSet from '../../components/Icons/LikeSet';
import SaveOption from '../../components/bannerOptions/SaveOption';
import CopyOption from '../../components/bannerOptions/CopyOption';
import DeleteOption from '../../components/bannerOptions/DeleteOption';
import EditOption from '../../components/bannerOptions/EditOption';
import SideBar from '../../components/bars/SideBar';
import CommentList from '../../components/lists/CommentList';
import CommentIcon from '../../components/Icons/CommentIcon';
import BottomBar from '../../components/bars/BottomBar';
import showStyles from '../../styles/Show.module.css';
import componentStyles from '../../styles/Components.module.css';
import Layer from '../../components/bars/Layer';
import buildClient from '../../api/build-client';
import MoreIcon from '../../components/Icons/MoreIcon';

const PostShow = ({ data: { post }, data }) => {
  const [editOpt, setEditOpt] = useState(false);
  const [deleteOpt, setDeleteOpt] = useState(false);
  const [active, setActive] = useState(false);
  const [banner, setBanner] = useState(false);
  const [postContent, setPostContent] = useState(post.content);
  const [content, setContent] = useState('');
  const [comments, setComment] = useState([]);
  const [commCount, setCommCount] = useState(post.comments.length);

  const { doRequest, errors } = useRequest({
    url: `http://localhost:8000/api/comments/${post._id}`,
    method: 'post',
    headers: { Authorization: 'Bearer ' + Cookies.get('jwt') },
    body: {
      content,
    },
  });
  const { doRequest: deleteRequest, errors: errs } = useRequest({
    url: `http://localhost:8000/api/posts/${post._id}`,
    method: 'delete',
    headers: { Authorization: 'Bearer ' + Cookies.get('jwt') },
    onSuccess: () => Router.push('/users/my-profile'),
  });
  const { doRequest: editRequest, errors: ers } = useRequest({
    url: `http://localhost:8000/api/posts/${post._id}`,
    method: 'put',
    body: {
      content: postContent,
    },
    headers: { Authorization: 'Bearer ' + Cookies.get('jwt') },
  });
  const onSubmit = async (e) => {
    e.preventDefault();
    if (content.length < 4 || content.length > 30) {
      return;
    }

    const res = await doRequest();

    if (res) {
      setContent('');
      setCommCount((oldState) => oldState + 1);
      setComment((oldState) => [res, ...oldState]);
    }
  };
  const btnCancel = () => {
    setContent('');
    setActive(false);
  };
  const renderedComments = comments.map((res) => (
    <Comment key={res.createdAt} comment={res} />
  ));

  const deletePost = (e) => {
    e.preventDefault();

    deleteRequest();
  };
  const editReset = () => {
    setPostContent(post.content);
    setEditOpt(false);
  };
  const editPost = async (e) => {
    e.preventDefault();

    const res = await editRequest();
    if (res) {
      setEditOpt(false);
    } else {
      setPostContent(post.content);
    }
  };
  return (
    <div>
      <TopBar />
      <SideBar />
      <Layer />
      <div className={showStyles.showWrap}>
        <div className={showStyles.post}>
          <div className={showStyles.postTop}>
            <Link href='/topics/[topicSlug]' as={`/topics/${post.slug}`}>
              <a>
                <img alt={post.title} src={`/${post.slug}.jpg`} />
                <span className={showStyles.topic}>{`s/${post.topic}`}</span>
              </a>
            </Link>
            <span>posted by</span>
            <Link href='/users/[...oneUser]' as={`/users/${post.postedBy._id}`}>
              <a>
                <span className={showStyles.name}>
                  {post.postedBy.username}
                </span>
                <img
                  className={showStyles.userPic}
                  src={post.postedBy.photo}
                  alt={post.postedBy.username}
                />
              </a>
            </Link>
          </div>
          <div className={showStyles.postCore}>
            <h1 className={showStyles.title}>{post.title}</h1>
            {!editOpt && <p className={showStyles.content}>{postContent}</p>}
            {editOpt && (
              <textarea
                className={componentStyles.textArea}
                onChange={(e) => setPostContent(e.target.value)}
                value={postContent}
              />
            )}
          </div>
          <img className={showStyles.image} src={post.coverImage} />
          {editOpt && (
            <div className={componentStyles.editWrap}>
              <button onClick={editReset} className={componentStyles.cancel}>
                Cancel
              </button>
              <button onClick={editPost} className={componentStyles.delete}>
                Save
              </button>
            </div>
          )}
          {!editOpt && (
            <div className={showStyles.actions}>
              <div className={showStyles.showLikes}>
                <LikeSet likes={post.likes.length} postID={post._id} />
              </div>
              <div className={showStyles.comments}>
                <CommentIcon />
                <span className={showStyles.count}>{commCount}</span>
                <span>
                  {post.comments.length === 1 ? 'Comment' : 'Comments'}
                </span>
              </div>
              <div
                onClick={() => setBanner(true)}
                style={{ padding: '1rem 0.6rem' }}
              >
                <MoreIcon />
              </div>
              <div
                onClick={() => setBanner(false)}
                style={banner ? null : { display: 'none' }}
                className={componentStyles.moreBanner}
              >
                <SaveOption postID={post._id} />
                <CopyOption />
                {data.userPosts.includes(post._id) && (
                  <EditOption activation={setEditOpt} />
                )}
                {data.userPosts.includes(post._id) && (
                  <DeleteOption activation={setDeleteOpt} />
                )}
              </div>
            </div>
          )}
          <div
            onClick={() => setBanner(false)}
            className={banner ? componentStyles.transparentLayer : null}
          ></div>
        </div>
        {!editOpt && (
          <form onSubmit={onSubmit} className={showStyles.createWrap}>
            <input
              onClick={() => setActive(true)}
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
        )}
        {renderedComments}
        {!editOpt && (
          <CommentList userId={data.userId} comments={post.comments} />
        )}
      </div>
      {errors}
      {errs}
      {ers}
      <BottomBar />
      {deleteOpt && (
        <div
          onClick={() => setDeleteOpt(false)}
          className={componentStyles.layer}
        ></div>
      )}
      {deleteOpt && (
        <div className={componentStyles.deleteBanner}>
          <p>Are you sure you want to delete this post?</p>
          <div>
            <button
              className={componentStyles.cancel}
              onClick={() => setDeleteOpt(false)}
            >
              Cancel
            </button>
            <button onClick={deletePost} className={componentStyles.delete}>
              Delete
            </button>
          </div>
        </div>
      )}
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
