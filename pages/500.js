import Link from 'next/link';
import errorStyles from '../styles/Error.module.css';
import SingleButton from '../components/SingleButton';

export default function Custom500() {
  return (
    <div className={errorStyles.errWrap}>
      <div className={errorStyles.custom500}>
        <h1 className={errorStyles.h500}>You are not logged in!</h1>
        <style
          style={{ display: 'none' }}
        >{`body{background-color: #00DBDE;background-image: linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%);}`}</style>
        <Link href='/auth/login'>
          <a>
            <SingleButton
              style={{ margin: '3.5rem 0 2.5rem' }}
              content='Sign in'
              color='whiteButton'
            />
          </a>
        </Link>
        <Link href='/auth/signup'>
          <a>
            <SingleButton content='Sign up' color='redButton' />
          </a>
        </Link>
      </div>
    </div>
  );
}
