import React, { useState } from 'react';
import { portfolioData, Article } from '../data/portfolioData';
import { BookOpen, Clock, ArrowUpRight, X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const BlogSection: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  return (
    <section id="blog" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-zinc-200/80">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div className="space-y-3">
          <div className="px-3.5 py-1 rounded-full bg-zinc-200/80 text-zinc-700 text-xs font-semibold tracking-wide uppercase inline-flex items-center gap-1.5">
            <Sparkles size={13} />
            <span>Writings & Thoughts</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-zinc-950">
            Articles & Notes
          </h2>
          <p className="text-zinc-600 max-w-lg text-base">
            Reflections on frontend architecture, real-time distributed systems, and modern UI engineering.
          </p>
        </div>
      </div>

      {/* Articles Editorial Table / Card List */}
      <div className="space-y-4">
        {portfolioData.articles.map((article) => (
          <motion.div
            key={article.id}
            whileHover={{ y: -3 }}
            onClick={() => setSelectedArticle(article)}
            className="group p-6 sm:p-8 bg-white rounded-3xl border border-zinc-200/80 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-6"
          >
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-3 text-xs font-mono text-zinc-500">
                <span className="px-2.5 py-0.5 rounded-full bg-zinc-100 text-zinc-800 font-medium">
                  {article.tag}
                </span>
                <span>{article.date}</span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock size={12} />
                  {article.readTime}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-zinc-950 group-hover:text-zinc-700 transition-colors">
                {article.title}
              </h3>
              <p className="text-zinc-600 text-sm line-clamp-2">
                {article.summary}
              </p>
            </div>

            <div className="flex items-center gap-4 self-end md:self-center">
              <span className="text-xs font-semibold text-zinc-900 group-hover:underline hidden sm:inline">
                Read Article
              </span>
              <div className="p-3 rounded-full bg-zinc-100 group-hover:bg-zinc-900 group-hover:text-white transition-all shadow-sm">
                <ArrowUpRight size={18} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Article Reader Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 select-none">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedArticle(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto bg-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-zinc-200 z-10"
            >
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-700 transition-colors"
                aria-label="Close"
              >
                <X size={20} />
              </button>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-xs font-mono text-zinc-500">
                  <span className="px-2.5 py-0.5 rounded-full bg-zinc-100 text-zinc-800 font-medium">
                    {selectedArticle.tag}
                  </span>
                  <span>{selectedArticle.date}</span>
                  <span>•</span>
                  <span>{selectedArticle.readTime}</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight">
                  {selectedArticle.title}
                </h2>
              </div>

              <div className="prose prose-zinc max-w-none text-zinc-700 leading-relaxed space-y-4">
                <p className="text-lg font-medium text-zinc-800 leading-relaxed border-l-4 border-zinc-900 pl-4 py-1 italic">
                  {selectedArticle.summary}
                </p>
                <p className="text-base text-zinc-600 leading-relaxed">
                  {selectedArticle.content}
                </p>
                <div className="p-4 bg-zinc-900 text-zinc-100 rounded-2xl font-mono text-xs overflow-x-auto my-4">
                  <pre>{`// Example Motion Animation Hook in React
import { useSpring, useTransform } from 'framer-motion';

export function useParallaxTilt(motionValue) {
  const smooth = useSpring(motionValue, { damping: 25, stiffness: 120 });
  const rotateX = useTransform(smooth, [-1, 1], ['15deg', '-15deg']);
  return { rotateX, smooth };
}`}</pre>
                </div>
                <p className="text-zinc-600 text-sm">
                  Continuously profiling paint costs and adhering to composite-only transforms guarantees consistent 60fps rendering across desktop and mobile devices.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-zinc-200 flex items-center justify-between">
                <span className="text-xs font-mono text-zinc-400">Written by {portfolioData.profile.fullName}</span>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="px-5 py-2 bg-zinc-900 text-white rounded-full text-xs font-medium hover:bg-black transition-colors"
                >
                  Done Reading
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

