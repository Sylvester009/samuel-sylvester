export default function Work() {
  const projects = [
    {
      title: "Nine Realms",
      description: "A demo learning platform for exploring programming, design, AI, security, and other areas of technology.",
      tech: ["Next.js", "TypeScript", "Demo API"],
    },
    {
      title: "Project Showcase",
      description: "A responsive portfolio project that highlights case studies, skills, and upcoming creative work.",
      tech: ["React", "Tailwind", "Node.js"],
    },
    {
      title: "Developer Dashboard",
      description: "A placeholder analytics dashboard for tracking demo tasks, repositories, and personal development goals.",
      tech: ["TypeScript", "Charts", "Local Data"],
    },
  ];

  return (
    <section id="work" className="py-24 sm:py-32">
      <h2 className="mb-12 flex items-center whitespace-nowrap text-[clamp(26px,5vw,32px)] font-bold text-[#ccd6f6]">
        <span className="mr-2 font-mono text-lg font-normal text-[#64ffda]">03.</span>
        Some Things I&apos;ve Built
        <span className="ml-5 h-px w-full max-w-[300px] bg-[#233554]" />
      </h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article key={project.title} className="group flex min-h-[320px] flex-col rounded bg-[#112240] p-8 shadow-[0_10px_30px_-15px_rgba(2,12,27,0.7)] transition duration-300 hover:-translate-y-2">
            <div className="mb-8 flex items-center justify-between">
              <svg viewBox="0 0 24 24" className="h-10 w-10 fill-none stroke-[#64ffda]" strokeWidth="1"><path d="M3 7.5h18v12H3z"/><path d="M8 7.5V5h8v2.5M3 12h18"/><path d="M9 15h6"/></svg>
              <div className="flex gap-3">
                <a href="#" aria-label={`${project.title} GitHub`} className="text-[#a8b2d1] transition hover:text-[#64ffda]">
                  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current"><path d="M12 .5A12 12 0 0 0 8.2 23.9c.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.4-4-1.4-.5-1.4-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-6A4.7 4.7 0 0 0 5.7 9c-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0C17.4 5.6 18.4 6 18.4 6c.6 1.6.2 2.8.1 3.1a4.7 4.7 0 0 1 1.3 3.3c0 4.7-2.8 5.7-5.5 6 .5.4.9 1.2.9 2.3v3.6c0 .3.2.7.8.6A12 12 0 0 0 12 .5Z"/></svg>
                </a>
                <a href="#" aria-label={`Open ${project.title}`} className="text-[#a8b2d1] transition hover:text-[#64ffda]">
                  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" strokeWidth="1.8"><path d="M14 3h7v7M10 14 21 3M21 14v7H3V3h7"/></svg>
                </a>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-[#ccd6f6] transition group-hover:text-[#64ffda]">{project.title}</h3>
            <p className="mt-3 text-sm leading-relaxed">{project.description}</p>
            <ul className="mt-auto flex flex-wrap gap-3 pt-6 font-mono text-xs text-[#a8b2d1]">
              {project.tech.map((tech) => <li key={tech}>{tech}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}