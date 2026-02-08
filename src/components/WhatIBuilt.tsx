import projectsData from "@/data/all-projects.json";
import ProjectCard from "./ProjectCard";

type Project = {
  id: number;
  slug: string;
  image: string;
  title: string;
  description: string;
  detailedDescription: string;
  techStack: string[];
  liveLink: string;
  githubLink: string;
  featured: boolean;
};

const projects: Project[] = projectsData;

function WhatIBuilt() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <div className="max-w-6xl mx-auto px-6 md:px-25 flex flex-col gap-3 items-start pt-20 py-10 md:py-20">
      <h1 className="text-3xl font-bold">What I’ve Built So Far</h1>
      <p className="text-xl opacity-80 mb-10">
        Hands-on projects crafted with attention to performance, usability, and
        detail.
      </p>

      <div className="mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              slug={project.slug}
              image={project.image}
              title={project.title}
              description={project.description}
              techStack={project.techStack}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default WhatIBuilt;
