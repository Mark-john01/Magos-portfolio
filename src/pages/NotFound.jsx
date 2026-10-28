import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section>
      <h1>Page not found</h1>
      <p>
        That page doesn't exist. <Link to="/">Go back home</Link>.
      </p>
    </section>
  );
}

export default NotFound;
