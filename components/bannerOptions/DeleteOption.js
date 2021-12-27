import componentStyles from '../../styles/Components.module.css';
import DeleteIcon from '../Icons/DeleteIcon';

const DeleteOption = ({ activation }) => {
  return (
    <div
      onClick={() => activation(true)}
      className={componentStyles.bannerOption}
    >
      <DeleteIcon />
      <span className={componentStyles.bannerText}>Delete post</span>
    </div>
  );
};

export default DeleteOption;
