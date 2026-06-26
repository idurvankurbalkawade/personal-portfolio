"use client";
import React, { useState, useRef, useEffect } from "react";
import {
  SiPython, SiGo,
  SiFastapi, SiLangchain,
  SiPostgresql, SiRedis, SiOpensearch,
  SiDocker, SiKubernetes, SiGit, SiGithub,
  SiApachekafka,
} from "react-icons/si";
import { VscTerminal, VscAzure } from "react-icons/vsc";
import { FiLayers, FiDatabase, FiServer } from "react-icons/fi";
import { FaCoffee } from "react-icons/fa";
import { IconType } from "react-icons";

type Skill = { name: string; Icon: IconType; color: string };

const categories: { label: string; Icon: IconType; color: string; skills: Skill[] }[] = [
  {
    label: "Programming Languages",
    Icon: VscTerminal,
    color: "rgba(100,255,218,0.09)",
    skills: [
      { name: "Python",  Icon: SiPython, color: "#3776AB" },
      { name: "Go",      Icon: SiGo,     color: "#00ADD8" },
      { name: "Java",    Icon: FaCoffee, color: "#ED8B00" },
    ],
  },
  {
    label: "Frameworks & Libraries",
    Icon: FiLayers,
    color: "rgba(130,180,255,0.09)",
    skills: [
      { name: "FastAPI",    Icon: SiFastapi,   color: "#009688" },
      { name: "LangChain", Icon: SiLangchain,  color: "#64ffda" },
      { name: "LangGraph", Icon: SiLangchain,  color: "#64ffda" },
    ],
  },
  {
    label: "Databases & Search",
    Icon: FiDatabase,
    color: "rgba(180,100,255,0.09)",
    skills: [
      { name: "PostgreSQL", Icon: SiPostgresql,  color: "#336791" },
      { name: "Redis",      Icon: SiRedis,       color: "#DC382D" },
      { name: "OpenSearch", Icon: SiOpensearch,  color: "#005EB8" },
    ],
  },
  {
    label: "DevOps & Tools",
    Icon: FiServer,
    color: "rgba(255,180,80,0.08)",
    skills: [
      { name: "Docker",     Icon: SiDocker,         color: "#2496ED" },
      { name: "Kubernetes", Icon: SiKubernetes,      color: "#326CE5" },
      { name: "Git",        Icon: SiGit,             color: "#F05032" },
      { name: "GitHub",     Icon: SiGithub,          color: "#e6edf3" },
      { name: "Azure",      Icon: VscAzure,          color: "#0078D4" },
      { name: "Kafka",      Icon: SiApachekafka,     color: "#231F20" },
    ],
  },
];

const CARD_MIN = 148;

