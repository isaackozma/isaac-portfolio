import { DownloadIcon, GithubIcon, LinkedinIcon, MailIcon } from './icons';

function Hero() {
  return (
    <section id="top" className="pb-20 pt-16 sm:pt-24">
      <div className="flex flex-col items-center text-center">
        <img
          src="/profile2.jpg"
          alt="Portrait of Isaac Kelly"
          width={128}
          height={128}
          className="h-32 w-32 rounded-full border-2 border-border object-cover shadow-lg shadow-black/30"
        />

        <p className="mt-6 font-mono text-sm text-accent">Hi, I'm</p>

        <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
          Isaac Kelly
        </h1>

        <p className="mt-4 max-w-2xl text-lg text-ink-muted sm:text-xl">
          Junior Software Engineer building full stack web apps, cloud infrastructure and
          AI-powered tools.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="/Isaac_Kelly_CV_2025.pdf"
            download
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-bg transition-transform hover:-translate-y-0.5 hover:brightness-110 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
          >
            <DownloadIcon className="h-4 w-4" />
            Download CV
          </a>

          <a
            href="https://github.com/isaackozma"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
          >
            <GithubIcon className="h-4 w-4" />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/isaac-kelly-a1a164208/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
          >
            <LinkedinIcon className="h-4 w-4" />
            LinkedIn
          </a>

          <a
            href="mailto:kozmaisaac@gmail.com"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
          >
            <MailIcon className="h-4 w-4" />
            Email
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
