type CardProps = {
    icon: React.ReactNode;
    title: string;
    description: string;
    items: string[];
  };
  
  export default function InfoCard({ icon, title, description, items }: CardProps) {
    return (
      <div className="hover:bg-heading/10 transition-all border rounded-2xl text-foreground border-(--foreground)/35 p-4">
        <div className="flex items-center gap-3 mb-4">
          {icon}
          <h3 className="text-3xl font-bold">{title}</h3>
        </div>
  
        <p className="text-lg text-foreground/70 mb-4">{description}</p>
  
        <ul>
          {items.map((item, i) => (
            <li key={i} className="text-md font-medium mt-1">{item}</li>
          ))}
        </ul>
      </div>
    );
  }
  