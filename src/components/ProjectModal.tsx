import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '../data/portfolioData';
import { X, ExternalLink, CheckCircle2, Cpu, Zap, Activity } from 'lucide-react';
import { GithubIcon } from './Icons';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 select-none">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl border border-zinc-200 z-10"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-700 transition-colors z-20"
            aria-label="Close Modal"
          >
            <X size={20} />
          </button>

          {/* Header Image */}
          <div className="relative w-full h-64 sm:h-80 overflow-hidden bg-zinc-900 rounded-t-3xl">
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-full object-cover filter contrast-105 opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-6 md:p-8">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-mono">
                    {project.category}
                  </span>
                  <span className="text-zinc-300 text-xs font-mono">{project.year}</span>
                </div>
                <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                  {project.title}
                </h3>
                <p className="text-zinc-300 text-sm sm:text-base">{project.subtitle}</p>
              </div>
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-6 md:p-8 space-y-8">
            {/* Metrics Row */}
            {project.metrics && project.metrics.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {project.metrics.map((metric, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200/80">
                    <span className="text-xs font-mono uppercase text-zinc-500 block mb-1">
                      {metric.label}
                    </span>
                    <span className="text-2xl font-black text-zinc-950 flex items-center gap-1.5">
                      <Zap size={18} className="text-amber-500" />
                      {metric.value}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Overview */}
            <div className="space-y-3">
              <h4 className="text-lg font-bold text-zinc-950 flex items-center gap-2">
                <Activity size={18} className="text-zinc-700" />
                Project Architecture Overview
              </h4>
              <p className="text-zinc-600 leading-relaxed">{project.overview}</p>
            </div>

            {/* Challenge & Solution Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200/70 space-y-2">
                <h5 className="font-bold text-zinc-900 text-sm uppercase font-mono tracking-wider">
                  The Technical Challenge
                </h5>
                <p className="text-zinc-600 text-sm leading-relaxed">{project.challenge}</p>
              </div>

              <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200/70 space-y-2">
                <h5 className="font-bold text-zinc-900 text-sm uppercase font-mono tracking-wider flex items-center gap-1.5 text-emerald-800">
                  <CheckCircle2 size={16} />
                  The Engineered Solution
                </h5>
                <p className="text-zinc-600 text-sm leading-relaxed">{project.solution}</p>
              </div>
            </div>

            {/* Tech Stack Chips */}
            <div className="space-y-2">
              <h5 className="text-xs font-mono uppercase text-zinc-500">Tech Stack & Tools</h5>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-800 text-xs font-medium font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer Buttons */}
            <div className="pt-4 border-t border-zinc-200 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-2.5 bg-zinc-900 hover:bg-black text-white rounded-full font-medium text-sm transition-all shadow-md hover:-translate-y-0.5"
                  >
                    <span>Visit Live Site</span>
                    <ExternalLink size={15} />
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-2.5 bg-white hover:bg-zinc-100 text-zinc-800 rounded-full font-medium text-sm border border-zinc-300 transition-all hover:-translate-y-0.5"
                  >
                    <GithubIcon size={16} />
                    <span>View Repository</span>
                  </a>
                )}
              </div>

              <button
                onClick={onClose}
                className="text-xs font-mono text-zinc-500 hover:text-zinc-900"
              >
                Press ESC or click outside to dismiss
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
