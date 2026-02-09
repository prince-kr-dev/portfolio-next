import ScrollToTop from "@/components/ScrollToTop";
import projectsData from "@/data/all-projects.json";
import { Github, Globe } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";

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

// ✅ Mark page as async
export default async function ProjectDetail({
  params,
}: {
  params: { slug: string } | Promise<{ slug: string }>; // Can be Promise
}) {
  // ✅ Await params if it is a Promise
  const resolvedParams = params instanceof Promise ? await params : params;
  const { slug } = resolvedParams;

  const project = projects.find((p) => p.slug === slug);

  if (!project) return notFound();

  return (
    <div className="max-w-6xl mx-auto px-6 md:px-25 flex flex-col gap-3 items-start py-5">
      <ScrollToTop />

      {/* Hero image */}
      <div className="relative w-full h-[30vh] sm:h-[50vh] md:h-[70vh]">
        <Image
          src={project.image}
          alt={project.title}
          fill
          priority
          className="object-cover object-top rounded-2xl"
        />
      </div>

      {/* Content */}
      <div className="py-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-1">
          {project.title}
        </h1>
        <p className="text-md sm:text-lg leading-relaxed text-foreground/60 font-medium">
          {project.description}
        </p>

        <div className="h-px bg-foreground/50 my-8"></div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-1">
          What it is?
        </h2>
        <p className="text-md sm:text-lg leading-relaxed text-foreground/80 font-medium">
          {project.detailedDescription}
        </p>

        <div className="h-px bg-foreground/50 my-8"></div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-2">
          Tools & Technologies
        </h2>
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.techStack.map((tech, i) => (
            <span
              key={i}
              className="text-sm font-medium px-2 py-1 bg-foreground/10 rounded"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="h-px bg-foreground/50 my-8"></div>

        <div className="flex items-center gap-2">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2 rounded-lg font-medium transition flex items-center gap-1 w-fit border border-foreground/40 hover:bg-foreground hover:text-background"
          >
            <Globe size={18} />
            Visit Project
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2 rounded-lg font-medium transition flex items-center gap-1 w-fit border border-foreground/40 hover:bg-foreground hover:text-background"
          >
            <Github size={18} />
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
