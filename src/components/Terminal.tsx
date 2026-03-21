"use client";

import { useRef, useState } from "react";

export default function Terminal() {
  const [commandLines, setCommandLines] = useState<CommandLine[]>([{ input: "", output: "Welcome to the terminal!" }]);

  return (
    <section>
      <h2 className="text-accent uppercase mb-5 text-xl">Terminal</h2>
      <article className="rounded-lg overflow-hidden border border-border">
        <div className="flex gap-4 bg-foreground items-center px-5 py-1">
          <div className="flex gap-2">
            <div className="size-2 rounded-full bg-orange-600"></div>
            <div className="size-2 rounded-full bg-yellow-600"></div>
            <div className="size-2 rounded-full bg-green-600"></div>
          </div>
          <p className="text-secondary">spectre@skynet:~$</p>
        </div>
        <div className="bg-background p-5 min-h-94">
          {commandLines.map((commandLine, index) => (
            <CommandLine key={index} {...{ commandLine, setCommandLines }} />
          ))}
        </div>
      </article>
    </section>
  );
}

interface CommandLine {
  input: string;
  output?: string;
}

interface CommandLineProps {
  commandLine: CommandLine;
  setCommandLines: React.Dispatch<React.SetStateAction<CommandLine[]>>;
}

function CommandLine({ commandLine, setCommandLines }: CommandLineProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <div className="flex gap-2">
      <div className="text-accent">$</div>
      <div className="w-full">
        <input
          ref={inputRef}
          type="text"
          className="bg-transparent outline-none text-accent w-full"
          value={commandLine.input}
          onChange={(e) => {
            setCommandLines((commandLines) => {
              return commandLines.slice(0, commandLines.length - 2).concat({
                ...commandLine,
                input: e.target.value,
              });
            });
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !!inputRef.current) {
              inputRef.current.disabled = true;
            }
          }}
        />
        {commandLine.output && <p className="text-accent mt-2 whitespace-pre-wrap">{commandLine.output}</p>}
      </div>
    </div>
  );
}
