import Link from 'next/link';
import SingleButton from '../components/SingleButton';
import indexStyles from '../styles/Index.module.css';

const index = () => {
  return (
    <div className={`${indexStyles.mybackground} ${indexStyles.indexImg}`}>
      <h1 className={indexStyles.heading}>Storytell</h1>
      <span className={indexStyles.indexSpan}>
        A place to stay focused on your goals and get inspired
      </span>
      <Link href='/auth/signin'>
        <a>
          <SingleButton
            style={{ margin: '3.5rem 0 2.5rem' }}
            route='/signin'
            content='Sign in'
            color='whiteButton'
          />
        </a>
      </Link>
      <Link href='/auth/signup'>
        <a>
          <SingleButton route='/signup' content='Sign up' color='redButton' />
        </a>
      </Link>
    </div>
  );
};

export default index;
