"use client";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-6">
      <span className="font-semibold tracking-wide">Fadhlan</span>
      <div className="hidden md:flex gap-6 text-sm text-neutral-400">
        <a href="#about" className="hover:text-white">
          About
        </a>
        <a href="#skills" className="hover:text-white">
          Skills
        </a>
        <a href="#experience" className="hover:text-white">
          Experience
        </a>
        <a href="#projects" className="hover:text-white">
          Projects
        </a>
        <a href="#contact" className="hover:text-white">
          Contact
        </a>
      </div>
    </nav>
  );
}
