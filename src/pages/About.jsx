const skills = ["HTML", "CSS", "JavaScript", "React", "Git & GitHub"];

function About() {
  return (
    <section>
      <h1>About Me</h1>
      <p>
        I'm a student learning web development. I enjoy turning ideas into
        working websites and I'm currently building my skills in React.
        (Replace this with a short paragraph about yourself.)
      </p>

      <h2>Skills</h2>
      <ul>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

export default About;
