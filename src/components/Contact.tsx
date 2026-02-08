import { MessageSquareMore, Rocket } from "lucide-react";

function Contact() {
    return (
      <div className="max-w-6xl mx-auto px-6 md:px-25 flex flex-col gap-3 items-start pb-6 md:pb-20">
        <h1 className="text-3xl font-medium my-2 flex items-center">
          <span className="bg-gray-600/50 text-foreground px-2 py-2 rounded-full mr-3">
            <Rocket/>
          </span>
          Let's work together
        </h1>
        <p className="text-lg">
          Feel free to reach out! Whether you have a project idea, collaboration
          proposal, or just want to say hello, drop me a message. Let’s build
          something amazing together!
        </p>
        <a
          href="https://t.me/prince_kr007"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium border border-foreground/40 w-fit px-3 py-1 rounded-md transition-all flex items-center gap-3 hover:bg-gray-500/20"
        >
          Say hello
          <MessageSquareMore size={18} />
        </a>
      </div>
    );
  }
  
  export default Contact;
  