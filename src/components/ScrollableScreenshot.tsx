import React, { useRef, useState, useEffect, useCallback } from 'react';
import { ExternalLink, Maximize2, MousePointer, ArrowDown, ArrowUp } from 'lucide-react';

interface ScrollableScreenshotProps {
  src: string;
  alt: string;
  liveUrl?: string;
  fallbackSrc?: string;
  heightClass?: string;
  onExpand?: () => void;
  title?: string;
}

export const ScrollableScreenshot: React.FC<ScrollableScreenshotProps> = ({
  src,
  alt,
  liveUrl,
  fallbackSrc = '/assets/village-green-preview.svg',
  heightClass = 'h-[440px] sm:h-[500px]',
  onExpand,
  title
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src);
  const [isLoaded, setIsLoaded] = useState(false);
  const [canScroll, setCanScroll] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [direction, setDirection] = useState<'down' | 'up'>('down');
  const animationFrameRef = useRef<number | null>(null);

  // Update image when prop changes
  useEffect(() => {
    setCurrentSrc(src);
    setIsLoaded(false);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
      setScrollProgress(0);
    }
  }, [src]);

  // Check if image is already cached/complete
  useEffect(() => {
    if (imgRef.current && imgRef.current.complete && imgRef.current.naturalHeight > 0) {
      setIsLoaded(true);
      const container = scrollContainerRef.current;
      if (container) {
        setCanScroll(imgRef.current.offsetHeight > container.offsetHeight + 10);
      }
    }
  }, [currentSrc]);

  // Check if content is scrollable once loaded
  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    setIsLoaded(true);
    const container = scrollContainerRef.current;
    if (container && e.currentTarget) {
      const scrollable = e.currentTarget.offsetHeight > container.offsetHeight + 10;
      setCanScroll(scrollable);
    }
  };

  const handleImageError = () => {
    if (fallbackSrc && currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc);
      setIsLoaded(true);
    }
  };

  // Track scroll position for progress bar
  const handleScroll = useCallback(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const maxScroll = container.scrollHeight - container.clientHeight;
    if (maxScroll > 0) {
      setScrollProgress(Math.min(100, Math.max(0, (container.scrollTop / maxScroll) * 100)));
    }
  }, []);

  // Smooth hover auto-scroll engine
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container || !canScroll) return;

    if (isHovered) {
      // Auto scroll downwards at comfortable reading velocity
      let lastTime = performance.now();
      const speed = 140; // pixels per second

      const animateScroll = (time: number) => {
        const delta = (time - lastTime) / 1000;
        lastTime = time;

        const maxScroll = container.scrollHeight - container.clientHeight;
        if (container.scrollTop < maxScroll) {
          container.scrollTop += speed * delta;
          animationFrameRef.current = requestAnimationFrame(animateScroll);
        } else {
          setDirection('up');
        }
      };

      setDirection('down');
      animationFrameRef.current = requestAnimationFrame(animateScroll);
    } else {
      // Smoothly return back to top when mouse leaves
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      if (container.scrollTop > 0) {
        let lastTime = performance.now();
        const returnSpeed = 500; // faster return speed

        const animateReturn = (time: number) => {
          const delta = (time - lastTime) / 1000;
          lastTime = time;

          if (container.scrollTop > 0) {
            container.scrollTop = Math.max(0, container.scrollTop - returnSpeed * delta);
            animationFrameRef.current = requestAnimationFrame(animateReturn);
          } else {
            setDirection('down');
          }
        };

        animationFrameRef.current = requestAnimationFrame(animateReturn);
      }
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isHovered, canScroll]);

  return (
    <div className="w-full rounded-2xl bg-stone-900 border border-stone-300/80 shadow-xl overflow-hidden flex flex-col group">
      {/* Sleek Browser Header */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-stone-900 border-b border-stone-800 select-none">
        {/* macOS Traffic Lights */}
        <div className="flex items-center gap-1.5 shrink-0">
          <span className="h-3 w-3 rounded-full bg-[#FF5F56] inline-block shadow-inner" />
          <span className="h-3 w-3 rounded-full bg-[#FFBD2E] inline-block shadow-inner" />
          <span className="h-3 w-3 rounded-full bg-[#27C93F] inline-block shadow-inner" />
        </div>

        {/* Browser Address Bar */}
        <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-stone-950/80 text-[11px] font-mono text-stone-300 max-w-[320px] sm:max-w-[420px] truncate border border-stone-800 mx-2">
          <span className="text-emerald-400 shrink-0">🔒</span>
          <span className="truncate text-stone-400">
            {liveUrl ? liveUrl.replace('https://', '') : (title || 'live-preview')}
          </span>
        </div>

        {/* Actions (Open Live / Expand) */}
        <div className="flex items-center gap-2 shrink-0">
          {onExpand && (
            <button
              onClick={onExpand}
              className="text-stone-400 hover:text-white transition-colors p-1 rounded hover:bg-stone-800 cursor-pointer"
              title="View full specs modal"
            >
              <Maximize2 className="h-3.5 w-3.5" />
            </button>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-400 hover:text-white transition-colors p-1 rounded hover:bg-stone-800"
              title="Open website in new tab"
            >
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          )}
        </div>
      </div>

      {/* Screenshot Container with Smooth Hover Auto-Scroll */}
      <div
        ref={scrollContainerRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onScroll={handleScroll}
        className={`relative w-full ${heightClass} overflow-y-auto overflow-x-hidden bg-stone-950 cursor-ns-resize`}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {/* Loading shimmer skeleton */}
        {!isLoaded && (
          <div className="absolute inset-0 bg-stone-900 animate-pulse flex items-center justify-center">
            <span className="text-xs font-mono text-stone-500">Loading full capture preview...</span>
          </div>
        )}

        {/* Full vertical screenshot */}
        <img
          ref={imgRef}
          src={encodeURI(currentSrc)}
          alt={alt}
          onLoad={handleImageLoad}
          onError={handleImageError}
          className={`w-full h-auto block min-h-full object-cover object-top transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          loading="lazy"
          referrerPolicy="no-referrer"
        />

        {/* Floating status pill badge */}
        {canScroll && (
          <div className="sticky bottom-3 right-3 float-right mr-3 flex items-center gap-2 pointer-events-none z-20">
            <div className="bg-stone-950/85 backdrop-blur-md text-stone-200 text-[10px] sm:text-[11px] font-mono px-3 py-1.5 rounded-full border border-stone-700 shadow-xl flex items-center gap-2 transition-all">
              <span className={`w-2 h-2 rounded-full ${isHovered ? 'bg-emerald-400 animate-ping' : 'bg-[#8C2424]'}`} />
              <span className="font-semibold text-stone-100">
                {isHovered ? (
                  <span className="flex items-center gap-1">
                    {direction === 'down' ? <ArrowDown className="h-3 w-3 text-emerald-400" /> : <ArrowUp className="h-3 w-3 text-emerald-400" />}
                    Auto-Scrolling Webpage ({Math.round(scrollProgress)}%)
                  </span>
                ) : (
                  <span className="flex items-center gap-1 text-stone-300">
                    <MousePointer className="h-3 w-3 text-stone-400" />
                    Hover to scroll · Mousewheel enabled
                  </span>
                )}
              </span>
            </div>
          </div>
        )}

        {/* Scroll position indicator bar at top of image */}
        {canScroll && (
          <div className="sticky top-0 left-0 right-0 h-1 bg-stone-900/50 z-30 pointer-events-none">
            <div
              className="h-full bg-gradient-to-r from-[#8C2424] to-[#B33939] transition-all duration-75"
              style={{ width: `${scrollProgress}%` }}
            />
          </div>
        )}
      </div>
    </div>
  );
};
