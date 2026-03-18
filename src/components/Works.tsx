export default function Works() {
  const projects = [
    {
      name: "Automatic Bell System",
      stack: ["TypeScript", "Hono.js", "Cloudflare Workers", "Tauri", "Rust", "MicroPython"],
      tag: "IoT - Full Stack",
      link: "/automatic-bell-system",
    },
    {
      name: "Punit Mishra Prep",
      stack: ["Next.js", "TypeScript", "TailwindCSS", "Prisma", "PostgreSQL"],
      tag: "Freelance",
      link: "/punit-mishra-prep",
    },
    {
      name: "Secure Private Cloud",
      stack: ["Raspberry Pi 5", "LAMP", "Nextcloud", "DuckDNS", "SSL", "Cloudflare Tunnel"],
      tag: "IoT - Infrastructure",
      link: "/secure-private-cloud",
    },
    {
      name: "Nyxia",
      stack: ["Astro", "TailwindCSS", "Vercel"],
      tag: "Frontend",
      link: "/nyxia",
    },
  ];

  return (
    <section id="works" className="mt-32 text-secondary">
      <h2 className="text-accent px-5 uppercase mb-5 text-xl">Projects</h2>
      <div className="divide-y border-t border-b border-border divide-border">
        {projects.map((project) => (
          <a key={project.name} href={project.link} className="group px-5 py-3 flex  items-center  justify-between transition-colors ease-in">
            <div className="">
              <h3 className="text-white text-lg group-hover:text-accent transition-colors ease-in">{project.name}</h3>
              <div className="flex items-center gap-2 mt-0.5">
                {project.stack.map((tech, index) => (
                  <div key={tech} className="flex items-center gap-2">
                    <div className="border-secondary text-secondary hover:border-accent hover:text-primary py-1 text-sm">{tech}</div>
                    {index !== project.stack.length - 1 && <span className="size-0.5 rounded-full bg-secondary"></span>}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-sm mt-1 border border-secondary rounded px-2 py-1 hover:border-primary hover:text-primary">{project.tag}</p>
              <svg className="stroke-secondary group-hover:stroke-accent" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 13L13 3M13 3H5M13 3V11" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
