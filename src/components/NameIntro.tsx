import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import confetti from 'canvas-confetti';
import { Sparkles, ArrowRight } from 'lucide-react';

interface NameIntroProps {
  onContactClick: () => void;
}

export const NameIntro: React.FC<NameIntroProps> = ({ onContactClick }) => {
  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#111111', '#52525b', '#a1a1aa', '#38bdf8'],
    });
    onContactClick();
  };

  return (
    <section
      id="name-intro"
      className="relative z-20 w-full py-16 sm:py-24 md:py-28 px-6 md:px-12 max-w-7xl mx-auto border-t border-zinc-200/80"
    >
      <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 md:gap-12">
        {/* Left: "Hello, my name is" + Huge Name + Role */}
        <div className="flex flex-col items-start space-y-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-zinc-200/80 text-zinc-700 text-xs font-semibold tracking-wide uppercase"
          >
            <Sparkles size={13} className="text-zinc-600" />
            <span>Hello, my name is</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight text-zinc-950 leading-[0.95]"
          >
            {portfolioData.profile.fullName}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl font-medium text-zinc-600 pt-1 max-w-2xl"
          >
            {portfolioData.profile.role}
          </motion.p>
        </div>

        {/* Right: "Let's work together!" button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col items-start lg:items-end gap-2.5 self-stretch lg:self-end"
        >
          <button
            onClick={triggerConfetti}
            className="group relative inline-flex items-center gap-2.5 px-8 py-4 bg-zinc-900 hover:bg-black text-white rounded-full font-semibold text-base shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5 active:scale-95"
          >
            <span>Let's work together!</span>
            <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform" />
          </button>
          <span className="text-xs text-zinc-400 font-mono tracking-tight">
            Click to celebrate & connect 🎉
          </span>
        </motion.div>
      </div>
    </section>
  );
};
