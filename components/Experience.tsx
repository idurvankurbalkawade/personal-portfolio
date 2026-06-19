"use client";

const experiences = [
  {
    role: "Software Engineer",
    company: "iLink Digital",
    duration: "April 2025 – Present",
    current: true,
    responsibilities: [
      "Developed and maintained scalable backend APIs using FastAPI for AI-driven platform features",
      "Contributed to AI solution development using LangChain and LangGraph for workflow orchestration",
      "Designed backend components to support real-time data processing and system operations",
      "Collaborated with team members to implement backend logic for product features and enhancements",
    ],
    tech: ["Python", "FastAPI", "LangChain", "LangGraph", "PostgreSQL", "Opensearch", "Docker"],
  },
  {
    role: "Software Engineer Trainee",
    company: "iLink Digital",
    duration: "Aug 2023 – April 2025",
    current: false,
    responsibilities: [
      "Implemented RESTful APIs using FastAPI to support backend functionality of an AI-based platform",
      "Assisted in backend development and feature implementation for core product modules",
      "Collaborated with the development team to test, debug, and refine API functionality",
    ],
    tech: ["Python", "FastAPI", "PostgreSQL", "Opensearch", "Docker"],
  },
  {
    role: "Intern",
    company: "iLink Digital",
    duration: "Jan 2023 – July 2023",
    current: false,
    responsibilities: [
      "Underwent structured technical training in Python backend development and FastAPI framework",
      "Learned REST API development, database integration, and backend architecture concepts",
    ],
    tech: ["Python", "FastAPI"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 bg-[#0a192f]">
      <div className="max-w-3xl mx-auto">

        {/* Section heading */}
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Experience</h2>
          <div className="flex-1 h-px bg-[#64ffda]/20" />
        </div>

        {/* Timeline */}
        <div className="relative flex flex-col">
          {/* Single continuous vertical line */}
          <div className="absolute left-[15px] top-[26px] bottom-[26px] w-px bg-[#64ffda]/20 z-0" />

          {experiences.map((exp, idx) => (
            <div key={idx} className="relative flex gap-6 items-start pb-10 last:pb-0">

              {/* Left column: dot overlaid on the shared line */}
              <div className="flex flex-col items-center flex-shrink-0 w-8">
                <div className="h-[18px] flex-shrink-0" />
                <div className="relative flex-shrink-0 z-10">
                  {exp.current ? (
                    <span className="relative flex w-4 h-4">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#64ffda] opacity-75" />
                      <span className="relative inline-flex rounded-full w-4 h-4 bg-[#64ffda] border-2 border-[#64ffda] shadow-[0_0_12px_rgba(100,255,218,0.8)]" />
                    </span>
                  ) : (
                    <div className="w-4 h-4 rounded-full border-2 bg-[#0a192f] border-[#64ffda]/60" />
                  )}
                </div>
              </div>

              {/* Card */}
              <div className="flex-1 bg-[#112240] border border-[#64ffda]/20 rounded-xl p-6 hover:border-[#64ffda]/40 transition-colors duration-300">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h3 className="text-white font-semibold text-lg leading-snug">{exp.role}</h3>
                  {exp.current && (
                    <span className="text-[10px] font-mono bg-[#64ffda]/10 text-[#64ffda] border border-[#64ffda]/30 rounded-full px-2 py-0.5 animate-pulse">
                      Current
                    </span>
                  )}
                </div>
                <p className="text-[#64ffda] font-mono text-sm">{exp.company}</p>
                <p className="text-gray-500 font-mono text-xs mt-0.5 mb-4">{exp.duration}</p>
                <ul className="space-y-2 mb-5">
                  {exp.responsibilities.map((item, i) => (
                    <li key={i} className="flex gap-2 items-start text-gray-400 text-sm">
                      <span className="text-[#64ffda] mt-[3px] flex-shrink-0 text-xs">▹</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-mono bg-[#0a192f] text-[#64ffda] border border-[#64ffda]/20 rounded px-2 py-0.5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
