import React from 'react';
import { Hammer, Github, Linkedin, Twitter, Mail, ArrowUp } from 'lucide-react';
import { personalInfo } from '../data';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Flagship Project', href: '#flagship' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="py-16 relative overflow-hidden bg-[#0B0B0F] light:bg-[#FAF6F0] border-t border-[#6D4C41]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-12 border-b border-[#6D4C41]/25">
          {/* Brand block */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#3E2723] to-[#0B0B0F] border border-[#6D4C41]/40 flex items-center justify-center text-[#C62828]">
                <Hammer className="w-4 h-4" />
              </div>
              <span className="text-lg font-bold tracking-tight text-[#F5EFEA] light:text-[#271C19]">
                {personalInfo.brandName}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#8D6E63] max-w-sm">
              {personalInfo.brandSubtitle}. Precision engineering for scalable infrastructure and enterprise applications.
            </p>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
              className="w-10 h-10 rounded-xl glass-panel flex items-center justify-center text-[#D7CCC8] hover:text-[#C62828] transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
              className="w-10 h-10 rounded-xl glass-panel flex items-center justify-center text-[#D7CCC8] hover:text-[#1E88E5] transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.socials.twitter}
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter Profile"
              className="w-10 h-10 rounded-xl glass-panel flex items-center justify-center text-[#D7CCC8] hover:text-[#1E88E5] transition-colors"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.socials.email}`}
              aria-label="Email"
              className="w-10 h-10 rounded-xl glass-panel flex items-center justify-center text-[#D7CCC8] hover:text-[#C62828] transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="w-10 h-10 rounded-xl bg-[#C62828] hover:bg-[#D32F2F] text-white flex items-center justify-center transition-all shadow-md shadow-[#C62828]/25 ml-2"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Navigation Quick Links */}
        <div className="py-8 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-[#D7CCC8] light:text-[#4E342E]">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="hover:text-[#C62828] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Bottom credits */}
        <div className="pt-8 border-t border-[#6D4C41]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#8D6E63]">
          <p>© {new Date().getFullYear()} {personalInfo.name} · {personalInfo.brandName}. All rights reserved.</p>
          <p className="flex items-center gap-1 text-[#D7CCC8] light:text-[#4E342E]">
            Built with passion by <span className="text-[#C62828] font-semibold">{personalInfo.name}</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
