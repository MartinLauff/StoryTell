import Link from 'next/link';
import buttonStyles from '../styles/components/Buttons.module.css';

export default ({ style, route, content, color }) => {
  return (
    <div>
      <Link href={route}>
        <a>
          <button
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
