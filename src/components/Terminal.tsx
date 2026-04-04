"use client";

import { JSX, useRef, useState } from "react";

export default function Terminal() {
  const [commandLines, setCommandLines] = useState<CommandLine[]>([{ input: "", output: { output: "" }, autoFocus: false, disabled: false }]);

  return (
    <section id="terminal">
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
        <div className="bg-background p-5 h-94 overflow-hidden space-y-5">
          {commandLines.map((commandLine, index) => (
            <CommandLine key={`${index}/${commandLines.length}`} {...{ commandLine, setCommandLines }} />
          ))}
        </div>
      </article>
    </section>
  );
}

interface CommandOutput {
  sideEffect?: () => void;
  output: JSX.Element | string;
}

interface CommandLine {
  input: string;
  output?: CommandOutput;
  autoFocus?: boolean;
  disabled: boolean;
}

interface CommandLineProps {
  commandLine: CommandLine;
  setCommandLines: React.Dispatch<React.SetStateAction<CommandLine[]>>;
}

function CommandLine({ commandLine, setCommandLines }: CommandLineProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [inputFocused, setInputFocused] = useState(false);

  return (
    <div className="flex gap-2">
      <div className="text-accent">$</div>
      <div className="w-full">
        <div className="relative">
          {!inputFocused && !commandLine.input && <div className="w-0.5 rounded-md blink bg-accent absolute top-0.5 bottom-0.5 left-0"></div>}
          <input
            ref={inputRef}
            type="text"
            className="bg-transparent outline-none text-accent w-full"
            value={commandLine.input}
            onFocus={() => setInputFocused(true)}
            onBlur={() => setInputFocused(false)}
            autoFocus={commandLine.autoFocus}
            disabled={commandLine.disabled || false}
            onChange={(e) => {
              setCommandLines((commandLines) => [...commandLines.slice(0, commandLines.length - 1), { ...commandLine, input: e.target.value }]);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !!inputRef.current) {
                const output = executeCommand(commandLine.input);
                if (commandLine.input === "clear") {
                  setCommandLines([{ input: "", output: { output: "" }, autoFocus: true, disabled: false }]);
                } else {
                  inputRef.current.disabled = true;
                  setCommandLines((commandLines) => [
                    ...commandLines.slice(0, commandLines.length - 1),
                    { ...commandLine, output, disabled: true },
                    { input: "", output: { output: "" }, autoFocus: true, disabled: false },
                  ]);
                }
              }
            }}
          />
        </div>
        {commandLine.input !== "clear" && commandLine.output && <CommandOutput {...commandLine.output} />}
      </div>
    </div>
  );
}

type CommandOutputProps = CommandOutput;

function CommandOutput({ sideEffect, output }: CommandOutputProps) {
  sideEffect?.();

  return typeof output === "string" ? <pre className="text-accent mt-2 text-wrap">{output}</pre> : output;
}

function executeCommand(command: string): CommandOutput {
  let isBlured = false;
  const sideEffectExit = () => {
    setTimeout(() => {
      if (!isBlured) {
        const focusedInput = document.querySelector("input:focus") as HTMLInputElement | null;
        focusedInput?.blur();
        isBlured = true;
      }
    }, 0);
  };

  const sideEffectRemoveRecursively = () => {
    const setup = document.getElementById("setup") as HTMLElement | null;
    const skills = document.getElementById("skills") as HTMLElement | null;
    const contact = document.getElementById("contact") as HTMLElement | null;
    const works = document.getElementById("works") as HTMLElement | null;
    const hero = document.getElementById("about") as HTMLElement | null;
    const navbar = document.querySelector("nav") as HTMLElement | null;
    const terminal = document.getElementById("terminal") as HTMLElement | null;

    const elementsToRemove = [setup, skills, contact, works, hero, navbar, terminal].filter((el) => el !== null) as HTMLElement[];

    for (let i = 0; i < elementsToRemove.length; i++) {
      const element = elementsToRemove[i];
      setTimeout(
        () => {
          element.remove();
        },
        400 + i * 400,
      );
    }

    setTimeout(() => {
      window.location.reload();
    }, 400 * elementsToRemove.length + 3000);
  };

  const helpMessage = `Usage: [command]

Available commands:

  whoami          display current user information
  clear           clear the terminal screen
  sudo rm -rf /   delete everything (please don't)
  help            display this help message
  exit            exit the terminal

Examples:
  $ whoami
  $ sudo rm -rf /   (seriously, don't)`;

  switch (command) {
    case "help":
      return {
        output: helpMessage,
      };

    case "whoami":
      return {
        output:
          "I'm Abhishek Dallas, a fullstack developer with a passion for building impactful projects. I specialize in TypeScript and have experience with Next.js, TailwindCSS, PostgreSQL, Prisma, Docker, Git, and Linux.",
      };

    case "exit":
      return {
        output: "Bye!",
        sideEffect: sideEffectExit,
      };

    case "sudo rm -rf /":
      return {
        output: "",
        sideEffect: sideEffectRemoveRecursively,
      };
    default:
      return {
        output: `Command not found: ${command}, type "help" for a list of available commands.`,
      };
  }
}
