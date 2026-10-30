import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { MessageSquare, ArrowUpRight, Code, Server, Globe, Cpu, Layers } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './Icons';

interface AboutSectionProps {
  onContactClick: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onContactClick }) => {
  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-zinc-200/80">
      
      {/* Part 1: Top Hero-About Grid (Matches Screenshot 2 top) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-28">
        
        {/* Left Column: Portrait Cutout + Bottom Tech Dock */}
        <div className="lg:col-span-5 relative flex flex-col items-center">
          <div className="relative w-full max-w-sm aspect-[4/5] rounded-3xl overflow-hidden bg-zinc-100 border border-zinc-200/80 shadow-md">
            <img
              src={portfolioData.profile.aboutPortraitUrl}
              alt={portfolioData.profile.fullName}
              className="w-full h-full object-cover object-top filter grayscale contrast-110 brightness-105 pointer-events-none mask-gradient-bottom"
            />
            {/* Fade overlay at bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#f5f5f7] via-transparent to-transparent opacity-80" />
            
            {/* Floating Tech Dock pinned to bottom-left (Screenshot 2 exact match) */}
            <div className="absolute bottom-4 left-4 right-4 p-3 bg-white/90 backdrop-blur-md rounded-2xl border border-zinc-200/90 shadow-xl flex items-center justify-around gap-2">
              <div className="group relative flex flex-col items-center cursor-pointer transition-transform hover:-translate-y-1.5">
                <div className="w-9 h-9 rounded-xl bg-zinc-900 text-white flex items-center justify-center shadow-md">
                  <Code size={18} />
                </div>
                <span className="absolute -top-7 text-[10px] font-mono font-semibold bg-zinc-900 text-white px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                  React.js
                </span>
              </div>

              <div className="group relative flex flex-col items-center cursor-pointer transition-transform hover:-translate-y-1.5">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-500 to-yellow-600 text-white flex items-center justify-center shadow-md">
                  <Globe size={18} />
                </div>
                <span className="absolute -top-7 text-[10px] font-mono font-semibold bg-zinc-900 text-white px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                  JavaScript
                </span>
              </div>

              <div className="group relative flex flex-col items-center cursor-pointer transition-transform hover:-translate-y-1.5">
                <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-md">
                  <Cpu size={18} />
                </div>
                <span className="absolute -top-7 text-[10px] font-mono font-semibold bg-zinc-900 text-white px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                  Python
                </span>
              </div>

              <div className="group relative flex flex-col items-center cursor-pointer transition-transform hover:-translate-y-1.5">
                <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-md">
                  <Server size={18} />
                </div>
                <span className="absolute -top-7 text-[10px] font-mono font-semibold bg-zinc-900 text-white px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                  MongoDB
                </span>
              </div>

              <div className="group relative flex flex-col items-center cursor-pointer transition-transform hover:-translate-y-1.5">
                <div className="w-9 h-9 rounded-xl bg-cyan-600 text-white flex items-center justify-center shadow-md">
                  <Layers size={18} />
                </div>
                <span className="absolute -top-7 text-[10px] font-mono font-semibold bg-zinc-900 text-white px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                  Firebase / SQL
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Bio & Credentials */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-6">
          {/* Pill Badge */}
          <div className="px-3.5 py-1 rounded-full bg-zinc-200/80 text-zinc-700 text-xs font-semibold tracking-wide uppercase">
            About me
          </div>

          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-zinc-950">
            Hi, I'm {portfolioData.profile.fullName}!
          </h2>

          {/* Role Subtitle */}
          <p className="text-xl sm:text-2xl font-medium text-zinc-800">
            {portfolioData.profile.role}
          </p>

          {/* Paragraph */}
          <p className="text-zinc-600 text-lg leading-relaxed max-w-2xl">
            {portfolioData.profile.tagline} With over {portfolioData.profile.experienceYears} years of building scalable software, I specialize in crafting ultra-responsive web applications, resilient backend architectures, and high-performance interactive interfaces.
          </p>

          {/* Social Icons Row */}
          <div className="flex items-center gap-3 pt-2">
            <a
              href={portfolioData.profile.github}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-full bg-white hover:bg-zinc-900 text-zinc-700 hover:text-white border border-zinc-200 shadow-sm transition-all hover:scale-110"
              aria-label="GitHub"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href={portfolioData.profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-full bg-white hover:bg-zinc-900 text-zinc-700 hover:text-white border border-zinc-200 shadow-sm transition-all hover:scale-110"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={18} />
            </a>
            <a
              href={portfolioData.profile.twitter}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-full bg-white hover:bg-zinc-900 text-zinc-700 hover:text-white border border-zinc-200 shadow-sm transition-all hover:scale-110"
              aria-label="Twitter"
            >
              <TwitterIcon size={18} />
            </a>
            <a
              href={`mailto:${portfolioData.profile.email}`}
              className="p-2.5 rounded-full bg-white hover:bg-zinc-900 text-zinc-700 hover:text-white border border-zinc-200 shadow-sm transition-all hover:scale-110"
              aria-label="Email"
            >
              <MessageSquare size={18} />
            </a>
          </div>

          {/* Action Row: "Let's Talk" + Live Status */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button
              onClick={onContactClick}
              className="inline-flex items-center gap-2 px-7 py-3 bg-zinc-900 hover:bg-black text-white rounded-full font-semibold text-sm shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Let's Talk</span>
              <ArrowUpRight size={16} />
            </button>

            <div className="flex items-center gap-2 px-4 py-2.5 bg-white/90 rounded-full border border-zinc-200 shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-medium text-zinc-700">
                {portfolioData.profile.status.text}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Part 2: "My story" + Career Timeline (Matches Screenshot 2 bottom) */}
      <div className="pt-16 border-t border-zinc-200/70">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Editorial Heading */}
          <div className="lg:col-span-5 flex flex-col items-start space-y-4">
            <div className="px-3.5 py-1 rounded-full bg-zinc-200/80 text-zinc-700 text-xs font-semibold tracking-wide uppercase">
              My story
            </div>

            <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-950 leading-tight">
              A <span className="font-serif italic font-normal text-zinc-800">journey</span> through thoughtful engineering.
            </h3>

            <p className="text-zinc-600 text-base leading-relaxed pt-2">
              Over the years, I've refined my engineering philosophy through rigorous product execution, system design, and continuous experimentation to build lasting software.
            </p>

            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-4 pt-6 w-full">
              <div className="p-4 bg-white rounded-2xl border border-zinc-200/80 shadow-sm text-center">
                <span className="block text-2xl font-black text-zinc-900">{portfolioData.profile.experienceYears}</span>
                <span className="text-xs font-mono text-zinc-500">Years Exp</span>
              </div>
              <div className="p-4 bg-white rounded-2xl border border-zinc-200/80 shadow-sm text-center">
                <span className="block text-2xl font-black text-zinc-900">{portfolioData.profile.projectsCompleted}</span>
                <span className="text-xs font-mono text-zinc-500">Shipped</span>
              </div>
              <div className="p-4 bg-white rounded-2xl border border-zinc-200/80 shadow-sm text-center">
                <span className="block text-2xl font-black text-zinc-900">{portfolioData.profile.happyClients}</span>
                <span className="text-xs font-mono text-zinc-500">Partners</span>
              </div>
            </div>
          </div>

          {/* Right Column: Scroll-Linked Timeline */}
          <div className="lg:col-span-7 relative">
            {/* Timeline Line */}
            <div className="absolute top-4 bottom-4 left-3 w-0.5 bg-zinc-300" />

            {/* Timeline Nodes */}
            <div className="space-y-12">
              {portfolioData.timeline.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative pl-10"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-[7px] top-1.5 w-3 h-3 rounded-full bg-zinc-900 border-2 border-white shadow-sm" />

                  {/* Period Badge */}
                  <span className="text-xs font-mono font-semibold text-zinc-500 uppercase tracking-wider block mb-1">
                    {item.period}
                  </span>

                  {/* Title & Company */}
                  <h4 className="text-xl font-bold text-zinc-950 mb-0.5">
                    {item.role} <span className="font-normal text-zinc-500">at</span> {item.company}
                  </h4>

                  {/* Location if available */}
                  {item.location && (
                    <span className="text-xs text-zinc-400 block mb-2 font-mono">
                      {item.location}
                    </span>
                  )}

                  {/* Description */}
                  <p className="text-zinc-600 text-sm leading-relaxed mb-3">
                    {item.description}
                  </p>

                  {/* Bullet Highlights */}
                  <ul className="space-y-1">
                    {item.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="text-xs text-zinc-500 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
