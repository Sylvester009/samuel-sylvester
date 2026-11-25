import Image from "next/image";

const TECHNOLOGIES = [
  "JavaScript (ES6+)",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Go",
] as const;

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <h2 className="mb-10 flex items-center whitespace-nowrap text-[clamp(26px,5vw,32px)] font-bold text-[#ccd6f6]">
        <span className="mr-2 font-mono text-lg font-normal text-[#64ffda]">
          01.
        </span>
        About Me
        <span className="ml-5 h-px w-full max-w-[300px] bg-[#233554]" />
      </h2>
      <div className="grid gap-12 md:grid-cols-[3fr_2fr]">
        <div className="space-y-4 text-base leading-relaxed">
          <p>
            Hello! My name is Sylvester, and I enjoy building things for the
            web. I started my software development journey in 2022 through the
            ALX Software Engineering program, and I&apos;ve been fascinated by
            turning ideas into functional products ever since.
          </p>

          <p>
            I&apos;ve had the opportunity to work at{" "}
            <span className="text-accent">Ductape Technologies</span>, building
            web applications and features such as workspace permissions, billing
            interfaces, and admin dashboards using React, TypeScript, and
            Tailwind CSS, alongside designers and backend developers.
          </p>

          <p>
            Beyond coding, I&apos;m pursuing a self-created learning journey called{" "}
            <span className="text-accent">Nine Realms</span>, exploring
            different areas of software engineering and computer science. When
            I&apos;m not building, I&apos;m probably reading fantasy novels, discovering
            music, or exploring random ideas. There&apos;s always another realm to
            cultivate!
          </p>

          <p>Here are a few technologies I’ve been working with recently:</p>

          <ul className="grid grid-cols-2 gap-x-6 gap-y-2 font-mono text-[13px]">
            {TECHNOLOGIES.map((tech) => (
              <li
                key={tech}
                className="before:mr-2 before:text-accent before:content-['▹']"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
        <div className="mx-auto w-full max-w-[280px] md:mx-0">
          <div className="group relative aspect-square">
            {/* Offset outline */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -translate-x-5 translate-y-5 rounded border-2 border-accent transition-transform duration-300 group-hover:-translate-x-4 group-hover:translate-y-4"
            />

            {/* Photo with accent tint that fades on hover */}
            <div className="relative h-full w-full overflow-hidden rounded bg-accent">
              <Image
                src="/me.png"
                alt="Portrait of Sylvester"
                fill
                sizes="(min-width: 768px) 280px, 70vw"
                className="object-cover mix-blend-multiply grayscale transition duration-300 group-hover:mix-blend-normal group-hover:grayscale-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
