import { useRouter } from "next/router";

const ClientProjectsPage = () => {
  const router = useRouter();

  const { id, clientProjectId } = router.query;
  console.log(router.query);

  const loadProjectHandler = () => {
    router.push({
      pathname: `/clients/[id]/[clientProjectId]`,
      query: { id, clientProjectId: "projecta" },
    });
  };

  return (
    <div>
      <h1>The Projects of a Given Client</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
};

export default ClientProjectsPage;
