import Hero from "@/components/Hero";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main>
      <Hero />

      <section id="about" className="py-24" style={{ background: 'radial-gradient(ellipse 60% 50% at 100% 50%, rgba(100,180,255,0.06) 0%, transparent 60%), radial-gradient(rgba(100,255,218,0.04) 1px, transparent 1px)', backgroundColor: '#0b1628', backgroundSize: 'auto, 28px 28px' }}>
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-4">About</h2>
          <p className="text-gray-300">I build intelligent Agentic AI systems using Python, FastAPI, LangChain and LangGraph. Passionate about designing scalable backend architectures and cutting-edge AI-powered tools.</p>
        </div>
      </section>

      <Skills />

      <section id="projects" className="py-24" style={{ background: 'radial-gradient(ellipse 60% 50% at 0% 50%, rgba(100,180,255,0.06) 0%, transparent 60%), radial-gradient(rgba(100,255,218,0.04) 1px, transparent 1px)', backgroundColor: '#0b1628', backgroundSize: 'auto, 28px 28px' }}>
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-4">Projects</h2>
          <p className="text-gray-300">Project showcase will go here.</p>
        </div>
      </section>
    </main>
  );
}