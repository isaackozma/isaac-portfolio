import { experience } from '../data/experience';
import Reveal from './Reveal';

function Experience() {
  return (
    <section id="experience" className="border-t border-border py-20">
      <Reveal>
        <h2 className="text-center text-2xl font-bold text-ink sm:text-3xl">
          Additional experience
        </h2>

        <div className="mx-auto mt-12 flex max-w-2xl flex-col gap-6">
          {experience.map((job) => (
            <div key={job.company} className="rounded-xl border border-border bg-surface p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-bold text-ink">{job.role}</h3>
                <span className="font-mono text-xs text-ink-muted">{job.period}</span>
              </div>
              <p className="mt-1 text-sm font-semibold text-accent">{job.company}</p>
              <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-ink-muted">
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

export default Experience;
