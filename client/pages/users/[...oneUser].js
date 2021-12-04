import buildClient from '../../api/build-client';

const OneUser = ({ data }) => {
  console.log(data);
  return <div>User Page</div>;
};

export const getServerSideProps = async (ctx) => {
  const { oneUser } = ctx.query;
  const client = buildClient(ctx);
  const { data } = await client.get(`/api/users/${oneUser}`);

  return {
    props: {
      data,
      oneUser,
    },
  };
};

export default OneUser;
