import React from 'react';
import { Laptop, Server, CloudRain, Workflow, Compass, CheckCircle } from 'lucide-react';
import { servicesList } from '../data';

export const Services: React.FC = () => {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Laptop': return <Laptop className="w-5 h-5" />;
      case 'Server': return <Server className="w-5 h-5" />;
      case 'CloudRain': return <CloudRain className="w-5 h-5" />;
      case 'Workflow': return <Workflow className="w-5 h-5" />;
      case 'Compass': return <Compass className="w-5 h-5" />;
      default: return <Server className="w-5 h-5" />;
    }
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-[#141114]/40 light:bg-[#F3EBE3]/40 border-y border-[#6D4C41]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-xs font-mono uppercase tracking-widest text-[#1E88E5] mb-2">
            Engineering Capabilities
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#F5EFEA] light:text-[#271C19]">
            Services & Technical Solutions
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#D7CCC8] light:text-[#4E342E]">
            How I assist high-growth startups, scale-ups, and established enterprises in shipping robust software.
          </p>
        </div>

        {/* 5 Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesList.map((svc, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl glass-panel glass-panel-hover border border-[#6D4C41]/35 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#C62828]/15 border border-[#C62828]/35 flex items-center justify-center text-[#C62828]">
                  {getServiceIcon(svc.icon)}
                </div>

                <h3 className="text-xl font-bold text-[#F5EFEA] light:text-[#271C19]">
                  {svc.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#D7CCC8] light:text-[#4E342E] leading-relaxed">
                  {svc.description}
                </p>
              </div>

              {/* Deliverables Checklist */}
              <div className="pt-4 border-t border-[#6D4C41]/20 space-y-2">
                <span className="text-[11px] font-mono text-[#8D6E63] uppercase">Included Capabilities:</span>
                {svc.deliverables.map((del, dIdx) => (
                  <div key={dIdx} className="flex items-center gap-2 text-xs text-[#F5EFEA] light:text-[#271C19]">
                    <CheckCircle className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                    <span>{del}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
