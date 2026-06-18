"use client";
import { useState, useEffect } from "react";

const TECH = ["FastAPI", "GenAI", "AI Agents", "LangChain", "LangGraph"];

const PARTICLES = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  x: [8, 15, 24, 33, 43, 52, 61, 70, 78, 87, 94, 6, 20, 38, 55, 72, 85, 12][i],
  y: [14, 38, 20, 62, 28, 50, 74, 18, 54, 34, 82, 68, 90, 44, 76, 22, 58, 92][i],
  size: [1.5, 1, 2, 1, 1.5, 2, 1, 1.5, 1, 2, 1.5, 1, 2, 1.5, 1, 2, 1.5, 1][i],
  dur: [7, 9, 6, 11, 8, 10, 7, 9, 12, 7, 8, 10, 6, 9, 11, 7, 8, 10][i],
  delay: [0, 1.5, 3, 0.5, 2, 4, 1, 3.5, 0.8, 2.5, 1.2, 4.5, 0.3, 2.8, 1.8, 3.2, 0.6, 4.2][i],
}));

export default function Hero() {
  const roles = ["Python Developer", "AI Engineer", "Backend Engineer"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const current = roles[roleIndex];
    const speed = isDeleting ? 40 : 75;

    if (!isDeleting && displayText.length < current.length) {
      timeout = setTimeout(() => setDisplayText(current.slice(0, displayText.length + 1)), speed);
    } else if (!isDeleting && displayText.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => setDisplayText(current.slice(0, displayText.length - 1)), speed);
    } else {
      setIsDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6"
      style={{ background: "linear-gradient(160deg, #060d1a 0%, #0a1628 55%, #060d1a 100%)" }}
    >
      <style>{`
        @keyframes aurora-1 {
          0%,100% { transform: translate(0,0) scale(1); opacity: 0.5; }
          33%      { transform: translate(5%,4%) scale(1.07); opacity: 0.65; }
          66%      { transform: translate(-3%,5%) scale(0.96); opacity: 0.45; }
        }
        @keyframes aurora-2 {
          0%,100% { transform: translate(0,0) scale(1); opacity: 0.4; }
          40%      { transform: translate(-6%,-4%) scale(1.09); opacity: 0.55; }
          70%      { transform: translate(4%,-5%) scale(0.93); opacity: 0.35; }
        }
        .aurora-1 { animation: aurora-1 20s ease-in-out infinite; }
        .aurora-2 { animation: aurora-2 24s ease-in-out infinite; }

        @keyframes particle-float {
          0%,100% { transform: translateY(0); opacity: 0.35; }
          50%      { transform: translateY(-10px); opacity: 0.85; }
        }
        @keyframes blink { 50% { opacity: 0; } }
        .type-caret {
          display: inline-block; width: 2.5px; height: 1em;
          background: #64ffda; vertical-align: text-bottom;
          margin-left: 4px; border-radius: 1px;
          animation: blink 1s steps(1, end) infinite;
        }
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fade-up-1 { animation: fade-up 0.6s ease forwards 0.1s; opacity: 0; }
        .fade-up-2 { animation: fade-up 0.6s ease forwards 0.25s; opacity: 0; }
        .fade-up-3 { animation: fade-up 0.6s ease forwards 0.4s; opacity: 0; }
        .fade-up-4 { animation: fade-up 0.6s ease forwards 0.55s; opacity: 0; }
        .fade-up-5 { animation: fade-up 0.6s ease forwards 0.7s; opacity: 0; }
        .fade-up-6 { animation: fade-up 0.6s ease forwards 0.85s; opacity: 0; }
      `}</style>

      {/* Aurora blobs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div
          className="aurora-1 absolute rounded-full"
          style={{
            width: "60vw", height: "60vw",
            top: "-20%", left: "-12%",
            background: "radial-gradient(circle, rgba(100,255,218,0.11) 0%, rgba(100,255,218,0.03) 45%, transparent 70%)",
            filter: "blur(65px)",
          }}
        />
        <div
          className="aurora-2 absolute rounded-full"
          style={{
            width: "65vw", height: "65vw",
            bottom: "-25%", right: "-18%",
            background: "radial-gradient(circle, rgba(100,160,255,0.1) 0%, rgba(120,100,255,0.04) 45%, transparent 70%)",
            filter: "blur(75px)",
          }}
        />
      </div>

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          backgroundImage: "radial-gradient(rgba(100,255,218,0.06) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          WebkitMaskImage: "radial-gradient(ellipse 85% 75% at 50% 50%, black 20%, transparent 100%)",
          maskImage: "radial-gradient(ellipse 85% 75% at 50% 50%, black 20%, transparent 100%)",
        }}
      />

      {/* Particles */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        {PARTICLES.map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full bg-[#64ffda]"
            style={{
              left: `${p.x}%`, top: `${p.y}%`,
              width: `${p.size}px`, height: `${p.size}px`,
              animation: `particle-float ${p.dur}s ease-in-out ${p.delay}s infinite`,
              opacity: 0.35,
            }}
          />
        ))}
      </div>

      {/* Edge vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          background: "radial-gradient(ellipse 100% 100% at 50% 50%, transparent 50%, rgba(6,13,26,0.75) 100%)",
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 w-full max-w-3xl mx-auto text-center pt-24 pb-16">

        {/* Status badge */}
        <div className="fade-up-1 inline-flex items-center gap-2 bg-[#64ffda]/8 border border-[#64ffda]/20 text-[#64ffda] text-xs font-mono tracking-widest uppercase px-4 py-1.5 rounded-full mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#64ffda] animate-pulse" />
          Open to opportunities
        </div>

        {/* Name */}
        <h1 className="fade-up-2 text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-4">
          Durvankur<br />
          <span className="text-transparent bg-clip-text"
            style={{ backgroundImage: "linear-gradient(90deg, #64ffda, #a78bfa)" }}>
            Balkawade
          </span>
        </h1>

        {/* Typing role */}
        <p className="fade-up-3 text-xl sm:text-2xl font-mono text-[#64ffda] mb-5 h-9" aria-live="polite">
          {mounted ? displayText : roles[0]}
          <span className="type-caret" aria-hidden />
        </p>

        {/* Tech stack pills */}
        <div className="fade-up-3 flex flex-wrap justify-center gap-2 mb-8">
          {TECH.map((t) => (
            <span
              key={t}
              className="text-xs font-mono text-[#64ffda]/80 bg-[#64ffda]/6 border border-[#64ffda]/15 px-3 py-1 rounded-full tracking-wide"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Divider */}
        <div className="fade-up-4 w-12 h-px bg-gradient-to-r from-transparent via-[#64ffda]/50 to-transparent mx-auto mb-8" />

        {/* Bio */}
        <p className="fade-up-4 text-gray-400 text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-10">
          I design and build{" "}
          <span className="text-gray-200 font-medium">Agentic AI systems</span> —
          intelligent backends powered by{" "}
          <span className="text-gray-200 font-medium">FastAPI, LangChain, and LangGraph</span>.
          Focused on scalable architectures that turn complex AI workflows into reliable products.
        </p>

        {/* CTA buttons */}
        <div className="fade-up-5 flex flex-wrap gap-4 justify-center mb-10">
          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="group inline-flex items-center gap-2 bg-[#64ffda] text-[#060d1a] font-semibold text-sm px-7 py-3 rounded-lg transition-all duration-200 hover:brightness-110 shadow-[0_0_24px_rgba(100,255,218,0.22)] hover:shadow-[0_0_36px_rgba(100,255,218,0.38)]"
          >
            View Projects
            <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>

          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 border border-[#64ffda]/40 text-[#64ffda] text-sm font-semibold px-7 py-3 rounded-lg transition-all duration-200 hover:bg-[#64ffda]/8 hover:border-[#64ffda]/70"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
            </svg>
            Download Resume
          </a>
        </div>

        {/* Social links */}
        <div className="fade-up-6 flex items-center justify-center gap-6">
          <a
            href="https://github.com/idurvankurbalkawade"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="group flex items-center gap-2 text-gray-500 hover:text-[#64ffda] transition-colors duration-200 text-sm"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden>
              <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.69-3.88-1.54-3.88-1.54-.53-1.36-1.3-1.72-1.3-1.72-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.76.41-1.27.75-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.45.11-3.03 0 0 .97-.31 3.18 1.18a11.06 11.06 0 0 1 2.9-.39c.99.01 1.99.13 2.92.39 2.2-1.5 3.17-1.18 3.17-1.18.63 1.58.24 2.74.12 3.03.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.41-5.25 5.69.42.36.8 1.08.8 2.18 0 1.57-.01 2.84-.01 3.23 0 .31.21.67.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z" />
            </svg>
            <span className="font-mono text-xs tracking-wide">GitHub</span>
          </a>

          <span className="w-px h-4 bg-gray-700" aria-hidden />

          <a
            href="https://linkedin.com/in/durvankur-balkawade"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="group flex items-center gap-2 text-gray-500 hover:text-[#64ffda] transition-colors duration-200 text-sm"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden>
              <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.7v2.2h.1c.66-1.25 2.27-2.56 4.67-2.56C22.2 7.64 24 9.84 24 13.9V24h-5V14.9c0-2.15-.04-4.92-3-4.92-3 0-3.46 2.34-3.46 4.78V24h-5V8z" />
            </svg>
            <span className="font-mono text-xs tracking-wide">LinkedIn</span>
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="fade-up-6 mt-16 flex flex-col items-center gap-1.5 text-gray-600">
          <span className="text-[10px] font-mono tracking-widest uppercase">scroll</span>
          <svg className="w-4 h-4 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
}
