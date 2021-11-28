import { useState, useEffect } from 'react';
import generalError from '../../styles/Error.module.css';
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
  const [topic, setTopic] = useState('');
  const [title, setTitle] = useState('');
  const [fileName, setFileName] = useState('(optional)');
  const [content, setContent] = useState('');
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setErrors(null);
    }, 4000);
  }, [errors]);

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
      .catch((err) =>
        setErrors(
          <div className={generalError.errorBanner}>
            <h4>Ooops....</h4>
            <ul style={{ listStyle: 'none' }}>
              {err.response.data.errors.map((err) => (
                <li key={err.message}>{err.message}</li>
              ))}
            </ul>
          </div>
        )
      );
  };

  const submit = async (e) => {
    e.preventDefault();
    setErrors(null);

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
  const clearFields = () => {
    setTopic('');
    setTitle('');
    setFileName('(optional)');
    setContent('');
  };

  return (
    <div>
      <ArrowBar title='Create a post' />
      <SideBar />
      <Layer />
      <form onSubmit={submit} className={createStyles.wrap}>
        <select
          style={topic === '' ? { color: '#a2a5b5' } : { color: '#000' }}
          className={componentStyles.textInput}
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        >
          <option value='' disabled defaultValue style={{ color: '#a2a5b5' }}>
            Select a Topic
          </option>
          <option value='Startups'>Startups</option>
          <option value='Fitness'>Fitness</option>
          <option value='Language'>Language</option>
          <option value='School'>School</option>
          <option value='Traveling'>Traveling</option>
        </select>
        <input
          required
          value={title}
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
          value={content}
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
          <button onClick={clearFields} className={componentStyles.cancelBtn}>
            Cancel
          </button>
          <button type='submit' className={componentStyles.applyBtn}>
            Post
          </button>
        </div>
      </form>
      {errors}
      <BottomBar />
    </div>
  );
};

export default CreatePost;