"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";

// href is root-relative so a link still resolves on routes that don't contain
// the target section — the browser navigates home and lands on the anchor.
const links = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Experience", id: "experience" },
  { name: "Certifications", id: "certifications" },
  { name: "Contact", id: "contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  // Track scroll position for backdrop effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy: active = section whose top is closest to (but not past) 30% down the viewport
  useEffect(() => {
    const sectionIds = links.map((l) => l.id);

    const spy = () => {
      // If scrolled to bottom, activate last section
      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - window.innerHeight * 0.7) {
        setActiveSection(sectionIds[sectionIds.length - 1]);
        return;
      }

      const trigger = window.scrollY + window.innerHeight * 0.3;
      let best = sectionIds[0];
      let bestTop = -Infinity;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top + window.scrollY;
        if (top <= trigger && top > bestTop) {
          bestTop = top;
          best = id;
        }
      }

      setActiveSection(best);
    };

    spy(); // run on mount
    window.addEventListener("scroll", spy, { passive: true });
    return () => window.removeEventListener("scroll", spy);
  }, []);

  // Close mobile menu on outside click
  useEffect(() => {
    if (!menuOpen) return;
    const handler = (e: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(e.target as Node)
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [menuOpen]);

  const smoothScroll = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
      const el = document.getElementById(id);
      setMenuOpen(false);
      // Section isn't on this route — let the link navigate to the home anchor.
      if (!el) return;
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth" });
    },
    []
  );

  const navBg = scrolled
    ? "bg-[#0a192f]/90 backdrop-blur-md border-b border-[#64ffda]/20 shadow-lg shadow-black/20"
    : "bg-[#060d1a] border-b border-[#060d1a]";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${navBg}`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/#home"
          onClick={(e) => smoothScroll(e, "home")}
          aria-label="Go to home"
          className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-[#64ffda]/40 text-[#64ffda] font-bold text-sm hover:bg-[#64ffda]/10 hover:border-[#64ffda]/70 transition-all duration-200"
        >
          DB
        </Link>

        {/* Desktop nav links */}
        <div className="hidden sm:flex items-center gap-8">
          {links.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <Link
                key={link.name}
                href={`/#${link.id}`}
                onClick={(e) => smoothScroll(e, link.id)}
                aria-current={isActive ? "page" : undefined}
                className={`text-sm font-medium tracking-wide transition-colors duration-200 relative group ${
                  isActive ? "text-[#64ffda]" : "text-gray-400 hover:text-[#64ffda]"
                }`}
              >
                {link.name}
                {/* Underline indicator */}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-[#64ffda] transition-all duration-200 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </div>

        {/* Hamburger — mobile only */}
        <button
          ref={hamburgerRef}
          className="sm:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] text-gray-300 hover:text-[#64ffda] transition-colors"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <span
            className={`block w-6 h-[2px] bg-current transition-all duration-300 origin-center ${
              menuOpen ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`block w-6 h-[2px] bg-current transition-all duration-300 ${
              menuOpen ? "opacity-0 scale-x-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-[2px] bg-current transition-all duration-300 origin-center ${
              menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile dropdown — animated */}
      <div
        id="mobile-menu"
        ref={menuRef}
        aria-hidden={!menuOpen}
        // `invisible` takes the closed links out of the tab order; because it is
        // part of the transition it only applies once the collapse has finished.
        className={`sm:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-80 opacity-100 visible" : "max-h-0 opacity-0 invisible"
        }`}
      >
        <div className="bg-[#0a192f]/95 backdrop-blur-md border-t border-[#64ffda]/10 px-6 py-4 flex flex-col gap-1">
          {links.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <Link
                key={link.name}
                href={`/#${link.id}`}
                onClick={(e) => smoothScroll(e, link.id)}
                tabIndex={menuOpen ? undefined : -1}
                aria-current={isActive ? "page" : undefined}
                className={`text-sm font-medium tracking-wide py-3 px-2 rounded transition-colors duration-200 border-l-2 ${
                  isActive
                    ? "text-[#64ffda] border-[#64ffda] bg-[#64ffda]/5"
                    : "text-gray-400 border-transparent hover:text-[#64ffda] hover:border-[#64ffda]/50 hover:bg-[#64ffda]/5"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
}
