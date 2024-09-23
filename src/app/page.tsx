// "use client";
import HeroSection from "@/components/building-blocks/hero-section";
import Projects from "@/components/building-blocks/projects";

export default function Home() {
  return (
    <div className="sm:px-4 md:px-16 ">
      <div className="">
        <HeroSection />
      </div>
      <Projects />
    </div>
  );
}
