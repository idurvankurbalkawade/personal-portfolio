"use client";
import React from "react";

type Skill = {
  name: string;
  emoji: string;
};

const skills: Skill[] = [
  { name: "Python", emoji: "🐍" },
  { name: "FastAPI", emoji: "⚡" },
  { name: "LangChain", emoji: "🔗" },
  { name: "LangGraph", emoji: "🕸️" },
  { name: "React", emoji: "⚛️" },
  { name: "Next.js", emoji: "▲" },
  { name: "Tailwind CSS", emoji: "🎨" },
  { name: "JavaScript", emoji: "🟨" },
  { name: "Git", emoji: "📦" },
  { name: "Docker", emoji: "🐳" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6" style={{ background: 'radial-gradient(ellipse 50% 60% at 0% 50%, rgba(100,255,218,0.07) 0%, transparent 55%), radial-gradient(rgba(100,255,218,0.04) 1px, transparent 1px)', backgroundColor: '#060f1e', backgroundSize: 'auto, 28px 28px' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-[#64ffda] font-mono text-sm mb-2">What I Work With</div>
          <h2 className="text-4xl font-bold text-white mb-4">Skills & Technologies</h2>
          <div className="w-16 h-[2px] bg-[#64ffda] mx-auto" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((s) => (
            <div
              key={s.name}
              className="bg-[#112240] border border-[#64ffda]/20 rounded-lg p-6 flex flex-col items-center justify-center gap-3 hover:border-[#64ffda] hover:scale-105 transition-all duration-300 cursor-default"
            >
              <span className="text-4xl">{s.emoji}</span>
              <p className="text-gray-300 text-sm font-medium text-center">{s.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

