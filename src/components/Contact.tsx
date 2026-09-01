import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Mail, 
  Phone, 
  Linkedin, 
  Github, 
  Copy, 
  Check, 
  Send, 
  MessageSquare, 
  ArrowUpRight,
  Sparkles,
  MapPin
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [inquiryType, setInquiryType] = useState('Full-Time Role');
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [senderMessage, setSenderMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2200);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link as direct fallback
    const subject = encodeURIComponent(`[${inquiryType}] Engineering Opportunity - ${senderName}`);
    const body = encodeURIComponent(`Hi Varsha,\n\n${senderMessage}\n\nBest regards,\n${senderName} (${senderEmail})`);
    
    // Trigger mail client
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const inquiryOptions = [
    'Full-Time Role',
    'Interview Invitation',
    'Technical Inquiry',
    'General Connection'
  ];

  return (
    <section id="contact" className="py-16 md:py-24 border-t border-slate-200/80 dark:border-slate-800/80 bg-slate-50/50 dark:bg-[#0F172A]/40 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-70px' }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-500"></span>
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Let&apos;s Discuss Engineering Opportunities
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400">
            Open to Senior Software Engineer, Java Full Stack, and Microservices engineering roles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column: Direct Contact Action Channels */}
          <div className="md:col-span-5 space-y-4">
            
            {/* Quick Email Options (Gmail & Outlook) */}
            <div className="p-5 rounded-2xl bg-white dark:bg-[#111827]/80 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 font-semibold block">
                  Email Services
                </span>
                <button
                  onClick={() => copyToClipboard(PERSONAL_INFO.email, 'email')}
                  className="inline-flex items-center gap-1 text-[11px] font-mono text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
                  title="Copy email address"
                  id="copy-contact-email-btn"
                >
                  {copiedField === 'email' ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-500" />
                      <span className="text-emerald-600 dark:text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Gmail Option */}
                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(PERSONAL_INFO.email)}&su=${encodeURIComponent('Engineering Opportunity - Varsha Priya Jainu')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 hover:border-red-300 dark:hover:border-red-900/60 hover:bg-red-50/30 dark:hover:bg-red-950/20 transition-all group"
                  id="contact-gmail-link"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-red-100 dark:bg-red-950/60 text-red-600 dark:text-red-400 group-hover:scale-105 transition-transform">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L12 9.545l8.073-6.052C21.69 2.28 24 3.434 24 5.457z" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-900 dark:text-white block">
                        Gmail
                      </span>
                      <span className="text-[11px] text-slate-500 dark:text-slate-400 block">
                        Compose Web Mail
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-red-500 transition-colors" />
                </a>

                {/* Outlook Option */}
                <a
                  href={`https://outlook.live.com/mail/0/deeplink/compose?to=${encodeURIComponent(PERSONAL_INFO.email)}&subject=${encodeURIComponent('Engineering Opportunity - Varsha Priya Jainu')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-900/60 hover:bg-blue-50/30 dark:hover:bg-blue-950/20 transition-all group"
                  id="contact-outlook-link"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 group-hover:scale-105 transition-transform">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M1 5.5A2.5 2.5 0 0 1 3.5 3h17A2.5 2.5 0 0 1 23 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-17A2.5 2.5 0 0 1 1 18.5v-13zm2.14 0l8.86 6.2 8.86-6.2H3.14zm17.86 1.83l-8.47 5.93a1 1 0 0 1-1.06 0L3 7.33v11.17c0 .28.22.5.5.5h17c.28 0 .5-.22.5-.5V7.33z" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-900 dark:text-white block">
                        Outlook
                      </span>
                      <span className="text-[11px] text-slate-500 dark:text-slate-400 block">
                        Open in Outlook
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-500 transition-colors" />
                </a>
              </div>
            </div>

            {/* Direct Telephone Channel */}
            <div className="p-5 rounded-2xl bg-white dark:bg-[#111827]/80 border border-slate-200 dark:border-slate-800 shadow-xs hover:border-slate-300 dark:hover:border-slate-700 transition-all">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 font-semibold block">
                      Direct Voice Call
                    </span>
                    <span className="text-sm font-bold text-slate-900 dark:text-white block">
                      Phone Call / WhatsApp
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => copyToClipboard(PERSONAL_INFO.phone, 'phone')}
                    className="min-h-[44px] min-w-[44px] flex items-center justify-center p-2.5 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                    title="Copy Phone Number"
                    id="copy-contact-phone-btn"
                  >
                    {copiedField === 'phone' ? (
                      <Check className="w-4 h-4 text-emerald-500" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>

                  <a
                    href={`tel:${PERSONAL_INFO.phone}`}
                    className="inline-flex items-center justify-center gap-1.5 min-h-[44px] px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold transition-colors shadow-2xs cursor-pointer active:scale-95"
                    id="contact-call-btn"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Social & Professional Links */}
            <div className="p-5 rounded-2xl bg-white dark:bg-[#111827]/80 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 font-semibold block">
                Professional Networks
              </span>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between min-h-[48px] p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 hover:border-slate-300 dark:hover:border-slate-600 transition-all text-xs font-semibold text-slate-800 dark:text-slate-200"
                  id="contact-linkedin-link"
                >
                  <div className="flex items-center gap-2">
                    <Linkedin className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    <span>LinkedIn</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                </a>

                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between min-h-[48px] p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 hover:border-slate-300 dark:hover:border-slate-600 transition-all text-xs font-semibold text-slate-800 dark:text-slate-200"
                  id="contact-github-link"
                >
                  <div className="flex items-center gap-2">
                    <Github className="w-4 h-4 text-slate-900 dark:text-white" />
                    <span>GitHub</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Direct Message Composer */}
          <div className="md:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#111827]/80 border border-slate-200 dark:border-slate-800 shadow-xs">
              <div className="flex items-center gap-2 mb-6">
                <MessageSquare className="w-4 h-4 text-slate-700 dark:text-slate-300" />
                <h3 className="font-bold text-base text-slate-900 dark:text-white">
                  Send Direct Inquiry / Schedule Call
                </h3>
              </div>

              {submitted ? (
                <div className="p-6 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 text-center space-y-2">
                  <Check className="w-8 h-8 text-emerald-600 dark:text-emerald-400 mx-auto" />
                  <h4 className="font-bold text-slate-900 dark:text-white text-base">
                    Inquiry Prepared!
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                    Your email client should have opened with the message draft. You can also email Varsha directly at <span className="font-mono font-semibold">{PERSONAL_INFO.email}</span>.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-3 min-h-[44px] px-5 py-2 text-xs font-semibold rounded-xl bg-emerald-700 text-white hover:bg-emerald-800 transition-colors cursor-pointer"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSendMessage} className="space-y-4">
                  {/* Inquiry Type Chips */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 font-semibold mb-2">
                      Topic / Reason
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {inquiryOptions.map((opt) => (
                        <button
                          type="button"
                          key={opt}
                          onClick={() => setInquiryType(opt)}
                          className={`min-h-[44px] px-3.5 py-2 text-xs rounded-xl font-medium transition-all cursor-pointer inline-flex items-center justify-center ${
                            inquiryType === opt
                              ? 'bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-950 font-semibold shadow-xs'
                              : 'bg-slate-100 dark:bg-slate-800/90 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                        Your Name / Company
                      </label>
                      <input
                        type="text"
                        required
                        value={senderName}
                        onChange={(e) => setSenderName(e.target.value)}
                        placeholder="e.g. Sarah Jenkins (Tech Recruiter)"
                        className="w-full min-h-[44px] px-3.5 py-2.5 text-xs sm:text-sm rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 dark:focus:ring-slate-600"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                        Your Email
                      </label>
                      <input
                        type="email"
                        required
                        value={senderEmail}
                        onChange={(e) => setSenderEmail(e.target.value)}
                        placeholder="e.g. sarah@company.com"
                        className="w-full min-h-[44px] px-3.5 py-2.5 text-xs sm:text-sm rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 dark:focus:ring-slate-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                      Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={senderMessage}
                      onChange={(e) => setSenderMessage(e.target.value)}
                      placeholder="Hi Varsha, we are looking for a Senior Software Engineer for our team. I reviewed your work on Spring Boot microservices and would love to chat..."
                      className="w-full px-3.5 py-3 text-xs sm:text-sm rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 dark:focus:ring-slate-600 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full min-h-[48px] py-3.5 px-6 rounded-xl text-xs sm:text-sm font-semibold bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-950 hover:bg-slate-800 dark:hover:bg-white transition-all flex items-center justify-center gap-2 shadow-xs cursor-pointer active:scale-98"
                    id="submit-contact-btn"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message to Varsha</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </motion.div>
    </section>
  );
};
