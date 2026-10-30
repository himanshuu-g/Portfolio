import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { portfolioData, Project } from '../data/portfolioData';
import { ExternalLink, ArrowUpRight, Sparkles } from 'lucide-react';
import { GithubIcon } from './Icons';

interface WorkSectionProps {
  onSelectProject: (project: Project) => void;
}

// 3D Tilt Card Component
const TiltCard: React.FC<{ project: Project; onSelect: () => void }> = ({
  project,
  onSelect,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['10deg', '-10deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-10deg', '10deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className="group relative bg-white rounded-3xl p-4 md:p-6 border border-zinc-200/90 shadow-md hover:shadow-2xl transition-shadow duration-300 flex flex-col justify-between cursor-pointer"
      onClick={onSelect}
    >
      <div>
        {/* Project Thumbnail with Zoom on Hover */}
        <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-zinc-100 mb-6 border border-zinc-100">
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-500 ease-out"
          />
          <div className="absolute top-3 left-3 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-xs font-mono text-zinc-800 font-medium shadow-sm">
            {project.category}
          </div>
          <div className="absolute top-3 right-3 px-3 py-1 bg-zinc-900/80 backdrop-blur-md rounded-full text-xs font-mono text-zinc-100 shadow-sm">
            {project.year}
          </div>
        </div>

        {/* Title & Subtitle */}
        <div className="space-y-1 mb-3">
          <div className="flex items-center justify-between">
            <h3 className="text-xl md:text-2xl font-black text-zinc-950 tracking-tight group-hover:text-zinc-700 transition-colors">
              {project.title}
            </h3>
            <div className="p-2 rounded-full bg-zinc-100 group-hover:bg-zinc-900 group-hover:text-white transition-colors">
              <ArrowUpRight size={18} />
            </div>
          </div>
          <p className="text-zinc-600 text-sm line-clamp-2">
            {project.subtitle}
          </p>
        </div>

        {/* Tech Stack Chips */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {project.techStack.slice(0, 4).map((tech, idx) => (
            <span
              key={idx}
              className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-zinc-100 text-zinc-600"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-zinc-100 text-zinc-400">
              +{project.techStack.length - 4}
            </span>
          )}
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="pt-6 mt-4 border-t border-zinc-100 flex items-center justify-between">
        <span className="text-xs font-semibold text-zinc-900 group-hover:underline">
          View Case Study & Metrics →
        </span>
        <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full hover:bg-zinc-100 text-zinc-500 hover:text-zinc-900 transition-colors"
              title="GitHub Repository"
            >
              <GithubIcon size={16} />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full hover:bg-zinc-100 text-zinc-500 hover:text-zinc-900 transition-colors"
              title="Live Demo"
            >
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export const WorkSection: React.FC<WorkSectionProps> = ({ onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Full Stack',
    'Frontend',
    'AI / Machine Learning',
    'Cloud & Systems',
  ];

  const filteredProjects =
    selectedCategory === 'All'
      ? portfolioData.projects
      : portfolioData.projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="work" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-zinc-200/80">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="space-y-3">
          <div className="px-3.5 py-1 rounded-full bg-zinc-200/80 text-zinc-700 text-xs font-semibold tracking-wide uppercase inline-flex items-center gap-1.5">
            <Sparkles size={13} />
            <span>Featured Portfolio Work</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-zinc-950">
            Selected Works
          </h2>
          <p className="text-zinc-600 max-w-lg text-base">
            Engineered with deep focus on tactile UI performance, reliable backend infrastructure, and scalable system architectures.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                selectedCategory === category
                  ? 'bg-zinc-900 text-white shadow-sm'
                  : 'bg-white hover:bg-zinc-100 text-zinc-700 border border-zinc-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* 3D Project Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 perspective-1000">
        {filteredProjects.map((project) => (
          <TiltCard
            key={project.id}
            project={project}
            onSelect={() => onSelectProject(project)}
          />
        ))}
      </div>
    </section>
  );
};
