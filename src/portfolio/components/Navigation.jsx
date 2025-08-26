import React, { useState } from "react";
import { FiMail, FiGithub, FiMenu, FiX } from "react-icons/fi";

export default function Navigation({ active, sections, refs }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (section) => {
    refs[section].current.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[92%] max-w-5xl backdrop-blur-md bg-gradient-to-r from-[rgba(13,17,30,0.6)] to-[rgba(2,6,23,0.35)] rounded-2xl border border-slate-800 px-4 py-2 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[var(--electric)] to-[var(--purple)] shadow-lg flex items-center justify-center text-black font-bold">DL</div>
          <div className="hidden sm:block text-sm">Debanjali Lenka</div>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-3 text-sm">
          {sections.map((s) => (
            <li key={s}>
              <a
                onClick={() => handleNavClick(s)}
                className={`cursor-pointer px-3 py-2 rounded-md transition-all duration-200 ${active === s ? "bg-[rgba(0,217,255,0.08)] text-[var(--electric)] shadow-[0_4px_20px_rgba(0,217,255,0.06)]" : "text-slate-300 hover:text-white hover:bg-[rgba(139,92,246,0.06)]"}`}
              >
                {s[0].toUpperCase() + s.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-slate-800 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>

        {/* Social Icons - Hidden on mobile when menu is open */}
        <div className={`flex items-center gap-3 ${isMobileMenuOpen ? 'hidden' : 'md:flex'}`}>
          <a href="mailto:debanjali017@gmail.com" aria-label="email" className="p-2 rounded-md hover:bg-slate-800">
            <FiMail />
          </a>
          <a href="https://github.com/Debanjali081" target="_blank" rel="noreferrer" aria-label="github" className="p-2 rounded-md hover:bg-slate-800">
            <FiGithub />
          </a>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black bg-opacity-50 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)}>
          <div className="fixed top-20 left-1/2 transform -translate-x-1/2 w-[92%] max-w-md bg-gradient-to-b from-[rgba(13,17,30,0.95)] to-[rgba(2,6,23,0.9)] rounded-2xl border border-slate-800 p-6 shadow-xl">
            <ul className="space-y-4">
              {sections.map((s) => (
                <li key={s}>
                  <a
                    onClick={() => handleNavClick(s)}
                    className={`block cursor-pointer px-4 py-3 rounded-md transition-all duration-200 text-lg ${active === s ? "bg-[rgba(0,217,255,0.12)] text-[var(--electric)] shadow-[0_4px_20px_rgba(0,217,255,0.1)]" : "text-slate-300 hover:text-white hover:bg-[rgba(139,92,246,0.1)]"}`}
                  >
                    {s[0].toUpperCase() + s.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
