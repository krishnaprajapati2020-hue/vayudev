import { useState, useMemo, useEffect, useRef, memo } from 'react';
import { Loader2 } from 'lucide-react';
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
  const [isInViewport, setIsInViewport] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState<number>(0.4);

  // Lazy-mount iframe only when entering or near viewport (300px threshold)
  useEffect(() => {
    const el = containerRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setIsInViewport(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInViewport(true);
          observer.disconnect();
        }
      },
      { rootMargin: '300px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Synchronize when parent passes a new initialTab
  useEffect(() => {
    if (initialTab) {
      setActiveTab(initialTab);
      setIsLoading(true);
    }
  }, [initialTab]);

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

  return (
    <div
      ref={containerRef}
      className={`relative w-full rounded-2xl bg-white border border-stone-300 shadow-xl overflow-hidden ${heightClass}`}
      id={`live-site-preview-${project.id}`}
    >
      {/* Loading Spinner Overlay */}
      {isLoading && (
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-stone-900/60 backdrop-blur-xs text-white">
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

      {/* 
        High-fidelity 1920px Full Desktop resolution container.
        Renders a true 1920px wide desktop viewport scaled smoothly to fit the preview container,
        guaranteeing the exact full-desktop site header, wide navigation, banners, and layout render.
      */}
      <div className="relative w-full h-full bg-white overflow-hidden">
        {isInViewport ? (
          <div
            style={{
              width: '1920px',
              height: `${100 / scale}%`,
              transform: `scale(${scale})`,
              transformOrigin: 'top left',
            }}
            className="pointer-events-auto"
          >
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
          </div>
        ) : (
          <div className="w-full h-full bg-stone-100 flex items-center justify-center text-stone-400 font-mono text-xs">
            <span>Scroll into view to load live site</span>
          </div>
        )}
      </div>
    </div>
  );
});

export default LiveSitePreview;
