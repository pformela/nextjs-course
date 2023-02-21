import { useRouter } from "next/router";

const BlogPostsPage = () => {
  const router = useRouter();

  console.log(router.query);

  return <div>Blog Posts</div>;
};

export default BlogPostsPage;
