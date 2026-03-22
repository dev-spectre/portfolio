import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Works from "@/components/Works";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Setup from "@/components/Setup";
import Terminal from "@/components/Terminal";

export default function Home() {
  return (
    <div className="bg-grid min-h-screen">
      <Navbar />
      <Hero />
      <Works />
      <Skills />

      {/* <div className="px-5">
        <div className="lg:grid grid-cols-2 gap-10 container mx-auto">
          <Setup />
          <div className="mt-16">
            <Terminal />
          </div>
        </div>
      </div> */}
      <Contact />
    </div>
  );
}
