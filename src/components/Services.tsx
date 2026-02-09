"use client";

import React from "react";
import InfoCard from "./InfoCard";
import { LaptopMinimal, Layers } from "lucide-react";
import { motion, Variants } from "framer-motion";

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18, // cards appear one by one
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

function Services() {
  const services = {
    title: "What I can do",
    description:
      "I can help develop solutions that will help you grow your business.",
    items: [
      "Fullstack Web Development",
      "Frontend Development",
      "Backend Development",
      "API Integration",
    ],
  };

  const tools = {
    title: "Tools I Use",
    description:
      "I use the latest tools and technologies to build functional and scalable products.",
    items: [
      "Frontend: Next.JS, React.JS, Tailwind CSS",
      "Backend: Node.JS, Express.JS, REST API",
      "Database: MongoDB, MySQL",
      "Tools: Git, GitHub, VS Code",
    ],
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="max-w-6xl mx-auto px-6 md:px-25 flex flex-col gap-3 items-start pt-20 py-10 md:py-20"
    >
      <motion.h1 variants={item} className="text-3xl font-bold">
        Building Digital Experiences
      </motion.h1>

      <motion.p variants={item} className="text-xl opacity-80 mb-10">
        I specialize in creating stunning user interfaces and developing
        high-quality applications that stand out.
      </motion.p>

      {/* Grid as motion container */}
      <motion.div
        variants={container} 
        className="mx-auto w-full grid md:grid-cols-2 gap-8"
      >
        {/* Card 1 */}
        <motion.div
          variants={item}
          whileHover={{ y: -6 }}
          transition={{ type: "spring", stiffness: 200, damping: 18 }}
        >
          <InfoCard
            icon={<LaptopMinimal size={38} color="var(--heading)" />}
            {...services}
          />
        </motion.div>

        {/* Card 2 */}
        <motion.div
          variants={item} 
          whileHover={{ y: -6 }}
          transition={{ type: "spring", stiffness: 200, damping: 18 }}
        >
          <InfoCard
            icon={<Layers size={38} color="var(--heading)" />}
            {...tools}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Services;
