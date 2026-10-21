import React, { useState, useEffect } from 'react';
import { ArrowDown, Github, Linkedin, Twitter, Mail, FileDown, Layers, Terminal } from 'lucide-react';
import { personalInfo } from '../data';

export const Hero: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  // Typewriter effect
  useEffect(() => {
    const currentRole = personalInfo.roles[roleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing forward
        setDisplayedText(currentRole.substring(0, displayedText.length + 1));
        if (displayedText.length + 1 === currentRole.length) {
          // Pause at full text
          setTypingSpeed(1800);
          setIsDeleting(true);
        } else {
          setTypingSpeed(80);
        }
      } else {
        // Deleting backward
        setDisplayedText(currentRole.substring(0, displayedText.length - 1));
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % personalInfo.roles.length);
          setTypingSpeed(400);
        } else {
          setTypingSpeed(45);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex, typingSpeed]);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadCV = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    // Generate clean text-based curriculum vitae download
    const cvContent = `=====================================================
${personalInfo.name.toUpperCase()} - CURRICULUM VITAE
Brand: ${personalInfo.brandName}
Role: Scalable Systems Architect & Software Engineer
Email: ${personalInfo.socials.email}
Location: ${personalInfo.location}
=====================================================

VALUE STATEMENT:
${personalInfo.valueStatement}

EXPERIENCE SUMMARY:
${personalInfo.bioParagraph1}

PHILOSOPHY:
${personalInfo.philosophy}

CORE COMPETENCIES:
- Distributed Systems, Concurrency & High Throughput Architectures
- TypeScript, React, Node.js, Express, FastAPI, Python
- PostgreSQL, Redis Caching, RabbitMQ Message Queues
- Docker, Kubernetes, AWS Cloud Infrastructure

FLAGSHIP PROJECT:
RepairForge - Enterprise Computer Repair Management System
- Event-driven state machine managing 7 repair lifecycle stages
- Real-time technician dispatch, inventory holds & automated SMS updates
- High-availability PostgreSQL cluster + Redis caching layer

=====================================================
Generated from ${personalInfo.brandName} Portfolio
=====================================================`;

    const blob = new Blob([cvContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${personalInfo.name.replace(/\s+/g, '_')}_CV.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex flex-col justify-center overflow-hidden">
      {/* Background ambient lighting effects */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#C62828]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 -right-32 w-96 h-96 bg-[#1E88E5]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#3E2723]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto">
        {/* Split grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typographic Hierarchy & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            {/* Ambient terminal badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#3E2723]/30 border border-[#6D4C41]/35 text-xs text-[#D7CCC8] light:text-[#4E342E]">
              <Terminal className="w-3.5 h-3.5 text-[#1E88E5]" />
              <span className="font-mono text-[#F5EFEA] light:text-[#271C19]">{personalInfo.brandName}</span>
              <span className="text-[#8D6E63]">/</span>
              <span className="text-[#D7CCC8]/80 light:text-[#6D4C41]">High-Scale Architecture</span>
            </div>

            {/* Main Title */}
            <div className="space-y-2">
              <p className="text-sm font-semibold tracking-wider uppercase text-[#1E88E5]">
                Systems & Infrastructure
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F5EFEA] light:text-[#271C19] leading-[1.1] text-balance">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#F5EFEA] to-[#D7CCC8] light:from-[#271C19] light:to-[#4E342E]">{personalInfo.name}</span>
              </h1>
            </div>

            {/* Typewriter role line */}
            <div className="h-10 flex items-center">
              <span className="text-xl sm:text-2xl font-mono text-[#C62828] font-bold">
                &gt; {displayedText}
                <span className="inline-block w-2.5 h-5 ml-1 bg-[#1E88E5] animate-pulse align-middle" />
              </span>
            </div>

            {/* Value Statement */}
            <p className="text-base sm:text-lg text-[#D7CCC8] light:text-[#4E342E] leading-relaxed max-w-2xl">
              {personalInfo.valueStatement}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              {/* Primary CTA */}
              <a
                href="#flagship"
                onClick={(e) => handleScrollTo(e, 'flagship')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#C62828] hover:bg-[#D32F2F] active:scale-95 rounded-xl transition-all shadow-lg shadow-[#C62828]/25 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C62828]"
              >
                <Layers className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>View Flagship System</span>
              </a>

              {/* Secondary CTA */}
              <a
                href="#cv-download"
                onClick={handleDownloadCV}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#1E88E5] light:text-[#1565C0] hover:text-white bg-transparent hover:bg-[#1E88E5] border border-[#1E88E5]/40 hover:border-[#1E88E5] active:scale-95 rounded-xl transition-all shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E88E5]"
              >
                <FileDown className="w-4 h-4" />
                <span>Download CV</span>
              </a>
            </div>

            {/* Social Links Bar */}
            <div className="flex items-center gap-4 pt-4 border-t border-[#6D4C41]/25 w-full">
              <span className="text-xs font-mono text-[#8D6E63] uppercase tracking-wider">Connect:</span>
              <div className="flex items-center gap-2">
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub Profile"
                  className="w-9 h-9 rounded-lg glass-panel flex items-center justify-center text-[#D7CCC8] light:text-[#4E342E] hover:text-[#C62828] hover:border-[#C62828]/50 transition-colors"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn Profile"
                  className="w-9 h-9 rounded-lg glass-panel flex items-center justify-center text-[#D7CCC8] light:text-[#4E342E] hover:text-[#1E88E5] hover:border-[#1E88E5]/50 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.socials.twitter}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Twitter / X Profile"
                  className="w-9 h-9 rounded-lg glass-panel flex items-center justify-center text-[#D7CCC8] light:text-[#4E342E] hover:text-[#1E88E5] hover:border-[#1E88E5]/50 transition-colors"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${personalInfo.socials.email}`}
                  aria-label="Send Email"
                  className="w-9 h-9 rounded-lg glass-panel flex items-center justify-center text-[#D7CCC8] light:text-[#4E342E] hover:text-[#C62828] hover:border-[#C62828]/50 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Portrait with Animated Foundry Ring */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative group">
              {/* Outer glowing pulsing halo */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-[#C62828] via-[#6D4C41] to-[#1E88E5] opacity-40 blur-xl group-hover:opacity-60 transition duration-700" />

              {/* Framing Card */}
              <div className="relative w-72 sm:w-80 md:w-96 aspect-square rounded-3xl overflow-hidden glass-panel border border-[#6D4C41]/40 p-2 shadow-2xl">
                <img
                  src={personalInfo.profileImage}
                  alt={`${personalInfo.name} - Software Engineer`}
                  className="w-full h-full object-cover rounded-2xl transform group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />

                {/* Corner Foundry Tag */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-[#0B0B0F]/85 light:bg-[#FAF6F0]/90 backdrop-blur-md border border-[#6D4C41]/35 flex items-center justify-between text-xs">
                  <div>
                    <p className="font-semibold text-[#F5EFEA] light:text-[#271C19]">{personalInfo.name}</p>
                    <p className="text-[11px] text-[#8D6E63] font-mono">Foundry Lead</p>
                  </div>
                  <div className="flex items-center gap-1.5 font-mono text-[11px] text-[#1E88E5]">
                    <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping" />
                    <span>{personalInfo.availabilityStatus}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Item KPI Metrics Strip (Placed full-width below the split per domain constitution) */}
        <div className="mt-16 pt-8 border-t border-[#6D4C41]/25 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {personalInfo.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl glass-panel glass-panel-hover flex flex-col justify-center"
            >
              <div className="flex items-baseline gap-1">
                <span className="text-3xl sm:text-4xl font-extrabold font-mono text-[#F5EFEA] light:text-[#271C19] tabular-nums">
                  {stat.value}
                </span>
                <span className="text-xl sm:text-2xl font-bold font-mono text-[#C62828]">
                  {stat.suffix}
                </span>
              </div>
              <p className="text-sm font-semibold text-[#D7CCC8] light:text-[#4E342E] mt-1">
                {stat.label}
              </p>
              <p className="text-xs text-[#8D6E63] mt-0.5">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Scroll down mouse indicator */}
        <div className="flex justify-center mt-12">
          <a
            href="#about"
            onClick={(e) => handleScrollTo(e, 'about')}
            aria-label="Scroll to About Me section"
            className="flex flex-col items-center gap-1.5 text-xs font-mono text-[#8D6E63] hover:text-[#C62828] transition-colors"
          >
            <span>DISCOVER</span>
            <ArrowDown className="w-4 h-4 animate-bounce text-[#C62828]" />
          </a>
        </div>
      </div>
    </section>
  );
};
