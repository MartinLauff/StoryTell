import { useState } from 'react';
import { useRouter } from 'next/router';
import SingleButton from '../../components/SingleButton';
import indexStyles from '../../styles/Index.module.css';
import errorStyles from '../../styles/Error.module.css';
import componenStyles from '../../styles/Components.module.css';

const signup = () => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [active, setActive] = useState(false);

  const submit = (e) => {
    e.preventDefault();

    if (!username || !email || !password || !passwordConfirm) {
      return;
    }
    if (password !== passwordConfirm) {
      return setActive(true);
    }

    router.push('/posts');
  };

  return (
    <div className={`${indexStyles.mybackground}`}>
      <h1 style={{ color: '#000' }} className={indexStyles.heading}>
        Storytell
      </h1>
      <form className={indexStyles.flexCenter} onSubmit={submit}>
        <input
          className={componenStyles.textInput}
          onChange={(e) => setUsername(e.target.value)}
          type='text'
          placeholder='Username'
          minLength='4'
          maxLength='14'
          required
        />
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
        <input
          className={componenStyles.textInput}
          onChange={(e) => setPasswordConfirm(e.target.value)}
          type='password'
          placeholder='Password confirm'
          minLength='8'
          maxLength='20'
          required
        />
        <span className={!active ? errorStyles.hide : errorStyles.errMessage}>
          Please confirm your password
        </span>
        <SingleButton content='Register' color='redButton' />
      </form>
    </div>
  );
};

export default signup;
