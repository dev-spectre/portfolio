import Link from "next/link";

interface TopbarProps {
  projectIndex: string;
  projectLength: number;
}

export default function Topbar({ projectIndex, projectLength }: TopbarProps) {
  return (
    <div className="border-b py-5 border-border text-secondary px-5">
      <div className="flex items-center justify-between container mx-auto">
        <Link href="/" className="hover:text-accent group flex items-center gap-2">
          <svg width="16" height="16" className="group-hover:stroke-accent stroke-secondary" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 8H2M2 8L7 3M2 8L7 13" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="hidden sm:inline-block">Back to Home</span>
        </Link>

        <p className="font-bold text-white hover:text-accent">
          spectre<span className="text-accent blink">_</span>
        </p>

        <p>
          {projectIndex} / {projectLength.toString().padStart(2, "0")}{" "}
        </p>
      </div>
    </div>
  );
}
