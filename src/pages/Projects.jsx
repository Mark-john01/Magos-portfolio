import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

function Projects() {
  return (
    <section>
      <h1 className="text-3xl font-bold md:text-4xl">Projects</h1>
      <div className="mt-2 h-1 w-16 rounded bg-indigo-700" aria-hidden="true"></div>
      <p className="mt-4 max-w-2xl text-slate-700">
        A selection of things I've built. Each card links to the live site and
        the code when available.
      </p>

      {projects.length === 0 ? (
        <p className="mt-8 rounded-lg border border-dashed border-slate-300 bg-white p-6 text-center text-slate-700">
          Projects are coming soon.
        </p>
      ) : (
        <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <li key={project.id} className="flex">
              <ProjectCard {...project} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default Projects;
