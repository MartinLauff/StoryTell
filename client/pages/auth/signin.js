import Cookies from 'js-cookie';
import { useState } from 'react';
import Router from 'next/router';
import SingleButton from '../../components/SingleButton';
import indexStyles from '../../styles/Index.module.css';
import componentStyles from '../../styles/Components.module.css';
import useRequest from '../../hooks/use-request';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { doRequest, errors } = useRequest({
    url: 'http://localhost:8000/api/auth/signin',
    method: 'post',
    body: {
      email,
      password,
    },
    onSuccess: () => Router.push('/posts'),
  });

  const submit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      return;
    }

    const res = await doRequest();
    if (res) {
      Cookies.set('jwt', res.token);
    }
  };
  return (
    <div className={`${indexStyles.mybackground} ${indexStyles.signinImg}`}>
      <h1 className={indexStyles.heading}>Storytell</h1>
      <form className={indexStyles.flexCenter} onSubmit={submit}>
        <input
          className={componentStyles.textInput}
          onChange={(e) => setEmail(e.target.value)}
          type='email'
          placeholder='Email'
          required
        />
        <input
          className={componentStyles.textInput}
          onChange={(e) => setPassword(e.target.value)}
          type='password'
          placeholder='Password'
          minLength='8'
          maxLength='20'
          required
        />
        {errors}
        <SingleButton content='Login' color='redButton' />
      </form>
    </div>
  );
};

export default Signin;
