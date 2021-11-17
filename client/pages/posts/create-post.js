import { useState } from 'react';
import axios from 'axios';
import Router from 'next/router';
import Cookies from 'js-cookie';
import componentStyles from '../../styles/Components.module.css';
import createStyles from '../../styles/Create.module.css';
import ArrowBar from '../../components/bars/ArrowBar';
import SideBar from '../../components/bars/SideBar';
import BottomBar from '../../components/bars/BottomBar';
import Layer from '../../components/bars/Layer';

const CreatePost = () => {
  const [topic, setTopic] = useState('Fitness');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [fileName, setFileName] = useState('(optional)');

  const doRequest = (url = '') => {
    axios({
      url: 'http://localhost:8000/api/posts/',
      method: 'post',
      data: {
        topic,
        title,
        coverImage: url,
        content,
      },
      headers: { Authorization: 'Bearer ' + Cookies.get('jwt') },
    })
      .then(() => Router.push(`/topics/${topic.toLowerCase()}`))
      .catch((err) => console.error(err));
  };

  const submit = async (e) => {
    e.preventDefault();

    if (!topic || !title || !content) {
      return;
    }

    const data = new FormData();
    data.append('file', fileName);
    data.append('upload_preset', 'storytell');

    if (fileName !== '(optional)') {
      const res = await axios({
        method: 'post',
        url: 'https://api.cloudinary.com/v1_1/ekoeko/image/upload',
        data,
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      doRequest(res.data.url);
    } else {
      doRequest();
    }
  };

  return (
    <div>
      <ArrowBar title='Create a post' />
      <SideBar />
      <Layer />
      <form onSubmit={submit} className={createStyles.wrap}>
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
            onChange={(e) => setFileName(e.target.files[0])}
            id='image'
            accept='image/*'
            type='file'
            name='image'
          />
          <label htmlFor='image'>Choose an image</label>
          <div className={createStyles.name}>
            <span>{fileName.name ? fileName.name : fileName}</span>
            <div
              onClick={() => setFileName('(optional)')}
              className={
                fileName.name ? createStyles.delPic : createStyles.hide
              }
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='#ff2f2f'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <line x1='18' y1='6' x2='6' y2='18'></line>
                <line x1='6' y1='6' x2='18' y2='18'></line>
              </svg>
            </div>
          </div>
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
        <div className={componentStyles.btnWrapper}>
          <button
            onClick={() => Router.push('/posts')}
            className={componentStyles.cancelBtn}
          >
            Cancel
          </button>
          <button type='submit' className={componentStyles.applyBtn}>
            Post
          </button>
        </div>
      </form>
      <BottomBar />
    </div>
  );
};

export default CreatePost;
