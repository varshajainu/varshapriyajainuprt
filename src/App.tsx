import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { ReadingProgressBar } from './components/ReadingProgressBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingControls } from './components/FloatingControls';
import { ResumeModal } from './components/ResumeModal';

export function PortfolioContent() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0B0F19] text-slate-900 dark:text-[#E2E8F0] transition-colors duration-300 antialiased selection:bg-slate-800 selection:text-white dark:selection:bg-slate-200 dark:selection:text-slate-950">
      {/* Scroll-depth Reading Progress Bar */}
      <ReadingProgressBar />

      {/* Sticky Top Navbar */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Flow */}
      <main>
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
      </main>

      {/* Footer */}
      <Footer onOpenResume={() => setIsResumeOpen(true)} />

      {/* Floating Controls (Dark Mode Toggle + Scroll to Top) */}
      <FloatingControls onOpenResume={() => setIsResumeOpen(true)} />

      {/* Resume Viewer / Print Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <PortfolioContent />
    </ThemeProvider>
  );
}
