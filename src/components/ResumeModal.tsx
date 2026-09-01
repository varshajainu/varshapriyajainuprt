import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Copy, 
  Check, 
  Download, 
  ExternalLink, 
  FileText, 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin,
  ShieldCheck,
  Loader2
} from 'lucide-react';
import { jsPDF } from 'jspdf';
import { PERSONAL_INFO, EXPERIENCES, SKILL_CATEGORIES, CERTIFICATIONS, EDUCATION } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);

  if (!isOpen) return null;

  const getPlainTextResume = () => {
    return `${PERSONAL_INFO.name.toUpperCase()}
${PERSONAL_INFO.role}
Phone: ${PERSONAL_INFO.phone} | Email: ${PERSONAL_INFO.email}
LinkedIn: ${PERSONAL_INFO.linkedin} | GitHub: ${PERSONAL_INFO.github}

PROFESSIONAL SUMMARY
${PERSONAL_INFO.summary}

TECHNICAL SKILLS
• Programming Languages: Java, JavaScript, Python, SQL, HTML5, CSS3
• Frameworks & Libraries: Spring Boot, Spring MVC, Angular, Bootstrap, NumPy, Pandas
• Technologies: REST APIs, Microservices, API Integration
• Build & DevOps: Git/GitHub, Maven, CI/CD, Dependency Management, Build Optimization
• Security: Vulnerability Remediation, CVE Management, Secure Coding Practices
• Cloud & AI: Azure AI, Generative AI, Machine Learning

PROFESSIONAL EXPERIENCE
CAPGEMINI | Senior Software Engineer (September 2024 – Present)
${EXPERIENCES[0]?.achievements.map((a) => `• ${a}`).join('\n')}

CERTIFICATIONS & WORKSHOPS
${CERTIFICATIONS.map((c) => `• ${c.title} (${c.issuer})`).join('\n')}
`;
  };

  const handleCopyText = () => {
    navigator.clipboard.writeText(getPlainTextResume());
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleDownloadPdf = () => {
    setIsGeneratingPdf(true);
    try {
      const doc = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });

      const pageWidth = doc.internal.pageSize.getWidth();
      const margin = 14;
      const contentWidth = pageWidth - margin * 2;
      let y = 14;

      // Header Name
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(16);
      doc.setTextColor(17, 24, 39);
      doc.text(PERSONAL_INFO.name.toUpperCase(), pageWidth / 2, y, { align: 'center' });

      // Role
      y += 5.5;
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(10);
      doc.setTextColor(55, 65, 81);
      doc.text(`${PERSONAL_INFO.role} | Full-Stack Software Engineer`, pageWidth / 2, y, { align: 'center' });

      // Contact info line
      y += 4.5;
      doc.setFontSize(8);
      doc.setTextColor(75, 85, 99);
      const contactText = `Phone: ${PERSONAL_INFO.phone}  |  Email: ${PERSONAL_INFO.email}  |  Location: ${PERSONAL_INFO.location}`;
      doc.text(contactText, pageWidth / 2, y, { align: 'center' });

      // Links line
      y += 4;
      const linksText = `LinkedIn: ${PERSONAL_INFO.linkedin}  |  GitHub: ${PERSONAL_INFO.github}`;
      doc.text(linksText, pageWidth / 2, y, { align: 'center' });

      const addSectionHeading = (title: string) => {
        y += 5.5;
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(9);
        doc.setTextColor(17, 24, 39);
        doc.text(title.toUpperCase(), margin, y);
        y += 1.2;
        doc.setDrawColor(203, 213, 225);
        doc.setLineWidth(0.3);
        doc.line(margin, y, margin + contentWidth, y);
        y += 3.8;
      };

      // Section 1: Professional Summary
      addSectionHeading('Professional Summary');
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8);
      doc.setTextColor(51, 65, 85);
      const summaryLines = doc.splitTextToSize(PERSONAL_INFO.summary, contentWidth);
      doc.text(summaryLines, margin, y);
      y += summaryLines.length * 3.6;

      // Section 2: Technical Skills
      addSectionHeading('Technical Skills');
      doc.setFontSize(8);
      const skillEntries = [
        { cat: 'Programming Languages', val: 'Java, JavaScript, Python, SQL, HTML5, CSS3' },
        { cat: 'Frameworks & Libraries', val: 'Spring Boot, Spring MVC, Angular, Bootstrap, NumPy, Pandas' },
        { cat: 'Technologies & DevOps', val: 'REST APIs, Microservices, Git/GitHub, Maven, CI/CD' },
        { cat: 'Security & Cloud', val: 'Vulnerability Remediation, CVE Management, Azure AI, GenAI' },
      ];

      skillEntries.forEach((s) => {
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(17, 24, 39);
        doc.text(`• ${s.cat}: `, margin, y);
        const catWidth = doc.getTextWidth(`• ${s.cat}: `);
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(51, 65, 85);
        doc.text(s.val, margin + catWidth, y);
        y += 3.8;
      });

      // Section 3: Professional Experience
      addSectionHeading('Professional Experience');
      EXPERIENCES.forEach((exp) => {
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(8.5);
        doc.setTextColor(17, 24, 39);
        doc.text(`${exp.company} — ${exp.role}`, margin, y);
        
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(7.8);
        doc.setTextColor(100, 116, 139);
        doc.text(`${exp.period} | ${exp.location}`, margin + contentWidth, y, { align: 'right' });
        y += 4;

        exp.achievements.forEach((ach) => {
          doc.setFont('helvetica', 'normal');
          doc.setFontSize(7.8);
          doc.setTextColor(51, 65, 85);
          const bullet = '• ';
          const textLines = doc.splitTextToSize(ach, contentWidth - 4);
          doc.text(bullet, margin, y);
          doc.text(textLines, margin + 3.5, y);
          y += textLines.length * 3.4 + 0.8;
        });
      });

      // Section 4: Featured Projects
      addSectionHeading('Featured Projects');
      const projectList = [
        {
          name: 'CivicCore — Municipal Complaint Management Platform',
          tech: 'Spring Boot, Angular, MySQL, JWT, REST APIs',
          desc: 'Built full-stack civic redressal platform with role-based routing, automated SLA escalations, and real-time grievance tracking dashboards.'
        },
        {
          name: 'TradeStock — Real-Time Equity Analytics Dashboard',
          tech: 'Python, Alpha Vantage API, Pandas, Matplotlib, Streamlit',
          desc: 'Engineered financial analytics engine processing live stock tickers, computing 20/50/200 SMA indicators, RSI oscillators, and volumetric volatility analysis.'
        }
      ];

      projectList.forEach((proj) => {
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(8.2);
        doc.setTextColor(17, 24, 39);
        doc.text(`• ${proj.name}`, margin, y);
        y += 3.5;

        doc.setFont('helvetica', 'italic');
        doc.setFontSize(7.5);
        doc.setTextColor(100, 116, 139);
        doc.text(`  Tech Stack: ${proj.tech}`, margin, y);
        y += 3.2;

        doc.setFont('helvetica', 'normal');
        doc.setFontSize(7.8);
        doc.setTextColor(51, 65, 85);
        const pLines = doc.splitTextToSize(`  ${proj.desc}`, contentWidth - 4);
        doc.text(pLines, margin, y);
        y += pLines.length * 3.4 + 1.2;
      });

      // Section 5: Certifications
      addSectionHeading('Certifications & Accreditations');
      CERTIFICATIONS.forEach((cert) => {
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(7.8);
        doc.setTextColor(17, 24, 39);
        doc.text(`• ${cert.title}`, margin, y);
        const tWidth = doc.getTextWidth(`• ${cert.title}`);
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(100, 116, 139);
        doc.text(` (${cert.issuer})`, margin + tWidth, y);
        y += 3.6;
      });

      doc.save('Varsha_Priya_Jainu_Resume.pdf');
    } catch (err) {
      console.error('Error generating PDF:', err);
    } finally {
      setIsGeneratingPdf(false);
    }
  };

  return (
    <AnimatePresence>
      <div id="resume-modal-overlay" className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          id="resume-modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity no-print"
        />

        {/* Resume Sheet Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 10 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-4xl rounded-2xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-2xl z-10 my-4 max-h-[92vh] flex flex-col overflow-hidden"
          id="resume-modal-container"
        >
          {/* Top Control Bar */}
          <div className="no-print p-4 sm:px-6 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3 bg-slate-50 dark:bg-[#0B0F19] flex-wrap">
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-slate-700 dark:text-slate-300" />
              <span className="font-bold text-sm text-slate-900 dark:text-white">
                Varsha Priya Jainu — Resume
              </span>
            </div>

            <div className="flex items-center gap-2 flex-wrap">
              <button
                onClick={handleCopyText}
                className="inline-flex items-center justify-center gap-1.5 min-h-[44px] px-3.5 py-2 text-xs font-medium rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors shadow-2xs cursor-pointer active:scale-95"
                id="copy-ats-resume-btn"
                title="Copy Plaintext for ATS forms"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Copied ATS!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-400" />
                    <span>Copy ATS Plaintext</span>
                  </>
                )}
              </button>

              <button
                onClick={handleDownloadPdf}
                disabled={isGeneratingPdf}
                className="inline-flex items-center justify-center gap-2 min-h-[44px] px-4 py-2 text-xs font-semibold rounded-xl bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-950 hover:bg-slate-800 dark:hover:bg-white transition-colors shadow-2xs cursor-pointer disabled:opacity-50 active:scale-95"
                id="download-resume-pdf-btn"
                title="Download PDF"
              >
                {isGeneratingPdf ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Generating PDF...</span>
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4" />
                    <span>Download PDF</span>
                  </>
                )}
              </button>

              <button
                onClick={onClose}
                className="min-h-[44px] min-w-[44px] flex items-center justify-center p-2 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-xl transition-colors cursor-pointer"
                aria-label="Close Modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable Resume Body */}
          <div 
            id="printable-resume-body"
            className="p-6 sm:p-10 md:p-12 overflow-y-auto text-slate-900 dark:text-slate-100 bg-white dark:bg-[#0B0F19] print:p-0 print:m-0 print:text-black"
          >
            
            {/* Header */}
            <div className="text-center pb-6 border-b border-slate-200 dark:border-slate-800">
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight uppercase">
                {PERSONAL_INFO.name}
              </h1>
              <div className="mt-2 flex items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm text-slate-600 dark:text-slate-400 flex-wrap font-mono">
                <span>{PERSONAL_INFO.phone}</span>
                <span>•</span>
                <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:underline">
                  {PERSONAL_INFO.email}
                </a>
                <span>•</span>
                <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  LinkedIn
                </a>
                <span>•</span>
                <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  GitHub
                </a>
              </div>
            </div>

            {/* Professional Summary */}
            <div className="mt-6">
              <h2 className="text-xs font-mono uppercase tracking-widest font-bold border-b border-slate-200 dark:border-slate-800 pb-1 text-slate-800 dark:text-slate-200">
                Professional Summary
              </h2>
              <p className="mt-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed text-justify">
                {PERSONAL_INFO.summary}
              </p>
            </div>

            {/* Technical Skills */}
            <div className="mt-6">
              <h2 className="text-xs font-mono uppercase tracking-widest font-bold border-b border-slate-200 dark:border-slate-800 pb-1 text-slate-800 dark:text-slate-200">
                Technical Skills
              </h2>
              <div className="mt-2.5 space-y-1.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                <p>
                  <span className="font-semibold text-slate-900 dark:text-white">• Programming Languages:</span> Java, JavaScript, Python, SQL, HTML5, CSS3
                </p>
                <p>
                  <span className="font-semibold text-slate-900 dark:text-white">• Frameworks & Libraries:</span> Spring Boot, Spring MVC, Angular, Bootstrap, NumPy, Pandas
                </p>
                <p>
                  <span className="font-semibold text-slate-900 dark:text-white">• Technologies:</span> REST APIs, Microservices, API Integration
                </p>
                <p>
                  <span className="font-semibold text-slate-900 dark:text-white">• Build & DevOps:</span> Git/GitHub, Maven, CI/CD, Dependency Management, Build Optimization
                </p>
                <p>
                  <span className="font-semibold text-slate-900 dark:text-white">• Security:</span> Vulnerability Remediation, CVE Management, Secure Coding Practices
                </p>
                <p>
                  <span className="font-semibold text-slate-900 dark:text-white">• Cloud & AI:</span> Azure AI, Generative AI, Machine Learning, MCP Protocol
                </p>
              </div>
            </div>

            {/* Professional Experience */}
            <div className="mt-6">
              <h2 className="text-xs font-mono uppercase tracking-widest font-bold border-b border-slate-200 dark:border-slate-800 pb-1 text-slate-800 dark:text-slate-200">
                Professional Experience
              </h2>
              {EXPERIENCES.map((exp) => (
                <div key={exp.id} className="mt-3">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs sm:text-sm">
                    <div className="font-bold text-slate-900 dark:text-white">
                      {exp.company.toUpperCase()} | <span className="font-medium text-slate-700 dark:text-slate-300">{exp.role}</span>
                    </div>
                    <div className="font-mono text-xs text-slate-500 dark:text-slate-400">
                      {exp.period}
                    </div>
                  </div>
                  <ul className="mt-2 space-y-1.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 pl-4 list-disc marker:text-slate-400">
                    {exp.achievements.map((item, idx) => (
                      <li key={idx} className="leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Certifications & Workshops */}
            <div className="mt-6">
              <h2 className="text-xs font-mono uppercase tracking-widest font-bold border-b border-slate-200 dark:border-slate-800 pb-1 text-slate-800 dark:text-slate-200">
                Certifications & Workshops
              </h2>
              <ul className="mt-2.5 space-y-1.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 pl-4 list-disc marker:text-slate-400">
                <li>
                  <span className="font-semibold text-slate-900 dark:text-white">Microsoft Certified:</span> Azure AI Engineer Associate
                </li>
                <li>
                  <span className="font-semibold text-slate-900 dark:text-white">Workshop:</span> Build a Location Intelligence ADK Agent with MCP servers for BigQuery and Google Maps (Conducted by GeeksforGeeks Connect and Google)
                </li>
                <li>
                  <span className="font-semibold text-slate-900 dark:text-white">Google Cloud:</span> Gen AI Academy APAC 2026 - Cohort 2
                </li>
              </ul>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
