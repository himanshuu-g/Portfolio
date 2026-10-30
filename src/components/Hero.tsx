import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { ChevronDown } from 'lucide-react';

interface HeroProps {
  onContactClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onContactClick }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse parallax motion values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 120 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  // Multi-plane 3D parallax depth
  const portraitX = useTransform(smoothMouseX, [-400, 400], [-14, 14]);
  const portraitY = useTransform(smoothMouseY, [-400, 400], [-10, 10]);

  const bgTextX = useTransform(smoothMouseX, [-400, 400], [18, -18]);
  const bgTextY = useTransform(smoothMouseY, [-400, 400], [10, -10]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const scrollToAbout = () => {
    const aboutEl = document.getElementById('about');
    if (aboutEl) {
      aboutEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-screen min-h-[700px] flex flex-col justify-between pt-16 md:pt-20 pb-6 px-4 sm:px-8 md:px-12 overflow-hidden select-none"
    >
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-zinc-200/50 via-zinc-100/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Main Full-Page Stage: Portrait + Watermark + Badges */}
      <div className="relative w-full h-full flex-1 flex items-end justify-center">
        
        {/* Layer 1: Giant Watermark Background Typography ("DEVELOPER") */}
        <motion.div
          style={{ x: bgTextX, y: bgTextY }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
        >
          <span className="font-extrabold tracking-tighter uppercase text-[22vw] md:text-[20vw] leading-none text-zinc-300/40 select-none">
            DEVELOPER
          </span>
        </motion.div>

        {/* Layer 2: Center Photo - Expanded to Full Screen Height & Scale */}
        <motion.div
          style={{ x: portraitX, y: portraitY }}
          className="relative z-10 w-[92vw] sm:w-[500px] md:w-[620px] lg:w-[720px] h-[78vh] sm:h-[82vh] md:h-[86vh] max-h-[820px] flex items-end justify-center"
        >
          {/* Avatar Cutout Image with bottom gradient fade */}
          <div className="relative w-full h-full flex items-end justify-center overflow-hidden mask-gradient-bottom">
            <img
              src={portfolioData.profile.avatarUrl}
              alt={portfolioData.profile.fullName}
              className="w-full h-full object-cover sm:object-contain object-top filter grayscale contrast-110 brightness-105 pointer-events-none"
              loading="eager"
            />
            {/* Smooth base fade matching background */}
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#f5f5f7] via-[#f5f5f7]/60 to-transparent pointer-events-none" />
          </div>

          {/* Status Badge pinned at bottom of photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute bottom-10 sm:bottom-12 px-4 py-1.5 bg-white/95 backdrop-blur-md rounded-full shadow-lg border border-zinc-200/80 flex items-center gap-2 z-20"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-semibold text-zinc-800 tracking-wide">
              {portfolioData.profile.status.text}
            </span>
          </motion.div>
        </motion.div>

        {/* Layer 3: Floating Skill Badges - Distributed Elegantly Across the Full Page */}
        {/* Left Side Badges */}
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="absolute top-[20%] left-[2%] sm:left-[5%] md:left-[8%] lg:left-[12%] z-20 animate-float-slow"
        >
          <div className="group cursor-default px-4 py-2 bg-white/95 backdrop-blur-md rounded-full border border-zinc-200 shadow-sm hover:shadow-md hover:border-zinc-400 transition-all duration-300">
            <span className="text-xs md:text-sm font-medium text-zinc-700 group-hover:text-zinc-950">
              Web Design
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="absolute top-[40%] left-[0%] sm:left-[2%] md:left-[5%] lg:left-[9%] z-20 animate-float-medium"
        >
          <div className="group cursor-default px-4 py-2 bg-white/95 backdrop-blur-md rounded-full border border-zinc-200 shadow-sm hover:shadow-md hover:border-zinc-400 transition-all duration-300">
            <span className="text-xs md:text-sm font-medium text-zinc-700 group-hover:text-zinc-950">
              Full Stack Web
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="absolute top-[60%] left-[1%] sm:left-[4%] md:left-[7%] lg:left-[11%] z-20 animate-float-fast"
        >
          <div className="group cursor-default px-4 py-2 bg-white/95 backdrop-blur-md rounded-full border border-zinc-200 shadow-sm hover:shadow-md hover:border-zinc-400 transition-all duration-300">
            <span className="text-xs md:text-sm font-medium text-zinc-700 group-hover:text-zinc-950">
              3D Motion
            </span>
          </div>
        </motion.div>

        {/* Right Side Badges */}
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="absolute top-[20%] right-[2%] sm:right-[5%] md:right-[8%] lg:right-[12%] z-20 animate-float-medium"
        >
          <div className="group cursor-default px-4 py-2 bg-white/95 backdrop-blur-md rounded-full border border-zinc-200 shadow-sm hover:shadow-md hover:border-zinc-400 transition-all duration-300">
            <span className="text-xs md:text-sm font-medium text-zinc-700 group-hover:text-zinc-950">
              App Design
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="absolute top-[40%] right-[0%] sm:right-[2%] md:right-[5%] lg:right-[9%] z-20 animate-float-fast"
        >
          <div className="group cursor-default px-4 py-2 bg-white/95 backdrop-blur-md rounded-full border border-zinc-200 shadow-sm hover:shadow-md hover:border-zinc-400 transition-all duration-300">
            <span className="text-xs md:text-sm font-medium text-zinc-700 group-hover:text-zinc-950">
              System Design
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="absolute top-[60%] right-[1%] sm:right-[4%] md:right-[7%] lg:right-[11%] z-20 animate-float-slow"
        >
          <div className="group cursor-default px-4 py-2 bg-white/95 backdrop-blur-md rounded-full border border-zinc-200 shadow-sm hover:shadow-md hover:border-zinc-400 transition-all duration-300">
            <span className="text-xs md:text-sm font-medium text-zinc-700 group-hover:text-zinc-950">
              Cloud & AI
            </span>
          </div>
        </motion.div>
      </div>

      {/* Subtle Scroll Down Prompt at the Bottom */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: 0.8, duration: 0.5 },
          y: { repeat: Infinity, duration: 2.2, ease: 'easeInOut' },
        }}
        className="relative z-30 self-center flex flex-col items-center gap-1 text-zinc-400 hover:text-zinc-900 transition-colors cursor-pointer focus:outline-none"
        aria-label="Scroll to explore"
      >
        <span className="text-[10px] font-mono tracking-widest uppercase font-semibold">
          Scroll to explore
        </span>
        <ChevronDown size={16} />
      </motion.button>
    </section>
  );
};
