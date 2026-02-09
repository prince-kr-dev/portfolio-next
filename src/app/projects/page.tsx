"use client";

import projectsData from "@/data/all-projects.json";
import ProjectCard from "@/components/ProjectCard";
import { motion, Variants } from "framer-motion";

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

// Motion Variants
const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

function ProjectPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 md:px-25 flex flex-col gap-3 items-start py-6 md:py-10">
      <h1 className="text-4xl font-bold">Projects</h1>
      <p className="text-lg text-foreground/80 mb-10">
        Here you will find a selection of projects I have worked on.
      </p>

      <div className="mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={item}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }} // Animate when scrolled into view
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
            >
              <ProjectCard
                slug={project.slug}
                image={project.image}
                title={project.title}
                description={project.description}
                techStack={project.techStack}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectPage;
