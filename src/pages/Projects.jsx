import ProjectCard from "../components/ProjectCard.jsx";

const projects = [
  {
    id: 1,
    title: "Project One",
    description: "A short one-line description of your first project.",
  },
  {
    id: 2,
    title: "Project Two",
    description: "A short one-line description of your second project.",
  },
  {
    id: 3,
    title: "Project Three",
    description: "A short one-line description of your third project.",
  },
];

function Projects() {
  return (
    <section>
      <h1>Projects</h1>
      <div className="project-grid">
        {projects.map((p) => (
          <ProjectCard
            key={p.id}
            title={p.title}
            description={p.description}
            image={`https://placehold.co/400x250?text=${encodeURIComponent(p.title)}`}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
