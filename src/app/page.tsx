import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Skills from "@/sections/Skills";
import Projects from "@/sections/Projects";
import Experience from "@/sections/Experience";
import Education from "@/sections/Education";
import Achievements from "@/sections/Achievements";
import BlogPreview from "@/sections/BlogPreview";
import Contact from "@/sections/Contact";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Achievements />
      <BlogPreview />
      <Contact />
    </div>
  );
}
