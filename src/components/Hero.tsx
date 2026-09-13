import { useEffect, useRef } from 'react';

interface HeroProps {
  onCtaClick?: () => void;
  replayKey?: number;
}

export default function Hero({ onCtaClick, replayKey = 0 }: HeroProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const revealImgRef = useRef<HTMLDivElement | null>(null);

  // Spotlight reveal following mouse or touch
  useEffect(() => {
    const canvas = canvasRef.current;
    const imgLayer = revealImgRef.current;
    if (!canvas || !imgLayer) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    const SPOTLIGHT_R = 260;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const mouse = { x: -999, y: -999 };
    const smooth = { x: -999, y: -999 };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouse.x = e.touches[0].clientX;
        mouse.y = e.touches[0].clientY;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    const loop = () => {
      smooth.x += (mouse.x - smooth.x) * 0.1;
      smooth.y += (mouse.y - smooth.y) * 0.1;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const grad = ctx.createRadialGradient(smooth.x, smooth.y, 0, smooth.x, smooth.y, SPOTLIGHT_R);
      grad.addColorStop(0, 'rgba(255,255,255,1)');
      grad.addColorStop(0.4, 'rgba(255,255,255,1)');
      grad.addColorStop(0.6, 'rgba(255,255,255,0.75)');
      grad.addColorStop(0.75, 'rgba(255,255,255,0.4)');
      grad.addColorStop(0.88, 'rgba(255,255,255,0.12)');
      grad.addColorStop(1, 'rgba(255,255,255,0)');

      ctx.beginPath();
      ctx.arc(smooth.x, smooth.y, SPOTLIGHT_R, 0, Math.PI * 2);
      ctx.fillStyle = grad;
      ctx.fill();

      try {
        const dataUrl = canvas.toDataURL();
        imgLayer.style.webkitMaskImage = 'url(' + dataUrl + ')';
        imgLayer.style.maskImage = 'url(' + dataUrl + ')';
        imgLayer.style.webkitMaskSize = '100% 100%';
        imgLayer.style.maskSize = '100% 100%';
      } catch {
        // Fallback for security constrained environments
        imgLayer.style.opacity = '1';
      }

      animationFrameId = requestAnimationFrame(loop);
    };

    loop();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [replayKey]);

  const handleCta = () => {
    if (onCtaClick) {
      onCtaClick();
    } else {
      const contactEl = document.getElementById('contact');
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <main className="hero" id="hero" key={replayKey}>
      {/* Big text behind image */}
      <div className="hero-big-text creator-text-animate">
        <h2>WordPress</h2>
      </div>

      {/* Base image (recolored red hoodie) */}
      <div
        className="hero-base-img hero-image-animate"
        style={{
          backgroundImage: "url('/assets/hero-base-recolored.png')",
        }}
      />

      {/* Reveal layer (recolored red hoodie with electric blue flames) */}
      <canvas id="reveal-canvas" ref={canvasRef} />
      <div
        className="hero-reveal-img"
        id="reveal-img"
        ref={revealImgRef}
        style={{
          backgroundImage: "url('/assets/hero-reveal-recolored.png')",
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
              KRISHNA PRAJAPAT
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
