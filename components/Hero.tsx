"use client";
import { useState, useEffect } from "react";

export default function Hero() {
  const roles = ["Software Engineer", "AI Engineer", "Python Developer"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isMd, setIsMd] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = (e: MediaQueryListEvent | MediaQueryList) => setIsMd((e as any).matches ?? mq.matches);
    setIsMd(mq.matches);
    if (mq.addEventListener) mq.addEventListener("change", onChange as any);
    else mq.addListener(onChange as any);
    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", onChange as any);
      else mq.removeListener(onChange as any);
    };
  }, []);

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
      className="min-h-screen flex items-center justify-center pt-16 pb-8 px-6 relative overflow-hidden"
      style={{
        background:
          'radial-gradient(circle at 20% 20%, rgba(99,102,241,0.06) 0, transparent 12%), linear-gradient(180deg,#07123a 0%, #021022 100%)',
      }}
    >
      <style>{`
        .hero-grid { display: grid; grid-template-columns: repeat(1, minmax(0,1fr)); gap: 3rem; align-items: center; justify-items: center; }
        .hero-ctas { display: flex; gap: 1.5rem; justify-content: center; align-items: center; flex-wrap: wrap; }
        .hero-ctas a { text-decoration: none !important; display: inline-flex; align-items: center; white-space: nowrap; }
        .badge { white-space: nowrap !important; display: inline-flex !important; line-height: 1; }
        .type-caret { display: inline-block; width: 8px; height: 20px; background: #64ffda; vertical-align: middle; margin-left: 8px; border-radius: 2px; opacity: 1; animation: blink 1s steps(1,end) infinite; }
        @keyframes blink { 50% { opacity: 0 } }
      `}</style>

      <div className="max-w-6xl mx-auto w-full hero-grid gap-12 items-center">
        <div className="text-center mx-auto max-w-xl">
          <p className="font-mono text-[#64ffda] text-sm mb-2">Hi there, I'm</p>

          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-3">Durvankur Balkawade</h1>

          <p className="text-[#64ffda] text-2xl font-medium mb-4 h-8" aria-live="polite">
            {displayText}
            <span className="type-caret" aria-hidden />
          </p>

          <div className="w-16 h-[2px] bg-[#64ffda] mb-6 mx-auto md:mx-0" />

          <p className="text-gray-400 text-base leading-relaxed mb-8">
            I build intelligent Agentic AI systems using Python, FastAPI, LangChain and LangGraph. Passionate about designing scalable
            backend architectures and cutting-edge AI-powered tools.
          </p>

          <div className="hero-ctas flex flex-wrap gap-6 justify-center mb-6">
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center justify-center bg-[#64ffda] text-[#0a192f] font-semibold px-6 py-3 rounded-md hover:opacity-95 transition shadow-sm hover:shadow-md"
            >
              View My Work
            </button>

            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center justify-center border border-[#64ffda] text-[#64ffda] px-6 py-3 rounded-md hover:bg-[#64ffda] hover:text-[#0a192f] transition shadow-sm hover:shadow-md"
            >
              Download CV
            </a>
          </div>

          <div className="flex gap-5 justify-center md:justify-start">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#64ffda] transition w-6 h-6" aria-label="GitHub">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" aria-hidden>
                <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.69-3.88-1.54-3.88-1.54-.53-1.36-1.3-1.72-1.3-1.72-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.76.41-1.27.75-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.45.11-3.03 0 0 .97-.31 3.18 1.18a11.06 11.06 0 0 1 2.9-.39c.99.01 1.99.13 2.92.39 2.2-1.5 3.17-1.18 3.17-1.18.63 1.58.24 2.74.12 3.03.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.41-5.25 5.69.42.36.8 1.08.8 2.18 0 1.57-.01 2.84-.01 3.23 0 .31.21.67.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z" />
              </svg>
            </a>

            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#64ffda] transition w-6 h-6" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" aria-hidden>
                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.7v2.2h.1c.66-1.25 2.27-2.56 4.67-2.56C22.2 7.64 24 9.84 24 13.9V24h-5V14.9c0-2.15-.04-4.92-3-4.92-3 0-3.46 2.34-3.46 4.78V24h-5V8z" />
              </svg>
            </a>
          </div>
        </div>

        {/* right-side illustration removed per request */}
      </div>
    </section>
  );
}
