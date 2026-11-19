export default function Hero() {
  return (
    <section className="w-full bg-[#0a192f] text-white min-h-screen flex flex-col">
      <h1 className="text-4xl font-bold">Hi, my name is</h1>
      <h2 className="text-3xl font-semibold">Samuel Sylvester</h2>
      <p className="text-lg text-gray-600">I build things for the web.</p>
      <p className="text-lg text-gray-600">
        I’m a software engineer specializing in building (and occasionally
        designing) exceptional digital experiences. Currently, I’m focused on
        building myself and my skills(And yes, I am copying Brittany Chiang).
      </p>
      <button className="bg-[#64ffda] text-[#0a192f] px-4 py-2 rounded mt-4 hover:bg-[#52e0c4] transition-colors duration-300">
        Check out my path!
      </button>
    </section>
  );
}
