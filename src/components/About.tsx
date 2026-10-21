import React from 'react';
import { MapPin, Briefcase, Languages, Clock, ShieldCheck, Cpu, Flame, Target } from 'lucide-react';
import { personalInfo } from '../data';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#3E2723]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-xs font-mono uppercase tracking-widest text-[#C62828] mb-2">
            Engineering Identity & Philosophy
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#F5EFEA] light:text-[#271C19]">
            Architecting Resilient Platforms with Forge-Grade Precision
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#D7CCC8] light:text-[#4E342E]">
            Software systems should withstand peak real-world traffic, recover automatically from inevitable infrastructure hiccups, and provide transparent operational visibility.
          </p>
        </div>

        {/* 2-Column Main Content Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Narrative, Philosophy & Passion */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-8 rounded-2xl glass-panel space-y-5 border border-[#6D4C41]/35">
              <h3 className="text-xl font-bold text-[#F5EFEA] light:text-[#271C19] flex items-center gap-2.5">
                <Flame className="w-5 h-5 text-[#C62828]" />
                <span>The Fullstack Foundry Approach</span>
              </h3>
              <p className="text-sm sm:text-base text-[#D7CCC8] light:text-[#4E342E] leading-relaxed">
                {personalInfo.bioParagraph1}
              </p>
              <p className="text-sm sm:text-base text-[#D7CCC8] light:text-[#4E342E] leading-relaxed">
                {personalInfo.bioParagraph2}
              </p>
            </div>

            {/* Philosophy & Passion Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl glass-panel border border-[#6D4C41]/30">
                <div className="w-10 h-10 rounded-xl bg-[#C62828]/15 border border-[#C62828]/30 flex items-center justify-center text-[#C62828] mb-4">
                  <Target className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-[#F5EFEA] light:text-[#271C19] mb-2">
                  System Philosophy
                </h4>
                <p className="text-xs sm:text-sm text-[#D7CCC8] light:text-[#4E342E] leading-relaxed">
                  {personalInfo.philosophy}
                </p>
              </div>

              <div className="p-6 rounded-2xl glass-panel border border-[#6D4C41]/30">
                <div className="w-10 h-10 rounded-xl bg-[#1E88E5]/15 border border-[#1E88E5]/30 flex items-center justify-center text-[#1E88E5] mb-4">
                  <Cpu className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-[#F5EFEA] light:text-[#271C19] mb-2">
                  Technical Passion
                </h4>
                <p className="text-xs sm:text-sm text-[#D7CCC8] light:text-[#4E342E] leading-relaxed">
                  {personalInfo.passion}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Quick Facts & Core Tenets */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Facts Panel */}
            <div className="p-6 rounded-2xl glass-panel border border-[#6D4C41]/35 space-y-4">
              <h3 className="text-lg font-bold text-[#F5EFEA] light:text-[#271C19] pb-3 border-b border-[#6D4C41]/25 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#1E88E5]" />
                <span>Quick Facts & Availability</span>
              </h3>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#3E2723]/40 flex items-center justify-center text-[#C62828] shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-[#8D6E63] uppercase">Location</span>
                    <p className="text-[#F5EFEA] light:text-[#271C19] font-medium">{personalInfo.location}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#3E2723]/40 flex items-center justify-center text-[#1E88E5] shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-[#8D6E63] uppercase">Experience</span>
                    <p className="text-[#F5EFEA] light:text-[#271C19] font-medium">{personalInfo.experienceYears}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#3E2723]/40 flex items-center justify-center text-[#10B981] shrink-0 mt-0.5">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-[#8D6E63] uppercase">Availability</span>
                    <p className="text-[#F5EFEA] light:text-[#271C19] font-medium">{personalInfo.availabilityDetails}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#3E2723]/40 flex items-center justify-center text-[#F59E0B] shrink-0 mt-0.5">
                    <Languages className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-[#8D6E63] uppercase">Languages Spoken</span>
                    <p className="text-[#F5EFEA] light:text-[#271C19] font-medium">{personalInfo.spokenLanguages.join(' · ')}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Foundational Tenets */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#3E2723]/60 to-[#141114] border border-[#6D4C41]/40 text-xs sm:text-sm space-y-3">
              <span className="text-xs font-mono uppercase text-[#C62828] font-semibold">Foundry Standard</span>
              <p className="text-[#F5EFEA] light:text-[#271C19] font-semibold">
                "Zero flaky builds, zero untracked state mutations, and zero single-points-of-failure."
              </p>
              <div className="flex items-center gap-3 text-xs text-[#D7CCC8]/80 font-mono pt-2 border-t border-[#6D4C41]/30">
                <span>Latency First</span>
                <span>·</span>
                <span>Crash-Safe</span>
                <span>·</span>
                <span>Observable</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
