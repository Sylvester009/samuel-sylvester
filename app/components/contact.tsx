export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-[600px] py-24 text-center sm:py-32">
      <p className="mb-4 font-mono text-base text-[#64ffda]"><span className="mr-2">04.</span>What&apos;s Next?</p>
      <h2 className="text-[clamp(40px,7vw,60px)] font-bold text-[#ccd6f6]">Get In Touch</h2>
      <p className="mx-auto mt-5 max-w-[540px] leading-relaxed">
        I&apos;m currently looking for new opportunities. Whether you have a question, a project, or just want to say hi, my inbox is always open.
      </p>
      <a href="mailto:samsylvester09@gmail.com" className="mt-12 inline-block rounded border border-[#64ffda] px-7 py-4 font-mono text-sm text-[#64ffda] transition hover:bg-[#64ffda]/10">
        Say Hello
      </a>
    </section>
  );
}