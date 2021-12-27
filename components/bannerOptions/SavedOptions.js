import componentStyles from '../../styles/Components.module.css';
import SaveIcon from '../Icons/SaveIcon';

const SavedOption = () => {
  return (
    <div className={componentStyles.bannerOption}>
      <SaveIcon />
      <span className={componentStyles.bannerText}>Saved posts</span>
    </div>
  );
};

export default SavedOption;
