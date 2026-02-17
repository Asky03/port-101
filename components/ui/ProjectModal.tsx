'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Project } from '@/data/projects';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    // Trap focus within modal
    const modal = document.getElementById('project-modal');
    const focusableElements = modal?.querySelectorAll(
      'button, a[href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements?.[0] as HTMLElement;
    const lastElement = focusableElements?.[
      focusableElements.length - 1
    ] as HTMLElement;

    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement?.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement?.focus();
        }
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.addEventListener('keydown', handleTab);
    document.body.style.overflow = 'hidden';

    // Focus first element
    setTimeout(() => firstElement?.focus(), 100);

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('keydown', handleTab);
      document.body.style.overflow = 'unset';
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[2000]"
            aria-hidden="true"
          />

          {/* Modal */}
          <div
            className="fixed inset-0 z-[2001] grid place-items-center p-4 overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <motion.div
              id="project-modal"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="bg-[var(--bg-2)] border border-[var(--border)] rounded-2xl p-6 md:p-8 max-w-2xl w-full relative shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <motion.button
                onClick={onClose}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[var(--glass)] border border-[var(--border)] flex items-center justify-center hover:bg-white/10 transition-colors"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Close modal"
              >
                <i className="fa-solid fa-times"></i>
              </motion.button>

              {/* Category Badge */}
              <span className="inline-block text-xs px-4 py-1.5 rounded-full border border-[var(--border)] bg-white/[0.04] mb-3 shadow-sm font-semibold tracking-wide transition-all duration-300" style={{borderRadius: '999px'}}>
                {project.category}
              </span>

              {/* Title */}
              <h3 id="modal-title" className="text-2xl md:text-3xl font-bold mb-3">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-[var(--muted)] mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex gap-2 flex-wrap mb-4">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs px-4 py-1.5 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/20 shadow-sm font-semibold tracking-wide transition-all duration-300" style={{borderRadius: '999px'}}>
                    {tag}
                  </span>
                ))}
              </div>

              {/* Tech Stack */}
              <div className="mb-5">
                <h4 className="text-sm font-bold mb-2 text-[var(--muted)]">
                  Tech Stack
                </h4>
                <div className="flex gap-2 flex-wrap">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-4 py-1.5 rounded-full border border-[var(--border)] bg-white/[0.04] shadow-sm font-semibold tracking-wide transition-all duration-300" style={{borderRadius: '999px'}}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Optional Sections */}
              {project.whatIBuilt && (
                <div className="mb-4">
                  <h4 className="text-sm font-bold mb-2">What I Built</h4>
                  <p className="text-[var(--muted)] text-sm leading-relaxed">
                    {project.whatIBuilt}
                  </p>
                </div>
              )}

              {project.challenges && (
                <div className="mb-4">
                  <h4 className="text-sm font-bold mb-2">Challenges</h4>
                  <p className="text-[var(--muted)] text-sm leading-relaxed">
                    {project.challenges}
                  </p>
                </div>
              )}

              {project.learnings && (
                <div className="mb-5">
                  <h4 className="text-sm font-bold mb-2">Learnings</h4>
                  <p className="text-[var(--muted)] text-sm leading-relaxed">
                    {project.learnings}
                  </p>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex gap-3 flex-wrap pt-4 border-t border-[var(--border)]">
                <motion.a
                  href={project.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-br from-[var(--accent)] via-[#64d2ff] to-[#70a6ff] text-[#051018] font-bold shadow-[0_8px_30px_rgba(124,245,255,.25)]"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: '0 12px 40px rgba(124,245,255,.4)',
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className="fa-brands fa-github"></i>
                  View Code
                </motion.a>

                {project.liveUrl && (
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-[var(--border)] bg-[var(--glass)] font-bold"
                    whileHover={{
                      scale: 1.05,
                      borderColor: 'rgba(124,245,255,.6)',
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    Live Demo
                  </motion.a>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
