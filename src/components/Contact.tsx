export default function Contact() {
  return (
    <section id="contact" className="px-5 pb-32">
      <div className="container mx-auto">
        <h2 className="text-accent uppercase mb-5 mt-16 text-xl">Contact</h2>
        <h3 className="text-4xl mb-2 font-bold text-primary">
          Have a project? <div className="text-accent">Let&apos;s build it.</div>
        </h3>
        <p className="text-secondary">Open to freelance work and interesting projects.</p>

        <div className="sm:flex gap-2">
          <a
            target="_blank"
            href="mailto:abhishekdallasalpy@gmail.com"
            className="border w-36 sm:w-auto flex items-center justify-between hover:scale-105 transition-transform ease-out border-accent text-accent px-4 py-2 rounded mt-5">
            <span>Email</span>
            <svg className="stroke-accent inline ml-2 group-hover:stroke-accent" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 13L13 3M13 3H5M13 3V11" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>

          <a
            target="_blank"
            href="https://github.com/dev-spectre"
            className="border w-36 sm:w-auto flex items-center justify-between hover:scale-105 transition-transform ease-out border-accent text-accent px-4 py-2 rounded mt-5">
            <span>GitHub</span>
            <svg className="stroke-accent inline ml-2 group-hover:stroke-accent" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 13L13 3M13 3H5M13 3V11" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>

          <a
            target="_blank"
            href="https://linkedin.com/in/abhishekdallas"
            className="border w-36 sm:w-auto flex items-center justify-between hover:scale-105 transition-transform ease-out border-accent text-accent px-4 py-2 rounded mt-5">
            <span>LinkedIn</span>
            <svg className="stroke-accent inline ml-2 group-hover:stroke-accent" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 13L13 3M13 3H5M13 3V11" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
