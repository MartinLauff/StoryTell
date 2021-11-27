import componentStyles from '../../styles/Components.module.css';
import CopyLinkIcon from '../Icons/CopyLinkIcon';

const CopyOption = () => {
  return (
    <div className={componentStyles.bannerOption}>
      <CopyLinkIcon />
      <span className={componentStyles.bannerText}>Copy link</span>
    </div>
  );
};

export default CopyOption;
