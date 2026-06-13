"use client";
import React from "react";
import Link from "next/link";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-[#0b1220] shadow-lg border-b border-[#64ffda]/20 backdrop-blur-sm"
      style={{ backgroundColor: "#0b1220", boxShadow: "0 6px 20px rgba(2,6,23,0.6)", position: "fixed", top: 0, left: 0, right: 0, zIndex: 50 }}
    >
      <nav
        className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between"
        style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "64px", padding: "0 24px", maxWidth: "1100px", margin: "0 auto" }}
      >
        <div className="flex items-center gap-8" style={{ display: "flex", alignItems: "center", gap: 24 }}>
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              style={{ color: "#d1d5db", marginRight: 20, fontSize: 14, textDecoration: "none" }}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div style={{ width: 32, minWidth: 32 }} />
      </nav>
    </header>
  );
}