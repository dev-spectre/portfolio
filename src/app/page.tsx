import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="bg-grid min-h-screen">
      <Navbar />
      <Hero />
    </div>
  );
}
