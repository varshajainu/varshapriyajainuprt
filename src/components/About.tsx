import React from 'react';
import { motion } from 'motion/react';
import { 
  Server, 
  ShieldCheck, 
  Layers, 
  Cpu, 
  GitBranch, 
  CheckCircle2, 
  UserCheck, 
  Award,
  Zap
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  const pillars = [
    {
      icon: Server,
      title: 'Enterprise Java & Microservices',
      description: 'Architecting scalable, fault-tolerant backend services with Spring Boot, Spring MVC, and standardized RESTful APIs designed for high transactional integrity.'
    },
    {
      icon: Layers,
      title: 'Responsive Angular Frontends',
      description: 'Developing reactive Angular components and stateful web applications that bridge complex business workflows into clean, accessible user interfaces.'
    },
    {
      icon: ShieldCheck,
      title: 'Security & CVE Hardening',
      description: 'Proactively identifying and remediating high/moderate severity CVEs (CVSS up to 7.5), conducting dependency audits, and enforcing zero-defect secure coding standards.'
    },
    {
      icon: GitBranch,
      title: 'Build Optimization & CI/CD',
      description: 'Diagnosing complex Maven dependency trees, classpath conflicts, and build discrepancies to achieve rock-solid 100% build pass rates and rapid deployment cycles.'
    },
    {
      icon: Cpu,
      title: 'Agentic AI & MCP Tooling',
      description: 'Certified Azure AI Engineer actively designing autonomous agents with Model Context Protocol (MCP), Google Maps APIs, and BigQuery location intelligence pipelines.'
    }
  ];

  const quickFacts = [
    { label: 'Current Role', value: 'Senior Software Engineer at Capgemini' },
    { label: 'Experience Level', value: '2+ Years in Production Java Full Stack' },
    { label: 'Core Tech Stack', value: 'Java, Spring Boot, Angular, REST APIs, SQL' },
    { label: 'Key Proven Wins', value: '100% CVE Elimination, 100% Maven Build Pass Rate' },
    { label: 'Certifications', value: 'Microsoft Certified Azure AI Engineer, Google Gen AI Academy' },
    { label: 'Availability', value: 'Open for Senior & Full-Stack Opportunities' },
    { label: 'Work Authorization', value: 'India / Global Remote Ready' }
  ];

  return (
    <section id="about" className="py-16 md:py-24 border-t border-slate-200/80 dark:border-slate-800/80 bg-slate-100/50 dark:bg-[#0F172A]/40 overflow-hidden">
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
            Profile & Philosophy
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Architecting Scalable, Secure & Resilient Software Systems
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            I am a full-stack engineer who combines rigorous backend engineering with an uncompromising focus on code security, build pipeline reliability, and modern user experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Core Engineering Pillars */}
          <div className="md:col-span-7 space-y-4">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <Zap className="w-4 h-4 text-slate-700 dark:text-slate-300" />
              <span>Core Architectural Strengths</span>
            </h3>

            <div className="grid grid-cols-1 gap-3.5">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: idx * 0.05 }}
                    className="p-4 rounded-xl bg-white dark:bg-[#111827]/80 border border-slate-200/90 dark:border-slate-800/90 hover:border-slate-300 dark:hover:border-slate-700 transition-all shadow-xs"
                  >
                    <div className="flex items-start gap-3.5">
                      <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800/90 text-slate-800 dark:text-slate-200 shrink-0 mt-0.5">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                          {pillar.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                          {pillar.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Fast Facts Overview */}
          <div className="md:col-span-5">
            <div className="sticky top-28 p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#111827]/90 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <UserCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-slate-100">
                    Professional Overview
                  </h3>
                </div>
                <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                  Snapshot
                </span>
              </div>

              <dl className="divide-y divide-slate-100 dark:divide-slate-800/80">
                {quickFacts.map((fact, idx) => (
                  <div key={idx} className="py-2.5 flex flex-col sm:flex-row sm:justify-between gap-1 text-xs">
                    <dt className="text-slate-500 dark:text-slate-400 font-medium shrink-0">
                      {fact.label}
                    </dt>
                    <dd className="font-semibold text-slate-800 dark:text-slate-200 sm:text-right">
                      {fact.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                <span className="text-slate-500 dark:text-slate-400">Preferred Locations:</span>
                <span className="font-medium text-slate-800 dark:text-slate-200">Hybrid / Remote / Relocation</span>
              </div>
            </div>
          </div>

        </div>

      </motion.div>
    </section>
  );
};
