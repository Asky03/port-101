'use client';

import { motion } from 'framer-motion';
import type { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{
        y: -6,
        borderColor: 'rgba(124,245,255,.45)',
        boxShadow: '0 12px 40px rgba(124,245,255,.12)',
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="min-h-[220px] rounded-2xl bg-[var(--card)] border border-[var(--border)] p-5 relative overflow-hidden cursor-pointer"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
    >
      {/* Category Badge */}
      <span className="inline-block text-xs px-4 py-1.5 rounded-full border border-[var(--border)] bg-white/[0.04] mb-2 shadow-sm font-semibold tracking-wide transition-all duration-300" style={{borderRadius: '999px'}}>
        {project.category}
      </span>

      {/* Title */}
      <h3 className="text-xl font-bold mb-2 line-clamp-2">{project.title}</h3>

      {/* Description */}
      <p className="text-[var(--muted)] text-sm mb-3 line-clamp-2">
        {project.description}
      </p>

      {/* Tech Stack */}
      <div className="flex gap-2 flex-wrap opacity-90 mb-3.5">
        {project.tech.slice(0, 3).map((tech, i) => (
          <span
            key={i}
            className="text-xs px-2.5 py-1.5 rounded-full border border-[var(--border)] bg-white/[0.02]"
          >
            {tech}
          </span>
        ))}
        {project.tech.length > 3 && (
          <span className="text-xs px-2.5 py-1.5 rounded-full border border-[var(--border)] bg-white/[0.02]">
            +{project.tech.length - 3}
          </span>
        )}
      </div>

      {/* Actions */}
      <div className="flex gap-2.5">
        <motion.a
          href={project.codeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-[var(--border)] bg-[var(--glass)] text-sm font-bold"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={(e) => e.stopPropagation()}
        >
          <i className="fa-brands fa-github"></i>
          Code
        </motion.a>

        {project.liveUrl && (
          <motion.a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-[var(--border)] bg-transparent text-sm font-bold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => e.stopPropagation()}
          >
            <i className="fa-solid fa-arrow-up-right-from-square"></i>
            Live
          </motion.a>
        )}
      </div>

      {/* Hover Glow Effect */}
      <motion.div
        className="absolute inset-0 opacity-0 pointer-events-none"
        whileHover={{ opacity: 1 }}
        style={{
          background:
            'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(124,245,255,.06), transparent 40%)',
        }}
      />
    </motion.article>
  );
}
