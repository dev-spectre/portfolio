import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Works from "@/components/Works";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="bg-grid min-h-screen">
      <Navbar />
      <Hero />
      <Works />
      <Skills />
    </div>
  );
}
