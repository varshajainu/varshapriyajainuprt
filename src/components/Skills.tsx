import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Code2, 
  Layers, 
  Server, 
  GitBranch, 
  ShieldCheck, 
  Cpu, 
  Search
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categoryIconMap: Record<string, React.ElementType> = {
    Code2,
    Layers,
    Server,
    GitBranch,
    ShieldCheck,
    Cpu,
  };

  const categories = ['All', ...SKILL_CATEGORIES.map((c) => c.category)];

  const filteredCategories = SKILL_CATEGORIES.map((cat) => {
    const matchingSkills = cat.skills.filter((skill) =>
      skill.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return {
      ...cat,
      skills: matchingSkills,
    };
  }).filter((cat) => {
    if (activeCategory !== 'All' && cat.category !== activeCategory) {
      return false;
    }
    return cat.skills.length > 0;
  });

  return (
    <section id="skills" className="py-16 md:py-24 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-70px' }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-500"></span>
              Technical Competencies
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              Skills & Engineering Stack
            </h2>
            <p className="mt-3 text-base text-slate-600 dark:text-slate-400">
              Comprehensive proficiency across Java full-stack architecture, microservice security, automated build pipelines, and cloud AI.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skill (e.g. Spring, CVE)..."
              className="w-full pl-10 pr-12 py-3 min-h-[44px] text-xs sm:text-sm rounded-xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 dark:focus:ring-slate-600 transition-all shadow-xs"
              id="skill-search-input"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-1 top-1/2 -translate-y-1/2 min-h-[44px] min-w-[44px] flex items-center justify-center text-xs font-medium text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 cursor-pointer"
                title="Clear search"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 sm:gap-2.5 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`min-h-[44px] px-4 py-2 text-xs sm:text-sm font-medium rounded-xl transition-all cursor-pointer inline-flex items-center justify-center active:scale-95 ${
                activeCategory === category
                  ? 'bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-950 font-semibold shadow-xs'
                  : 'bg-slate-100 dark:bg-[#111827] text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 border border-transparent dark:border-slate-800'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat, idx) => {
            const CatIconComponent = categoryIconMap[cat.iconName] || Code2;
            return (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#111827]/80 border border-slate-200 dark:border-slate-800 shadow-xs hover:border-slate-300 dark:hover:border-slate-700 transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 pb-4 mb-4 border-b border-slate-100 dark:border-slate-800">
                    <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/90 text-slate-800 dark:text-slate-200">
                      <CatIconComponent className="w-4 h-4" />
                    </div>
                    <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                      {cat.category}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-lg font-medium bg-slate-100 dark:bg-slate-800/90 text-slate-800 dark:text-slate-200 border border-slate-200/70 dark:border-slate-700/70 transition-colors"
                      >
                        <span className="font-semibold">{skill.name}</span>
                        {skill.level && (
                          <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400">
                            • {skill.level}
                          </span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-3.5 border-t border-slate-100 dark:border-slate-800/60 text-[11px] text-slate-400 font-mono flex items-center justify-between">
                  <span>{cat.skills.length} competencies</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-medium">Production Ready</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {filteredCategories.length === 0 && (
          <div className="text-center py-12 text-slate-500 dark:text-slate-400">
            No technical skills found matching &ldquo;{searchQuery}&rdquo;. Try another term.
          </div>
        )}

      </motion.div>
    </section>
  );
};
