import About from "./components/about";
import Contact from "./components/contact";
import Work from "./components/work";
import Experience from "./components/experience";
import Header from "./components/header";
import Hero from "./components/hero";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#0a192f] text-[#8892b0]">
      <Header />
      <aside className="fixed bottom-0 left-6 z-30 hidden w-10 flex-col items-center gap-6 after:h-24 after:w-px after:bg-[#a8b2d1] lg:flex">
        <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub" className="text-[#a8b2d1] transition hover:-translate-y-1 hover:text-[#64ffda]">
          <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current"><path d="M12 .5A12 12 0 0 0 8.2 23.9c.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.4-4-1.4-.5-1.4-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-6A4.7 4.7 4.7 0 0 5.7 9c-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0C17.4 5.6 18.4 6 18.4 6c.6 1.6.2 2.8.1 3.1a4.7 4.7 0 0 1 1.3 3.3c0 4.7-2.8 5.7-5.5 6 .5.4.9 1.2.9 2.3v3.6c0 .3.2.7.8.6A12 12 0 0 0 12 .5Z"/></svg>
        </a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-[#a8b2d1] transition hover:-translate-y-1 hover:text-[#64ffda]">
          <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current"><path d="M20.4 20.4h-3.6v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7H9.3V9h3.5v1.6h.1a3.8 3.8 0 0 1 3.4-1.9c3.7 0 4.4 2.4 4.4 5.6v6.1h-.3ZM5.3 7.4A2.1 2.1 0 1 1 5.3 3.2a2.1 2.1 0 0 1 0 4.2Zm1.8 13H3.5V9h3.6v11.4ZM22.2 0H1.8A1.8 1.8 0 0 0 0 1.8v20.4A1.8 1.8 0 0 0 1.8 24h20.4a1.8 1.8 0 0 0 1.8-1.8V1.8A1.8 1.8 0 0 0 22.2 0Z"/></svg>
        </a>
        <a href="mailto:samuel@example.com" aria-label="Email" className="text-[#a8b2d1] transition hover:-translate-y-1 hover:text-[#64ffda]">
          <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" strokeWidth="1.8"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/></svg>
        </a>
      </aside>
      <aside className="fixed bottom-0 right-6 z-30 hidden w-10 items-center lg:flex">
        <a href="mailto:samuel@example.com" className="vertical-email font-mono text-xs tracking-[0.2em] text-[#a8b2d1] transition hover:-translate-y-1 hover:text-[#64ffda]">
          samuel@example.com
        </a>
        <div className="ml-5 h-24 w-px bg-[#a8b2d1]" />
      </aside>
      <main className="mx-auto w-full max-w-[1000px] px-6 sm:px-12 lg:px-6">
        <Hero />
        <About />
        <Experience />
        <Work />
        <Contact />
      </main>
      <footer className="pb-8 pt-20 text-center font-mono text-xs text-[#a8b2d1]">
        <p>Designed and built by Samuel Sylvester</p>
      </footer>
    </div>
  );
}
