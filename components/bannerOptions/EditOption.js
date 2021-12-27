import componentStyles from '../../styles/Components.module.css';
import EditIcon from '../Icons/EditIcon';

const EditOption = ({ activation }) => {
  return (
    <div
      onClick={() => activation(true)}
      className={componentStyles.bannerOption}
    >
      <EditIcon />
      <span className={componentStyles.bannerText}>Edit post</span>
    </div>
  );
};

export default EditOption;
