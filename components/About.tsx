"use client";

const highlights = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    label: "Backend Development",
    description: "Building robust REST APIs and microservices with Python and FastAPI, focusing on performance and clean architecture.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-2" />
      </svg>
    ),
    label: "AI & LLM Agents",
    description: "Designing agentic workflows using LangChain and LangGraph, integrating LLMs into production-ready pipelines.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    label: "Scalable Systems",
    description: "Architecting systems that handle growth — from async task queues to containerised deployments with Docker.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    label: "Generative AI",
    description: "Exploring Retrieval-Augmented Generation, prompt engineering, and multi-modal AI applications.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-[#0a192f]">
      <div className="max-w-5xl mx-auto">

        {/* Section heading */}
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">About Me</h2>
          <div className="flex-1 h-px bg-[#64ffda]/20" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Left — bio */}
          <div className="space-y-5 text-gray-400 text-[15px] leading-relaxed">
            <p>
              Hi, I&apos;m <span className="text-white font-medium">Durvankur Balkawade</span> — a
              Python Developer focused on backend systems and intelligent applications.
              I currently work as a{" "}
              <span className="text-[#64ffda]">Python Developer</span>, building APIs and
              services that power real-world products.
            </p>
            <p>
              My core stack revolves around <span className="text-white">FastAPI</span> and the
              Python ecosystem. I enjoy designing clean, well-structured backends that are
              easy to maintain and scale — whether that&apos;s a straightforward REST service
              or a multi-step data pipeline.
            </p>
            <p>
              Over the past year I&apos;ve shifted much of my focus toward{" "}
              <span className="text-white">Agentic AI</span>. I&apos;m fascinated by how
              LLMs can be composed into autonomous workflows using frameworks like{" "}
              <span className="text-[#64ffda]">LangChain</span> and{" "}
              <span className="text-[#64ffda]">LangGraph</span>, and I actively explore
              Generative AI patterns — RAG, tool-use, and agent orchestration — to ship
              smarter products.
            </p>
            <p>
              When I&apos;m not coding, I&apos;m reading about distributed systems, tinkering with
              side projects, or keeping up with the fast-moving AI landscape.
            </p>

            {/* Tech list */}
            <div className="pt-2">
              <p className="text-white text-sm font-semibold mb-3">Technologies I work with:</p>
              <ul className="grid grid-cols-2 gap-y-2 gap-x-4 font-mono text-sm text-gray-400">
                {["Python", "FastAPI", "LangChain", "LangGraph", "PostgreSQL", "Docker"].map((tech) => (
                  <li key={tech} className="flex items-center gap-2">
                    <span className="text-[#64ffda]">▹</span>
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right — highlight cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map(({ icon, label, description }) => (
              <div
                key={label}
                className="bg-[#112240] border border-[#64ffda]/20 rounded-xl p-5 flex flex-col gap-3 hover:border-[#64ffda]/50 transition-colors duration-200"
              >
                <div className="text-[#64ffda]">{icon}</div>
                <p className="text-white text-sm font-semibold">{label}</p>
                <p className="text-gray-400 text-xs leading-relaxed">{description}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
