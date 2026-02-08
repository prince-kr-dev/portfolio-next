import projectsData from "@/data/all-projects.json";
import ProjectCard from "@/components/ProjectCard";

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
function ProjectPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 md:px-25 flex flex-col gap-3 items-start py-6 md:py-10">
      <h1 className="text-4xl font-bold">Projects</h1>
      <p className="text-lg text-foreground/80 mb-10">
        Here you will find a selection of projects I have worked on.
      </p>

      <div className="mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
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

export default ProjectPage;
