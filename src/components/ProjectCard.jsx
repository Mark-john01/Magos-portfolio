function ProjectCard({ title, description, image, alt, tags = [], liveUrl, repoUrl }) {
  const buttonBase =
    "inline-block rounded-md px-4 py-2 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-700 focus-visible:ring-offset-2";

  return (
    <article className="flex w-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <img src={image} alt={alt} className="h-48 w-full object-cover" loading="lazy" />

      <div className="flex flex-1 flex-col p-5">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="mt-2 flex-1 text-slate-700">{description}</p>

        {tags.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-900"
              >
                {tag}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-5 flex flex-wrap gap-3">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${buttonBase} bg-indigo-700 text-white hover:bg-indigo-800`}
            >
              Live site
              <span className="sr-only"> of {title} (opens in a new tab)</span>
            </a>
          )}
          {repoUrl && (
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${buttonBase} border border-indigo-700 text-indigo-800 hover:bg-indigo-50`}
            >
              GitHub
              <span className="sr-only"> repo of {title} (opens in a new tab)</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;