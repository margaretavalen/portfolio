'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-16 lg:px-20 h-16 bg-[#050816]/80 backdrop-blur-xl border-b border-[rgba(99,102,241,0.15)] transition-all">
      {/* Brand Logo */}
      <Link
        href="#hero"
        className="font-sora font-bold text-sm md:text-base tracking-wider bg-gradient-to-r from-[#06B6D4] to-[#3B82F6] bg-clip-text text-transparent hover:opacity-90 transition-opacity"
      >
        VALENCIA
      </Link>

      {/* Desktop Links */}
      <ul className="hidden md:flex items-center gap-8 list-none">
        {navLinks.map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              className="text-xs lg:text-[0.8rem] text-[#94A3B8] hover:text-[#06B6D4] tracking-wide transition-colors"
            >
              {item.label}
            </Link>
          </li>
        ))}
        <li>
          <a
            href="/CV_en.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-1.5 border border-[#06B6D4]/40 text-[#06B6D4] rounded-md text-xs font-medium hover:bg-[#06B6D4]/10 hover:shadow-[0_0_20px_rgba(6,182,212,0.25)] transition-all"
          >
            Download CV
          </a>
        </li>
      </ul>

      {/* Mobile Menu Hamburger */}
      <button
        type="button"
        className="md:hidden text-slate-300 hover:text-cyan-400 p-2 focus:outline-none"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle Navigation Menu"
      >
        {mobileOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="absolute top-16 left-0 right-0 bg-[#0A0F1E]/95 backdrop-blur-2xl border-b border-[rgba(99,102,241,0.2)] p-6 flex flex-col gap-4 md:hidden animate-in slide-in-from-top">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="text-sm text-[#94A3B8] hover:text-[#06B6D4] py-1 transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="/CV_en.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 text-center py-2 border border-[#06B6D4] text-[#06B6D4] rounded-md text-xs font-medium hover:bg-[#06B6D4]/10"
          >
            Download CV
          </a>
        </div>
      )}
    </nav>
  );
}

