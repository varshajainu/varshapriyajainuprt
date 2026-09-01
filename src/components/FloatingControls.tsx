import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sun, 
  Moon, 
  ArrowUp, 
  Copy, 
  Check, 
  FileText,
  Sparkles
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FloatingControlsProps {
  onOpenResume: () => void;
}

export const FloatingControls: React.FC<FloatingControlsProps> = ({ onOpenResume }) => {
  const { theme, toggleTheme } = useTheme();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2.5 no-print">
      
      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            onClick={scrollToTop}
            className="p-3 rounded-full bg-white/90 dark:bg-slate-900/90 text-slate-700 dark:text-slate-200 border border-slate-200/80 dark:border-slate-800/80 shadow-lg backdrop-blur-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-all hover:scale-105 active:scale-95"
            aria-label="Scroll to Top"
            title="Scroll to Top"
            id="floating-scroll-top-btn"
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Floating Dark Mode Toggle (Requested feature) */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleTheme}
        className="flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-slate-900/90 dark:bg-slate-100/90 text-white dark:text-slate-950 border border-slate-700/50 dark:border-slate-300/50 shadow-xl backdrop-blur-md transition-all cursor-pointer"
        aria-label="Toggle Dark/Light Mode"
        title="Toggle Theme"
        id="floating-theme-toggle-btn"
      >
        {theme === 'dark' ? (
          <>
            <Sun className="w-4 h-4 text-amber-400 fill-amber-400" />
            <span className="text-xs font-semibold tracking-tight">Light Mode</span>
          </>
        ) : (
          <>
            <Moon className="w-4 h-4 text-slate-300 fill-slate-300" />
            <span className="text-xs font-semibold tracking-tight">Dark Mode</span>
          </>
        )}
      </motion.button>

    </div>
  );
};
