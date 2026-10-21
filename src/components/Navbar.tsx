import React, { useState, useEffect } from 'react';
import { Hammer, Sun, Moon, Menu, X, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data';

interface NavbarProps {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);

      // Calculate scroll progress percentage
      const winHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (winHeight > 0) {
        setScrollProgress((scrollY / winHeight) * 100);
      }

      // Check current visible section
      const sections = ['hero', 'about', 'skills', 'flagship', 'projects', 'experience', 'services', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero', id: 'hero' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Flagship', href: '#flagship', id: 'flagship' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top scroll progress indicator */}
      <div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#C62828] via-[#1E88E5] to-[#C62828] z-50 transition-all duration-100 ease-out"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
      />

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0B0B0F]/90 dark:bg-[#0B0B0F]/90 light:bg-[#FAF6F0]/90 backdrop-blur-md border-b border-[#6D4C41]/25 py-3 shadow-lg shadow-black/20'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8">
            {/* Zone 1: Brand Wordmark */}
            <a
              href="#hero"
              onClick={(e) => handleLinkClick(e, '#hero')}
              className="flex items-center gap-2.5 text-lg font-bold tracking-tight text-[#F5EFEA] light:text-[#271C19] hover:opacity-90 transition-opacity whitespace-nowrap shrink-0 group"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#3E2723] to-[#0B0B0F] border border-[#6D4C41]/40 flex items-center justify-center text-[#C62828] group-hover:border-[#C62828] transition-colors shadow-inner">
                <Hammer className="w-4 h-4 transform group-hover:rotate-12 transition-transform duration-300" />
              </div>
              <span className="font-extrabold tracking-tight">
                {personalInfo.brandName}
              </span>
            </a>

            {/* Zone 2: Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-[#D7CCC8]/80 light:text-[#4E342E]/80">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`relative py-1 transition-colors whitespace-nowrap shrink-0 ${
                      isActive
                        ? 'text-[#F5EFEA] light:text-[#271C19] font-semibold'
                        : 'hover:text-[#F5EFEA] light:hover:text-[#271C19]'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C62828] rounded-full animate-fade-in" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Zone 3: Actions (Theme Toggle & CTA) */}
            <div className="flex items-center gap-3 shrink-0">
              {/* Theme toggle */}
              <button
                type="button"
                onClick={toggleTheme}
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                className="w-9 h-9 rounded-xl glass-panel flex items-center justify-center text-[#D7CCC8] light:text-[#4E342E] hover:text-[#C62828] light:hover:text-[#C62828] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C62828]"
              >
                {theme === 'dark' ? (
                  <Sun className="w-4 h-4" />
                ) : (
                  <Moon className="w-4 h-4" />
                )}
              </button>

              {/* Hire Me CTA button */}
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, '#contact')}
                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#C62828] hover:bg-[#D32F2F] active:scale-95 rounded-xl transition-all shadow-md shadow-[#C62828]/25 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#C62828]"
              >
                <span>Hire Me</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              {/* Mobile menu hamburger toggle */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle navigation menu"
                className="lg:hidden w-9 h-9 rounded-xl glass-panel flex items-center justify-center text-[#D7CCC8] light:text-[#4E342E] hover:text-[#C62828] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C62828]"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden px-4 pt-3 pb-6 bg-[#0B0B0F]/95 light:bg-[#FAF6F0]/95 backdrop-blur-xl border-b border-[#6D4C41]/30 mt-3 animate-fade-in">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeSection === link.id
                      ? 'bg-[#C62828]/15 text-[#C62828] font-semibold'
                      : 'text-[#D7CCC8] light:text-[#4E342E] hover:bg-[#3E2723]/20'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2">
                <a
                  href="#contact"
                  onClick={(e) => handleLinkClick(e, '#contact')}
                  className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#C62828] hover:bg-[#D32F2F] rounded-xl transition-all shadow-md shadow-[#C62828]/25"
                >
                  <span>Hire Me</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
