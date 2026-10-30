import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import confetti from 'canvas-confetti';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onContactClick }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse parallax motion values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 120 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  // Transform values for multi-plane 3D parallax depth
  const portraitX = useTransform(smoothMouseX, [-400, 400], [-12, 12]);
  const portraitY = useTransform(smoothMouseY, [-400, 400], [-8, 8]);

  const bgTextX = useTransform(smoothMouseX, [-400, 400], [15, -15]);
  const bgTextY = useTransform(smoothMouseY, [-400, 400], [8, -8]);

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

  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.8 },
      colors: ['#111111', '#52525b', '#a1a1aa', '#38bdf8'],
    });
    onContactClick();
  };

  return (
    <section
      id="home"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-screen min-h-[640px] max-h-[1050px] flex flex-col justify-between pt-20 pb-6 md:pb-10 px-6 sm:px-10 md:px-16 overflow-hidden select-none"
    >
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-zinc-200/50 via-zinc-100/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Center Stage: Watermark + Portrait + Floating Badges */}
      <div className="relative w-full flex-1 flex items-end justify-center">
        
        {/* Layer 1: Giant Watermark Background Typography ("DEVELOPER") */}
        <motion.div
          style={{ x: bgTextX, y: bgTextY }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
        >
          <span className="font-extrabold tracking-tighter uppercase text-[20vw] md:text-[18vw] leading-none text-zinc-300/45 select-none">
            DEVELOPER
          </span>
        </motion.div>

        {/* Layer 2: Center Cutout Portrait (Centered and extending down towards the name) */}
        <motion.div
          style={{ x: portraitX, y: portraitY }}
          className="relative z-10 w-[78vw] sm:w-[420px] md:w-[480px] lg:w-[520px] h-[52vh] sm:h-[58vh] md:h-[64vh] max-h-[620px] flex items-end justify-center"
        >
          {/* Avatar Cutout Image with bottom gradient fade */}
          <div className="relative w-full h-full flex items-end justify-center overflow-hidden mask-gradient-bottom">
            <img
              src={portfolioData.profile.avatarUrl}
              alt={portfolioData.profile.fullName}
              className="w-full h-full object-cover object-top filter grayscale contrast-110 brightness-105 pointer-events-none"
              loading="eager"
            />
            {/* Soft base fade matching background */}
            <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#f5f5f7] via-[#f5f5f7]/60 to-transparent pointer-events-none" />
          </div>
        </motion.div>

        {/* Layer 3: Floating Skill Badges (Screenshots 1 exact replica) */}
        {/* Left Side Badges */}
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="absolute top-[16%] left-[2%] sm:left-[6%] md:left-[10%] lg:left-[14%] z-20 animate-float-slow"
        >
          <div className="group cursor-default px-4 py-1.5 md:py-2 bg-white/95 backdrop-blur-md rounded-full border border-zinc-200/90 shadow-sm hover:shadow-md hover:border-zinc-400 transition-all duration-300">
            <span className="text-xs md:text-sm font-medium text-zinc-700 group-hover:text-zinc-950">
              Web Design
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="absolute top-[34%] left-[0%] sm:left-[3%] md:left-[6%] lg:left-[10%] z-20 animate-float-medium"
        >
          <div className="group cursor-default px-4 py-1.5 md:py-2 bg-white/95 backdrop-blur-md rounded-full border border-zinc-200/90 shadow-sm hover:shadow-md hover:border-zinc-400 transition-all duration-300">
            <span className="text-xs md:text-sm font-medium text-zinc-700 group-hover:text-zinc-950">
              Full Stack Web
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="absolute top-[52%] left-[1%] sm:left-[4%] md:left-[8%] lg:left-[12%] z-20 animate-float-fast"
        >
          <div className="group cursor-default px-4 py-1.5 md:py-2 bg-white/95 backdrop-blur-md rounded-full border border-zinc-200/90 shadow-sm hover:shadow-md hover:border-zinc-400 transition-all duration-300">
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
          className="absolute top-[16%] right-[2%] sm:right-[6%] md:right-[10%] lg:right-[14%] z-20 animate-float-medium"
        >
          <div className="group cursor-default px-4 py-1.5 md:py-2 bg-white/95 backdrop-blur-md rounded-full border border-zinc-200/90 shadow-sm hover:shadow-md hover:border-zinc-400 transition-all duration-300">
            <span className="text-xs md:text-sm font-medium text-zinc-700 group-hover:text-zinc-950">
              App Design
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="absolute top-[34%] right-[0%] sm:right-[3%] md:right-[6%] lg:right-[10%] z-20 animate-float-fast"
        >
          <div className="group cursor-default px-4 py-1.5 md:py-2 bg-white/95 backdrop-blur-md rounded-full border border-zinc-200/90 shadow-sm hover:shadow-md hover:border-zinc-400 transition-all duration-300">
            <span className="text-xs md:text-sm font-medium text-zinc-700 group-hover:text-zinc-950">
              System Design
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="absolute top-[52%] right-[1%] sm:right-[4%] md:right-[8%] lg:right-[12%] z-20 animate-float-slow"
        >
          <div className="group cursor-default px-4 py-1.5 md:py-2 bg-white/95 backdrop-blur-md rounded-full border border-zinc-200/90 shadow-sm hover:shadow-md hover:border-zinc-400 transition-all duration-300">
            <span className="text-xs md:text-sm font-medium text-zinc-700 group-hover:text-zinc-950">
              Cloud & AI
            </span>
          </div>
        </motion.div>
      </div>

      {/* Layer 4: Bottom Name Typography & Badges - Overlapping Portrait Bottom (Screenshot 1 Exact Replica) */}
      <div className="relative z-30 w-full max-w-6xl mx-auto flex flex-col justify-end -mt-8 sm:-mt-12 md:-mt-16 pointer-events-auto">
        
        {/* Pills row positioned right above the name */}
        <div className="w-full flex items-center justify-between mb-1.5 sm:mb-2 px-1">
          {/* Left Pill: "Hello, my name is" */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="px-3.5 py-1 rounded-full bg-white/90 backdrop-blur-md border border-zinc-200/90 shadow-sm text-zinc-700 text-xs font-semibold tracking-wide"
          >
            Hello, my name is
          </motion.div>

          {/* Right Pill: "Let's work together!" button */}
          <motion.button
            onClick={triggerConfetti}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="group inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/90 hover:bg-zinc-900 text-zinc-800 hover:text-white border border-zinc-200/90 shadow-sm hover:shadow-md text-xs font-semibold transition-all duration-200 hover:-translate-y-0.5"
          >
            <span>Let's work together!</span>
            <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
          </motion.button>
        </div>

        {/* Huge Bold Name Headline directly below the picture */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.6 }}
          className="text-6xl sm:text-7xl md:text-8xl lg:text-[7.2rem] xl:text-[8.5rem] font-black tracking-tight text-zinc-950 leading-[0.88] select-none text-left"
        >
          {portfolioData.profile.fullName}
        </motion.h1>
      </div>
    </section>
  );
};
