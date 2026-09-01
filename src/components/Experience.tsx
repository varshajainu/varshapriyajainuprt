import React from 'react';
import { motion } from 'motion/react';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  ShieldCheck, 
  TrendingUp, 
  Wrench,
  Building2
} from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 md:py-24 overflow-hidden">
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
            Career History
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Professional Work Experience
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Track record of delivering production-grade enterprise microservices, eliminating security vulnerabilities, and driving engineering efficiency.
          </p>
        </div>

        {/* Experience Timeline Cards */}
        <div className="space-y-8 max-w-5xl">
          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
              className="relative p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#111827]/80 border border-slate-200 dark:border-slate-800 shadow-xs hover:border-slate-300 dark:hover:border-slate-700 transition-all"
            >
              {/* Header Info */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-800">
                <div>
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                      {exp.role}
                    </h3>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60">
                      Current Role
                    </span>
                  </div>

                  <div className="mt-2 flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400 flex-wrap">
                    <span className="font-semibold text-slate-900 dark:text-slate-200 flex items-center gap-1.5">
                      <Building2 className="w-4 h-4 text-slate-400" />
                      {exp.company}
                    </span>
                    <span className="flex items-center gap-1 text-xs">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {exp.location}
                    </span>
                    <span className="flex items-center gap-1 text-xs font-mono">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      {exp.period}
                    </span>
                  </div>
                </div>

                {/* Key Metrics Pill Grid */}
                <div className="flex flex-wrap sm:flex-row lg:flex-col gap-2 shrink-0">
                  {exp.metrics.map((metric, mIdx) => (
                    <div
                      key={mIdx}
                      className="px-3 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 text-right text-xs"
                    >
                      <span className="text-slate-500 dark:text-slate-400 block text-[10px] uppercase font-mono">
                        {metric.label}
                      </span>
                      <span className="font-bold text-slate-900 dark:text-white font-mono text-sm">
                        {metric.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Description & Detailed Achievements */}
              <div className="mt-6">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 font-semibold mb-3">
                  Key Responsibilities & Quantified Impact:
                </h4>

                <motion.ul 
                  variants={{
                    hidden: { opacity: 0 },
                    show: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.08,
                        delayChildren: 0.1
                      }
                    }
                  }}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="space-y-3.5"
                >
                  {exp.achievements.map((achievement, aIdx) => (
                    <motion.li 
                      key={aIdx} 
                      variants={{
                        hidden: { opacity: 0, x: -12 },
                        show: { 
                          opacity: 1, 
                          x: 0,
                          transition: { duration: 0.35, ease: 'easeOut' }
                        }
                      }}
                      className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300 leading-relaxed"
                    >
                      <span className="p-1 rounded bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                      </span>
                      <span>{achievement}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>

              {/* Technologies Used */}
              <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-mono text-slate-400 dark:text-slate-500 mr-1">
                    Environment:
                  </span>
                  {exp.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-xs px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 font-medium font-mono"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </motion.div>
    </section>
  );
};
