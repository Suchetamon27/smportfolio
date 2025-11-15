import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Chatbot } from './components/Chatbot';
import { Contact } from './components/Contact';
import { Navigation } from './components/Navigation';
import { ParticleBackground } from './components/ParticleBackground';
import { CursorFollower } from './components/CursorFollower';
import { LoadingScreen } from './components/LoadingScreen';
import { Stats } from './components/Stats';
import { Experience } from './components/Experience';
import { Testimonials } from './components/Testimonials';
import { FloatingActionButton } from './components/FloatingActionButton';
import { ScrollProgress } from './components/ScrollProgress';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'skills', 'chatbot', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      {/* Custom Cursor */}
      <CursorFollower />

      {/* Scroll Progress Bar */}
      <ScrollProgress />

      {/* Animated Particle Background */}
      <ParticleBackground />

      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <Navigation 
        activeSection={activeSection} 
        onNavigate={scrollToSection}
      />

      <main className="relative z-10">
        <Hero />
        <Stats />
        <Projects />
        <Skills />
        <Experience />
        <Testimonials />
        <Chatbot />
        <Contact />
      </main>

      {/* Floating Action Button */}
      <FloatingActionButton />

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center space-y-4">
            <p className="text-2xl bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Sucheta Mondal
            </p>
            <p className="text-slate-400">
              Tech-Enthusiast UI/UX Designer & Front-End Developer
            </p>
            <p className="text-slate-500 text-sm">
              © 2025 Sucheta Mondal. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
