function SkillChip({ skill, active }: { skill: string; active?: boolean }) {
  return (
    <div className={`border rounded px-3 hover:border-accent hover:text-accent py-1 text-sm inline-block mr-2 mb-2 ${active ? "border-accent text-accent" : "border-secondary text-secondary"}`}>
      {skill}
    </div>
  );
}

export default function Skills() {
  const languages = ["TypeScript", "Python", "JavaScript", "Java", "Rust", "Nix", "HTML", "CSS", "SQL"];
  const frameworks = ["Next.js", "React", "TailwindCSS", "Astro", "Hono.js"];
  const infrastructure = ["PostgreSQL", "Prisma", "Docker", "Git", "Linux"];

  const active = ["TypeScript", "Next.js", "TailwindCSS", "PostgreSQL", "Prisma", "Git", "Linux", "Prisma", "React", "Python", "Docker", "JavaScript"];

  return (
    <section id="skills" className="px-5">
      <h2 className="text-accent uppercase mb-5 mt-16 text-xl">Skills</h2>
      <div className="">
        <div>
          {languages.map((lang) => (
            <SkillChip active={active.includes(lang)} key={lang} skill={lang} />
          ))}
        </div>
        <div>
          {frameworks.map((fw) => (
            <SkillChip active={active.includes(fw)} key={fw} skill={fw} />
          ))}
        </div>
        <div>
          {infrastructure.map((infra) => (
            <SkillChip active={active.includes(infra)} key={infra} skill={infra} />
          ))}
        </div>
      </div>
    </section>
  );
}
