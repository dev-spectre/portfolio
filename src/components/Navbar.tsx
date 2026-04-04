"use client";

import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    {
      name: "About",
      href: "#about",
    },
    {
      name: "Works",
      href: "#works",
    },
    {
      name: "Skills",
      href: "#skills",
    },
    {
      name: "Terminal",
      href: "#terminal",
    },
    {
      name: "Contact",
      href: "#contact",
    },
  ];

  return (
    <div className="fixed isolate z-50 inset-0 bottom-auto">
      <nav className="border-b bg-background md:bg-transparent md:backdrop-blur-sm border-b-border px-5 text-lg py-4">
        <div className="flex justify-between container mx-auto items-center">
          <div className="font-bold text-white hover:text-accent">
            spectre<span className="text-accent blink">_</span>
          </div>
          <ul className="md:flex tracking-wide hidden text-secondary uppercase gap-5">
            {navLinks.map((link) => (
              <li key={link.name} className="hover:text-accent transition-colors ease-in">
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>
          <div>
            <button
              className="border pt-2 pb-3 group border-border w-8 text-background px-1.5 rounded"
              onClick={() => {
                if (window.innerWidth < 768) {
                  setIsMenuOpen((prev) => !prev);
                }
              }}>
              <div className="border-b group-hover:border-accent border-b-secondary mb-1 w-full"></div>
              <div className="border-b group-hover:border-accent border-b-secondary h-1 w-[70%]"></div>
              <div></div>
            </button>
          </div>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-background border-b border-border flex flex-col items-center py-4 md:hidden">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-secondary uppercase py-2 hover:text-accent transition-colors ease-in" onClick={() => setIsMenuOpen(false)}>
              {link.name}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
