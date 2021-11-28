import componentStyles from '../../styles/Components.module.css';
import Cookies from 'js-cookie';
import SaveIcon from '../Icons/SaveIcon';
import useRequest from '../../hooks/use-request';

const SaveOption = ({ postID }) => {
  const { doRequest, errors } = useRequest({
    url: `http://localhost:8000/api/users/save/${postID}`,
    method: 'put',
    headers: { Authorization: 'Bearer ' + Cookies.get('jwt') },
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
