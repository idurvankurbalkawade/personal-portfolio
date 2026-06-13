import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />

      <section id="about" className="py-24 bg-[#071023]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-4">About</h2>
          <p className="text-gray-300">I build intelligent Agentic AI systems using Python, FastAPI, LangChain and LangGraph. Passionate about designing scalable backend architectures and cutting-edge AI-powered tools.</p>
        </div>
      </section>

      <Skills />

      <section id="projects" className="py-24 bg-[#071023]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-4">Projects</h2>
          <p className="text-gray-300">Project showcase will go here.</p>
        </div>
      </section>
    </main>
  );
}