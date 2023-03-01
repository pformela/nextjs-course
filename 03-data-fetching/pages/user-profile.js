const UserProfilePage = (props) => {
  const { username } = props;

  return <h1>{username}</h1>;
};

export default UserProfilePage;

export const getServerSideProps = async (context) => {
  const { params, req, res } = context;

  return {
    props: {
      username: "Max",
    },
  };
};
