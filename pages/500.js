import Link from 'next/link';
import errorStyles from '../styles/Error.module.css';
import SingleButton from '../components/SingleButton';

export default function Custom500() {
  return (
    <div className={errorStyles.errWrap}>
      <div className={errorStyles.custom500}>
        <h1 className={errorStyles.h500}>
          You need to be logged in to get access
        </h1>
        <style
          style={{ display: 'none' }}
        >{`body{background: rgba(0, 0, 0, 0.7);}`}</style>
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
    </div>
  );
}
