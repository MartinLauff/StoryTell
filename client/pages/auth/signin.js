import { useState } from 'react';
import { useRouter } from 'next/router';
import SingleButton from '../../components/SingleButton';
import indexStyles from '../../styles/Index.module.css';
import componenStyles from '../../styles/Components.module.css';

const signin = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      return;
    }

    router.push('/posts');
  };
  return (
    <div className={`${indexStyles.mybackground} ${indexStyles.signinImg}`}>
      <h1 className={indexStyles.heading}>Storytell</h1>
      <form className={indexStyles.flexCenter} onSubmit={submit}>
        <input
          className={componenStyles.textInput}
          onChange={(e) => setEmail(e.target.value)}
          type='email'
          placeholder='Email'
          required
        />
        <input
          className={componenStyles.textInput}
          onChange={(e) => setPassword(e.target.value)}
          type='password'
          placeholder='Password'
          minLength='8'
          maxLength='20'
          required
        />
        <SingleButton content='Login' color='redButton' />
      </form>
    </div>
  );
};

export default signin;
