import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Terminal, Volume2, VolumeX, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  toggleTerminal: () => void;
  isTerminalOpen: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  toggleTerminal,
  isTerminalOpen,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'work', label: 'Work' },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const playClickSound = () => {
    if (!soundEnabled) return;
    try {
      const audioCtx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(600, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(800, audioCtx.currentTime + 0.05);
      gain.gain.setValueAtTime(0.05, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.05);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.05);
    } catch {
      // AudioContext fallback
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-[#f5f5f7]/85 backdrop-blur-md border-b border-zinc-200/60 shadow-sm'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand / Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="group flex items-center gap-2 text-xl font-bold tracking-tight text-zinc-900 transition-all focus:outline-none"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-zinc-900 group-hover:scale-125 transition-transform"></span>
          <span>{portfolioData.profile.firstName}</span>
          <span className="text-xs font-mono uppercase px-2 py-0.5 rounded-full bg-zinc-200/80 text-zinc-600 font-normal">
            DEV
          </span>
        </button>

        {/* Center Nav Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-8 bg-white/70 backdrop-blur-sm px-6 py-2 rounded-full border border-zinc-200/70 shadow-sm shadow-zinc-200/30">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                playClickSound();
                handleNavClick(item.id);
              }}
              className={`text-sm font-medium transition-colors relative py-1 focus:outline-none ${
                activeTab === item.id
                  ? 'text-zinc-900 font-semibold'
                  : 'text-zinc-500 hover:text-zinc-900'
              }`}
            >
              {item.label}
              {activeTab === item.id && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-zinc-900 rounded-full"></span>
              )}
            </button>
          ))}
        </nav>

        {/* Right CTA & Utilities */}
        <div className="hidden md:flex items-center gap-3">
          {/* Audio toggle button */}
          <button
            onClick={() => setSoundEnabled(!soundEnabled)}
            className="p-2.5 rounded-full bg-white/80 hover:bg-white text-zinc-700 hover:text-zinc-900 border border-zinc-200 transition-all hover:scale-105 shadow-sm"
            title={soundEnabled ? 'Disable UI Sound' : 'Enable UI Sound'}
            aria-label="Toggle UI Audio"
          >
            {soundEnabled ? <Volume2 size={16} /> : <VolumeX size={16} className="text-zinc-400" />}
          </button>

          {/* Interactive Terminal toggle */}
          <button
            onClick={toggleTerminal}
            className={`p-2.5 rounded-full border transition-all hover:scale-105 shadow-sm ${
              isTerminalOpen
                ? 'bg-zinc-900 text-white border-zinc-900'
                : 'bg-white/80 hover:bg-white text-zinc-700 border-zinc-200'
            }`}
            title="Open Interactive Terminal CLI"
            aria-label="Terminal CLI"
          >
            <Terminal size={16} />
          </button>

          {/* Contact Pill Button (matches screenshot 1) */}
          <button
            onClick={() => handleNavClick('contact')}
            className="group relative inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-white bg-zinc-900 hover:bg-black rounded-full transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Contact</span>
            <ArrowUpRight size={14} className="ml-1 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleTerminal}
            className="p-2 rounded-full bg-white border border-zinc-200 text-zinc-700"
            aria-label="Terminal"
          >
            <Terminal size={16} />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full bg-white border border-zinc-200 text-zinc-800"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden px-6 pt-3 pb-6 bg-[#f5f5f7]/95 backdrop-blur-xl border-b border-zinc-200">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left py-2 px-4 rounded-xl text-base font-medium transition-all ${
                  activeTab === item.id
                    ? 'bg-zinc-900 text-white'
                    : 'text-zinc-700 hover:bg-zinc-200/60'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('contact')}
              className="mt-2 py-3 px-4 rounded-xl text-center font-medium bg-zinc-900 text-white shadow-md"
            >
              Contact Me
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

