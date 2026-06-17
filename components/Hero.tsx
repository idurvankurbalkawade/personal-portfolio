"use client";
import { useState, useEffect } from "react";

const PARTICLES = Array.from({ length: 22 }, (_, i) => ({
  id: i,
  x: [8,15,23,31,42,50,58,67,74,82,90,5,18,28,38,48,60,70,80,88,95,12][i],
  y: [12,35,18,60,25,45,70,15,50,30,80,65,88,40,72,20,55,38,90,10,48,78][i],
  size: [1.5,1,2,1,1.5,2,1,1.5,1,2,1.5,1,2,1.5,1,2,1,1.5,2,1,1.5,1][i],
  dur: [6,9,7,11,8,10,6,9,12,7,8,10,6,9,11,7,8,6,10,9,7,11][i],
  delay: [0,1.5,3,0.5,2,4,1,3.5,0.8,2.5,1.2,4.5,0.3,2.8,1.8,3.2,0.6,4.2,1.6,2.2,3.8,0.9][i],
}));

export default function Hero() {
  const roles = ["Software Engineer", "AI Engineer", "Python Developer"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout> | undefined;
    const current = roles[roleIndex];
    const speed = isDeleting ? 40 : 80;

    if (!isDeleting && displayText.length < current.length) {
      timeout = setTimeout(() => setDisplayText(current.slice(0, displayText.length + 1)), speed);
    } else if (!isDeleting && displayText.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => setDisplayText(current.slice(0, displayText.length - 1)), speed);
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 pb-8 px-6 relative overflow-hidden"
      style={{ background: "linear-gradient(160deg, #060d1a 0%, #0a1628 50%, #060d1a 100%)" }}
    >
      <style>{`
        /* Aurora blobs */
        @keyframes aurora-1 {
          0%,100% { transform: translate(0,0) scale(1); opacity: 0.55; }
          33%      { transform: translate(6%,4%) scale(1.08); opacity: 0.7; }
          66%      { transform: translate(-4%,6%) scale(0.95); opacity: 0.5; }
        }
        @keyframes aurora-2 {
          0%,100% { transform: translate(0,0) scale(1); opacity: 0.45; }
          40%      { transform: translate(-7%,-4%) scale(1.1); opacity: 0.6; }
          70%      { transform: translate(5%,-6%) scale(0.92); opacity: 0.4; }
        }
        @keyframes aurora-3 {
          0%,100% { transform: translate(0,0) scale(1); opacity: 0.35; }
          50%      { transform: translate(4%,-5%) scale(1.06); opacity: 0.5; }
        }
        .aurora-1 { animation: aurora-1 18s ease-in-out infinite; }
        .aurora-2 { animation: aurora-2 22s ease-in-out infinite; }
        .aurora-3 { animation: aurora-3 15s ease-in-out infinite; }

        /* Particles */
        @keyframes particle-float {
          0%,100% { transform: translateY(0px); opacity: 0.4; }
          50%      { transform: translateY(-10px); opacity: 0.9; }
        }

        /* Typing caret */
        .type-caret {
          display: inline-block; width: 3px; height: 1.1em;
          background: #64ffda; vertical-align: middle; margin-left: 6px;
          border-radius: 2px; opacity: 1;
          animation: blink 1s steps(1,end) infinite;
        }
        @keyframes blink { 50% { opacity: 0 } }
      `}</style>

      {/* ── Aurora layer ── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        {/* blob 1 — cyan, top-left */}
        <div
          className="aurora-1 absolute rounded-full"
          style={{
            width: "55vw", height: "55vw",
            top: "-15%", left: "-10%",
            background: "radial-gradient(circle, rgba(100,255,218,0.13) 0%, rgba(100,255,218,0.04) 45%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        {/* blob 2 — blue-purple, bottom-right */}
        <div
          className="aurora-2 absolute rounded-full"
          style={{
            width: "60vw", height: "60vw",
            bottom: "-20%", right: "-15%",
            background: "radial-gradient(circle, rgba(100,160,255,0.12) 0%, rgba(120,100,255,0.05) 45%, transparent 70%)",
            filter: "blur(70px)",
          }}
        />
        {/* blob 3 — teal accent, center */}
        <div
          className="aurora-3 absolute rounded-full"
          style={{
            width: "40vw", height: "40vw",
            top: "30%", left: "30%",
            background: "radial-gradient(circle, rgba(100,255,218,0.06) 0%, transparent 65%)",
            filter: "blur(50px)",
          }}
        />
      </div>

      {/* ── Dot-grid overlay ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          backgroundImage: "radial-gradient(rgba(100,255,218,0.07) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
          WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 50% 50%, black 30%, transparent 100%)",
          maskImage: "radial-gradient(ellipse 80% 70% at 50% 50%, black 30%, transparent 100%)",
        }}
      />

      {/* ── Floating particles ── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        {PARTICLES.map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full bg-[#64ffda]"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animation: `particle-float ${p.dur}s ease-in-out ${p.delay}s infinite`,
              opacity: 0.4,
            }}
          />
        ))}
      </div>

      {/* ── Edge vignette ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 100% 100% at 50% 50%, transparent 55%, rgba(6,13,26,0.7) 100%)",
        }}
      />

      {/* ── Hero content ── */}
      <div className="relative z-10 w-full flex justify-center">
        <div className="text-center max-w-2xl w-full">
          <p className="font-mono text-[#64ffda] text-sm mb-2 tracking-widest uppercase opacity-80">
            Hi there, I&apos;m
          </p>

          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-3 leading-tight">
            Durvankur Balkawade
          </h1>

          <p className="text-[#64ffda] text-2xl font-medium mb-4 h-10" aria-live="polite">
            {displayText}
            <span className="type-caret" aria-hidden />
          </p>

          <div className="w-16 h-[2px] bg-[#64ffda] mb-6 mx-auto opacity-60" />

          <p className="text-gray-400 text-base leading-relaxed mb-8 max-w-xl mx-auto">
            I build intelligent Agentic AI systems using Python, FastAPI, LangChain and LangGraph.
            Passionate about designing scalable backend architectures and cutting-edge AI-powered tools.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center justify-center bg-[#64ffda] text-[#0a192f] font-semibold px-6 py-3 rounded-md hover:opacity-90 transition shadow-[0_0_20px_rgba(100,255,218,0.25)] hover:shadow-[0_0_30px_rgba(100,255,218,0.4)]"
            >
              View My Work
            </button>

            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center justify-center border border-[#64ffda]/60 text-[#64ffda] px-6 py-3 rounded-md hover:bg-[#64ffda]/10 hover:border-[#64ffda] transition"
            >
              Download CV
            </a>
          </div>

          <div className="flex gap-5 justify-center">
            <a
              href="https://github.com/idurvankurbalkawade"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-[#64ffda] transition-colors duration-200"
              aria-label="GitHub"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" aria-hidden>
                <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.69-3.88-1.54-3.88-1.54-.53-1.36-1.3-1.72-1.3-1.72-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.76.41-1.27.75-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.45.11-3.03 0 0 .97-.31 3.18 1.18a11.06 11.06 0 0 1 2.9-.39c.99.01 1.99.13 2.92.39 2.2-1.5 3.17-1.18 3.17-1.18.63 1.58.24 2.74.12 3.03.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.41-5.25 5.69.42.36.8 1.08.8 2.18 0 1.57-.01 2.84-.01 3.23 0 .31.21.67.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z" />
              </svg>
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-[#64ffda] transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" aria-hidden>
                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.7v2.2h.1c.66-1.25 2.27-2.56 4.67-2.56C22.2 7.64 24 9.84 24 13.9V24h-5V14.9c0-2.15-.04-4.92-3-4.92-3 0-3.46 2.34-3.46 4.78V24h-5V8z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
