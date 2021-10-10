import TopBar from '../../components/TopBar';
import SideBar from '../../components/SideBar';
import BottomBar from '../../components/BottomBar';
import axios from 'axios';

const index = ({ posts }) => {
  if (!posts) {
    console.log(posts + ' no posts');
  }
  console.log(posts);
  return (
    <div>
      <TopBar />
      <SideBar />
      <h2>Latest posts</h2>
      <BottomBar />
    </div>
  );
};

export const getServerSideProps = async () => {
  const { data } = await axios.get('http://localhost:8000/api/posts/');

  return { posts: data };
};

export default index;
