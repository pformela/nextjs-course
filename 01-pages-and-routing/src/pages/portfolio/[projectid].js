import { useRouter } from "next/router";

const PortfolioProjectPage = () => {
  const router = useRouter();
  const { projectid } = router.query;
  return <h1>The Portfolio Project Page of {projectid}</h1>;
};

export default PortfolioProjectPage;
