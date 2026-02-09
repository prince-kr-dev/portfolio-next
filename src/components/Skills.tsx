import { JSX } from "react";

type SkillGroup = {
  category: string;
  items: string[];
};

const skills: SkillGroup[] = [
  {
    category: "Languages",
    items: ["JavaScript", "C", "C++", "Python"],
  },
  {
    category: "Frontend",
    items: [
      "Next.js",
      "React.js",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Responsive Design",
      "Framer Motion",
      "UI Frameworks",
    ],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "RESTful APIs"],
  },
  {
    category: "Database",
    items: ["MongoDB", "MySQL"],
  },
  {
    category: "Tools & Technologies",
    items: ["Git", "GitHub", "Postman", "JWT Authentication"],
  },
  {
    category: "Core Skills",
    items: ["Data Structures and Algorithms", "Object-Oriented Programming"],
  },
];

export default function Skills(): JSX.Element {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-semibold mb-4">Skills</h2>

      <div className="space-y-8">
        {skills.map((group) => (
          <div key={group.category}>
            <h3 className="text-xl font-medium mb-3">{group.category}</h3>

            <div className="flex flex-wrap gap-3">
              {group.items.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-0.5 text-sm font-medium border border-foreground/30 rounded-full transition hover:bg-foreground hover:text-background hover:cursor-pointer"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
