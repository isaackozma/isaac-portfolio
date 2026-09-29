import ProjectImage from './ProjectImage';
import { CodeIcon, ExternalLinkIcon } from './icons';

function ProjectCard({ project, featured = false }) {
  const { title, blurb, tags, image, links } = project;

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-border bg-surface transition-colors hover:border-accent/50">
      {image && (
        <div className="overflow-hidden">
          <ProjectImage src={image} title={title} />
        </div>
      )}

      <div className="flex flex-1 flex-col gap-4 p-6">
        <h3 className={featured ? 'text-xl font-bold text-ink' : 'text-lg font-bold text-ink'}>
          {title}
        </h3>

        <p className="flex-1 text-sm leading-relaxed text-ink-muted">{blurb}</p>

        <ul className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-border px-2.5 py-1 font-mono text-xs text-ink-muted"
            >
              {tag}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-3 pt-1">
          {links.demo && (
            <a
              href={links.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-colors hover:brightness-110"
            >
              <ExternalLinkIcon className="h-4 w-4" />
              Live Demo
            </a>
          )}
          {links.code && (
            <a
              href={links.code}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink-muted transition-colors hover:text-ink"
            >
              <CodeIcon className="h-4 w-4" />
              Code
            </a>
          )}
          {links.learnMore && (
            <a
              href={links.learnMore}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink-muted transition-colors hover:text-ink"
            >
              <ExternalLinkIcon className="h-4 w-4" />
              Learn More
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
