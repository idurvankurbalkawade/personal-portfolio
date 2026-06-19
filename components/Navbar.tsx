"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
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

  // Highlight active section via IntersectionObserver
  useEffect(() => {
    const sectionIds = links.map((l) => l.href.slice(1));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
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
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      const id = href.slice(1);
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
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
          href="#home"
          onClick={(e) => smoothScroll(e, "#home")}
          aria-label="Go to home"
          className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-[#64ffda]/40 text-[#64ffda] font-bold text-sm hover:bg-[#64ffda]/10 hover:border-[#64ffda]/70 transition-all duration-200"
        >
          DB
        </Link>

        {/* Desktop nav links */}
        <div className="hidden sm:flex items-center gap-8">
          {links.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => smoothScroll(e, link.href)}
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
        className={`sm:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#0a192f]/95 backdrop-blur-md border-t border-[#64ffda]/10 px-6 py-4 flex flex-col gap-1">
          {links.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => smoothScroll(e, link.href)}
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
