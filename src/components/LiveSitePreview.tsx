import { useState, useMemo, useEffect, useRef, memo, useCallback } from 'react';
import { Loader2, ArrowDown, ExternalLink } from 'lucide-react';
import { Project } from '../types';

interface LiveSitePreviewProps {
  project: Project;
  heightClass?: string;
  initialTab?: string;
}

export const LiveSitePreview = memo(function LiveSitePreview({
  project,
  heightClass = 'h-[360px] sm:h-[420px] lg:h-[460px]',
  initialTab,
}: LiveSitePreviewProps) {
  const [activeTab, setActiveTab] = useState<string>(initialTab || 'home');
  const [isLoading, setIsLoading] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState<number>(0.4);

  // Auto-scroll animation refs
  const translateYRef = useRef<number>(0);
  const animationFrameRef = useRef<number | null>(null);
  const targetInnerRef = useRef<HTMLDivElement>(null);
  const directionRef = useRef<'down' | 'up'>('down');
  const pauseTimerRef = useRef<NodeJS.Timeout | null>(null);
  const isPausedRef = useRef<boolean>(false);

  // Lazy-mount observer: only instantiate network iframe requests when within 400px of viewport
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '400px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Synchronize when parent passes a new initialTab
  useEffect(() => {
    if (initialTab) {
      setActiveTab(initialTab);
      setIsLoading(true);
      translateYRef.current = 0;
      directionRef.current = 'down';
      if (targetInnerRef.current) {
        targetInnerRef.current.style.transform = `scale(${scale}) translateY(0px)`;
      }
    }
  }, [initialTab, scale]);

  // Dynamically compute exact scale factor so the 1920px full desktop viewport fits container width
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const updateScale = () => {
      const containerWidth = el.clientWidth;
      if (containerWidth > 0) {
        // Full HD Desktop target width: 1920px
        const desktopTargetWidth = 1920;
        const newScale = Math.min(1, Math.max(0.2, containerWidth / desktopTargetWidth));
        setScale(newScale);
      }
    };

    updateScale();
    const observer = new ResizeObserver(() => updateScale());
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Determine the list of live pages strictly for this project
  const pages = useMemo(() => {
    if (project.livePages && project.livePages.length > 0) {
      return project.livePages;
    }
    if (project.liveUrl) {
      return [{ key: 'home', label: 'Home Page', url: project.liveUrl }];
    }
    return [];
  }, [project]);

  // Current active page and URL
  const currentPage = useMemo(() => {
    const found = pages.find((p) => p.key === activeTab);
    return found || pages[0] || { key: 'home', label: 'Home', url: project.liveUrl || '' };
  }, [pages, activeTab, project.liveUrl]);

  const activeUrl = currentPage.url;

  // Smooth hover auto-scroll animation loop
  const stopAutoScroll = useCallback(() => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }
    if (pauseTimerRef.current) {
      clearTimeout(pauseTimerRef.current);
      pauseTimerRef.current = null;
    }
    isPausedRef.current = false;
  }, []);

  const animateScroll = useCallback(() => {
    if (!isHovered) return;

    if (isPausedRef.current) {
      animationFrameRef.current = requestAnimationFrame(animateScroll);
      return;
    }

    // In 1920px desktop view, website content is typically 3000px-5000px high.
    // We smoothly auto-scroll the frame downwards when hovered.
    const maxScroll = 2400; // 2400px desktop travel distance
    const scrollSpeed = 3.5; // Smooth cinematic scanning speed

    if (directionRef.current === 'down') {
      translateYRef.current += scrollSpeed;
      if (translateYRef.current >= maxScroll) {
        translateYRef.current = maxScroll;
        // Pause at bottom before heading back up
        isPausedRef.current = true;
        pauseTimerRef.current = setTimeout(() => {
          directionRef.current = 'up';
          isPausedRef.current = false;
        }, 1200);
      }
    } else {
      translateYRef.current -= scrollSpeed * 2.2; // Return to top faster
      if (translateYRef.current <= 0) {
        translateYRef.current = 0;
        // Pause at top
        isPausedRef.current = true;
        pauseTimerRef.current = setTimeout(() => {
          directionRef.current = 'down';
          isPausedRef.current = false;
        }, 800);
      }
    }

    if (targetInnerRef.current) {
      targetInnerRef.current.style.transform = `scale(${scale}) translateY(-${translateYRef.current}px)`;
    }

    animationFrameRef.current = requestAnimationFrame(animateScroll);
  }, [isHovered, scale]);

  // Start / stop auto-scroll on hover state
  useEffect(() => {
    if (isHovered) {
      animationFrameRef.current = requestAnimationFrame(animateScroll);
    } else {
      stopAutoScroll();
      // Smoothly reset back to top on mouse leave
      const smoothReset = () => {
        if (translateYRef.current > 0) {
          translateYRef.current = Math.max(0, translateYRef.current - 35);
          if (targetInnerRef.current) {
            targetInnerRef.current.style.transform = `scale(${scale}) translateY(-${translateYRef.current}px)`;
          }
          if (translateYRef.current > 0) {
            animationFrameRef.current = requestAnimationFrame(smoothReset);
          }
        }
      };
      animationFrameRef.current = requestAnimationFrame(smoothReset);
    }

    return () => stopAutoScroll();
  }, [isHovered, animateScroll, stopAutoScroll, scale]);

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative w-full rounded-2xl bg-white border border-stone-300 shadow-xl overflow-hidden cursor-default transition-all duration-300 hover:shadow-2xl hover:border-stone-400 ${heightClass}`}
      id={`live-site-preview-${project.id}`}
    >
      {/* Loading Spinner Overlay */}
      {isLoading && (
        <div className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-stone-900/70 backdrop-blur-xs text-white">
          <div className="p-4 rounded-xl bg-stone-900/95 border border-stone-700 shadow-2xl flex flex-col items-center gap-2 max-w-sm text-center">
            <Loader2 className="h-6 w-6 animate-spin text-[#8C2424]" />
            <div className="text-xs font-mono font-medium text-stone-200">
              Loading Desktop Site...
            </div>
            <div className="text-[11px] font-mono text-stone-400 truncate max-w-xs">
              {activeUrl}
            </div>
          </div>
        </div>
      )}

      {/* Subtle Auto-Scroll Hover Cue Pill */}
      {!isLoading && (
        <div
          className={`absolute bottom-3 right-3 z-20 pointer-events-none transition-all duration-300 ${
            isHovered
              ? 'opacity-90 translate-y-0'
              : 'opacity-70 group-hover:opacity-100'
          }`}
        >
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-stone-900/80 backdrop-blur-md text-white border border-white/10 text-[10px] font-mono shadow-md">
            <ArrowDown className={`h-3 w-3 text-emerald-400 ${isHovered ? 'animate-bounce' : ''}`} />
            <span>{isHovered ? 'Auto-scrolling Desktop' : 'Hover to auto-scroll'}</span>
          </div>
        </div>
      )}

      {/* External Link Quick Action Button */}
      <a
        href={activeUrl}
        target="_blank"
        rel="noopener noreferrer"
        title="Open full site in new tab"
        className="absolute top-3 right-3 z-20 p-2 rounded-xl bg-stone-900/80 hover:bg-stone-900 text-white/80 hover:text-white backdrop-blur-md border border-white/15 opacity-0 group-hover:opacity-100 transition-all duration-200 shadow-lg hover:scale-105"
      >
        <ExternalLink className="h-3.5 w-3.5" />
      </a>

      {/* 
        High-fidelity 1920px Full Desktop resolution container with GPU-accelerated Hover Auto-Scroll.
        Renders a true 1920px wide desktop viewport scaled smoothly to fit the preview container,
        with willChange: transform for 60fps performance optimization.
      */}
      <div className="relative w-full h-full bg-white overflow-hidden select-none">
        <div
          ref={targetInnerRef}
          style={{
            width: '1920px',
            height: '4200px', // Full page vertical canvas
            transform: `scale(${scale}) translateY(0px)`,
            transformOrigin: 'top left',
            willChange: 'transform',
          }}
          className="relative transition-none"
        >
          {/* Transparent overlay while hovering to guarantee mouse events aren't intercepted by cross-origin iframe */}
          {isHovered && (
            <div className="absolute inset-0 z-10 cursor-pointer" />
          )}

          {isInView && (
            <iframe
              key={activeUrl}
              src={activeUrl}
              title={`${project.title} - ${currentPage.label}`}
              className="w-full h-full border-0 bg-white"
              loading="lazy"
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals allow-top-navigation-by-user-activation"
              referrerPolicy="no-referrer"
              onLoad={() => setIsLoading(false)}
            />
          )}
        </div>
      </div>
    </div>
  );
});

export default LiveSitePreview;
