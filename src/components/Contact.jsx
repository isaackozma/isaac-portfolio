import { GithubIcon, LinkedinIcon, MailIcon } from './icons';
import Reveal from './Reveal';
import { useCopyToClipboard } from '../hooks/useCopyToClipboard';

function Contact() {
  const [copied, copyEmail] = useCopyToClipboard('kozmaisaac@gmail.com');

  return (
    <section id="contact" className="border-t border-border py-20">
      <Reveal className="mx-auto max-w-xl text-center">
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">Contact</h2>
        <p className="mt-3 text-ink-muted">
          Open to junior software, full stack, DevOps and data/AI roles in Melbourne. Reach out
          through any of these.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="mailto:kozmaisaac@gmail.com"
            onClick={copyEmail}
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-bg transition-transform hover:-translate-y-0.5 hover:brightness-110 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
          >
            <MailIcon className="h-4 w-4" />
            {copied ? 'Copied!' : 'Email Me'}
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
            href="https://github.com/isaackozma"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
          >
            <GithubIcon className="h-4 w-4" />
            GitHub
          </a>
        </div>
      </Reveal>
    </section>
  );
}

export default Contact;
