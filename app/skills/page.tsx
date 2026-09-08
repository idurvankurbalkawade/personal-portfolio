import Skills from "@/components/Skills";

export default function SkillsPage() {
  return (
    <main>
      <section className="py-24 min-h-screen bg-gradient-to-b from-[#071023] to-[#021022]">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Skills</h1>
          <p className="text-gray-300 mb-8">Tools and technologies I use to design and deploy AI-driven systems.</p>

          <Skills />
        </div>
      </section>
    </main>
  );
}
