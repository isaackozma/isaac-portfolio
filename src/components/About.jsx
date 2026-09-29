import Reveal from './Reveal';

const FACTS = [
  { label: 'Education', value: 'Bachelor of IT, RMIT, 2024' },
  { label: 'Location', value: 'Melbourne, VIC' },
  { label: 'Focus', value: 'Full stack and DevOps' },
  { label: 'Interested in', value: 'Data and AI' },
  { label: 'Certifications', value: 'AWS Cloud Foundations, Agile Development Principles' },
];

function About() {
  return (
    <section id="about" className="border-t border-border py-20">
      <Reveal>
        <h2 className="text-center text-2xl font-bold text-ink sm:text-3xl">About</h2>

        <div className="mx-auto mt-12 grid max-w-3xl gap-10 lg:grid-cols-[1.3fr_1fr]">
          <div className="space-y-4 text-ink-muted">
            <p>
              Junior Software Engineer and Full Stack Developer with a Bachelor of Information
              Technology, and hands-on experience building web applications, cloud infrastructure
              and AI-powered tools.
            </p>
            <p>
              Strong foundation in JavaScript, Python, React, Node.js, AWS and Docker, with team
              leadership experience delivering complex technical projects.
            </p>
            <p>
              Currently looking for junior software, backend, full stack, DevOps or
              data/AI-focused roles based in Melbourne.
            </p>
          </div>

          <dl className="grid grid-cols-2 gap-4 sm:content-start">
            {FACTS.map((fact) => (
              <div
                key={fact.label}
                className={`rounded-lg border border-border bg-surface p-4 ${
                  fact.label === 'Certifications' ? 'col-span-2' : ''
                }`}
              >
                <dt className="font-mono text-xs uppercase tracking-wide text-ink-muted">
                  {fact.label}
                </dt>
                <dd className="mt-1 text-sm font-semibold text-ink">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Reveal>
    </section>
  );
}

export default About;
