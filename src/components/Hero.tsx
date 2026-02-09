"use client";
import { FileText } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
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
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

function Hero() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="max-w-6xl mx-auto px-6 md:px-25 flex flex-col gap-3 items-start py-6 md:py-20"
    >
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:gap-8">
        {/* Avatar */}
        <motion.div variants={item}>
          <Image
            className="rounded-full shadow-[inset_0_20px_40px_var(--heading)]"
            src="/images/avatar.png"
            alt="avatar"
            width={160}
            height={160}
          />
        </motion.div>

        {/* Headings */}
        <div className="flex flex-col gap-2">
          <motion.h1
            variants={item}
            className="text-4xl sm:text-5xl md:text-5xl font-bold"
          >
            Hey, I'm <span className="text-heading">Prince</span>
          </motion.h1>

          <motion.h1 variants={item} className="text-3xl sm:text-4xl font-bold">
            A <span className="text-heading">Software Developer</span>
          </motion.h1>
        </div>
      </div>

      {/* Paragraph */}
      <motion.p variants={item} className="text-xl mt-4 lg:w-170">
        A <span className="font-bold">full-stack developer </span>with strong
        design fundamentals and a passion for creating clean, user-friendly
        experiences. I turn ideas into simple, elegant interfaces where
        creativity meets function.
      </motion.p>

      {/* Buttons */}
      <motion.div variants={item} className="flex gap-3 mt-4 sm:mt-6">
        <motion.a
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium px-4 h-10 rounded-lg border transition-all cursor-pointer bg-background text-foreground border-(--foreground)/35 hover:bg-foreground hover:text-background flex items-center gap-3"
        >
          <FileText size={18} />
          Resume
        </motion.a>

        <motion.a
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
          href="/projects"
          className="font-medium px-6 h-10 rounded-lg border transition-all cursor-pointer bg-background text-foreground border-(--foreground)/35 hover:bg-foreground hover:text-background flex items-center justify-center gap-1"
        >
          Projects
        </motion.a>
      </motion.div>
    </motion.div>
  );
}

export default Hero;
