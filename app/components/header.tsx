export default function Header() {
  return (
    <header className="w-full bg-gray-800 text-white p-4 flex items-center justify-between">
      <h1 className="text-2xl font-bold">S</h1>
      <div>
        <a href="#about" className="text-white hover:text-gray-400 mx-2">
          <span>01.</span> About
        </a>
        <a href="#projects" className="text-white hover:text-gray-400 mx-2">
          <span>02.</span> Experience
        </a>
        <a href="#contact" className="text-white hover:text-gray-400 mx-2">
          <span>03.</span> Work
        </a>
        <a href="#contact" className="text-white hover:text-gray-400 mx-2">
          <span>04.</span> Contact
        </a>
        <button className="text-white hover:text-gray-400 mx-2">Resume</button>
      </div>
    </header>
  );
}
