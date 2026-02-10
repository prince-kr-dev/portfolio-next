"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ui/theme-toggle";
import { motion, AnimatePresence, Variants } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menuVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const linkVariants: Variants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 25 },
    },
  };

  return (
    <nav
      className="fixed top-0 left-0 w-full backdrop-blur-md shadow-sm shadow-foreground/5 z-50"
      style={{ backgroundColor: "var(--background)" }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-25 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl md:text-3xl font-bold"
          style={{ color: "var(--foreground)" }}
        >
          Prince.
        </Link>

        <div className="hidden md:flex items-center gap-6 ml-auto">
          <ul className="flex gap-2 font-medium">
            <li>
              <Link href="/" className="transition-colors hover:bg-gray-500/20 py-2 px-4 rounded-lg">Home</Link>
            </li>
            <li>
              <Link href="/about" className="transition-colors hover:bg-gray-500/20 py-2 px-4 rounded-lg">About</Link>
            </li>
            <li>
              <Link href="/projects" className="transition-colors hover:bg-gray-500/20 py-2 px-4 rounded-lg">Projects</Link>
            </li>
            <li>
              <Link href="/contact" className="transition-colors hover:bg-gray-500/20 py-2 px-4 rounded-lg">Contact</Link>
            </li>
          </ul>
          <ThemeToggle />
        </div>

        <div className="flex md:hidden items-center gap-4 ml-auto">
          <ThemeToggle />
          <button
            onClick={() => setOpen(!open)}
            className="px-1.5 py-1.5 border border-foreground/30 transition-all cursor-pointer rounded-lg hover:bg-gray-500/20"
            style={{ color: "var(--foreground)" }}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="md:hidden shadow-md"
            style={{ backgroundColor: "var(--background)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.ul
              className="flex flex-col items-end gap-5 py-6 pr-6 font-medium"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={menuVariants}
            >
              <motion.li variants={linkVariants}>
                <Link
                  href="/"
                  onClick={() => setOpen(false)}
                  className="text-3xl font-bold"
                  style={{ color: "var(--foreground)" }}
                >
                  Home
                </Link>
              </motion.li>

              <motion.li variants={linkVariants}>
                <Link
                  href="/about"
                  onClick={() => setOpen(false)}
                  className="text-3xl font-bold"
                  style={{ color: "var(--foreground)" }}
                >
                  About
                </Link>
              </motion.li>

              <motion.li variants={linkVariants}>
                <Link
                  href="/projects"
                  onClick={() => setOpen(false)}
                  className="text-3xl font-bold"
                  style={{ color: "var(--foreground)" }}
                >
                  Projects
                </Link>
              </motion.li>

              <motion.li variants={linkVariants}>
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="text-3xl font-bold"
                  style={{ color: "var(--foreground)" }}
                >
                  Contact
                </Link>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
