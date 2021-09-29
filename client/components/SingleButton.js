import { Fragment } from 'react';
import buttonStyles from '../styles/Components.module.css';

const SingleButton = ({ style, content, color }) => {
  return (
    <Fragment>
      <button
        type='submit'
        style={style}
        className={`${buttonStyles.button} ${buttonStyles[color]}`}
      >
        {content}
      </button>
    </Fragment>
  );
};
export default SingleButton;
