export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 flex h-[70px] items-center justify-between bg-[#0a192f]/90 px-6 backdrop-blur-md sm:h-[100px] sm:px-12">
      <a href="#" aria-label="Home" className="grid h-10 w-10 place-items-center border border-[#64ffda] text-xl font-semibold text-[#64ffda] [clip-path:polygon(50%_0,100%_25%,100%_75%,50%_100%,0_75%,0_25%)]">
        S
      </a>
      <nav aria-label="Primary navigation" className="hidden items-center gap-8 font-mono text-xs sm:flex">
        <a href="#about" className="text-[#ccd6f6] transition hover:text-[#64ffda]"><span className="mr-1 text-[#64ffda]">01.</span>About</a>
        <a href="#experience" className="text-[#ccd6f6] transition hover:text-[#64ffda]"><span className="mr-1 text-[#64ffda]">02.</span>Experience</a>
        <a href="#work" className="text-[#ccd6f6] transition hover:text-[#64ffda]"><span className="mr-1 text-[#64ffda]">03.</span>Work</a>
        <a href="#contact" className="text-[#ccd6f6] transition hover:text-[#64ffda]"><span className="mr-1 text-[#64ffda]">04.</span>Contact</a>
        <a href="#" className="rounded border border-[#64ffda] px-4 py-3 text-[#64ffda] transition hover:bg-[#64ffda]/10">Resume</a>
      </nav>
      <button aria-label="Open menu" className="flex h-10 w-10 flex-col items-end justify-center gap-1.5 sm:hidden">
        <span className="h-px w-7 bg-[#64ffda]" />
        <span className="h-px w-5 bg-[#64ffda]" />
        <span className="h-px w-7 bg-[#64ffda]" />
      </button>
    </header>
  );
}
