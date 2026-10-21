/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { FlagshipProject } from './components/FlagshipProject';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ArrowUp } from 'lucide-react';

export default function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Initialize theme safely with try/catch to ensure iframe/sandbox stability
  useEffect(() => {
    try {
      const saved = localStorage.getItem('ff_theme');
      if (saved === 'light' || saved === 'dark') {
        setTheme(saved);
        if (saved === 'light') {
          document.documentElement.classList.add('light');
        } else {
          document.documentElement.classList.remove('light');
        }
      }
    } catch {
      // Default to dark mode on error or restricted iframe storage
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    if (nextTheme === 'light') {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
    try {
      localStorage.setItem('ff_theme', nextTheme);
    } catch {
      // Ignore storage errors in restricted sandboxes
    }
  };

  // Track scroll position for the floating back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[var(--bg-main)] text-[var(--text-primary)] transition-colors duration-300 circuit-pattern relative selection:bg-[#C62828] selection:text-white">
      {/* Top Navbar */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Main Content Sections */}
      <main id="main-content">
        {/* 1. Hero */}
        <Hero />

        {/* 2. About Me */}
        <About />

        {/* 3. Skills & Technologies */}
        <Skills />

        {/* 4. Flagship Project: Computer Repair Management System */}
        <FlagshipProject />

        {/* 5. Other Selected Projects */}
        <Projects />

        {/* 6. Professional Experience Timeline */}
        <Experience />

        {/* 7. Education & Certifications */}
        <Education />

        {/* 8. Services Offered */}
        <Services />

        {/* 9. Client & Peer Testimonials */}
        <Testimonials />

        {/* 10. Contact Form & Direct Channels */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Back to Top Button */}
      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-2xl bg-[#C62828] hover:bg-[#D32F2F] text-white flex items-center justify-center transition-all duration-200 shadow-xl shadow-[#C62828]/35 hover:-translate-y-1 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#C62828] animate-fade-in"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}
