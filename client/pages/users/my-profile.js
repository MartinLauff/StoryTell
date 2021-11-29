import buildClient from '../../api/build-client';
import ArrowBar from '../../components/bars/ArrowBar';
import BottomBar from '../../components/bars/BottomBar';

const MyProfile = ({ data }) => {
  console.log(data);
  return (
    <div>
      <ArrowBar title='My profile' />
      My Profile
      <BottomBar />
    </div>
  );
};

export const getServerSideProps = async (ctx) => {
  const client = buildClient(ctx);
  const { data } = await client.get('/api/users/my-profile/');

  return {
    props: {
      data,
    },
  };
};

export default MyProfile;
