import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abhishek Dallas",
  description: "Full-stack developer. I build web apps, APIs, and backend systems — and occasionally touch hardware. Available for freelance.",
  openGraph: {
    title: "Abhishek Dallas - Full Stack Developer",
    description: "Builder by instinct. Hacker by habit. Curious by default.",
    url: "https://spectre.us.kg",
    siteName: "Abhishek Dallas",
    locale: "en-IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jetbrainsMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
