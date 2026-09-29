import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

function Projects() {
  const featured = projects.filter((project) => project.featured);
  const rest = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="border-t border-border py-20">
      <h2 className="text-center text-2xl font-bold text-ink sm:text-3xl">Projects</h2>
      <p className="mx-auto mt-3 max-w-xl text-center text-ink-muted">
        A selection of things I have built, from data tools to production websites.
      </p>

      <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
        {featured.map((project) => (
          <ProjectCard key={project.id} project={project} featured />
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {rest.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
