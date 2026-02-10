"use client";

import projectsData from "@/data/all-projects.json";
import ProjectCard from "./ProjectCard";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
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

// Motion variants
const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

function WhatIBuilt() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="max-w-6xl mx-auto px-6 md:px-25 flex flex-col gap-3 items-start pt-20 py-10 md:py-20"
    >
      {/* Heading */}
      <motion.h1 variants={item} className="text-3xl font-bold">
        What I’ve Built So Far
      </motion.h1>

      <motion.p variants={item} className="text-lg opacity-80 mb-10">
        Hands-on projects crafted with attention to performance, usability, and
        detail.
      </motion.p>

      {/* Projects Grid */}
      <motion.div
        variants={container} 
        className="mx-auto w-full grid md:grid-cols-2 gap-8"
      >
        {featuredProjects.map((project) => (
          <motion.div
            key={project.id}
            variants={item} 
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
      </motion.div>

      {/* All Projects Button */}
      <motion.div
        variants={item}
        className="flex items-center justify-center py-10 w-full"
      >
        <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
          <Link
            href="/projects"
            className="text-md font-medium border border-foreground/40 w-fit px-5 py-1 rounded-md transition-all flex items-center gap-1 hover:bg-foreground hover:text-background"
          >
            All Projects
            <ArrowUpRight size={24} />
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default WhatIBuilt;
