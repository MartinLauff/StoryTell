import buildClient from '../../../api/build-client';
import ArrowBar from '../../../components/bars/ArrowBar';
import FollowingList from '../../../components/lists/FollowingList';

const Index = ({ data }) => {
  return (
    <div>
      <ArrowBar title='Chats' />
      <FollowingList following={data.following} />
    </div>
  );
};

export const getServerSideProps = async (ctx) => {
  const client = buildClient(ctx);
  const { data } = await client.get('/api/users/chats');

  return {
    props: {
      data,
    },
  };
};

export default Index;
