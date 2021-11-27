import componentStyles from '../../styles/Components.module.css';
import SaveIcon from '../Icons/SaveIcon';

const SaveOption = () => {
  return (
    <div className={componentStyles.bannerOption}>
      <SaveIcon />
      <span className={componentStyles.bannerText}>Save</span>
    </div>
  );
};

export default SaveOption;
