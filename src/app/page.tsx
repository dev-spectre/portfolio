import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Works from "@/components/Works";

export default function Home() {
  return (
    <div className="bg-grid min-h-screen">
      <Navbar />
      <Hero />
      <Works />
    </div>
  );
}
