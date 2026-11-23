export default function Hero() {
  return (
    <section className="flex min-h-screen max-w-[1000px] flex-col justify-center py-24">
      <p className="mb-5 font-mono text-sm text-[#64ffda] sm:text-base">Hi, my name is</p>
      <h1 className="text-[clamp(40px,8vw,80px)] font-bold leading-[1.05] text-[#ccd6f6]">Samuel Sylvester.</h1>
      <h2 className="mt-2 text-[clamp(40px,8vw,80px)] font-bold leading-[1.05] text-[#8892b0]">I build things for the web.</h2>
      <p className="mt-6 max-w-[540px] text-base leading-relaxed sm:text-lg">
        I&apos;m a software engineer focused on creating thoughtful, accessible digital experiences.
        Currently, I&apos;m growing my skills through hands-on projects and new opportunities.
      </p>
      <div className="mt-12">
        <a href="#work" className="rounded border border-[#64ffda] px-7 py-4 font-mono text-sm text-[#64ffda] transition hover:bg-[#64ffda]/10">
          Check out my work!
        </a>
      </div>
    </section>
  );
}
