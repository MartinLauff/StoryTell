import { useState } from 'react';
import Router from 'next/router';
import Cookies from 'js-cookie';
import componentStyles from '../../styles/Components.module.css';
import createStyles from '../../styles/Create.module.css';
import ArrowBar from '../../components/bars/ArrowBar';
import SideBar from '../../components/bars/SideBar';
import BottomBar from '../../components/bars/BottomBar';
import Layer from '../../components/bars/Layer';
import useRequest from '../../hooks/use-request';

const CreatePost = () => {
  const [topic, setTopic] = useState('Fitness');
  const [title, setTitle] = useState('');
  const [coverImage, setCoverImage] = useState('');
  const [content, setContent] = useState('');

  const { doRequest, errors } = useRequest({
    url: 'http://localhost:8000/api/posts/',
    method: 'post',
    headers: { Authorization: 'Bearer ' + Cookies.get('jwt') },
    body: {
      topic,
      title,
      coverImage,
      content,
    },
    onSuccess: () => Router.push('/posts'),
  });

  const submit = async (e) => {
    e.preventDefault();

    if (!topic || !title || !content) {
      return;
    }
    const res = await doRequest();
    console.log(res);
  };
  return (
    <div>
      <ArrowBar title='Create a post' />
      <SideBar />
      <Layer />
      <div className={createStyles.wrap}>
        <select
          className={componentStyles.textInput}
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        >
          <option value='Startups'>Startups</option>
          <option value='Fitness'>Fitness</option>
          <option value='Language'>Language</option>
          <option value='School'>School</option>
          <option value='Traveling'>Traveling</option>
        </select>
        <input
          required
          onChange={(e) => setTitle(e.target.value)}
          minLength='8'
          maxLength='40'
          placeholder={'Title'}
          className={componentStyles.textInput}
        />
        <div className={createStyles.wrapper}>
          <input
            onChange={(e) => setCoverImage(e.target.value)}
            id='image'
            accept='image/*'
            type='file'
            name='image'
          />
          <label htmlFor='image'>Choose an image</label>
          <span>{'(optional)'}</span>
        </div>
        <textarea
          required
          onChange={(e) => setContent(e.target.value)}
          minLength='10'
          maxLength='275'
          style={{
            height: '22rem',
            paddingTop: '1rem',
            border: '2px solid #000',
          }}
          placeholder='Text'
          className={componentStyles.textInput}
        />
      </div>
      <div className={componentStyles.btnWrapper}>
        <button
          onClick={() => Router.push('/posts')}
          className={componentStyles.cancelBtn}
        >
          Cancel
        </button>
        <button onClick={submit} className={componentStyles.applyBtn}>
          Post
        </button>
      </div>
      {errors}
      <BottomBar />
    </div>
  );
};

export default CreatePost;
