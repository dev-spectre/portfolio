import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Works from "@/components/Works";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="bg-grid min-h-screen">
      <Navbar />
      <Hero />
      <Works />
      <Skills />
      <Contact />
    </div>
  );
}
