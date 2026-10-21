import React from 'react';
import { GraduationCap, Award, ExternalLink, ShieldCheck } from 'lucide-react';
import { educationList, certificationsList } from '../data';

export const Education: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Education Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <p className="text-xs font-mono uppercase tracking-widest text-[#1E88E5]">Academic Background</p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F5EFEA] light:text-[#271C19]">
                Education
              </h2>
            </div>

            <div className="space-y-4">
              {educationList.map((edu, idx) => (
                <div key={idx} className="p-6 rounded-2xl glass-panel border border-[#6D4C41]/35 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#1E88E5]/15 border border-[#1E88E5]/30 flex items-center justify-center text-[#1E88E5]">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-[#F5EFEA] light:text-[#271C19]">
                        {edu.degree}
                      </h3>
                      <p className="text-xs font-mono text-[#8D6E63]">{edu.institution} · {edu.period}</p>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-[#D7CCC8] light:text-[#4E342E] leading-relaxed pt-2 border-t border-[#6D4C41]/20">
                    {edu.details}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <p className="text-xs font-mono uppercase tracking-widest text-[#C62828]">Industry Credentials</p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F5EFEA] light:text-[#271C19]">
                Certifications & Specializations
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certificationsList.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl glass-panel glass-panel-hover border border-[#6D4C41]/35 flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-2">
                    <div className="w-8 h-8 rounded-lg bg-[#C62828]/15 border border-[#C62828]/30 flex items-center justify-center text-[#C62828] mb-2">
                      <Award className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm font-bold text-[#F5EFEA] light:text-[#271C19]">
                      {cert.title}
                    </h3>
                    <p className="text-xs text-[#8D6E63] font-mono">
                      {cert.issuer}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#6D4C41]/20 flex items-center justify-between text-xs font-mono">
                    <span className="text-[#8D6E63]">{cert.date}</span>
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-[#1E88E5] hover:underline"
                    >
                      <span>Verify</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
