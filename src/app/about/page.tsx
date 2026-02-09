import Skills from "@/components/Skills";
import { FileText } from "lucide-react";
import Image from "next/image";

function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 md:px-25 flex flex-col gap-3 items-start py-6 md:py-10">
      <h1 className="text-4xl font-bold">About</h1>
      <p className="text-lg text-foreground/80 mb-10">
        A glimpse into my journey, skills, and passion for web development!
      </p>
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:gap-8">
        <Image
          className="rounded-full shadow-[inset_0_20px_40px_var(--heading)]"
          src="/images/avatar.png"
          alt="avatar"
          width={160}
          height={160}
        />
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl md:text-4xl font-bold">
            <span className="text-heading">Prince Kumar</span>
          </h1>
          <h1 className="text-xl ">Full Stack Developer</h1>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit font-medium px-6 py-1 rounded-lg border transition-all cursor-pointer bg-background text-foreground border-(--foreground)/35 hover:bg-foreground hover:text-background flex items-center gap-3"
          >
            <FileText size={18} />
            Resume
          </a>
        </div>
      </div>
      <p className="text-lg mt-4">
        A <span className="font-bold">Full-stack MERN developer</span> with
        strong design sense and a focus on clean,user-friendly interfaces. I
        enjoy turning ideas into simple, elegant web experiences where
        creativity meets functionality.
      </p>
      <p className="text-lg mt-5">
        Skilled in{" "}
        <span className="font-bold">
          JavaScript, React.js, Node.js, Express.js, and MongoDB,
        </span>{" "}
        with hands-on experience building interactive and responsive
        applications. I’ve solved{" "}
        <span className="font-bold">450+ DSA problems</span> and love creating
        efficient, scalable solutions while working with modern technologies and
        innovative teams.
      </p>

      <Skills />
    </div>
  );
}

export default AboutPage;
