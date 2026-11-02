import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { portfolioData, Project } from '../data/portfolioData';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { GithubIcon } from './Icons';

interface WorkSectionProps {
  onSelectProject: (project: Project) => void;
}

// 3D Tilt Card Component (No images, text + prominent GitHub button)
const TiltCard: React.FC<{ project: Project; onSelect: () => void }> = ({
  project,
  onSelect,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['7deg', '-7deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-7deg', '7deg']);

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

  const githubTargetUrl = project.githubUrl || portfolioData.profile.github;

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
      className="group relative bg-white rounded-3xl p-6 sm:p-8 border border-zinc-200/90 shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between"
    >
      <div>
        {/* Top Meta Row: Category Badge + Year */}
        <div className="flex items-center justify-between gap-2 mb-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 text-xs font-mono text-zinc-800 font-semibold border border-zinc-200/70">
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-900" />
            <span>{project.category}</span>
          </div>
          <span className="px-3 py-1 rounded-full bg-zinc-900 text-white text-xs font-mono font-medium">
            {project.year}
          </span>
        </div>

        {/* Project Title & Subtitle */}
        <div className="space-y-1.5 mb-3">
          <h3 className="text-2xl sm:text-3xl font-black text-zinc-950 tracking-tight">
            {project.title}
          </h3>
          <p className="text-sm font-semibold text-zinc-700">
            {project.subtitle}
          </p>
        </div>

        {/* Description */}
        <p className="text-zinc-600 text-sm leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Highlights / Metrics Grid */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="grid grid-cols-3 gap-2 p-3 bg-zinc-50 rounded-2xl border border-zinc-100 mb-5">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="text-center px-1">
                <span className="text-[10px] uppercase font-mono text-zinc-400 block truncate">
                  {m.label}
                </span>
                <span className="text-xs font-bold text-zinc-900 block truncate">
                  {m.value}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Tech Stack Chips */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.techStack.map((tech, idx) => (
            <span
              key={idx}
              className="text-xs font-mono px-3 py-1 rounded-full bg-zinc-100 text-zinc-700 font-medium border border-zinc-200/60"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Action Footer: Prominent GitHub Redirect Button & Case Study details */}
      <div className="pt-5 border-t border-zinc-100 flex flex-col sm:flex-row items-center justify-between gap-3">
        <button
          type="button"
          onClick={onSelect}
          className="text-xs font-semibold text-zinc-500 hover:text-zinc-900 transition-colors order-2 sm:order-1"
        >
          View Case Study & Overview →
        </button>

        {/* GitHub Redirect Button */}
        <a
          href={githubTargetUrl}
          target="_blank"
          rel="noreferrer"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-zinc-900 hover:bg-black text-white text-xs font-semibold rounded-full shadow-md hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 order-1 sm:order-2"
        >
          <GithubIcon size={16} />
          <span>View GitHub Repo</span>
          <ArrowUpRight size={15} className="opacity-80" />
        </a>
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
