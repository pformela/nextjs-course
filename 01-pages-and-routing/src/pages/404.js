import Link from "next/link";

const NotFoundPage = () => (
  <div>
    <h1>Page Not Found</h1>
    <p>
      Sorry, <Link href="/">go back</Link>?
    </p>
  </div>
);

export default NotFoundPage;
