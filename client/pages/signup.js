import SingleButton from '../components/SingleButton';
import indexStyles from '../styles/Index.module.css';
import componenStyles from '../styles/Components.module.css';

const signup = () => {
  return (
    <div className={`${indexStyles.mybackground}`}>
      <h1 style={{ color: '#000' }} className={indexStyles.heading}>
        Storytell
      </h1>
      <input
        className={componenStyles.textInput}
        type='text'
        placeholder='Username'
        minLength='4'
        maxLength='14'
        required
      />
      <input
        className={componenStyles.textInput}
        type='email'
        placeholder='Email'
      />
      <input
        className={componenStyles.textInput}
        type='password'
        placeholder='Password'
        minLength='8'
        maxLength='20'
      />
      <input
        className={componenStyles.textInput}
        type='password'
        placeholder='Password confirm'
        minLength='8'
        maxLength='20'
      />
      <SingleButton route='/home' content='Sign up' color='redButton' />
    </div>
  );
};

export default signup;
