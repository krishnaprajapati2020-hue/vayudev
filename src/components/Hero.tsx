import { useEffect, useRef } from 'react';
import { scrollToTarget } from '../utils/smoothScroll';

interface HeroProps {
  onCtaClick?: () => void;
  replayKey?: number;
}

export default function Hero({ onCtaClick, replayKey = 0 }: HeroProps) {
  const revealImgRef = useRef<HTMLDivElement | null>(null);

  // High-performance GPU-accelerated spotlight mask (zero canvas / zero toDataURL CPU churn)
  useEffect(() => {
    const imgLayer = revealImgRef.current;
    if (!imgLayer) return;

    let animationFrameId: number = 0;
    let isIntersecting = true;
    let isRunning = false;
    const SPOTLIGHT_R = 260;

    const mouse = { x: -999, y: -999 };
    const smooth = { x: -999, y: -999 };

    const updateMask = () => {
      if (smooth.x < -500 || smooth.y < -500) {
        imgLayer.style.webkitMaskImage = 'none';
        imgLayer.style.maskImage = 'none';
        imgLayer.style.opacity = '0';
        return;
      }
      imgLayer.style.opacity = '1';
      const maskVal = `radial-gradient(circle ${SPOTLIGHT_R}px at ${smooth.x.toFixed(1)}px ${smooth.y.toFixed(1)}px, black 0%, black 40%, rgba(0,0,0,0.75) 60%, rgba(0,0,0,0.4) 75%, rgba(0,0,0,0.12) 88%, transparent 100%)`;
      imgLayer.style.webkitMaskImage = maskVal;
      imgLayer.style.maskImage = maskVal;
    };

    const loop = () => {
      const dx = mouse.x - smooth.x;
      const dy = mouse.y - smooth.y;

      if (Math.abs(dx) > 0.3 || Math.abs(dy) > 0.3) {
        smooth.x += dx * 0.15;
        smooth.y += dy * 0.15;
        updateMask();
        if (isIntersecting) {
          animationFrameId = requestAnimationFrame(loop);
          isRunning = true;
        } else {
          isRunning = false;
        }
      } else {
        smooth.x = mouse.x;
        smooth.y = mouse.y;
        updateMask();
        isRunning = false;
      }
    };

    const wakeUp = () => {
      if (!isRunning && isIntersecting) {
        isRunning = true;
        animationFrameId = requestAnimationFrame(loop);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      wakeUp();
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouse.x = e.touches[0].clientX;
        mouse.y = e.touches[0].clientY;
        wakeUp();
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    const heroEl = document.getElementById('hero');
    let observer: IntersectionObserver | null = null;
    if (heroEl && typeof IntersectionObserver !== 'undefined') {
      observer = new IntersectionObserver(
        ([entry]) => {
          isIntersecting = entry.isIntersecting;
          if (isIntersecting) wakeUp();
          else if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
            isRunning = false;
          }
        },
        { threshold: 0.05 }
      );
      observer.observe(heroEl);
    }

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      if (observer) observer.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [replayKey]);

  const handleCta = () => {
    if (onCtaClick) {
      onCtaClick();
    } else {
      scrollToTarget('#contact', { duration: 1.4 });
    }
  };

  return (
    <main className="hero" id="hero" key={replayKey}>
      {/* Big text behind image */}
      <div className="hero-big-text creator-text-animate">
        <h2>WordPress</h2>
      </div>

      {/* Base image (optimized WebP) */}
      <div
        className="hero-base-img hero-image-animate"
        style={{
          backgroundImage: "url('/assets/hero-base-recolored.webp'), url('/assets/hero-base-recolored.png')",
        }}
      />

      {/* Reveal layer (optimized WebP) */}
      <div
        className="hero-reveal-img"
        id="reveal-img"
        ref={revealImgRef}
        style={{
          backgroundImage: "url('/assets/hero-reveal-recolored.webp'), url('/assets/hero-reveal-recolored.png')",
        }}
      />

      {/* Content */}
      <div className="hero-content">
        <div className="hero-content-inner max-w-xl bg-[#FAF8F5]/85 sm:bg-transparent backdrop-blur-xs sm:backdrop-blur-none p-3 sm:p-0 rounded-2xl sm:rounded-none">
          {/* Box 1: Name as requested */}
          <div className="flex flex-col gap-1">
            <span className="font-script text-3xl sm:text-4xl text-[#8C2424] block -mb-1">
              Hello, I'm
            </span>
            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#111111] tracking-tight leading-none break-words">
              KRISHNA PRAJAPATI
            </h1>
          </div>

          {/* Description and CTA */}
          <p className="text-stone-700 text-sm sm:text-base md:text-lg leading-relaxed font-normal max-w-md">
            Designing, building & QA-auditing high-performing WordPress platforms and custom web applications for 120+ global accounts.
          </p>

          <div className="pt-2">
            <button
              className="cta-btn cta-animate"
              onClick={handleCta}
              aria-label="Start a project now"
            >
              <span className="cta-btn-bg" />
              <span className="cta-btn-text">Start a project now</span>
              <span className="cta-btn-circle">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 13L13 5M13 5H6M13 5V12"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
