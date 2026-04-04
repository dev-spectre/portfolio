export default function Hero() {
  return (
    <section id="about" className="pt-32  px-5 text-secondary">
      <div className="container mx-auto">
        <p className="mb-2 text-sm">
          visitor@spectre.us.kg:~$ <span className="text-accent block sm:inline mb-3">init --portfolio</span>
        </p>
        <div className="flex">
          <h1 className="text-white mb-5 text-5xl md:text-6xl uppercase font-black tracking-wide">
            Abhishek{" "}
            <div className="flex items-stretch">
              Dallas
              <span className="bg-accent w-1 rounded-xs inline-block my-1 blink"></span>
            </div>
          </h1>
        </div>
        <p>Builder by instinct &middot; Hacker by habit &middot; Curious by default</p>
        <div className="flex flex-wrap gap-2 mt-3">
          <div className="rounded border items-center flex gap-1 border-accent text-accent px-2 py-1">
            <div className="size-1.5 animate-pulse bg-accent rounded-full"></div>
            <p>Available for freelance</p>
          </div>
          <div className="rounded border border-secondary text-secondary hover:border-accent hover:text-accent px-2 py-1">
            <p>Fullstack Developer</p>
          </div>
          <div className="rounded hidden md:block border border-secondary text-secondary hover:border-accent hover:text-accent px-2 py-1">
            <p>Kochi, IN</p>
          </div>
        </div>
      </div>
    </section>
  );
}
