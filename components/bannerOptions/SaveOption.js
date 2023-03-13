import componentStyles from '../../styles/Components.module.css';
import SaveIcon from '../Icons/SaveIcon';
import useRequest from '../../hooks/use-request';

const SaveOption = ({ postID }) => {
  const { doRequest, errors } = useRequest({
    url: `/api/users/save/${postID}`,
    method: 'put',
  });
  const savePost = () => {
    doRequest();
  };
  return (
    <div onClick={savePost} className={componentStyles.bannerOption}>
      <SaveIcon />
      <span className={componentStyles.bannerText}>Save</span>
      {errors}
    </div>
  );
};

export default SaveOption;
