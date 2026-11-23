export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <h2 className="mb-10 flex items-center whitespace-nowrap text-[clamp(26px,5vw,32px)] font-bold text-[#ccd6f6]">
        <span className="mr-2 font-mono text-lg font-normal text-[#64ffda]">01.</span>
        About Me
        <span className="ml-5 h-px w-full max-w-[300px] bg-[#233554]" />
      </h2>
      <div className="grid gap-12 md:grid-cols-[3fr_2fr]">
        <div className="space-y-4 text-base leading-relaxed">
          <p>Hello! My name is Samuel, and I enjoy creating things that live on the internet. My interest in web development began in 2024, when I started learning how code can turn an idea into a useful digital experience.</p>
          <p>Fast-forward to today, and I&apos;ve been working on personal projects, improving my development skills, and exploring everything from front-end interfaces to full-stack applications.</p>
          <p>I recently started <span className="text-[#64ffda]">The Nine Realms</span>, a demo learning path covering broad areas of technology. I&apos;m building a community around it and sharing what I learn along the way.</p>
          <p>Here are a few technologies I&apos;ve been working with recently:</p>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-2 font-mono text-[13px]">
            {["JavaScript (ES6+)", "TypeScript", "React", "Next.js", "Node.js", "Go"].map((item) => (
              <li key={item} className="before:mr-2 before:text-[#64ffda] before:content-['▹']">{item}</li>
            ))}
          </ul>
        </div>
        <div className="mx-auto w-full max-w-[280px] md:mx-0">
          <div className="relative aspect-square rounded bg-[#64ffda]">
            <div className="absolute inset-0 -translate-x-5 translate-y-5 rounded border-2 border-[#64ffda] transition-transform hover:-translate-x-4 hover:translate-y-4" />
            <div className="absolute inset-0 grid place-items-center rounded bg-[#112240] font-mono text-sm text-[#64ffda]">
              <div className="text-center">
                <div className="mx-auto mb-3 h-20 w-20 rounded-full border border-[#64ffda]/40 bg-[#233554]" />
                Demo Profile
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}