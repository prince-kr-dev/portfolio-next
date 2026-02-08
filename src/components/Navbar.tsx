"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ui/theme-toggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 w-full backdrop-blur-md shadow-sm shadow-foreground/5 z-50"
      style={{ backgroundColor: "var(--background)" }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-25 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl md:text-3xl font-bold"
          style={{ color: "var(--foreground)" }}
        >
          Prince.
        </Link>

        {/* Desktop Menu + ThemeToggle */}
        <div className="hidden md:flex items-center gap-6 ml-auto">
          <ul className="flex gap-2 font-medium">
            <li>
              <Link
                className="transition-colors hover:bg-gray-500/20 py-2 px-4 rounded-lg"
                href="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="transition-colors hover:bg-gray-500/20 py-2 px-4 rounded-lg"
                href="/about"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="transition-colors hover:bg-gray-500/20 py-2 px-4 rounded-lg"
                href="/projects"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                className="transition-colors hover:bg-gray-500/20 py-2 px-4 rounded-lg"
                href="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button + ThemeToggle */}
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

      {/* Mobile Menu */}
      {open && (
        <div
          className="md:hidden shadow-md "
          style={{ backgroundColor: "var(--background)" }}
        >
          <ul className="flex flex-col items-end gap-5 py-6 pr-6 font-medium">
            <li>
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="text-3xl font-bold"
                style={{ color: "var(--foreground)" }}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                onClick={() => setOpen(false)}
                className="text-3xl font-bold"
                style={{ color: "var(--foreground)" }}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                onClick={() => setOpen(false)}
                className="text-3xl font-bold"
                style={{ color: "var(--foreground)" }}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="text-3xl font-bold"
                style={{ color: "var(--foreground)" }}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
