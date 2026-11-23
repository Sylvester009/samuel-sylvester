export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-[700px] py-24 sm:py-32">
      <h2 className="mb-10 flex items-center whitespace-nowrap text-[clamp(26px,5vw,32px)] font-bold text-[#ccd6f6]">
        <span className="mr-2 font-mono text-lg font-normal text-[#64ffda]">02.</span>
        Where I&apos;ve Worked
        <span className="ml-5 h-px w-full max-w-[300px] bg-[#233554]" />
      </h2>
      <div className="flex flex-col sm:flex-row">
        <div className="mb-6 flex overflow-x-auto border-b border-[#233554] sm:w-[150px] sm:flex-col sm:border-b-0 sm:border-l">
          {["Demo Studio", "Startup", "Volunteer"].map((name, index) => (
            <button key={name} className={`min-w-[120px] border-b-2 px-4 py-3 text-left font-mono text-xs sm:border-b-0 sm:border-l-2 sm:py-3 ${index === 0 ? "border-[#64ffda] bg-[#112240] text-[#64ffda]" : "border-transparent text-[#8892b0] hover:bg-[#112240] hover:text-[#64ffda]"}`}>
              {name}
            </button>
          ))}
        </div>
        <div className="sm:ml-5">
          <h3 className="text-xl font-semibold text-[#ccd6f6]">Software Engineer <span className="text-[#64ffda]">@ Demo Studio</span></h3>
          <p className="mt-2 font-mono text-xs text-[#a8b2d1]">January 2025 - Present</p>
          <ul className="mt-5 space-y-3 text-[15px]">
            {[
              "Build accessible, responsive web interfaces using Next.js, React, and TypeScript.",
              "Collaborate with designers and developers to turn demo concepts into polished experiences.",
              "Improve project structure, reusable components, and overall code quality.",
            ].map((item) => (
              <li key={item} className="before:mr-3 before:text-[#64ffda] before:content-['▹']">{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}