import { skillGroups } from '../data/skills';
import Reveal from './Reveal';

function Skills() {
  return (
    <section id="skills" className="border-t border-border py-20">
      <Reveal>
        <h2 className="text-center text-2xl font-bold text-ink sm:text-3xl">Skills</h2>

        <div className="mx-auto mt-12 grid max-w-3xl gap-8 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <h3 className="font-mono text-xs uppercase tracking-wide text-accent">
                {group.label}
              </h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-border bg-surface px-3 py-1 text-sm text-ink"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

export default Skills;
