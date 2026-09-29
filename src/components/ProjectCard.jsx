import ProjectImage from './ProjectImage';
import { CodeIcon, ExternalLinkIcon } from './icons';

function ProjectCard({ project, featured = false }) {
  const { title, blurb, tags, image, links, note } = project;

  return (
    <article
      className={`group flex flex-col overflow-hidden rounded-xl border bg-surface transition-colors hover:border-accent/50 ${
        featured ? 'border-accent/30' : 'border-border'
      }`}
    >
      {image && (
        <div className="overflow-hidden">
          <ProjectImage src={image} title={title} />
        </div>
      )}

      <div className={`flex flex-1 flex-col gap-4 ${featured ? 'p-8' : 'p-6'}`}>
        {featured && (
          <span className="inline-flex w-fit items-center rounded-full bg-accent/15 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wide text-accent">
            Featured
          </span>
        )}

        <h3 className={featured ? 'text-2xl font-bold text-ink' : 'text-lg font-bold text-ink'}>
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
          {note && (
            <span className="inline-flex items-center rounded-full border border-dashed border-border px-2.5 py-1 text-xs italic text-ink-muted">
              {note}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
