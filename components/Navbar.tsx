"use client";
import { useState } from "react";
import Link from "next/link";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-[#0a192f] border-b border-[#64ffda]/20 shadow-lg shadow-black/20">
      <nav className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="#home"
          aria-label="Go to home"
          className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#64ffda]/[0.06] text-[#64ffda] font-bold text-base hover:bg-[#64ffda]/10 transition-colors"
        >
          DB
        </Link>

        {/* Nav links — always visible on desktop, toggled on mobile */}
        <div className="hidden sm:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-300 text-sm font-medium hover:text-[#64ffda] transition-colors duration-200 tracking-wide"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Hamburger — only on very small screens */}
        <button
          className="sm:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] text-gray-300 hover:text-[#64ffda] transition-colors"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span className={`block w-6 h-[2px] bg-current transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`block w-6 h-[2px] bg-current transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-[2px] bg-current transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="sm:hidden bg-[#0a192f] border-t border-[#64ffda]/10 px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-gray-300 text-sm font-medium hover:text-[#64ffda] transition-colors duration-200 tracking-wide py-1"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
