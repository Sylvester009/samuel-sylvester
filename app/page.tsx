import About from "./components/about";
import Contact from "./components/contact";
import Work from "./components/work";
import Experience from "./components/experience";
import Header from "./components/header";
import Hero from "./components/hero";

export default function Home() {
  return (
    <div className="w-full bg-[#0a192f] text-white min-h-screen flex flex-col gap-8">
      <Header />
      {/* <aside className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
        <p className="text-lg text-gray-600">
          Explore my projects and skills below.
        </p>
      </aside>
      <aside className="flex flex-col items-center justify-center gap-4">
        <h2 className="text-3xl font-semibold">Projects</h2>
        <p className="text-md text-gray-600 max-w-xl text-center">
          Check out some of my recent projects and contributions to open-source.
        </p>
      </aside> */}
      <main className="w-full bg-[#0a192f] text-white px-25 md:px-50 lg:px-50 pt-30 flex flex-col gap-8">
        <Hero />
        <About />
        <Experience />
        <Work />
        <Contact />
      </main>
      <footer className="w-full bg-gray-800 text-white p-4 flex items-center justify-center">
        <p className="text-sm">Inspired by Brittany Chiang & Built by Samuel Sylvester.</p>
      </footer>
    </div>
  );
}
