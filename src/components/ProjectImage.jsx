import { useState } from 'react';

function initials(title) {
  return title
    .split(' ')
    .filter((word) => /^[A-Za-z]/.test(word))
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
    .toUpperCase();
}

function ProjectImage({ src, title, alt }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="flex aspect-video w-full items-center justify-center bg-surface-hover">
        <span className="font-mono text-3xl font-semibold tracking-wide text-accent/70">
          {initials(title)}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt || `Preview of ${title}`}
      width={1910}
      height={961}
      loading="lazy"
      decoding="async"
      className="aspect-video w-full object-cover"
      onError={() => setFailed(true)}
    />
  );
}

export default ProjectImage;
