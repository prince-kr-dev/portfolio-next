import React from "react";
import InfoCard from "./InfoCard";
import { LaptopMinimal, Layers } from "lucide-react";

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
    ],
  };

  return (
    <div className="max-w-6xl mx-auto px-6 md:px-25 flex flex-col gap-3 items-start pt-20 py-10 md:py-20">
      <h1 className="text-3xl font-bold">Building Digital Experiences</h1>
      <p className="text-xl opacity-80 mb-10">
        I specialize in creating stunning user interfaces and developing
        high-quality applications that stand out.
      </p>

      <div className="mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <InfoCard icon={<LaptopMinimal size={38} color="var(--heading)"/>} {...services} />
          <InfoCard icon={<Layers size={38} color="var(--heading)"/>} {...tools} />
        </div>
      </div>
    </div>
  );
}

export default Services;
