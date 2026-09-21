import { useState, useEffect } from 'react';
import Splash from './components/Splash';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import EducationSection from './components/EducationSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import InteractiveTicker from './components/InteractiveTicker';
import { initSmoothScroll, scrollToTarget } from './utils/smoothScroll';

export default function App() {
  const [replayKey, setReplayKey] = useState(0);

  useEffect(() => {
    const cleanup = initSmoothScroll();
    return cleanup;
  }, []);

  const handleReplayIntro = () => {
    setReplayKey((prev) => prev + 1);
    scrollToTarget(0, { duration: 1.2 });
  };

  const handleHeroCta = () => {
    scrollToTarget('#contact', { duration: 1.4 });
  };

  return (
    <div className="relative min-h-screen bg-[#E4E4E4] text-[#111111] overflow-x-hidden selection:bg-[#8C2424] selection:text-white">
      {/* Interactive Global Cursor (Smooth trailing, magnetic label reaction) */}
      <CustomCursor />

      {/* Global Scroll Progress Bar & Floating Top Navigator */}
      <ScrollProgress />

      {/* 1. Splash Animation */}
      <Splash replayKey={replayKey} />

      {/* 2. Fixed Navigation & Menu Drawer */}
      <Navbar onReplayIntro={handleReplayIntro} />

      {/* 3. Hero Section with Interactive Spotlight Canvas */}
      <Hero onCtaClick={handleHeroCta} replayKey={replayKey} />

      {/* Interactive High-Velocity Marquee Ticker */}
      <InteractiveTicker variant="skills" />

      {/* 4. About Me Section */}
      <AboutSection />

      {/* 5. Experiences Section */}
      <ExperienceSection />

      {/* 6. Education Section */}
      <EducationSection />

      {/* 7. Skills & Tools Section */}
      <SkillsSection />

      {/* Interactive Metrics Ticker */}
      <InteractiveTicker variant="stats" />

      {/* 8. Projects Section (Selected Works & Live Directory) */}
      <ProjectsSection />

      {/* 9. Contact / Thank You Section */}
      <ContactSection />
    </div>
  );
}
