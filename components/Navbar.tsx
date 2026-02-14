'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#projects', label: 'Projects' },
  { href: '#connect', label: 'Connect', isCta: true },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);

      // Update active section based on scroll position
      const sections = ['home', 'projects', 'connect'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const offset = window.innerHeight * 0.4;
          if (rect.top <= offset && rect.bottom >= offset) {
            setActiveSection(`#${section}`);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed inset-x-0 top-0 z-[1000] flex items-center justify-between px-4 md:px-11 py-3.5 transition-all duration-300 ${
        isScrolled
          ? 'bg-[rgba(7,10,22,0.8)] backdrop-blur-xl border-b border-[var(--border)] shadow-lg'
          : 'bg-gradient-to-b from-[rgba(7,10,22,0.85)] via-[rgba(7,10,22,0.45)] to-transparent backdrop-blur-md'
      }`}
      aria-label="Primary"
    >
      {/* Brand */}
      <Link
        href="/"
        className="flex items-center gap-2.5 font-extrabold tracking-wide hover:opacity-80 transition-opacity"
      >
        <motion.i
          className="fa-solid fa-laptop-code text-[var(--accent)]"
          whileHover={{ rotate: 5, scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 300 }}
        />
        <span>Portfolio.o</span>
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-6">
        {navLinks.map((link) => (
          <motion.a
            key={link.href}
            href={link.href}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick(link.href);
            }}
            className={`${
              link.isCta
                ? 'inline-flex items-center gap-2 border border-[var(--border)] bg-[var(--glass)] px-3.5 py-2 rounded-full font-bold hover:bg-white/10'
                : `px-3 py-2 rounded-full font-semibold transition-all ${
                    activeSection === link.href
                      ? 'opacity-100 bg-[var(--glass)]'
                      : 'opacity-80 hover:opacity-100 hover:bg-[var(--glass)]'
                  }`
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {link.isCta && <i className="fa-regular fa-paper-plane"></i>}
            {link.label}
          </motion.a>
        ))}

        {/* Social Icons */}
        <motion.a
          href="https://github.com/Asky03"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center w-9 h-9 rounded-lg border border-[var(--border)] bg-[var(--glass)] hover:bg-white/10 transition-colors"
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          aria-label="GitHub"
        >
          <i className="fa-brands fa-github"></i>
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/ashutoshs27/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center w-9 h-9 rounded-lg border border-[var(--border)] bg-[var(--glass)] hover:bg-white/10 transition-colors"
          whileHover={{ scale: 1.1, rotate: -5 }}
          whileTap={{ scale: 0.9 }}
          aria-label="LinkedIn"
        >
          <i className="fa-brands fa-linkedin-in"></i>
        </motion.a>
      </div>

      {/* Mobile Menu Button */}
      <motion.button
        className="md:hidden text-2xl"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        whileTap={{ scale: 0.9 }}
        aria-label="Toggle Menu"
        aria-expanded={isMobileMenuOpen}
      >
        <i className={`fa-solid ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
      </motion.button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 bg-[rgba(7,10,22,0.95)] backdrop-blur-xl border-b border-[var(--border)] md:hidden"
          >
            <div className="flex flex-col gap-2 p-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`px-4 py-3 rounded-lg font-semibold transition-all ${
                    activeSection === link.href
                      ? 'bg-[var(--glass)] opacity-100'
                      : 'opacity-80 hover:bg-[var(--glass)] hover:opacity-100'
                  }`}
                >
                  {link.isCta && <i className="fa-regular fa-paper-plane mr-2"></i>}
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
