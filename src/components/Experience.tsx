import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { experiences } from '../data';
import { TechIcon } from './TechIcon';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-[#141114]/40 light:bg-[#F3EBE3]/40 border-y border-[#6D4C41]/20">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#C62828]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-xs font-mono uppercase tracking-widest text-[#C62828] mb-2">
            Career Trajectory
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#F5EFEA] light:text-[#271C19]">
            Professional Engineering Experience
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#D7CCC8] light:text-[#4E342E]">
            Track record of designing, scaling, and maintaining mission-critical production systems under high operational load.
          </p>
        </div>

        {/* Vertical Animated Timeline */}
        <div className="relative border-l-2 border-[#6D4C41]/35 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline Node Icon */}
              <div className="absolute -left-[35px] sm:-left-[51px] top-1.5 w-6 h-6 rounded-full bg-[#0B0B0F] border-2 border-[#C62828] flex items-center justify-center group-hover:scale-125 group-hover:border-[#1E88E5] transition-all">
                <span className="w-2 h-2 rounded-full bg-[#C62828] group-hover:bg-[#1E88E5]" />
              </div>

              {/* Experience Card */}
              <div className="p-6 sm:p-8 rounded-2xl glass-panel glass-panel-hover border border-[#6D4C41]/35 space-y-4">
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[#6D4C41]/20">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#F5EFEA] light:text-[#271C19]">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-semibold text-[#1E88E5] mt-0.5">
                      {exp.company}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#8D6E63]">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.period}
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* 3 Scalability Achievements */}
                <div className="space-y-3 pt-2">
                  {exp.achievements.map((ach, aIdx) => (
                    <div key={aIdx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#C62828] shrink-0 mt-0.5" />
                      <p className="text-xs sm:text-sm text-[#D7CCC8] light:text-[#4E342E] leading-relaxed">
                        {ach}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Technologies Stack */}
                <div className="pt-4 border-t border-[#6D4C41]/20 flex flex-wrap items-center gap-2">
                  <span className="text-[11px] font-mono text-[#8D6E63] uppercase mr-1">Stack:</span>
                  {exp.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs bg-[#3E2723]/30 border border-[#6D4C41]/25 text-[#D7CCC8]"
                    >
                      <TechIcon name={tech} className="w-3 h-3 text-[#1E88E5]" size={12} />
                      <span>{tech}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
