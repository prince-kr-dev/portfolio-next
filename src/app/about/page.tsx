"use client";

import Skills from "@/components/Skills";
import { FileText } from "lucide-react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

function AboutPage() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="max-w-6xl mx-auto px-6 md:px-25 flex flex-col gap-3 items-start py-6 md:py-10"
    >
      {/* Heading */}
      <motion.h1 variants={item} className="text-4xl font-bold">
        About
      </motion.h1>

      <motion.p variants={item} className="text-lg text-foreground/80 mb-10">
        A glimpse into my journey, skills, and passion for web development!
      </motion.p>

      {/* Image + Name + Resume */}
      <motion.div
        variants={item}
        className="flex flex-col gap-6 md:flex-row md:items-center md:gap-8"
      >
        <motion.div variants={item}>
          <Image
            className="rounded-full shadow-[inset_0_20px_40px_var(--heading)]"
            src="/images/avatar.png"
            alt="avatar"
            width={160}
            height={160}
          />
        </motion.div>

        <motion.div variants={item} className="flex flex-col gap-4">
          <h1 className="text-3xl md:text-4xl font-bold">
            <span className="text-heading">Prince Kumar</span>
          </h1>
          <h1 className="text-xl">Full Stack Developer</h1>

          <motion.a
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit font-medium px-6 py-1 rounded-lg border transition-all cursor-pointer bg-background text-foreground border-(--foreground)/35 hover:bg-foreground hover:text-background flex items-center gap-3"
          >
            <FileText size={18} />
            Resume
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Paragraphs */}
      <motion.p variants={item} className="text-lg mt-4">
        A <span className="font-bold">Full-stack MERN developer</span> with
        strong design sense and a focus on clean,user-friendly interfaces. I
        enjoy turning ideas into simple, elegant web experiences where
        creativity meets functionality.
      </motion.p>

      <motion.p variants={item} className="text-lg mt-5">
        Skilled in{" "}
        <span className="font-bold">
          JavaScript, React.js, Node.js, Express.js, and MongoDB,
        </span>{" "}
        with hands-on experience building interactive and responsive
        applications. I’ve solved{" "}
        <span className="font-bold">450+ DSA problems</span> and love creating
        efficient, scalable solutions while working with modern technologies and
        innovative teams.
      </motion.p>

        <Skills />
    </motion.div>
  );
}

export default AboutPage;
