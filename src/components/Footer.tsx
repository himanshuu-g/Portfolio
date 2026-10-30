import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowUp, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-16 px-6 md:px-12 max-w-7xl mx-auto border-t border-zinc-200/80 select-none">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Brand */}
        <div className="flex flex-col items-center md:items-start space-y-1">
          <div className="flex items-center gap-2 text-lg font-extrabold tracking-tight text-zinc-950">
            <span className="w-2.5 h-2.5 rounded-full bg-zinc-900" />
            <span>{portfolioData.profile.fullName}</span>
          </div>
          <p className="text-xs font-mono text-zinc-500">
            {portfolioData.profile.role}
          </p>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6 text-xs font-medium text-zinc-600">
          <a
            href={portfolioData.profile.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-zinc-950 transition-colors"
          >
            GitHub
          </a>
          <a
            href={portfolioData.profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-zinc-950 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={portfolioData.profile.twitter}
            target="_blank"
            rel="noreferrer"
            className="hover:text-zinc-950 transition-colors"
          >
            Twitter
          </a>
          <a
            href={`mailto:${portfolioData.profile.email}`}
            className="hover:text-zinc-950 transition-colors"
          >
            Email
          </a>
        </div>

        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-white hover:bg-zinc-100 border border-zinc-200 text-xs font-semibold text-zinc-800 shadow-sm transition-all hover:-translate-y-0.5"
          aria-label="Back to top"
        >
          <span>Back to Top</span>
          <ArrowUp size={14} />
        </button>
      </div>

      <div className="mt-12 pt-6 border-t border-zinc-200/50 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-400 font-mono">
        <div>
          © {new Date().getFullYear()} {portfolioData.profile.fullName}. All rights reserved.
        </div>
        <div className="flex items-center gap-1">
          <span>Crafted with React, Tailwind CSS & Motion UI</span>
        </div>
      </div>
    </footer>
  );
};