export default function Skills() {
  const [activeIdx, setActiveIdx]   = useState(0);
  const [visible, setVisible]       = useState(true);
  const [displayed, setDisplayed]   = useState(categories[0].skills);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const activeCat = categories[activeIdx];

  const handleSelect = (idx: number) => {
    if (idx === activeIdx) return;
    setVisible(false);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setActiveIdx(idx);
      setDisplayed(categories[idx].skills);
      setVisible(true);
    }, 160);
  };

  useEffect(() => () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); }, []);

  const skillCount = displayed.length;

  return (
    <section
      id="skills"
      className="py-24 px-6"
      style={{
        background: "radial-gradient(rgba(100,255,218,0.025) 1px, transparent 1px)",
        backgroundColor: "#0a192f",
        backgroundSize: "28px 28px",
      }}
    >
      <style>{`
        @keyframes skill-pop {
          from { opacity: 0; transform: translateY(8px) scale(0.95); }
          to   { opacity: 1; transform: translateY(0)  scale(1);    }
        }
        .skill-pop { animation: skill-pop 0.2s ease forwards; }
      `}</style>

      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-[#64ffda] font-mono text-xs tracking-[0.2em] uppercase mb-2">
            What I Work With
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">Skills &amp; Technologies</h2>
          <div className="w-10 h-[2px] bg-[#64ffda] mx-auto rounded-full" />
        </div>

        {/* Outer glow wrapper */}
        <div
          className="relative rounded-2xl transition-all duration-500"
          style={{
            boxShadow: `0 0 60px 0 ${activeCat.color}, 0 0 0 1px rgba(100,255,218,0.08)`,
          }}
        >
          <div
            className="absolute inset-0 rounded-2xl pointer-events-none transition-all duration-500"
            style={{
              background: `radial-gradient(ellipse 70% 80% at 30% 50%, ${activeCat.color}, transparent 75%)`,
            }}
          />

          {/* Panel */}
          <div
            className="relative flex flex-col md:flex-row rounded-2xl overflow-hidden border border-[#64ffda]/10"
            style={{ background: "rgba(8,20,42,0.82)", backdropFilter: "blur(16px)" }}
          >

            {/* Sidebar */}
            <aside className="md:w-52 shrink-0 border-b md:border-b-0 md:border-r border-white/[0.06]">
              <nav className="flex flex-row md:flex-col overflow-x-auto md:overflow-visible p-2 gap-0.5">
                {categories.map((cat, idx) => {
                  const isActive = activeIdx === idx;
                  const CatIcon = cat.Icon;
                  return (
                    <button
                      key={cat.label}
                      onClick={() => handleSelect(idx)}
                      className={`relative flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-left text-[12.5px] font-medium whitespace-nowrap md:whitespace-normal w-full transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-[#64ffda] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a192f]
                        ${isActive
                          ? "text-[#64ffda]"
                          : "text-gray-400 hover:text-gray-200 hover:bg-white/[0.04]"
                        }`}
                      style={isActive ? { background: `${cat.color}` } : {}}
                    >
                      <span
                        className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-[3px] rounded-full transition-all duration-200"
                        style={{
                          height: isActive ? "18px" : "0px",
                          background: "#64ffda",
                          opacity: isActive ? 1 : 0,
                        }}
                      />
                      <CatIcon
                        size={15}
                        className="shrink-0 transition-opacity duration-200"
                        style={{ opacity: isActive ? 0.9 : 0.4 }}
                      />
                      <span className="leading-snug">{cat.label}</span>
                    </button>
                  );
                })}
              </nav>
            </aside>

            {/* Skills panel */}
            <div className="flex-1 p-5">
              <p className="font-mono text-[10px] tracking-[0.18em] uppercase mb-4 transition-colors duration-300"
                style={{ color: "rgba(100,255,218,0.55)" }}>
                {activeCat.label}
              </p>

              <div
                className={`transition-opacity duration-160 ${visible ? "opacity-100" : "opacity-0"}`}
                style={{
                  display: "grid",
                  gridTemplateColumns: `repeat(auto-fit, minmax(${CARD_MIN}px, 1fr))`,
                  gap: "10px",
                  justifyContent: skillCount <= 2 ? "center" : "start",
                }}
              >
                {displayed.map((s, i) => {
                  const SkillIcon = s.Icon;
                  return (
                    <div
                      key={s.name}
                      className="skill-pop group relative flex items-center gap-3 px-3.5 py-3 rounded-xl border cursor-default overflow-hidden transition-all duration-200 ease-out hover:-translate-y-[3px] hover:scale-[1.035]"
                      style={{
                        animationDelay: `${i * 40}ms`,
                        background: "rgba(13,28,55,0.75)",
                        borderColor: "rgba(100,255,218,0.1)",
                      }}
                      onMouseEnter={e => {
                        (e.currentTarget as HTMLElement).style.borderColor = "rgba(100,255,218,0.4)";
                        (e.currentTarget as HTMLElement).style.boxShadow = `0 6px 20px rgba(100,255,218,0.1), 0 0 0 1px rgba(100,255,218,0.08)`;
                      }}
                      onMouseLeave={e => {
                        (e.currentTarget as HTMLElement).style.borderColor = "rgba(100,255,218,0.1)";
                        (e.currentTarget as HTMLElement).style.boxShadow = "none";
                      }}
                    >
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
                        style={{ background: "radial-gradient(ellipse 80% 60% at 10% 50%, rgba(100,255,218,0.07), transparent 70%)" }}
                      />
                      <SkillIcon
                        size={26}
                        className="shrink-0 transition-transform duration-200 group-hover:scale-110"
                        style={{ color: s.color }}
                      />
                      <span className="relative text-[13px] font-medium tracking-wide leading-tight transition-colors duration-200 text-gray-400 group-hover:text-[#64ffda]">
                        {s.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
