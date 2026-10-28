import { Link } from "react-router-dom";

function Home() {
  return (
    <section>
      <h1>Hi, I'm Your Name</h1>
      <p>Aspiring web developer building things with React.</p>
      <p>
        <Link to="/projects">See my projects</Link> or{" "}
        <Link to="/contact">get in touch</Link>.
      </p>
    </section>
  );
}

export default Home;
