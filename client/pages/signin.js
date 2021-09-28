import SingleButton from '../components/SingleButton';
import indexStyles from '../styles/Index.module.css';
import componenStyles from '../styles/Components.module.css';

const signin = () => {
  return (
    <div className={`${indexStyles.mybackground} ${indexStyles.signinImg}`}>
      <h1 className={indexStyles.heading}>Storytell</h1>
      <input
        className={componenStyles.textInput}
        type='email'
        placeholder='Email'
        required='true'
      />
      <input
        className={componenStyles.textInput}
        type='password'
        placeholder='Password'
        minLength='8'
        maxLength='20'
        required='true'
      />
      <SingleButton route='/home' content='Sign in' color='redButton' />
    </div>
  );
};

export default signin;
