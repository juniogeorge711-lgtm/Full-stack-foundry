import React, { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { testimonialsList } from '../data';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonialsList.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonialsList.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsList.length);
  };

  const current = testimonialsList[currentIndex];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-mono uppercase tracking-widest text-[#C62828] mb-2">
            Social Proof & Endorsements
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#F5EFEA] light:text-[#271C19]">
            Client & Colleague Testimonials
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#D7CCC8] light:text-[#4E342E]">
            Feedback from engineering leaders and operations directors on project execution, reliability, and business impact.
          </p>
        </div>

        {/* Carousel Container */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative max-w-4xl mx-auto p-8 sm:p-12 rounded-3xl glass-panel border border-[#6D4C41]/35 shadow-2xl transition-all duration-300"
        >
          {/* Subtle Quote Icon Backdrop */}
          <Quote className="absolute top-8 right-8 w-16 h-16 text-[#3E2723]/30 pointer-events-none" />

          {/* Impact Metric Header */}
          <div className="flex items-center gap-2 mb-6">
            <div className="flex items-center text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
              ))}
            </div>
            <span className="text-xs font-mono text-[#10B981] px-2.5 py-0.5 rounded-full bg-[#10B981]/15 font-semibold">
              {current.metric}
            </span>
          </div>

          {/* Quote Text */}
          <blockquote className="text-lg sm:text-2xl text-[#F5EFEA] light:text-[#271C19] font-medium leading-relaxed mb-8">
            "{current.quote}"
          </blockquote>

          {/* Author Block & Carousel Navigation */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-[#6D4C41]/25">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#C62828] to-[#1E88E5] flex items-center justify-center font-bold text-white shadow-md">
                {current.avatarText}
              </div>
              <div>
                <p className="font-bold text-[#F5EFEA] light:text-[#271C19] text-base">
                  {current.author}
                </p>
                <p className="text-xs font-mono text-[#8D6E63]">
                  {current.role} · <span className="text-[#1E88E5]">{current.company}</span>
                </p>
              </div>
            </div>

            {/* Nav Arrows & Indicators */}
            <div className="flex items-center gap-3 self-end sm:self-auto">
              <div className="flex items-center gap-1.5 mr-2">
                {testimonialsList.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setCurrentIndex(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all ${
                      currentIndex === i ? 'w-6 bg-[#C62828]' : 'w-2 bg-[#6D4C41]/40'
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous testimonial"
                className="w-9 h-9 rounded-xl glass-panel flex items-center justify-center text-[#D7CCC8] hover:text-[#C62828] transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next testimonial"
                className="w-9 h-9 rounded-xl glass-panel flex items-center justify-center text-[#D7CCC8] hover:text-[#C62828] transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
