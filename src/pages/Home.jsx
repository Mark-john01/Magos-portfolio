import { Link } from "react-router-dom";

const highlights = [
  { label: "Focus", value: "Clean, responsive websites" },
  { label: "Always", value: "Learning something new" },
];

function Home() {
  return (
    <section className="py-4 md:py-10">
      <div className="rounded-2xl bg-gradient-to-br from-indigo-50 via-white to-indigo-100 p-6 shadow-sm ring-1 ring-indigo-100 md:p-12">
        <span className="inline-block rounded-full bg-indigo-100 px-4 py-1 text-sm font-medium text-indigo-900">
          Available for new projects
        </span>

        <p className="mt-6 font-medium text-indigo-800">Hello, I'm</p>
        <h1 className="mt-1 text-4xl font-bold tracking-tight md:text-6xl">
          Mark John Magos
        </h1>

        <p className="mt-5 max-w-2xl leading-relaxed text-slate-700">
          I'm Mark John, and I love building clean, easy-to-use websites. I
          enjoy taking an idea and turning it into something people can
          actually see, click, and use. I pay attention to the small details,
          like how a page looks, how it feels on a phone, and how easy it is
          for everyone to use.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            to="/projects"
            className="inline-block rounded-md bg-indigo-700 px-6 py-3 text-center font-medium text-white shadow-sm hover:bg-indigo-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-700 focus-visible:ring-offset-2"
          >
            View my projects
          </Link>
          <Link
            to="/contact"
            className="inline-block rounded-md border border-indigo-700 bg-white px-6 py-3 text-center font-medium text-indigo-800 hover:bg-indigo-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-700 focus-visible:ring-offset-2"
          >
            Contact me
          </Link>
        </div>
      </div>

      <ul className="mt-6 grid gap-4 sm:grid-cols-3">
        {highlights.map((item) => (
          <li
            key={item.label}
            className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm"
          >
            <p className="text-sm font-medium text-indigo-800">{item.label}</p>
            <p className="mt-1 font-semibold text-slate-900">{item.value}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Home;