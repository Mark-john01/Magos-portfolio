import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="py-12 text-center">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="mt-2 text-slate-700">Sorry, this page doesn't exist.</p>
      <Link
        to="/"
        className="mt-6 inline-block rounded-md bg-indigo-700 px-5 py-2 font-medium text-white hover:bg-indigo-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-700 focus-visible:ring-offset-2"
      >
        Back to Home
      </Link>
    </section>
  );
}

export default NotFound;
