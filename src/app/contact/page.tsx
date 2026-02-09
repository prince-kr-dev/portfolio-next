import { FileText } from "lucide-react";

export default function ContactSection() {
  return (
    <div className="max-w-6xl mx-auto px-6 md:px-20 py-10 flex flex-col items-center">
      {/* Top Heading */}
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl font-bold">Let’s Work Together</h1>
        <p className="text-lg text-foreground/80 mt-4">
          A simple way to reach me for projects, collaborations, or exciting
          opportunities.
        </p>
      </div>

      {/* Availability */}
      <div className="mt-8 flex items-center gap-3 border border-dashed border-foreground/60 px-4 py-2 rounded-full">
        <div className="h-3 w-3 bg-green-500 rounded-full animate-pulse"></div>
        <p className="text-sm font-medium">Available for opportunities</p>
      </div>

      {/* Resume Button */}
      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 flex items-center gap-2 px-6 py-3 border rounded-md hover:bg-foreground hover:text-background transition"
      >
        <FileText size={18} />
        View Resume
      </a>

      {/* Form Card */}
      <div className="w-full flex justify-center mt-16">
        <div className="w-full max-w-2xl border border-foreground/20 rounded-2xl p-4 sm:p-8 backdrop-blur-sm">
          {/* Form Heading */}
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Send Me a Message
          </h2>

          <form
            action="mailto:princekush.kr008@gmail.com"
            method="POST"
            encType="text/plain"
            className="flex flex-col gap-6"
          >
            {/* Name */}
            <div className="flex flex-col gap-2">
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
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
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
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2">
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
            </div>

            <button
              type="submit"
              className="mt-2 w-fit px-6 py-3 border rounded-md hover:bg-foreground hover:text-background transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
