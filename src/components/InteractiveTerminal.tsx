import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { Terminal as TerminalIcon, X, Minimize2, Maximize2, CornerDownLeft } from 'lucide-react';

interface TerminalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandLog {
  id: string;
  command: string;
  output: React.ReactNode;
}

export const InteractiveTerminal: React.FC<TerminalProps> = ({ isOpen, onClose }) => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<CommandLog[]>([
    {
      id: 'init-1',
      command: 'welcome',
      output: (
        <div className="space-y-1 text-zinc-300">
          <p className="text-emerald-400 font-bold">✨ Gautam Developer CLI v2.4.0</p>
          <p className="text-zinc-400 text-xs">
            Type <span className="text-yellow-400 font-bold">help</span> to view available commands or <span className="text-yellow-400 font-bold">cat about.txt</span> to read bio.
          </p>
        </div>
      ),
    },
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputVal.trim();
    if (!cmd) return;

    const lowerCmd = cmd.toLowerCase();
    let output: React.ReactNode = null;

    switch (lowerCmd) {
      case 'help':
      case '?':
        output = (
          <div className="space-y-1 text-xs font-mono">
            <p className="text-zinc-300">Available commands:</p>
            <div className="grid grid-cols-2 gap-2 text-zinc-400">
              <div><span className="text-yellow-400 font-bold">help</span> - List commands</div>
              <div><span className="text-yellow-400 font-bold">skills</span> - Inspect technical stack</div>
              <div><span className="text-yellow-400 font-bold">projects</span> - List shipped applications</div>
              <div><span className="text-yellow-400 font-bold">cat about.txt</span> - Display developer bio</div>
              <div><span className="text-yellow-400 font-bold">contact</span> - Display email and socials</div>
              <div><span className="text-yellow-400 font-bold">clear</span> - Clear terminal buffer</div>
              <div><span className="text-yellow-400 font-bold">date</span> - Print current timestamp</div>
              <div><span className="text-yellow-400 font-bold">matrix</span> - Digital cyber stream</div>
            </div>
          </div>
        );
        break;

      case 'skills':
        output = (
          <div className="space-y-2 text-xs font-mono text-zinc-300">
            <p className="text-cyan-400 font-bold">Technical Stack & Competencies:</p>
            <p>• <span className="text-zinc-100 font-bold">Frontend:</span> React, Next.js, TypeScript, Tailwind CSS, Framer Motion, WebGL</p>
            <p>• <span className="text-zinc-100 font-bold">Backend & DB:</span> Node.js, Go, Python, PostgreSQL, Redis, GraphQL, REST</p>
            <p>• <span className="text-zinc-100 font-bold">DevOps & Cloud:</span> Docker, Kubernetes, AWS, Cloudflare Workers, CI/CD</p>
          </div>
        );
        break;

      case 'projects':
        output = (
          <div className="space-y-1.5 text-xs font-mono">
            <p className="text-cyan-400 font-bold">Shipped Projects:</p>
            {portfolioData.projects.map((p, idx) => (
              <div key={idx} className="flex items-center gap-2 text-zinc-300">
                <span className="text-yellow-400">[{idx + 1}]</span>
                <span className="font-bold text-white">{p.title}</span>
                <span className="text-zinc-500">— {p.subtitle}</span>
              </div>
            ))}
          </div>
        );
        break;

      case 'cat about.txt':
      case 'about':
        output = (
          <div className="text-xs font-mono text-zinc-300 space-y-1">
            <p className="text-purple-400 font-bold">== ABOUT {portfolioData.profile.fullName.toUpperCase()} ==</p>
            <p>{portfolioData.profile.role}</p>
            <p className="text-zinc-400">{portfolioData.profile.tagline}</p>
            <p className="text-emerald-400 font-semibold mt-1">Status: {portfolioData.profile.status.text}</p>
          </div>
        );
        break;

      case 'contact':
        output = (
          <div className="text-xs font-mono text-zinc-300 space-y-1">
            <p>📧 Email: <span className="text-cyan-300">{portfolioData.profile.email}</span></p>
            <p>🐙 GitHub: <a href={portfolioData.profile.github} target="_blank" rel="noreferrer" className="text-cyan-300 underline">{portfolioData.profile.github}</a></p>
            <p>💼 LinkedIn: <a href={portfolioData.profile.linkedin} target="_blank" rel="noreferrer" className="text-cyan-300 underline">{portfolioData.profile.linkedin}</a></p>
          </div>
        );
        break;

      case 'date':
        output = <p className="text-xs font-mono text-zinc-400">{new Date().toString()}</p>;
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      case 'matrix':
        output = (
          <p className="text-xs font-mono text-emerald-400 animate-pulse">
            01000111 01100001 01110101 01110100 01100001 01101101 00100000 01000100 01000101 01010110
          </p>
        );
        break;

      case 'sudo':
      case 'sudo rm -rf /':
        output = <p className="text-xs font-mono text-rose-400">⚠️ Incident reported: You are not in the sudoers file.</p>;
        break;

      default:
        output = (
          <p className="text-xs font-mono text-rose-400">
            command not found: {cmd}. Type <span className="text-yellow-400 font-bold">help</span> for assistance.
          </p>
        );
    }

    setHistory((prev) => [
      ...prev,
      { id: Date.now().toString(), command: cmd, output },
    ]);
    setInputVal('');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 100, scale: 0.95 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="fixed bottom-6 right-6 z-50 w-[92vw] sm:w-[540px] max-h-[460px] bg-zinc-950/95 backdrop-blur-xl border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col font-mono text-sm"
        >
          {/* Terminal Window Header */}
          <div className="px-4 py-3 bg-zinc-900 border-b border-zinc-800 flex items-center justify-between select-none">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/90 cursor-pointer" onClick={onClose}></span>
              <span className="w-3 h-3 rounded-full bg-amber-500/90"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500/90"></span>
              <span className="text-xs text-zinc-400 ml-2 flex items-center gap-1 font-mono">
                <TerminalIcon size={13} />
                gautam@portfolio:~
              </span>
            </div>
            <button
              onClick={onClose}
              className="text-zinc-400 hover:text-white transition-colors"
              aria-label="Close"
            >
              <X size={15} />
            </button>
          </div>

          {/* Terminal Body */}
          <div className="p-4 flex-1 overflow-y-auto space-y-3 font-mono text-xs max-h-72">
            {history.map((item) => (
              <div key={item.id} className="space-y-1">
                <div className="flex items-center gap-2 text-zinc-400">
                  <span className="text-emerald-400">visitor@web:~$</span>
                  <span className="text-zinc-100 font-bold">{item.command}</span>
                </div>
                <div className="pl-4">{item.output}</div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Input Prompt */}
          <form
            onSubmit={handleCommand}
            className="p-3 bg-zinc-900/60 border-t border-zinc-800 flex items-center gap-2"
          >
            <span className="text-emerald-400 text-xs font-mono">visitor@web:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="type 'help' or 'skills'..."
              className="flex-1 bg-transparent text-zinc-100 text-xs font-mono focus:outline-none placeholder:text-zinc-600"
            />
            <button
              type="submit"
              className="p-1 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300"
              aria-label="Enter"
            >
              <CornerDownLeft size={13} />
            </button>
          </form>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

