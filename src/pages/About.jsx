const skills = ["HTML", "CSS", "JavaScript", "SQL", "Python", "Git & GitHub"];

const education = [
  {
    id: 1,
    school: "Gordon College",
    program: "BSIT (Information Technology)",
    years: "2024 - Present",
  },
  {
    id: 2,
    school: "Tapinac Senior High School", 
    program: "STEM Strand",
    years: "2022 - 2024",
  },
];

function About() {
  return (
    <section>
      <h1 className="text-3xl font-bold md:text-4xl">About Me</h1>
      <div className="mt-2 h-1 w-16 rounded bg-indigo-700" aria-hidden="true"></div>

      <div className="mt-6 rounded-lg border border-slate-200 bg-white p-5 shadow-sm md:p-6">
        <p className="max-w-2xl text-slate-700">
          I'm Mark John, and I love building clean, easy-to-use websites. I
          enjoy turning ideas into pages people can see, click, and use. I'm
          always learning, and I like solving problems one step at a time.
        </p>
      </div>

      <h2 className="mt-10 text-2xl font-semibold">Education</h2>
      <ol className="mt-4 space-y-4 border-l-2 border-indigo-200 pl-5">
        {education.map((item) => (
          <li key={item.id} className="relative">
            <span
              className="absolute -left-[1.7rem] top-2 h-3 w-3 rounded-full bg-indigo-700"
              aria-hidden="true"
            ></span>
            <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
              <p className="text-sm font-medium text-indigo-800">{item.years}</p>
              <h3 className="mt-1 text-lg font-semibold">{item.school}</h3>
              <p className="text-slate-700">{item.program}</p>
              <p className="mt-2 text-slate-700">{item.details}</p>
            </div>
          </li>
        ))}
      </ol>

      <h2 className="mt-10 text-2xl font-semibold">Skills</h2>
      <ul className="mt-4 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <li
            key={skill}
            className="rounded-full border border-indigo-200 bg-indigo-100 px-4 py-1.5 text-sm font-medium text-indigo-900"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default About;