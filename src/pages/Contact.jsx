const focusRing =
  "focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-700 focus-visible:ring-offset-2";

const contacts = [
  {
    id: "email",
    label: "Email",
    value: "magosmarkjohn@gmail.com",
    href: "mailto:magosmarkjohn@gmail.com",
    action: "Send an email",
    external: false,
    icon: (
      <path d="M3 6h18v12H3zM3 7l9 6 9-6" />
    ),
  },
  {
    id: "github",
    label: "GitHub",
    value: "github.com/Mark-john01",
    href: "https://github.com/Mark-john01",
    action: "View my GitHub",
    external: true,
    icon: (
      <path d="M8 9l-4 3 4 3M16 9l4 3-4 3M13.5 6l-3 12" />
    ),
  },
];

function Contact() {
  return (
    <section>
      <h1 className="text-3xl font-bold md:text-4xl">Contact</h1>
      <div className="mt-2 h-1 w-16 rounded bg-indigo-700" aria-hidden="true"></div>
      <p className="mt-4 max-w-2xl text-slate-700">
        I'd love to hear from you. Whether you have a question, an idea, or
        just want to say hello, feel free to reach out. I usually reply as soon
        as I can.
      </p>

      <ul className="mt-8 grid gap-4 sm:grid-cols-2">
        {contacts.map((item) => (
          <li
            key={item.id}
            className="flex flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-indigo-100 text-indigo-800">
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                {item.icon}
              </svg>
            </div>

            <h2 className="mt-4 text-lg font-semibold">{item.label}</h2>
            <p className="mt-1 break-all text-slate-700">{item.value}</p>

            <a
              href={item.href}
              {...(item.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className={`mt-5 inline-block self-start rounded-md bg-indigo-700 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-800 ${focusRing}`}
            >
              {item.action}
              {item.external && (
                <span className="sr-only"> (opens in a new tab)</span>
              )}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Contact;