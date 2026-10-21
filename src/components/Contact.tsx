import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Sparkles, Github, Linkedin, Twitter } from 'lucide-react';
import { personalInfo } from '../data';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (errorMsg) setErrorMsg('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMsg('Please complete all required fields.');
      return;
    }

    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);
    setErrorMsg('');

    // Simulate sending message to backend/API endpoint
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', subject: '', message: '' });
    setSubmitted(false);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#141114]/50 light:bg-[#F3EBE3]/50 border-t border-[#6D4C41]/25">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#C62828]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1E88E5]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-xs font-mono uppercase tracking-widest text-[#C62828] mb-2">
            Initiate Conversation
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#F5EFEA] light:text-[#271C19]">
            Let's Engineer Something Resilient
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#D7CCC8] light:text-[#4E342E]">
            Whether you need a scalable backend architecture, a full-stack product from scratch, or an audit of your current system performance, I'm ready to collaborate.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl glass-panel border border-[#6D4C41]/35 shadow-2xl">
              {submitted ? (
                <div className="py-12 flex flex-col items-center text-center space-y-4 animate-fade-in">
                  <div className="w-16 h-16 rounded-2xl bg-[#10B981]/20 border border-[#10B981]/40 flex items-center justify-center text-[#10B981]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#F5EFEA] light:text-[#271C19]">
                    Transmission Received!
                  </h3>
                  <p className="text-sm text-[#D7CCC8] light:text-[#4E342E] max-w-md">
                    Thank you, <strong className="text-[#F5EFEA] light:text-[#271C19]">{formData.name}</strong>. Your message has been logged in my queue. I typically respond within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="mt-4 px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#C62828] hover:bg-[#D32F2F] rounded-xl transition-all"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {errorMsg && (
                    <div className="p-4 rounded-xl bg-red-500/15 border border-red-500/30 text-xs text-red-400 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-xs font-mono text-[#D7CCC8] light:text-[#4E342E] uppercase mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Jane Doe"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-black/40 border border-[#6D4C41]/35 text-sm text-[#F5EFEA] light:text-[#271C19] placeholder:text-[#8D6E63] focus:outline-none focus:border-[#C62828] transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-mono text-[#D7CCC8] light:text-[#4E342E] uppercase mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="jane@company.com"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-black/40 border border-[#6D4C41]/35 text-sm text-[#F5EFEA] light:text-[#271C19] placeholder:text-[#8D6E63] focus:outline-none focus:border-[#C62828] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs font-mono text-[#D7CCC8] light:text-[#4E342E] uppercase mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Inquiry / Engineering Consulting"
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-[#6D4C41]/35 text-sm text-[#F5EFEA] light:text-[#271C19] placeholder:text-[#8D6E63] focus:outline-none focus:border-[#C62828] transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-mono text-[#D7CCC8] light:text-[#4E342E] uppercase mb-2">
                      Project Details & Requirements *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe your technical needs, timeline, and current system stack..."
                      required
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-[#6D4C41]/35 text-sm text-[#F5EFEA] light:text-[#271C19] placeholder:text-[#8D6E63] focus:outline-none focus:border-[#C62828] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-xl text-xs sm:text-sm font-semibold uppercase tracking-wider text-white bg-[#C62828] hover:bg-[#D32F2F] active:scale-[0.99] disabled:opacity-50 transition-all shadow-lg shadow-[#C62828]/25 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Dispatching Transmission...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Contact Details & Availability */}
          <div className="lg:col-span-5 space-y-6">
            {/* Availability Status Badge Card */}
            <div className="p-6 rounded-2xl glass-panel border border-[#6D4C41]/35 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[#10B981]" />
                </span>
                <span className="text-[#10B981] font-semibold uppercase tracking-wider">
                  {personalInfo.availabilityStatus}
                </span>
              </div>
              <p className="text-sm text-[#F5EFEA] light:text-[#271C19] font-medium">
                {personalInfo.availabilityDetails}
              </p>
              <p className="text-xs text-[#8D6E63] font-mono">
                Current response SLA: &lt; 24 hours
              </p>
            </div>

            {/* Direct Channels List */}
            <div className="p-6 rounded-2xl glass-panel border border-[#6D4C41]/35 space-y-5">
              <h3 className="text-base font-bold text-[#F5EFEA] light:text-[#271C19] pb-3 border-b border-[#6D4C41]/20">
                Direct Channels
              </h3>

              <div className="space-y-4 text-sm">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#3E2723]/40 flex items-center justify-center text-[#C62828] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-[#8D6E63] uppercase">Email</span>
                    <a
                      href={`mailto:${personalInfo.socials.email}`}
                      className="block text-[#F5EFEA] light:text-[#271C19] font-medium hover:text-[#C62828] transition-colors"
                    >
                      {personalInfo.socials.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#3E2723]/40 flex items-center justify-center text-[#1E88E5] shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-[#8D6E63] uppercase">Direct Line</span>
                    <a
                      href={`tel:${personalInfo.socials.phone}`}
                      className="block text-[#F5EFEA] light:text-[#271C19] font-medium hover:text-[#1E88E5] transition-colors font-mono"
                    >
                      {personalInfo.socials.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#3E2723]/40 flex items-center justify-center text-[#10B981] shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-[#8D6E63] uppercase">Base of Operations</span>
                    <p className="text-[#F5EFEA] light:text-[#271C19] font-medium">
                      {personalInfo.location}
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Channels Strip */}
              <div className="pt-4 border-t border-[#6D4C41]/20">
                <span className="text-[11px] font-mono text-[#8D6E63] uppercase block mb-3">
                  Professional Profiles:
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href={personalInfo.socials.github}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-2 rounded-xl glass-panel text-xs text-[#D7CCC8] hover:text-white hover:border-[#1E88E5] flex items-center gap-2 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={personalInfo.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-2 rounded-xl glass-panel text-xs text-[#D7CCC8] hover:text-white hover:border-[#1E88E5] flex items-center gap-2 transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={personalInfo.socials.twitter}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-2 rounded-xl glass-panel text-xs text-[#D7CCC8] hover:text-white hover:border-[#1E88E5] flex items-center gap-2 transition-colors"
                  >
                    <Twitter className="w-4 h-4" />
                    <span>Twitter/X</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
