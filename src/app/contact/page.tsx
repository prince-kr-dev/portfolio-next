"use client";

import { FileText } from "lucide-react";
import { motion, Variants } from "framer-motion";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function ContactSection() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="max-w-6xl mx-auto px-6 md:px-20 py-10 flex flex-col items-center"
    >
      {/* Top Heading */}
      <motion.div variants={item} className="text-center max-w-2xl">
        <h1 className="text-4xl font-bold">Let’s Work Together</h1>
        <p className="text-lg text-foreground/80 mt-4">
          A simple way to reach me for projects, collaborations, or exciting
          opportunities.
        </p>
      </motion.div>

      {/* Availability */}
      <motion.div
        variants={item}
        className="mt-8 flex items-center gap-3 border border-dashed border-foreground/60 px-4 py-2 rounded-full"
      >
        <div className="h-3 w-3 bg-green-500 rounded-full animate-pulse"></div>
        <p className="text-sm font-medium">Available for opportunities</p>
      </motion.div>

      {/* Resume Button */}
      <motion.a
        variants={item}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 flex items-center gap-2 px-6 py-3 border rounded-md hover:bg-foreground hover:text-background transition"
      >
        <FileText size={18} />
        View Resume
      </motion.a>

      {/* Form Card */}
      <motion.div
        variants={item}
        className="w-full flex justify-center mt-16"
      >
        <div className="w-full max-w-2xl border border-foreground/20 rounded-2xl p-4 sm:p-8 backdrop-blur-sm">
          {/* Form Heading */}
          <motion.h2 variants={item} className="text-2xl font-semibold mb-6 text-center">
            Send Me a Message
          </motion.h2>

          <form
            action="mailto:princekush.kr008@gmail.com"
            method="POST"
            encType="text/plain"
            className="flex flex-col gap-6"
          >
            {/* Name */}
            <motion.div variants={item} className="flex flex-col gap-2">
              <label htmlFor="name" className="text-md font-medium text-foreground/80">
                Your Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                required
                className="w-full px-4 py-3 border border-foreground/30 rounded-md bg-transparent outline-none focus:border-foreground transition"
              />
            </motion.div>

            {/* Email */}
            <motion.div variants={item} className="flex flex-col gap-2">
              <label htmlFor="email" className="text-md font-medium text-foreground/80">
                Your Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                className="w-full px-4 py-3 border border-foreground/30 rounded-md bg-transparent outline-none focus:border-foreground transition"
              />
            </motion.div>

            {/* Message */}
            <motion.div variants={item} className="flex flex-col gap-2">
              <label htmlFor="message" className="text-md font-medium text-foreground/80">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full px-4 py-3 border border-foreground/30 rounded-md bg-transparent outline-none resize-none focus:border-foreground transition"
              />
            </motion.div>

            {/* Submit Button */}
            <motion.button
              variants={item}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              type="submit"
              className="mt-2 w-fit px-6 py-3 border rounded-md hover:bg-foreground hover:text-background transition"
            >
              Send Message
            </motion.button>
          </form>
        </div>
      </motion.div>
    </motion.div>
  );
}
