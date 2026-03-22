// lib/projects.ts

export type Project = {
  slug: string;
  index: string;
  name: string;
  category: string;
  year: string;
  role: string;
  status: "live" | "private" | "deployed";
  tagline: string;
  metaDescription: string;
  links: {
    live?: string;
    github?: { label: string; url: string }[];
  };
  metrics: { value: string; label: string }[];
  problem: string;
  solution: string;
  stack: Record<string, { chips: string[]; highlighted: string[] }>;
  screenshots: string[];
  next: string;
};

export const projects: Project[] = [
  {
    slug: "punit-mishra-prep",
    index: "01",
    name: "Punit Mishra Prep",
    category: "Freelance · Web App",
    year: "2025",
    role: "Freelance Developer",
    status: "live",
    tagline: "Production GRE prep platform for a 337/340 scorer. Real users, real payments, real OAuth — built end-to-end.",
    metaDescription:
      "Production GRE prep platform built for NextEraCode. Includes Razorpay payment integration, Google OAuth, course enrollment, and 1:1 tutoring bookings — built with Next.js and PostgreSQL.",
    links: {
      live: "https://www.punitmishraprep.com",
    },
    metrics: [
      { value: "Production", label: "Live & Real Users" },
      { value: "Razorpay", label: "Payments Integration" },
      { value: "Google OAuth", label: "Authentication" },
    ],
    problem:
      "Punit Mishra — a 337/340 GRE scorer — needed a platform to sell his GRE Universe Course and offer 1:1 tutoring bookings. Existing solutions were generic, expensive to maintain, or didn't give him full control over his content and users.",
    solution:
      "Built a full-stack production platform with Next.js — handling course enrollment, 1:1 tutoring bookings, and content delivery. Integrated Razorpay for real payment flows and Google OAuth for frictionless sign-in. Backed by a type-safe Prisma + PostgreSQL stack for reliability and easy iteration.",
    stack: {
      Frontend: {
        chips: ["Next.js", "TypeScript", "TailwindCSS"],
        highlighted: ["Next.js", "TypeScript", "TailwindCSS"],
      },
      Backend: {
        chips: ["Prisma", "PostgreSQL"],
        highlighted: ["Prisma", "PostgreSQL"],
      },
      Integrations: {
        chips: ["Razorpay", "Google OAuth"],
        highlighted: ["Razorpay", "Google OAuth"],
      },
      Hosting: {
        chips: ["Vercel"],
        highlighted: ["Vercel"],
      },
    },
    screenshots: ["/images/pm-prep/home.png", "/images/pm-prep/login.png", "/images/pm-prep/dashboard.png"],
    next: "automatic-bell-system",
  },
  {
    slug: "automatic-bell-system",
    index: "02",
    name: "Automatic Bell System",
    category: "IoT · Full Stack",
    year: "2024",
    role: "Sole Developer",
    status: "deployed",
    tagline: "End-to-end IoT scheduling system for a college. One developer. Hardware, backend, and desktop — all of it.",
    metaDescription:
      "End-to-end IoT scheduling system built for a college. Cloud backend on Cloudflare Workers, cross-platform desktop app in Tauri + Rust, and a Raspberry Pi Pico W microcontroller — all by one developer.",
    links: {
      github: [
        {
          label: "Frontend",
          url: "https://github.com/dev-spectre/automatic-bell-frontend",
        },
        {
          label: "Backend",
          url: "https://github.com/dev-spectre/automatic-bell-backend",
        },
        {
          label: "Microcontroller",
          url: "https://github.com/dev-spectre/automatic-bell-microcontroller",
        },
      ],
    },
    metrics: [
      { value: "3x", label: "Repos (Full Stack)" },
      { value: "1", label: "Sole Developer" },
      { value: "Cross-Platform", label: "Win · Linux · macOS" },
    ],
    problem:
      "The college bell system was entirely manual — a staff member had to physically ring bells on schedule, every day, for every period. Error-prone, inflexible, and impossible to adapt for exams or holidays without manual intervention.",
    solution:
      "Built a Raspberry Pi Pico W controller that runs schedules autonomously without needing a network connection. A Tauri desktop app lets admins configure weekly, monthly, and one-time schedules over Wi-Fi. A Cloudflare Workers backend handles JWT authentication and dynamic device IP discovery.",
    stack: {
      Backend: {
        chips: ["Hono.js", "TypeScript", "Cloudflare Workers", "Prisma", "PostgreSQL"],
        highlighted: ["Hono.js", "TypeScript", "Cloudflare Workers", "Prisma", "PostgreSQL"],
      },
      "Desktop App": {
        chips: ["React", "TailwindCSS", "Rust", "Tauri"],
        highlighted: ["React", "TailwindCSS"],
      },
      Hardware: {
        chips: ["Raspberry Pi Pico W", "MicroPython", "DS1302 RTC", "Relay Module"],
        highlighted: ["Raspberry Pi Pico W", "MicroPython"],
      },
    },
    screenshots: ["/images/bell-system/dashboard.png", "/images/bell-system/schedule.png", "/images/bell-system/edit_schedule.png"],
    next: "secure-private-cloud",
  },
  {
    slug: "secure-private-cloud",
    index: "03",
    name: "Secure Private Cloud",
    category: "Infrastructure · DevOps",
    year: "2025",
    role: "Developer (Team of 3)",
    status: "deployed",
    tagline: "Self-hosted private cloud for a manufacturing company. 94% less power than a traditional server. Deployed in 20 minutes.",
    metaDescription:
      "Self-hosted private cloud infrastructure for Sakthi Gear Products Pvt. Ltd. Built on Raspberry Pi 5 with Nextcloud, LAMP stack, DuckDNS, and SSL. Achieves 94% power reduction vs traditional servers.",
    links: {
      github: [
        {
          label: "Install Script",
          url: "https://github.com/dev-spectre/nextcloud",
        },
      ],
    },
    metrics: [
      { value: "94%", label: "Power Reduction" },
      { value: "₹80/mo", label: "vs ₹1,440 traditional" },
      { value: "~20 min", label: "Automated Deploy" },
    ],
    problem:
      "Sakthi Gear Products Pvt. Ltd. managed internal documents — CAD files, PDF reports, spreadsheets, meeting records — across third-party cloud providers like Google Drive. This raised concerns around data privacy, recurring subscription costs, and lack of administrative control over sensitive engineering files.",
    solution:
      "Designed and deployed a self-hosted Nextcloud instance on a Raspberry Pi 5 using a full LAMP stack. Enabled remote access via DuckDNS dynamic DNS and enforced HTTPS via SSL. Wrote a custom Bash automation script that brings a fresh server from OS flash to fully operational cloud in approximately 15–20 minutes. Achieved 94% power reduction compared to traditional enterprise servers.",
    stack: {
      Hardware: {
        chips: ["Raspberry Pi 5", "256GB SSD"],
        highlighted: ["Raspberry Pi 5", "256GB SSD"],
      },
      "OS & Server": {
        chips: ["Linux (Raspberry Pi OS)", "Apache", "MariaDB", "PHP"],
        highlighted: ["Linux (Raspberry Pi OS)"],
      },
      Platform: {
        chips: ["Nextcloud"],
        highlighted: ["Nextcloud"],
      },
      Networking: {
        chips: ["DuckDNS", "Port Forwarding", "SSL", "HTTPS"],
        highlighted: ["DuckDNS", "Port Forwarding"],
      },
      Automation: {
        chips: ["Bash Deployment Script"],
        highlighted: [],
      },
    },
    screenshots: ["/images/private-cloud/setup.jpg", "/images/private-cloud/upload.jpg", "/images/private-cloud/nextcloud-login.jpg"],
    next: "nyxia",
  },

  {
    slug: "nyxia",
    index: "04",
    name: "Nyxia",
    category: "Frontend · Static",
    year: "2024",
    role: "Solo Developer",
    status: "live",
    tagline: "High-performance landing page for a freelance agency. Blazing fast, fully responsive, deployed on Vercel.",
    metaDescription:
      "High-performance static landing page for a freelance agency. Built with Astro for zero-JS-by-default output, styled with TailwindCSS, and deployed on Vercel for global edge delivery.",
    links: {
      live: "https://nyxia.vercel.app",
      github: [
        {
          label: "GitHub",
          url: "https://github.com/dev-spectre/nyxia-portfolio",
        },
      ],
    },
    metrics: [
      { value: "Static", label: "Zero JS Runtime" },
      { value: "100%", label: "Responsive" },
      { value: "Vercel", label: "Edge Deployment" },
    ],
    problem: "Needed a fast, clean, professional landing page for a freelance agency that prioritises performance and design over complexity — without the overhead of a heavy framework or runtime.",
    solution: "Built with Astro for zero-JS-by-default static output and styled with TailwindCSS for a clean, responsive UI. Deployed on Vercel for global edge delivery with zero configuration.",
    stack: {
      Framework: {
        chips: ["Astro"],
        highlighted: ["Astro"],
      },
      Styling: {
        chips: ["TailwindCSS"],
        highlighted: ["TailwindCSS"],
      },
      Hosting: {
        chips: ["Vercel"],
        highlighted: ["Vercel"],
      },
    },
    screenshots: ["/images/nyxia/home.png", "/images/nyxia/about.png", "/images/nyxia/contact.png"],
    next: "punit-mishra-prep",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getNextProject(currentSlug: string): Project {
  const current = getProjectBySlug(currentSlug)!;
  return getProjectBySlug(current.next)!;
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}
