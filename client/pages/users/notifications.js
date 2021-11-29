import buildClient from '../../api/build-client';
import ArrowBar from '../../components/bars/ArrowBar';
import BottomBar from '../../components/bars/BottomBar';

const Notifications = ({ data }) => {
  console.log(data);
  return (
    <div>
      <ArrowBar title='Notifications' />
      <BottomBar />
    </div>
  );
};

export const getServerSideProps = async (ctx) => {
  const client = buildClient(ctx);
  const { data } = await client.get('/api/users/activities/');

  return {
    props: {
      data,
    },
  };
};

export default Notifications;
