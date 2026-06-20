"use client";
import React, { useState, useEffect, useRef } from "react";

const categories = [
  {
    label: "Programming Languages",
    skills: [
      { name: "Python", emoji: "🐍" },
      { name: "Go", emoji: "🐹" },
      { name: "Java", emoji: "☕" },
    ],
  },
  {
    label: "Frameworks & Libraries",
    skills: [
      { name: "FastAPI", emoji: "⚡" },
      { name: "LangChain", emoji: "🔗" },
      { name: "LangGraph", emoji: "🕸️" },
    ],
  },
  {
    label: "Databases & Search",
    skills: [
      { name: "PostgreSQL", emoji: "🐘" },
      { name: "Redis", emoji: "🔴" },
      { name: "OpenSearch", emoji: "🔍" },
    ],
  },
  {
    label: "DevOps Tools",
    skills: [
      { name: "Docker", emoji: "🐳" },
      { name: "Kubernetes", emoji: "☸️" },
    ],
  },
];

const NAV_ICONS: Record<string, string> = {
  "Programming Languages": "</>",
  "Frameworks & Libraries": "⬡",
  "Databases & Search": "⬢",
  "DevOps Tools": "⚙",
};

export default function Skills() {
  const [active, setActive] = useState("Programming Languages");
  const [visible, setVisible] = useState(true);
  const [displayed, setDisplayed] = useState(categories[0].skills); // Programming Languages is index 0 now
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleSelect = (label: string) => {
    if (label === active) return;
    setVisible(false);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setActive(label);
      setDisplayed(categories.find((c) => c.label === label)!.skills);
      setVisible(true);
    }, 200);
  };

  useEffect(() => () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); }, []);

  return (
    <section
      id="skills"
      className="py-20 px-6"
      style={{
        background:
          "radial-gradient(ellipse 50% 60% at 0% 50%, rgba(100,255,218,0.07) 0%, transparent 55%), radial-gradient(rgba(100,255,218,0.04) 1px, transparent 1px)",
        backgroundColor: "#060f1e",
        backgroundSize: "auto, 28px 28px",
      }}
    >
      <style>{`
        @keyframes skill-in {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .skill-in { animation: skill-in 0.28s ease forwards; }
      `}</style>

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-[#64ffda] font-mono text-sm mb-2">What I Work With</div>
          <h2 className="text-4xl font-bold text-white mb-4">Skills & Technologies</h2>
          <div className="w-16 h-[2px] bg-[#64ffda] mx-auto" />
        </div>

        {/* Layout */}
        <div className="flex flex-col md:flex-row gap-8">

          {/* Left nav */}
          <aside className="md:w-56 shrink-0">
            <div className="flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-2 md:pb-0">
              {categories.map((cat) => {
                const isActive = active === cat.label;
                return (
                  <button
                    key={cat.label}
                    onClick={() => handleSelect(cat.label)}
                    className={`group relative flex items-center gap-3 px-4 py-3 rounded-xl text-left text-sm font-medium tracking-wide whitespace-nowrap md:whitespace-normal transition-all duration-200 border
                      ${isActive
                        ? "bg-[#64ffda]/10 border-[#64ffda]/50 text-[#64ffda] shadow-[0_0_18px_rgba(100,255,218,0.1)]"
                        : "bg-transparent border-transparent text-gray-500 hover:text-gray-200 hover:bg-white/[0.03] hover:border-[#64ffda]/15"
                      }`}
                  >
                    {/* active indicator bar */}
                    <span
                      className={`hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-[3px] rounded-full transition-all duration-200 ${isActive ? "h-6 bg-[#64ffda]" : "h-0"}`}
                    />
                    <span className="font-mono text-xs w-5 text-center shrink-0 opacity-60">{NAV_ICONS[cat.label]}</span>
                    <span>{cat.label}</span>
                  </button>
                );
              })}
            </div>
          </aside>

          {/* Divider */}
          <div className="hidden md:block w-px bg-gradient-to-b from-transparent via-[#64ffda]/20 to-transparent" />

          {/* Right: skill cards */}
          <div className="flex-1 min-h-[220px]">
            <div
              className={`grid grid-cols-2 sm:grid-cols-3 gap-4 transition-opacity duration-200 ${visible ? "opacity-100" : "opacity-0"}`}
            >
              {displayed.map((s, i) => (
                <div
                  key={s.name}
                  className="skill-in group relative bg-[#0d1f3c] border border-[#64ffda]/15 rounded-xl px-5 py-4 flex items-center gap-3 cursor-pointer overflow-hidden z-0 transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.06] hover:z-10 hover:border-[#64ffda]/60 hover:bg-[#0f2444] hover:shadow-[0_10px_36px_rgba(100,255,218,0.16),0_0_0_1px_rgba(100,255,218,0.1)] active:scale-[0.97] active:translate-y-0 active:shadow-none active:transition-none"
                  style={{ animationDelay: `${i * 40}ms` }}
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{ background: "radial-gradient(ellipse 80% 60% at 20% 50%, rgba(100,255,218,0.06) 0%, transparent 70%)" }}
                  />
                  <span className="text-2xl shrink-0 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-[-6deg]">{s.emoji}</span>
                  <p className="relative text-gray-400 text-sm font-medium tracking-wide group-hover:text-[#64ffda] transition-colors duration-300">{s.name}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
