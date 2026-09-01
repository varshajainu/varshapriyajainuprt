import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowDown, 
  ArrowUpRight, 
  Check, 
  Copy, 
  Download, 
  FileText, 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  Phone, 
  ShieldCheck, 
  Terminal, 
  Sparkles
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [copiedType, setCopiedType] = useState<string | null>(null);

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2200);
  };

  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background subtle ambient grid/dots & radial glow */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-slate-400/5 dark:bg-slate-500/10 blur-[120px] rounded-full -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center md:text-left">
          
          {/* Top Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 text-xs font-medium text-slate-700 dark:text-slate-300 mb-6 shadow-xs"
            id="hero-status-badge"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-mono text-[11px] uppercase tracking-wider text-emerald-700 dark:text-emerald-400 font-semibold">
              Available
            </span>
            <span className="text-slate-400 dark:text-slate-600">|</span>
            <span>{PERSONAL_INFO.status}</span>
          </motion.div>

          {/* Main Title & Role */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="space-y-3"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-xl sm:text-2xl font-semibold text-slate-700 dark:text-slate-300 flex items-center justify-center md:justify-start gap-2 flex-wrap">
              <span>{PERSONAL_INFO.role}</span>
              <span className="text-slate-400 dark:text-slate-600 hidden sm:inline">•</span>
              <span className="text-slate-500 dark:text-slate-400 text-lg font-normal">
                Java Full Stack & Microservices
              </span>
            </p>
          </motion.div>

          {/* Punchy Bio Description */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="mt-6 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl"
          >
            {PERSONAL_INFO.summary}
          </motion.p>

          {/* Primary Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.15 }}
            className="mt-8 flex flex-wrap items-center justify-center md:justify-start gap-3 sm:gap-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 min-h-[44px] px-5 py-3 rounded-xl text-sm font-semibold bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-950 hover:bg-slate-800 dark:hover:bg-white transition-all shadow-sm active:scale-95 cursor-pointer"
              id="hero-cta-projects"
            >
              <span>Featured Projects</span>
              <ArrowDown className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenResume}
              className="inline-flex items-center justify-center gap-2 min-h-[44px] px-5 py-3 rounded-xl text-sm font-semibold bg-white dark:bg-[#111827] border border-slate-300 dark:border-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-all shadow-xs active:scale-95 cursor-pointer"
              id="hero-cta-resume"
            >
              <FileText className="w-4 h-4 text-slate-500 dark:text-slate-400" />
              <span>View / Download Resume</span>
            </button>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 min-h-[44px] px-5 py-3 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors cursor-pointer"
              id="hero-cta-contact"
            >
              <Mail className="w-4 h-4" />
              <span>Get in Touch</span>
            </a>
          </motion.div>

          {/* Quick Actions Bar */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.2 }}
            className="mt-8 pt-6 border-t border-slate-200/80 dark:border-slate-800/80 flex flex-wrap items-center justify-center md:justify-start gap-3 sm:gap-4 text-xs font-medium text-slate-600 dark:text-slate-400"
          >
            <span className="font-mono text-slate-400 dark:text-slate-500 uppercase tracking-wider text-[11px]">
              Quick Contact Details:
            </span>

            {/* Copy Email Button */}
            <button
              onClick={() => copyToClipboard(PERSONAL_INFO.email, 'email')}
              className="inline-flex items-center gap-2 min-h-[44px] px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-slate-800/90 text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer"
              title="Copy Email Address"
              id="quick-copy-email"
            >
              {copiedType === 'email' ? (
                <>
                  <Check className="w-4 h-4 text-emerald-500" />
                  <span className="text-emerald-600 dark:text-emerald-400 font-medium">Email Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-slate-400" />
                  <span>{PERSONAL_INFO.email}</span>
                </>
              )}
            </button>

            {/* Copy Phone Button */}
            <button
              onClick={() => copyToClipboard(PERSONAL_INFO.phone, 'phone')}
              className="inline-flex items-center gap-2 min-h-[44px] px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-slate-800/90 text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer"
              title="Copy Phone Number"
              id="quick-copy-phone"
            >
              {copiedType === 'phone' ? (
                <>
                  <Check className="w-4 h-4 text-emerald-500" />
                  <span className="text-emerald-600 dark:text-emerald-400 font-medium">Phone Copied!</span>
                </>
              ) : (
                <>
                  <Phone className="w-4 h-4 text-slate-400" />
                  <span>{PERSONAL_INFO.phone}</span>
                </>
              )}
            </button>

            {/* Direct Links */}
            <div className="flex items-center gap-2">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 min-h-[44px] px-3.5 py-2 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                id="hero-linkedin-link"
              >
                <Linkedin className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 min-h-[44px] px-3.5 py-2 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                id="hero-github-link"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
