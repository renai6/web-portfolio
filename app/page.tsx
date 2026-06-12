// app/page.tsx
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Experiences } from "@/components/Experiences";
import { Projects } from "@/components/Projects";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#050B1E] text-white overflow-hidden">
      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-green-700/10 blur-[140px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-green-600/10 blur-[140px]" />
      </div>

      {/* HERO SECTION */}
      <Hero />

      {/* SKILLS SECTION */}
      <Skills />

      {/* EXPERIENCE */}
      <Experiences />

      {/* PROJECTS */}
      <Projects />

      {/* FOOTER */}
      <Footer />
    </main>
  );
}
