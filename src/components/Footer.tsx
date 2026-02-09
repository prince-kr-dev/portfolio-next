import React from "react";
import Image from "next/image";
import { Github, Linkedin, Send, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-foreground/30 pt-10 pb-4">
      <div className="max-w-6xl mx-auto px-6 md:px-25">
        {/* Top Section: Name and Description */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-6">
          <div className="space-y-1">
            <h2 className="text-2xl font-bold tracking-tight">Prince Kumar</h2>
            <div className="flex items-center gap-1">
              <Image
                src="/images/india.png"
                alt="India Flag"
                width={25}
                height={25}
              />
              <span className="text-sm font-medium">Based In India</span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/prince-kr-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="px-1.5 py-1.5 border border-foreground/30 transition-all cursor-pointer rounded-lg hover:bg-foreground hover:text-background"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/prince-k07/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-1.5 py-1.5 border border-foreground/30 transition-all cursor-pointer rounded-lg hover:bg-foreground hover:text-background"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://t.me/prince_kr007"
              target="_blank"
              className="px-1.5 py-1.5 border border-foreground/30 transition-all cursor-pointer rounded-lg hover:hover:bg-foreground hover:text-background"
            >
              <Send size={20} />
            </a>
            <a
              href="https://x.com/kr_prince07"
              target="_blank"
              rel="noopener noreferrer"
              className="px-1.5 py-1.5 border border-foreground/30 transition-all cursor-pointer rounded-lg hover:hover:bg-foreground hover:text-background"
            >
              <Twitter size={20} />
            </a>
          </div>
        </div>

        <p className="text-xs">
          © {currentYear} Prince. All rights are reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
