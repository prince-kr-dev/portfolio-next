import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  slug: string;
  image: string;
  title: string;
  description: string;
  techStack: string[];
};

export default function ProjectCard({
  slug,
  image,
  title,
  description,
  techStack,
}: ProjectCardProps) {
  return (
    <Link href={`/projects/${slug}`}>
      <div className="group relative overflow-hidden border rounded-2xl cursor-pointer border-foreground/30 hover:border-foreground/70 transition-all h-full flex flex-col">

        {/* Image Section */}
        <div className="relative w-full h-60 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />

          {/* Overlay Text */}
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-white text-lg font-semibold">View</span>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-4 flex flex-col grow">
          <h3 className="text-2xl font-bold mb-3">{title}</h3>

          <p className="text-md mb-4 line-clamp-3">
            {description}
          </p>

          <div className="flex flex-wrap gap-2 mt-auto">
            {techStack.map((tech, i) => (
              <span
                key={i}
                className="text-sm font-medium px-2 py-1 bg-zinc-700/50 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

      </div>
    </Link>
  );
}
