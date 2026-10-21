import React, { useState } from 'react';
import { Layout, Server, Database, Cloud, Cpu, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { skillCategories } from '../data';
import { TechIcon } from './TechIcon';

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('All');

  const categories = ['All', ...skillCategories.map((c) => c.category)];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Frontend Development':
        return <Layout className="w-5 h-5 text-[#1E88E5]" />;
      case 'Backend & APIs':
        return <Server className="w-5 h-5 text-[#C62828]" />;
      case 'Databases & Storage':
        return <Database className="w-5 h-5 text-[#10B981]" />;
      case 'Cloud & DevOps':
        return <Cloud className="w-5 h-5 text-[#3B82F6]" />;
      case 'Architecture & Systems Design':
        return <Cpu className="w-5 h-5 text-[#F59E0B]" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-[#8B5CF6]" />;
    }
  };

  const filteredCategories = activeTab === 'All'
    ? skillCategories
    : skillCategories.filter((c) => c.category === activeTab);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#141114]/40 light:bg-[#F3EBE3]/40 border-y border-[#6D4C41]/20">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-[#1E88E5]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-mono uppercase tracking-widest text-[#1E88E5] mb-2">
            Technical Repertoire
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#F5EFEA] light:text-[#271C19]">
            Skills & Production Technologies
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#D7CCC8] light:text-[#4E342E]">
            A comprehensive overview of tools, protocols, languages, and architectural methodologies I deploy in real production systems.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all whitespace-nowrap shrink-0 ${
                activeTab === cat
                  ? 'bg-[#C62828] text-white shadow-md shadow-[#C62828]/25 font-semibold'
                  : 'glass-panel text-[#D7CCC8] light:text-[#4E342E] hover:text-[#F5EFEA] light:hover:text-[#271C19]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((catGroup, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl glass-panel glass-panel-hover border border-[#6D4C41]/30 flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-3 mb-6 pb-3 border-b border-[#6D4C41]/20">
                  <div className="p-2 rounded-xl bg-[#3E2723]/30 border border-[#6D4C41]/30">
                    {getCategoryIcon(catGroup.category)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#F5EFEA] light:text-[#271C19]">
                      {catGroup.category}
                    </h3>
                    <p className="text-[11px] text-[#8D6E63] font-mono">
                      {catGroup.skills.length} core competencies
                    </p>
                  </div>
                </div>

                {/* Skill Items */}
                <div className="space-y-4">
                  {catGroup.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs sm:text-sm">
                        <div className="flex items-center gap-2">
                          <TechIcon name={skill.name} className="w-4 h-4 text-[#D7CCC8] light:text-[#4E342E]" size={16} />
                          <span className="font-medium text-[#F5EFEA] light:text-[#271C19]">
                            {skill.name}
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5 font-mono text-xs text-[#8D6E63]">
                          <span className="text-[11px] px-1.5 py-0.5 rounded bg-[#3E2723]/30 border border-[#6D4C41]/25 text-[#D7CCC8]/80">
                            {skill.tag}
                          </span>
                          <span className="tabular-nums text-[#1E88E5] font-semibold">{skill.level}%</span>
                        </div>
                      </div>

                      {/* Animated Progress Bar */}
                      <div className="w-full h-1.5 bg-[#3E2723]/30 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-[#6D4C41] via-[#1E88E5] to-[#C62828] rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom footer note */}
              <div className="mt-6 pt-4 border-t border-[#6D4C41]/20 flex items-center gap-2 text-[11px] font-mono text-[#8D6E63]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
                <span>Production proven & benchmarked</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
