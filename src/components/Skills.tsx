"use client";

import { JSX } from "react";
import { motion, Variants } from "framer-motion";

type SkillGroup = {
  category: string;
  items: string[];
};

const skills: SkillGroup[] = [
  {
    category: "Languages",
    items: ["JavaScript", "C", "C++", "Python"],
  },
  {
    category: "Frontend",
    items: [
      "Next.js",
      "React.js",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Responsive Design",
      "Framer Motion",
      "UI Frameworks",
    ],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "RESTful APIs"],
  },
  {
    category: "Database",
    items: ["MongoDB", "MySQL"],
  },
  {
    category: "Tools & Technologies",
    items: ["Git", "GitHub", "Postman", "JWT Authentication"],
  },
  {
    category: "Core Skills",
    items: ["Data Structures and Algorithms", "Object-Oriented Programming"],
  },
];

// Motion Variants
const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const groupItem: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const skillItem: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: "easeOut" } },
};

export default function Skills(): JSX.Element {
  return (
    <motion.section
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="py-12"
    >
      <motion.h2 variants={groupItem} className="text-3xl font-semibold mb-4">
        Skills
      </motion.h2>

      <div className="space-y-8">
        {skills.map((group) => (
          <motion.div key={group.category} variants={groupItem}>
            <h3 className="text-xl font-medium mb-3">{group.category}</h3>

            <div className="flex flex-wrap gap-3">
              {group.items.map((skill) => (
                <motion.span
                  key={skill}
                  variants={skillItem}
                  className="px-3 py-0.5 text-sm font-medium border border-foreground/30 rounded-full transition hover:bg-foreground hover:text-background hover:cursor-pointer"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
