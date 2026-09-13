import { useState, useEffect } from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onReplayIntro?: () => void;
}

export default function Navbar({ onReplayIntro }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'experience', 'education', 'skills', 'projects', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Floating Pill Nav for Desktop (Hidden on mobile/tablet when screen is small) */}
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-30 hidden lg:flex items-center gap-1 rounded-full bg-stone-900/80 px-4 py-2 text-xs font-medium text-stone-300 shadow-xl backdrop-blur-md border border-white/10">
        {[
          { id: 'hero', label: 'Home' },
          { id: 'about', label: 'About' },
          { id: 'experience', label: 'Experience' },
          { id: 'education', label: 'Education' },
          { id: 'skills', label: 'Skills' },
          { id: 'projects', label: 'Projects' },
          { id: 'contact', label: 'Contact' },
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => handleNavClick(item.id)}
            className={`rounded-full px-3 py-1.5 transition-all duration-200 ${
              activeSection === item.id
                ? 'bg-white text-stone-900 shadow-sm font-semibold'
                : 'hover:text-white hover:bg-white/10'
            }`}
          >
            {item.label}
          </button>
        ))}
        <div className="ml-2 flex items-center gap-1.5 pl-2 border-l border-white/15">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-[11px] text-stone-400">Available</span>
        </div>
      </div>

      {/* Burger Button (Only visible on mobile/tablet when central nav is hidden) */}
      <div className="burger-wrapper lg:hidden" id="burger-container">
        <div className="inner">
          <button
            className={`burger-btn ${isOpen ? 'open' : ''}`}
            id="burger-btn"
            onClick={toggleMenu}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            <span className="bar" />
            <span className="bar" />
          </button>
        </div>
      </div>

      {/* Backdrop overlay when open on mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Slide-in Menu Panel */}
      <div
        className={`menu-panel ${isOpen ? 'open' : ''}`}
        id="menu-panel"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-4">
          <span className="text-xs uppercase tracking-widest text-[#9A9590]">
            Navigation
          </span>
          {onReplayIntro && (
            <button
              onClick={() => {
                setIsOpen(false);
                onReplayIntro();
              }}
              className="flex items-center gap-1.5 text-xs text-[#8C2424] hover:underline"
            >
              <Sparkles className="h-3 w-3" />
              Replay Intro
            </button>
          )}
        </div>

        <nav className="flex flex-col gap-2">
          {[
            { id: 'projects', label: 'Work & Projects' },
            { id: 'about', label: 'About Me' },
            { id: 'experience', label: 'Experience' },
            { id: 'education', label: 'Education' },
            { id: 'skills', label: 'Skills' },
            { id: 'contact', label: 'Contact' },
          ].map((link, idx) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.id);
              }}
              className="group flex items-baseline justify-between text-[#F4F1E8] hover:text-[#8C2424] transition-colors py-1"
            >
              <span className="font-display text-3xl md:text-4xl tracking-wide">
                {link.label}
              </span>
              <span className="text-xs font-mono text-[#9A9590] group-hover:text-[#8C2424]">
                0{idx + 1}
              </span>
            </a>
          ))}
        </nav>

        <div className="menu-contact border-t border-white/10 pt-6 mt-6">
          <div className="text-xs uppercase tracking-widest text-[#9A9590] mb-1">
            Get in touch
          </div>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="menu-email font-mono text-sm md:text-base hover:text-white"
          >
            {PERSONAL_INFO.email}
          </a>
          <div className="menu-socials flex flex-wrap gap-4 mt-2">
            {PERSONAL_INFO.socials.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                className="text-xs text-[#9A9590] hover:text-[#F4F1E8] underline underline-offset-4"
              >
                {s.name}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-6 pt-2">
          <button
            className="menu-cta-btn w-full justify-between"
            onClick={() => handleNavClick('contact')}
          >
            <span className="menu-cta-bg" />
            <span className="menu-cta-text">Let's talk</span>
            <span className="menu-cta-circle">
              <svg width="14" height="14" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 13L13 5M13 5H6M13 5V12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </>
  );
}
