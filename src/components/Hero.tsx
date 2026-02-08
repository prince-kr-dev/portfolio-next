import Image from "next/image";

function Hero() {
  return (
    <>
      <div className="max-w-6xl mx-auto px-6 md:px-25 flex flex-col gap-3 items-start py-6 md:py-20">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:gap-8">
          <Image
            className="rounded-full shadow-[inset_0_20px_40px_var(--heading)]"
            src="/images/avatar.png"
            alt="avatar"
            width={160}
            height={160}
          />
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl sm:text-5xl md:text-5xl font-bold">
              Hey, I'm <span className="text-heading">Prince</span>
            </h1>
            <h1 className="text-3xl sm:text-4xl font-bold">
              A <span className="text-heading">Software Developer</span>
            </h1>
          </div>
        </div>
        <p className="text-xl mt-4 lg:w-170">
          A <span className="font-bold">full-stack developer </span>with strong
          design fundamentals and a passion for creating clean, user-friendly
          experiences. I turn ideas into simple, elegant interfaces where
          creativity meets function.
        </p>

        <div className="flex gap-3 mt-4 sm:mt-6">
          <button
            className="font-medium px-6 py-1 rounded-lg border transition-all cursor-pointer bg-background text-foreground border-(--foreground)/35 hover:bg-heading hover:text-white"
          >
            Resume
          </button>
          <button
            className="font-medium px-6 py-1 rounded-lg border transition-all cursor-pointer bg-background text-foreground border-(--foreground)/35 hover:bg-heading hover:text-white"
          >
            Projects
          </button>
          
        </div>
      </div>
    </>
  );
}

export default Hero;
