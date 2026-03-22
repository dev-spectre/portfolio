"use client";

import Topbar from "@/components/Topbar";
import { useParams } from "next/navigation";
import { getNextProject, projects } from "@/lib/projects";
import Bottombar from "@/components/Bottombar";
import Image from "next/image";

export default function Project() {
  const { project } = useParams();
  const projectIndex = projects.findIndex((p) => p.slug === project);
  const projectData = projects[projectIndex];
  const nextProject = getNextProject(projectData.slug);
  const prevProject = projects[(projectIndex + projects.length - 1) % projects.length];

  return (
    <>
      <Topbar projectIndex={projectData.index} projectLength={Object.entries(projects).length} />

      {/* hero */}
      <div className="border-b border-border px-5">
        <section className="text-secondary container mx-auto mt-16">
          <p className="text-sm sm:text-base">
            Project <span className="text-accent">{projectData.index}</span> - {projectData.category}
          </p>

          {/* title */}
          <h1 className="text-primary font-black my-5 text-5xl md:text-6xl tracking-wide">
            <div>{projectData.name.split(" ")[0]}</div>
            <div>{projectData.name.split(" ").slice(1).join(" ")}</div>
          </h1>

          {/* tagline */}
          <p className="max-w-xl text-pretty">{projectData.tagline}</p>

          {/* tags */}
          <div className="flex flex-wrap mt-5 mb-10 gap-3">
            {/* project status */}
            <p className="rounded py-1 px-3 border capitalize border-accent text-accent">{projectData.status}</p>

            {/* year */}
            <p className="rounded py-1 px-3 border capitalize border-secondary text-secondary">{projectData.year}</p>

            {/* role */}
            <p className="rounded py-1 px-3 border capitalize border-sky-600 text-sky-600">{projectData.role}</p>
          </div>
        </section>
      </div>

      {/* project link */}
      {projectData.links && (
        <div className="border-b border-border px-5">
          <section className="container flex flex-wrap gap-3 my-5 mx-auto">
            {projectData.links.live && (
              <a href={projectData.links.live} target="_blank" rel="noopener noreferrer" className="flex gap-2 items-center border border-accent text-accent py-2 px-4 rounded">
                View Project
                <svg className="stroke-accent" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 13L13 3M13 3H5M13 3V11" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            )}
            {projectData.links.github?.map((link, index) => (
              <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="flex gap-2 items-center text-accent py-1 px-3 border border-accent rounded ">
                {link.label} Repo
                <svg className="stroke-accent" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 13L13 3M13 3H5M13 3V11" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            ))}
          </section>
        </div>
      )}

      {/* metrics */}
      <div className="border-b text-secondary border-b-border md:px-5">
        <section className="md:grid gap-5 grid-cols-3 max-md:divide-y md:divide-x divide-border container mx-auto">
          {projectData.metrics.map((metric, index) => (
            <p key={index} className="py-3 px-5 md:px-0">
              <span className="block text-xl text-white font-bold">{metric.value}</span>
              <span>{metric.label}</span>
            </p>
          ))}
        </section>
      </div>

      {/* problem */}
      <div className="border-b px-5 text-secondary border-b-border">
        <section className="container relative py-5 m-auto">
          <h2 className="text-primary mb-3 uppercase">Problem</h2>
          <p className="text-pretty mb-3">{projectData.problem}</p>
          <div className="bg-background w-10 flex items-center justify-center -mr-[50%] left-[50%] absolute -bottom-[6%]">
            <svg width="16" height="16" className="stroke-accent -rotate-90" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 8H2M2 8L7 3M2 8L7 13" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </section>
      </div>

      {/* solution */}
      <div className="border-b px-5 text-secondary border-b-border">
        <section className="container py-5 m-auto">
          <h2 className="text-accent mb-3 uppercase">Solution</h2>
          <p className="text-pretty mb-3">{projectData.solution}</p>
        </section>
      </div>

      {/* tech stack */}
      <div className="border-b px-5 text-secondary border-b-border">
        <section className="container m-auto">
          {Object.entries(projectData.stack).map((stack, index) => (
            <div key={index} className="my-5">
              <h2>{stack[0]}</h2>
              <div className="flex flex-wrap gap-3 mt-2">
                {stack[1].chips.map((chip, index) => (
                  <p key={index} className={`rounded border px-3 py-1 ${stack[1].highlighted.includes(chip) ? "border-accent text-accent" : "border-secondary"}`}>
                    {chip}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </section>
      </div>

      {/* screenshots */}
      <div className="border-b px-5 text-secondary border-b-border">
        <section className="container py-5 m-auto">
          <h2 className="text-secondary mb-3 uppercase">Screenshots</h2>
          <div className="grid mb-3 items-stretch gap-5 md:grid-cols-3">
            <div className="col-span-2 relative row-span-2 aspect-video rounded-lg border border-border overflow-hidden">
              <Image className="object-cover object-center" fill src={projectData.screenshots[0]} alt="" />
            </div>
            <div className="aspect-video relative max-md:row-span-2 max-md:col-span-2 rounded-lg border border-border overflow-hidden">
              <Image className="object-cover object-center" fill src={projectData.screenshots[1]} alt="" />
            </div>
            <div className=" relative aspect-video max-md:row-span-2 max-md:col-span-2 rounded-lg border border-border overflow-hidden">
              <Image className="object-cover object-center" fill src={projectData.screenshots[2]} alt="" />
            </div>
          </div>
        </section>
      </div>

      <Bottombar nextProjectSlug={nextProject.slug} nextProjectName={nextProject.name} previousProjectName={prevProject.name} previousProjectSlug={prevProject.slug} />
    </>
  );
}
