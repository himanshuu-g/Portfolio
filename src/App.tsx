import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { NameIntro } from './components/NameIntro';
import { AboutSection } from './components/AboutSection';
import { WorkSection } from './components/WorkSection';
import { BlogSection } from './components/BlogSection';
import { ContactSection } from './components/ContactSection';
import { ProjectModal } from './components/ProjectModal';
import { InteractiveTerminal } from './components/InteractiveTerminal';
import { ParticleBackground } from './components/ParticleBackground';
import { CustomCursor } from './components/CustomCursor';
import { Footer } from './components/Footer';
import { Project } from './data/portfolioData';
import { Terminal } from 'lucide-react';

export function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isTerminalOpen, setIsTerminalOpen] = useState<boolean>(false);

  const scrollToContact = () => {
    setActiveTab('contact');
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToIntro = () => {
    const el = document.getElementById('name-intro');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#f5f5f7] text-[#111111] font-sans selection:bg-zinc-950 selection:text-white">
      {/* Interactive Particle & Filament Mesh */}
      <ParticleBackground />

      {/* Smooth Magnetic Cursor */}
      <CustomCursor />

      {/* Editorial Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        toggleTerminal={() => setIsTerminalOpen(!isTerminalOpen)}
        isTerminalOpen={isTerminalOpen}
      />

      {/* Main Content Sections */}
      <main className="relative z-10">
        {/* Fullscreen Hero: Pure Picture Showcase, Watermark & Floating Badges */}
        <Hero onScrollDown={scrollToIntro} />

        {/* Scroll Section 1: Massive Editorial Name & "Let's work together!" Headline */}
        <NameIntro onContactClick={scrollToContact} />

        {/* Scroll Section 2: About Me, Bottom Tech Dock & Career Timeline */}
        <AboutSection onContactClick={scrollToContact} />

        {/* Scroll Section 3: Work & 3D Tilt Project Cards */}
        <WorkSection onSelectProject={(p) => setSelectedProject(p)} />

        {/* Scroll Section 4: Blog & Editorial Article Reader */}
        <BlogSection />

        {/* Scroll Section 5: Contact Form & Instant Email Copy */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Project Case Study Deep-Dive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Developer Interactive Terminal CLI Drawer */}
      <InteractiveTerminal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
      />

      {/* Floating CLI Pill trigger for quick access */}
      {!isTerminalOpen && (
        <button
          onClick={() => setIsTerminalOpen(true)}
          className="fixed bottom-6 right-6 z-40 hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-full bg-zinc-900/90 hover:bg-black text-white text-xs font-mono backdrop-blur-md shadow-xl border border-zinc-700/50 hover:scale-105 transition-all"
          title="Open Developer Terminal"
        >
          <Terminal size={14} className="text-emerald-400" />
          <span>visitor@cli:~$</span>
        </button>
      )}
    </div>
  );
}

export default App;
