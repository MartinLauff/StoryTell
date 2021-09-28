import Link from 'next/link';
import buttonStyles from '../styles/Components.module.css';

const SingleButton = ({ style, route, content, color }) => {
  return (
    <div>
      <Link href={route}>
        <a>
          <button
            type='submit'
            style={style}
            className={`${buttonStyles.button} ${buttonStyles[color]}`}
          >
            {content}
          </button>
        </a>
      </Link>
    </div>
  );
};
export default SingleButton;
