import Link from "next/link";

interface BottombarProps {
  nextProjectSlug?: string;
  nextProjectName?: string;
  previousProjectSlug?: string;
  previousProjectName?: string;
}

export default function Bottombar({ nextProjectSlug, nextProjectName, previousProjectName, previousProjectSlug }: BottombarProps) {
  return (
    <div className="px-5 border-t border-border">
      <div className="py-5 flex flex-wrap gap-10 items-center justify-between container mx-auto">
        <div>
          {previousProjectSlug && (
            <Link href={`/projects/${previousProjectSlug}`} className="group">
              <span className="text-secondary block uppercase tracking-wide">Previous project</span>
              <span className="text-white capitalize group-hover:text-accent">{previousProjectName}</span>
            </Link>
          )}
        </div>
        <Link href={`/projects/${nextProjectSlug}`} className="group">
          <span className="text-secondary block uppercase tracking-wide">Next project</span>
          <span className="text-white capitalize group-hover:text-accent">{nextProjectName}</span>
        </Link>
      </div>
    </div>
  );
}
