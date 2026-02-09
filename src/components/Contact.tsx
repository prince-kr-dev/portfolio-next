"use client";

import { MessageSquareMore, Rocket } from "lucide-react";
import { motion, Variants } from "framer-motion";

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15, // elements animate one by one
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

function Contact() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="max-w-6xl mx-auto px-6 md:px-25 flex flex-col gap-3 items-start pb-6 md:pb-20"
    >
      {/* Heading */}
      <motion.h1
        variants={item}
        className="text-3xl font-medium my-2 flex items-center"
      >
        <span className="bg-gray-600/50 text-foreground px-2 py-2 rounded-full mr-3">
          <Rocket />
        </span>
        Let's work together
      </motion.h1>

      {/* Paragraph */}
      <motion.p variants={item} className="text-lg">
        Feel free to reach out! Whether you have a project idea, collaboration
        proposal, or just want to say hello, drop me a message. Let’s build
        something amazing together!
      </motion.p>

      {/* Button */}
      <motion.a
        variants={item}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
        href="https://t.me/prince_kr007"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm font-medium border border-foreground/40 w-fit px-3 py-1 rounded-md transition-all flex items-center gap-3 hover:bg-foreground hover:text-background"
      >
        Say hello
        <MessageSquareMore size={18} />
      </motion.a>
    </motion.div>
  );
}

export default Contact;
